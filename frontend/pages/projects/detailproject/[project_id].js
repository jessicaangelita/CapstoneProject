import axios from "../../api/axios";
import HeaderHome from "../../../components/HeaderHome";
import { useRouter } from 'next/router';
import Link from 'next/link';

const ProjectDetailPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  // Fungsi untuk menangani tindakan saat tombol "Connect Project" diklik
  const handleConnectProject = () => {
    // Logika untuk menghubungkan proyek
    console.log('Connecting project:', projectId);
  };

  return (
    <div>
        <HeaderHome/>
        <title>Project Details</title>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{`Detail Project: ${projectId}`}</h1>
        <button onClick={handleConnectProject} className="bg-blue-500 text-white px-4 py-2 rounded">
          Connect Project
        </button>
      </div>

      {/* Konten detail proyek */}
      <div>
        {/* Tambahkan konten detail proyek sesuai kebutuhan Anda */}
        <p>Deskripsi proyek, informasi, dll.</p>
      </div>

      {/* Provider di sebelah kanan atas */}
      <div className="flex justify-end">
        {/* Gantilah dengan komponen atau elemen untuk menambahkan provider */}
        <span className="text-sm font-semibold">Provider: XYZ</span>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
