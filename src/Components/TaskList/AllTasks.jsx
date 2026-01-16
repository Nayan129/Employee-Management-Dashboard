import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const AllTasks = ({ data }) => {
  return (
    <div
      id="allTasks"
      className="h-55 w-full flex justify-between p-2 rounded-xl gap-2 flex-wrap overflow-y-auto md:overflow-x-auto md:flex-nowrap md:shrink-0 bg-neutral-700"
    >
      {data.tasks.map((elem) => {
        if (elem.active) {
          return <AcceptTask data={data} />;
        }
        if (elem.completion) {
          return <CompletedTask data={data} />;
        }
        if (elem.newTask) {
          return <NewTask data={data} />;
        }
        if (elem.failed) {
          return <FailedTask data={data} />;
        }
      })}
    </div>
  );
};

export default AllTasks;
