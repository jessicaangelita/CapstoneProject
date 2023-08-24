import {useState} from 'react'

export const AddProvider3 = () => {

  const checkboxItems = [
    { id: 1, label: "JIRA Project 1" },
    { id: 2, label: "JIRA Project 2" },
    { id: 3, label: "JIRA Project 3" },
    // ... add more items
  ];

  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  return (
    <>
    <div className="m-9">
      <p className="flex justify-center text-slate-700 text-2xl font-extrabold mb-6">Create New Provider</p>
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
        <p className="justify-center w-full text-center text-slate-700 text-lg font-bold  mx-1 my-8">Pick the projects you want to receive updates from.</p>
        <label className="flex items-center justify-center flex-col">
          {checkboxItems.map((item) => (
          <div key={item.id} className="w-full flex items-center border bg-white rounded-md m-1 p-2">
            <input
              type="checkbox"
              id={`checkbox-${item.id}`}
              checked={checkedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
              className="mr-2"
            />
            <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
          </div>
        ))}
        </label>
      </div>
    </div>
    
    </>
  )
}
