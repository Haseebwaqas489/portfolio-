function Skills() {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React", level: "Beginner" }
  ];

  return (
    <div id="skills" className="skills-container">
      <h2 className="skills-heading">Skills</h2>

      <div className="skills-box">
        {skills.map((skill, index) => {

          let levelText;

          if (skill.level === "Advanced") {
            levelText = "✅ Advanced";
          } else if (skill.level === "Intermediate") {
            levelText = "⚡ Intermediate";
          } else {
            levelText = "📘 Beginner";
          }

          return (
            <div className="skill-card" key={index}>
              <h3 className="skill-name">
                {skill.name}
              </h3>

              <p className="skill-level">
                {levelText}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;