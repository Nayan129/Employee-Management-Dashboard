import { useContext } from "react";
import EmployeeTaskDetails from "../ChildComponents/EmployeeTaskDetails";
import AllTasks from "../TaskList/AllTasks";
import Header from "../ChildComponents/Header";
import { AuthContext } from "../../Context/AuthProvider";

const EmployeeDashboard = (props) => {
  const [userData] = useContext(AuthContext);

  const employee = userData?.find((emp) => emp.id === props.data?.id);

  if (!employee) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="w-full bg-[#1c1c1c] border border-green-600 rounded-xl p-6 sm:p-8 flex flex-col gap-6">
        <Header changeUser={props.changeUser} data={employee} />
        <EmployeeTaskDetails data={employee} />
        <AllTasks data={employee} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
