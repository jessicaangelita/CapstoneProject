import {useState} from 'react'

export const AddProject2 = ({ formData, setFormData }) => {
  return (
    <>
    <div className="m-9">
      <div className="flex items-center justify-center space-x-8">
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-700 text-white shadow-xl flex items-center justify-center">
          1
        </div>
        <p className="mt-2">Name The Project</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-300 shadow-xl flex items-center justify-center ">
          2
        </div>
        <p className="mt-2">Configure Project</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-100 shadow-xl flex items-center justify-center">
          3
        </div>
        <p className="mt-2">Configure Providers</p>
      </div>
    </div>
    
      <div className="space-y-4">
        <p className="relative justify-center text-center text-slate-700 text-base  mx-1 my-8">Please insert the designated URL in the text box on your JIRA
Project Webhook Settings located on https://[your-company-
name].atlassian.net/plugins/servlet/webhooks.</p>
        <input
            type="text"
            className="block w-full border-gray-300 border rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="https://jico.com/webhook/<project_id>..."
            value={formData.projectLink} 
            onChange={(event) => setFormData({...formData, projectLink: event.target.value})}
          />
        
      </div>
    </div>
    
    </>
  )
}
