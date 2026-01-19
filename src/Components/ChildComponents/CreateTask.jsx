import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Toast from "./Toast";
const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [showToast, setShowToast] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !date || !assignTo || !category || !description) {
      alert("Please fill all fields");
      return;
    }

    const taskObj = {
      active: true,
      newTask: true,
      completion: false,
      failed: false,
      title: taskTitle,
      date,
      category,
      description,
    };

    const updatedData = userData.map((emp) => {
      if (emp.firstName.toLowerCase() === assignTo.toLowerCase()) {
        return {
          ...emp,
          tasks: [...emp.tasks, taskObj],
          taskCounts: {
            ...emp.taskCounts,
            newTask: emp.taskCounts.newTask + 1,
          },
        };
      }
      return emp;
    });

    setUserData(updatedData);

    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);

    setTaskTitle("");
    setDate("");
    setAssignTo("");
    setCategory("");
    setDescription("");
  };

  return (
    <>
      <Toast show={showToast} message="Task created successfully ✅" />

      <div className="bg-neutral-900 mt-4 rounded-xl border border-neutral-800">
        <form
          className="flex flex-col gap-6 p-4 sm:p-6 md:flex-row md:gap-10"
          onSubmit={submitHandler}
        >
          {/* Left */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-base">Task Title</h3>
              <input
                className="border border-neutral-700 bg-neutral-950 p-2 rounded w-full outline-none focus:border-emerald-500"
                type="text"
                placeholder="Make a UI Design"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-base">Date</h3>
              <input
                className="border border-neutral-700 bg-neutral-950 p-2 rounded w-full outline-none focus:border-emerald-500"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-base">Assign to</h3>
              <input
                className="border border-neutral-700 bg-neutral-950 p-2 rounded w-full outline-none focus:border-emerald-500"
                type="text"
                placeholder="Employee Name"
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-base">Category</h3>
              <input
                className="border border-neutral-700 bg-neutral-950 p-2 rounded w-full outline-none focus:border-emerald-500"
                type="text"
                placeholder="design, dev, etc"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-base">Description</h3>
              <textarea
                rows="10"
                className="border border-neutral-700 bg-neutral-950 w-full rounded p-2 outline-none focus:border-emerald-500"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write task details..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-emerald-600 py-2.5 rounded-lg font-semibold text-base cursor-pointer active:scale-95 hover:bg-emerald-700 transition"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
