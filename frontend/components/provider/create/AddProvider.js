import React, { useEffect, useState, useRef } from "react";
import axios from "../../../pages/api/axios";
import { IoCloseCircle } from "react-icons/io5";
import {ProviderLabel} from "../step/ProviderLabel"
import {WebhookLink} from "../step/WebhookLink"
import {Completed} from "../step/Completed"

export const AddProvider = ({ onClose }) => {
  // const NewProviderURL = "http://localhost:8050/message-provider/new";
  const ConnectionURL = "http://localhost:8050/connection/new";
  const errReference = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [shouldClosePopup, setShouldClosePopup] = useState(false);

  const [provider_type, setprovider_type] = useState("");
  const [provider_label, setprovider_label] = useState("");
  const [webhook, setwebhook] = useState("");
  const [connection, setconnection] = useState([]);

  const [page, setPage] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    setErrMsg("");
    setIsLastPage(page === FormTitles.length - 1);
  }, [provider_label, webhook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = {
        provider_label,
        webhook,
      };

      // const dataConnection = {
      //   connection
      // }
      axios
        .post(`http://localhost:8050/message-provider/new`, data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        // .post(ConnectionURL, dataConnection)
        .then((res) => {
          console.log("success");
          setSuccess(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("Add New Provider Failed", err);
      errReference.current.focus();
    }
  };

  useEffect(() => {
    if (shouldClosePopup) {
      onClose(); // Memanggil fungsi onClose untuk menutup pop-up
      window.location.reload();
    }
  }, [shouldClosePopup, onClose]);

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <ProviderLabel
          provider_label={provider_label}
          setprovider_label={setprovider_label}
        />
      );
    } else if (page === 1) {
      return <WebhookLink webhook={webhook} setwebhook={setwebhook} />;
    } else if (page === 2) {
      return <Completed />;
    }
  };

  const FormTitles = ["Provider Label", "Webhook Link", "Completed"];
  return (
    <>
      <div className="items-center justify-center flex md:flex fixed inset-0 z-50 bg-black bg-opacity-70">
        <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border p-6 shadow-lg duration-200 sm:rounded-lg bg-primary-white text-primary-black">
          {/* Close button */}
          <IoCloseCircle
            className="absolute cursor-pointer right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2  focus:ring-offset-2 disabled:pointer-events-none h-auto text-primary-mediumblue hover:text-primary-darkblue font-extrabold w-[7%]"
            onClick={onClose}
          />

          {/* Title */}
          <p className="flex justify-center text-primary-darkblue text-3xl font-bold">
            New Provider
          </p>

          {/* Form Body */}
          <div>
            <p
              ref={errReference}
              className={` ${errMsg ? "errmsg" : "offscreen"}`}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <form onSubmit={handleSubmit}>
              <div>{PageDisplay()}</div>
            </form>
          </div>
          {/* Button */}

          <div className="flex gap-2">
            {/* nanti apus */}
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
                setIsLastPage(false);
              }}
              className="w-full text-primary-darkblue bg-primary-white hover:bg-primary-lightgrey px-4 py-2 rounded-md mb-6 text-base font-semibold shadow-primary-darkblue shadow-sm"
            >
              Prev
            </button>

            <button
              type="submit"
              onClick={(e) => {
                if (page === FormTitles.length - 1) {
                  console.log("provider label nya " + provider_label);
                  console.log("webhook nya " + webhook);
                  handleSubmit(e);
                  setShouldClosePopup(true);
                } else {
                  setPage((currPage) => currPage + 1);
                  setIsLastPage(page + 1 === FormTitles.length - 1);
                }
                setIsLastPage(page + 1 === FormTitles.length - 1);
              }}
              className={`w-full text-white bg-primary-lightblue hover:bg-primary-mediumblue px-4 py-2 rounded-md mb-6 text-base font-semibold shadow-primary-darkblue shadow-sm
              ${isLastPage ? "bg-green-500 hover:bg-green-600" : ""}`}
            >
              {isLastPage ? "OK" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProvider;
