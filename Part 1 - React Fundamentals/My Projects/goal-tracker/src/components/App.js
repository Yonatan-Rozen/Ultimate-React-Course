import { useState } from "react";
import Button from "./Button";
import Footer from "./Footer";
import FormAddTask from "./FormAddTask";
import TaskTable from "./TaskTable";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  function handleShowAddTaskForm() {
    setShowAddTaskForm((show) => !show);
  }

  function handleTaskDoneUpdate(updatedTask, isDone) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.description === updatedTask.description
          ? { ...task, done: isDone }
          : task
      )
    );
  }

  function handleTaskPriorityUpdate(updatedTask, newPriority) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.description === updatedTask.description
          ? { ...task, priority: newPriority }
          : task
      )
    );
  }

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
    setShowAddTaskForm(false);
  }

  return (
    <>
      <div className="app">
        <h1>Goal Tracker</h1>
        <div className={`table ${showAddTaskForm ? "form-open" : ""}`}>
          {(tasks.length > 0 || showAddTaskForm) && (
            <TaskTable
              tasks={tasks}
              handleTaskDoneUpdate={handleTaskDoneUpdate}
              handleTaskPriorityUpdate={handleTaskPriorityUpdate}
            />
          )}
          {showAddTaskForm && <FormAddTask onAddTask={handleAddTask} />}
        </div>
        <Button onClick={handleShowAddTaskForm}>
          {showAddTaskForm ? "Close" : "Add New Task"}
        </Button>
      </div>
      <Footer />
    </>
  );
}
