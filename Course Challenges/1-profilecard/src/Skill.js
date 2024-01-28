export default function Skill({ color, skill, level }) {
  return (
    <div style={{ backgroundColor: color }} className="skill">
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👌"}
        {level === "advenced" && "💪"}
      </span>
    </div>
  );
}
