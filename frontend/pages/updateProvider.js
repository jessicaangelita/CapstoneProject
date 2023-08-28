import { useState,useEffect } from 'react';
import UpdatedProvider from '@/components/UpdatedProvider';
import { useRouter } from 'next/router';
import { FaPencilAlt } from "react-icons/fa";
import axios from 'axios';


export default function Home() {
  const router = useRouter()
  const messageprovider_id = router.query.messageprovider_id
  const [data, setData] = useState([])

  const [showUpdate, setShowUpdate] = useState(false);
//   const [selectedData, setSelectedData] = useState(data);

  useEffect(() => {
    // axios.get(`http://localhost:8050/message-provider/id/connected/${messageprovider_id}`)
    // .then(res => setData(res.data.data))
    // .catch(err => console.log(err));
    const fetchDataProduct = async () => {
      try {
        const resp = await axios.get(`http://localhost:8050/message-provider/id/connected/${messageprovider_id}`);
        const respData = resp.data.data
        setData(respData);
      } catch (error) {
        console.log('Error Fetch Data', error)
      }
    }
    fetchDataProduct();
  },[messageprovider_id]);

  const handleEdit = (data) => {
    // setSelectedData(data);
    setData(data);
    setShowUpdate(true);
  };

  const handleSubmit = async (e) => {  
    try {
        const updatedData = {
            id: data.id,
            providername: data.name,
            webhook: data.webhook,
            project: data.project,
        };

        await axios.put(`http://localhost:8050/message-provider/edit/${messageprovider_id}`, updatedData);

        setData(updatedData);
    } catch (err) {
        console.log('Update error',err)
    }

    // console.log('Updated data:', updatedData);

    setShowUpdate(false);
  };

  const handleCancel = () => {
    setShowUpdate(false);
  };

  return (
    <div>
    <button onClick={() => handleEdit(data)}>
                    <FaPencilAlt className="text-blue-500" />
                </button>
                {/* </td> */}
        {/* Render the update form popup */}
        {showUpdate && (
            <UpdatedProvider
            data={data }
            onUpdate={handleSubmit}
            onCancel={handleCancel}
            />
        )}
        </div>
    );
}