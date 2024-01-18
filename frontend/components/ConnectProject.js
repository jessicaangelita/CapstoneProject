import {useState, useEffect} from 'react'

export const ConnectProject = ({  project_id, setproject_id, message_provider_id, setmessage_provider_id, listProvider, setListProvider, selectedprovider, setSelectedProvider }) => {

  // const [id, setId] = useState([project_id, setproject_id]);
  // const [listProvider, setListProvider] = useState([]);
  // const [selectedprovider, setSelectedProvider] = useState('');

  // const fetchProvider = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8050/message-provider/all`
  //     );
  //     const responseData = response.data.data;

  //     setListProvider(responseData);
  //     console.log(response);
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProvider();
  // }, [id]);


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
                      <option key={providerId} value={provider_label}>
                        {provider_label}
                      </option>
                    );
                  })}

                {/* <option value="Number 1">{data.provider}</option>
                <option value="Number 2">{data.provider}</option>
                <option value="Number 3">{data.provider}</option> */}

              </select>
      </div>
    </div>
    </>
  );
}
