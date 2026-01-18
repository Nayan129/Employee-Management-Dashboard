import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllGivenTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 py-2 px-4 flex justify-between rounded mb-2 font-bold text-lg">
        <h2 className="w-1/5">Name</h2>
        <h3 className="w-1/5">Task</h3>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Active</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      <div className="overflow-auto">
        {userData.map((employee, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-2 font-semibold"
            >
              <h2 className="w-1/5">{employee.firstName}</h2>
              <h3 className="w-1/5 text-blue-600">
                {employee.taskCounts.newTask}
              </h3>
              <h5 className="w-1/5 text-yellow-400">
                {employee.taskCounts.completed}
              </h5>
              <h5 className="w-1/5 text-white">{employee.taskCounts.active}</h5>
              <h5 className="w-1/5 text-red-600">
                {employee.taskCounts.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllGivenTask;
