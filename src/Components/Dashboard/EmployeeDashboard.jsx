import EmployeeTaskDetails from "../ChildComponents/EmployeeTaskDetails";
import AllTasks from "../TaskList/AllTasks";
import Header from "../ChildComponents/Header";

const EmployeeDashboard = ({ data }) => {
  console.log(data);
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="w-full bg-[#1c1c1c] border border-green-600 rounded-xl p-6 sm:p-8 flex flex-col gap-6">
        <Header />
        <EmployeeTaskDetails />
        <AllTasks />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
