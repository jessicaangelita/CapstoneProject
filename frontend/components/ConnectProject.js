import {useState, useEffect} from 'react'

export const ConnectProject = ({  listProvider, setListProvider, selectedprovider, setSelectedProvider }) => {

  return (
    <>
    {/* Process Indicating Circle */}
    <div className="m-9">
      <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
      </div>
    </div>
    
    {/* Input for the Form */}
      <div className="space-y-4">        
          <p className="justify-center w-full text-center text-slate-700 text-lg font-bold  mx-1 my-8">Select Provider Name</p>
          <select className="w-full border p-2 rounded outline-none" 
              value={selectedprovider}
              onChange={(e) => setSelectedProvider(e.target.value)}
              >
                <option value="">Select Provider</option>
                {listProvider?.map((provider) => {
                    const { provider_label, id: providerId } = provider;

                    return (
                      <option key={provider.id} value={provider.id}>
                        {provider_label}
                      </option>
                    );
                  })}

              </select>
      </div>
    </div>
    </>
  );
}
