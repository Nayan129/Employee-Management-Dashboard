import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const AllTasks = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext);

  const updateStatus = (idx, status) => {
    setUserData((prev) =>
      prev.map((emp) => {
        if (emp.id !== data.id) return emp;

        const tasks = emp.tasks.map((task, i) =>
          i === idx
            ? {
                ...task,
                newTask: status === "newTask",
                active: status === "active",
                completion: status === "completion",
                failed: status === "failed",
              }
            : task,
        );

        const taskCounts = {
          newTask: tasks.filter((task) => task.newTask).length,
          active: tasks.filter((task) => task.active).length,
          completed: tasks.filter((task) => task.completion).length,
          failed: tasks.filter((task) => task.failed).length,
        };

        return { ...emp, tasks, taskCounts };
      }),
    );
  };

  return (
    <div
      id="allTasks"
      className="h-55 w-full flex gap-2 flex-wrap overflow-y-auto bg-neutral-700 p-2 rounded-xl md:flex-nowrap md:overflow-x-auto md:overflow-y-hidden"
    >
      {data.tasks.map((task, idx) =>
        task.newTask ? (
          <NewTask
            key={idx}
            data={task}
            onAccept={() => updateStatus(idx, "active")}
          />
        ) : task.active ? (
          <AcceptTask
            key={idx}
            data={task}
            onComplete={() => updateStatus(idx, "completion")}
            onFail={() => updateStatus(idx, "failed")}
          />
        ) : task.completion ? (
          <CompletedTask key={idx} data={task} />
        ) : task.failed ? (
          <FailedTask key={idx} data={task} />
        ) : null,
      )}
    </div>
  );
};

export default AllTasks;
