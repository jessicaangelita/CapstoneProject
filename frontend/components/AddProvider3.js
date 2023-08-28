import {useState} from 'react'
import CheckboxForm from './CheckboxForm';

export const AddProvider3 = ({ connection, setconnection}) => {
const [selectedOptions, setSelectedOptions] = useState([]);
const checkboxOptions = [
  'JIRA Project 1', 
  'JIRA Project 2', 
  'JIRA Project 3'];
const handleCheckboxChange = (value) => {
  setSelectedOptions((prevOptions) => {
    if (prevOptions.includes(value)) {
      return prevOptions.filter((option) => option !== value);
    } else {
      return [...prevOptions, value];
    }
  });

setconnection(selectedOptions)
};


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
        <div className="rounded-full w-14 h-14 bg-gray-700 shadow-xl flex items-center justify-center text-white">
          2
        </div>
        <p className="mt-2">Configure Provider</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="rounded-full w-14 h-14 bg-gray-300 shadow-xl flex items-center justify-center">
          3
        </div>
        <p className="mt-2">Configure Project</p>
      </div>
    </div>
    
      <div className="space-y-4">
        <p className="justify-center w-full text-center text-slate-700 text-lg font-bold  mx-1 my-8">Pick the providers you want to give updates to.</p>
        <label className="flex items-center justify-center">
          <CheckboxForm
          value={connection}
              options={checkboxOptions}
              selectedOptions={selectedOptions}
              onCheckboxChange={handleCheckboxChange}
            />
        </label>
      </div>
    </div>
    
    </>
  )
}
