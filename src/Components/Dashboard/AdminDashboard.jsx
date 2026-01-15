import CreateTask from "../ChildComponents/CreateTask";
import FullTask from "../ChildComponents/fullTask";
import Header from "../ChildComponents/Header";

const AdminDashboard = () => {
  return (
    <div className="bg-black min-h-screen w-full text-white px-4 sm:px-6 py-3">
      <Header />
      <CreateTask />
      <FullTask />
    </div>
  );
};

export default AdminDashboard;
