import TasksRows from "./TaskRows";

export default function TaskTable({
  tasks,
  handleTaskDoneUpdate,
  handleTaskPriorityUpdate,
}) {
  return (
    <div className="task-table">
      <ul>
        <span className="title">Done</span>
        <span className="title">Description</span>
        <span className="title">Category</span>
        <span className="title">Deadline</span>
        <span className="title">Priority</span>
        <span className="title">Days Left</span>
        <TasksRows
          tasks={tasks}
          handleTaskDoneUpdate={handleTaskDoneUpdate}
          handleTaskPriorityUpdate={handleTaskPriorityUpdate}
        />
      </ul>
    </div>
  );
}
