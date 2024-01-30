import Task from "./Task";

export default function TasksRows({
  tasks,
  handleTaskDoneUpdate,
  handleTaskPriorityUpdate,
}) {
  return tasks.map((task) => (
    <Task
      key={task.description}
      task={task}
      onDoneUpdate={handleTaskDoneUpdate}
      onPriorityUpdate={handleTaskPriorityUpdate}
    />
  ));
}
