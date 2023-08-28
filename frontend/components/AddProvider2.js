import { useState } from "react";

export const AddProvider2 = ({webhook, setwebhook}) => {
  return (
    <>
    <div className="m-9">
      <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-700 text-white shadow-xl flex items-center justify-center">
          1
        </div>
        <p className="mt-2">Choose Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-300 shadow-xl flex items-center justify-center ">
          2
        </div>
        <p className="mt-2">Configure Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-100 shadow-xl flex items-center justify-center">
          3
        </div>
        <p className="mt-2">Configure Project</p>
      </div>
    </div>
    
      <div className="space-y-4">
        <p className="relative justify-center text-center text-slate-700 text-base  mx-1 my-8">Please go into your Server Settings, then go to  Apps &gt; Integrations &gt; Webhooks and create a  New Webhook. There should be a  Copy Webhook URL prompt. Please insert said
        URL into the text box below.</p>

        <input
            type="text"
            className="block w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="https://discord.com/api/webhooks/..."
            value={webhook} 
            onChange={(e) => setwebhook(e.target.value)}
          />
        
        <p className="text-slate-700 text-sm italic">Tip: The channel listed in the Webhook will be the channel that the 
notifications will be sent to.</p>
      </div>
    </div>
    
    </>
  )
}
