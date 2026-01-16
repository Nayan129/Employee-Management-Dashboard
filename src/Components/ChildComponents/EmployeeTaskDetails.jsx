const EmployeeTaskDetails = ({ data }) => {
  return (
    <div className="flex m-2 justify-between gap-5 flex-wrap md:flex-nowrap">
      <div className="h-30 w-[46%] bg-blue-500 flex flex-col justify-around px-2 rounded-xl">
        <h2 className="text-4xl font-medium">{data.taskCounts.newTask}</h2>
        <h1 className="text-2xl font-semibold">New Task</h1>
      </div>
      <div className="h-30 w-[46%] bg-emerald-400 flex flex-col justify-around px-2 rounded-xl">
        <h2 className="text-4xl font-medium">{data.taskCounts.completed}</h2>
        <h1 className="text-2xl font-semibold">Completed</h1>
      </div>
      <div className="h-30 w-[46%] bg-yellow-600 flex flex-col justify-around px-2 rounded-xl">
        <h2 className="text-4xl font-medium">{data.taskCounts.active}</h2>
        <h1 className="text-2xl font-semibold">Active</h1>
      </div>
      <div className="h-30 w-[46%] bg-red-400 flex flex-col justify-around px-2 rounded-xl">
        <h2 className="text-4xl font-medium">{data.taskCounts.failed}</h2>
        <h1 className="text-2xl font-semibold">Failed Task</h1>
      </div>
    </div>
  );
};

export default EmployeeTaskDetails;
