const CreateTask = () => {
  return (
    <div className="bg-neutral-900 mt-4 rounded">
      <form className="flex flex-col gap-6 p-4 sm:p-6 md:flex-row md:gap-10 md:p-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Task Title</h3>
            <input
              className="border p-2 rounded w-full"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Date</h3>
            <input className="border p-2 rounded w-full" type="date" />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Assign to</h3>
            <input
              className="border p-2 rounded w-full"
              type="text"
              placeholder="Employee Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Category</h3>
            <input
              className="border p-2 rounded w-full"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-2xl">Description</h3>
            <textarea
              rows="10"
              className="border w-full rounded p-2"
            ></textarea>
          </div>

          <button className="border bg-emerald-600 py-2 rounded font-semibold text-xl cursor-pointer active:scale-95 hover:bg-emerald-700">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
