import Skill from "./Skill";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advenced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advenced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "beginner",
    color: "#C3DCAF",
  },
  {
    skill: "Git+GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
];

export default function SkillList() {
  const mySkills = skills;

  return (
    <div>
      {mySkills.length > 0 ? (
        <ul className="skill-list">
          {mySkills.map((skill) => (
            <Skill
              key={skill.skill}
              skill={skill.skill}
              level={skill.level}
              color={skill.color}
            ></Skill>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
