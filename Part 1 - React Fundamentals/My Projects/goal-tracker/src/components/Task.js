export default function Task({ task, onDoneUpdate, onPriorityUpdate }) {
  const { description, done, category, deadline, priority } = task;
  const daysLeft = calculateDaysLeft(deadline);

  function calculateDaysLeft(deadline) {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const timeDifference = deadlineDate.getTime() - today.getTime();
    return Math.max(0, Math.ceil(timeDifference / (1000 * 3600 * 24)));
  }

  return (
    <>
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => onDoneUpdate(task, !done)}
      />
      <span>{description}</span>
      <span>{category}</span>
      <span>{deadline}</span>
      <select
        value={priority}
        onChange={(e) => onPriorityUpdate(task, e.target.value)}
      >
        <option value={"Low"}>Low</option>
        <option value={"Medium"}>Medium</option>
        <option value={"High"}>High</option>
      </select>
      <span>{daysLeft}</span>
    </>
  );
}
