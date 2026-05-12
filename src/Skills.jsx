function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Beginner" }
  ];

  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-box">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3 className="skill-name">
              {skill.name}
            </h3>

            <p className="skill-level">
              {skill.level === "Advanced" && "✅ Advanced"}
              {skill.level === "Beginner" && "📘 Beginner"}
              {skill.level === "Intermediate" && "⚡ Intermediate"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;