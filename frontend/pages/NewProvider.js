import React from "react";
import { useEffect, useState, useRef } from "react";
import { AddProvider1 } from "../components/AddProvider1";
import { AddProvider2 } from "../components/AddProvider2";
import { AddProvider3 } from "../components/AddProvider3";
import { AddProvider4 } from "../components/AddProvider4";
import axios from "./api/axios";

export const NewProvider = ({ onClose }) => {
  const NewProviderURL = "http://localhost:8050/message-provider/new";
  const ConnectionURL = "http://localhost:8050/connection/new";
  const errReference = useRef();

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [provider_type, setprovider_type] = useState("");
  const [provider_label, setprovider_label] = useState("");
  const [webhook, setwebhook] = useState("");
  const [connection, setconnection] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    setErrMsg("");
  }, [provider_type, provider_label, webhook, connection]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = {
        provider_type,
        provider_label,
        webhook,
        connection,
      };

      // const dataConnection = {
      //   connection
      // }
      axios
        .post(NewProviderURL, data)
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

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <AddProvider1
          provider_type={provider_type}
          setprovider_type={setprovider_type}
          provider_label={provider_label}
          setprovider_label={setprovider_label}
        />
      );
    } else if (page === 1) {
      return <AddProvider2 webhook={webhook} setwebhook={setwebhook} />;
    } else if (page === 2) {
      return (
        <AddProvider3 connection={connection} setconnection={setconnection} />
      );
    } else if (page === 3) {
      return <AddProvider4 />;
    }
  };

  const FormTitles = [
    "Choose Message Provider",
    "Configure Providers",
    "Configure Projects",
    "New Provider Created!",
  ];

  return (
    <>
      <div className="items-center justify-center flex md:flex fixed inset-0 z-50">
        <div className="bg-gray-100  w-fit shadow-2xl rounded-lg border-solid border-black p-4 mx-4 my-8 min-w-[300px] max-w-md md:w-[50%]">
          {/* Close button */}
          <button
            className="flex top-0 right-0 m-2 text-white bg-red-500 hover:text-gray-700 rounded-md p-2"
            onClick={onClose}
          >
            Close
          </button>
          
          {/* Title */}
          <p className="flex justify-center text-slate-700 text-2xl font-extrabold mb-6">
            Create New Provider
          </p>

          {/* Progress Title */}
          <div className="flex justify-center">
            <h1 className="flex justify-center">{FormTitles[page]}</h1>
          </div>

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

          <div className="mt-2 flex gap-2">
            {/* nanti apus */}
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
              className="w-full text-white bg-gray-700 px-4 py-2 rounded-md my-6"
            >
              Prev
            </button>

            <button
              type="submit"
              onClick={(e) => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log("provider type nya" + provider_type);
                  console.log("provider label nya" + provider_label);
                  console.log("webhook nya" + webhook);
                  console.log("connection nya" + connection);
                  handleSubmit(e);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
              className="w-full text-white bg-gray-700 px-4 py-2 rounded-md my-6"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewProvider;
