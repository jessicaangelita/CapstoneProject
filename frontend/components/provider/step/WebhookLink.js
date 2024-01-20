import React from 'react'
import WebhookStep1 from "../../../public/assets/video/WebhookStep1.gif"
import Image from 'next/image';
import {IMAGE} from "../../../public/config/index"

export const WebhookLink = ({ webhook, setwebhook }) => {
  return (
    <>
      <div className="m-9">
        {/* Process Indicating Circle */}
        <div className="flex items-center justify-center space-x-8">
          <div className="flex flex-col items-center">
            <div className="rounded-full w-14 h-14 bg-primary-lightblue shadow-xl flex items-center justify-center text-primary-darkgrey font-bold text-lg">
              1
            </div>
            <p className="mt-2 text-primary-lightblue text-sm font-semibold">
              Provider Label
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full w-14 h-14 bg-primary-lightblue shadow-xl flex items-center justify-center text-primary-darkgrey font-bold text-lg">
              2
            </div>
            <p className="mt-2 text-primary-lightblue text-sm font-semibold">
              Webhook Link
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="rounded-full w-14 h-14 bg-primary-white text-primary-darkblue shadow-xl flex items-center justify-center font-bold text-lg">
              3
            </div>
            <p className="mt-2 text-primary-white text-sm font-semibold">
              Completed
            </p>
          </div>
        </div>

        {/* Input for the Form */}
        <div className="space-y-4">
          <div>
            <p className="justify-center w-full text-left text-primary-white text-xl font-semibold mt-8 mb-0">
              Please input your discord channel webhook link
            </p>
            <p className="mt-0 text-[12px] text-primary-white font-light inline leading-none">
              If you don't know how to get yours, below are the instruction to
              get to your Discord Webhook
            </p>
            <div className="h-44 w-full border-solid border-white overflow-auto shadow-sm shadow-primary-white font-inter">
              <p className="m-3 font-medium text-primary-white text-xs">
                Please go into your Channel Settings
              </p>
              <Image
                src={IMAGE.WEBHOOK_STEP1}
                className="h-40 items-center flex justify-center"
              />
              <p className="m-3 font-medium text-primary-white text-xs">
                Next, go to Integration section
              </p>
              <Image
                src={IMAGE.WEBHOOK_STEP2}
                className="h-40 items-center flex justify-center"
              />
              <p className="m-3 font-medium text-primary-white text-xs">
                In webhook category, click Create Webhook
              </p>
              <Image
                src={IMAGE.WEBHOOK_STEP3}
                className="h-40 items-center flex justify-center"
              />
              <p className="m-3 font-medium text-primary-white text-xs">
                If you have no webhook before, discord would automatically
                create one for you. Then, you can edit it fitting to your favor.
              </p>
              <Image
                src={IMAGE.WEBHOOK_STEP4}
                className="h-40 items-center flex justify-center"
              />
              <p className="m-3 font-medium text-primary-white text-xs">
                If you have one before, you can add new one with clicking New Webhook button. After that, you can also edit it to fit your want.
              </p>
              <Image
                src={IMAGE.WEBHOOK_STEP6}
                className="h-40 items-center flex justify-center"
              />
              <p className="m-3 font-medium text-primary-white text-xs">
                When you're done, you can click the Copy Webhook button
              </p>
              <Image
                src={IMAGE.WEBHOOK_STEP5}
                className="h-40 items-center flex justify-center"
              />
            </div>
          </div>
          <input
            type="text"
            className="block w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 placeholder:text-primary-lightgrey"
            placeholder="https://discord.com/api/webhooks/..."
            value={webhook}
            onChange={(e) => setwebhook(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
