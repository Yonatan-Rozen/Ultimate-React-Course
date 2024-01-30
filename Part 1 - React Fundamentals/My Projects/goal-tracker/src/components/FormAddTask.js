import { useState } from "react";
import Button from "./Button";

export default function FormAddTask({ onAddTask }) {
  const [formState, setFormState] = useState({
    description: "",
    category: "",
    deadline: "",
    priority: "Low",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  }

  function handleAddTask() {
    if (!formState.description || !formState.category || !formState.deadline)
      return;

    const newTask = {
      ...formState,
      done: false,
      deadline: new Date(formState.deadline).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };

    onAddTask(newTask);
  }

  return (
    <div className="add-task-form">
      <ul>
        <input type="checkbox" disabled name="done" />
        <input
          type="text"
          placeholder="description..."
          value={formState.description}
          onChange={handleChange}
          name="description"
        />
        <input
          type="text"
          placeholder="category..."
          value={formState.category}
          onChange={handleChange}
          name="category"
        />
        <input
          type="date"
          value={formState.deadline}
          onChange={handleChange}
          name="deadline"
        />
        <select
          value={formState.priority}
          onChange={handleChange}
          name="priority"
        >
          <option value={"Low"}>Low</option>
          <option value={"Medium"}>Medium</option>
          <option value={"High"}>High</option>
        </select>
        <Button onClick={handleAddTask}>Add</Button>
      </ul>
    </div>
  );
}
