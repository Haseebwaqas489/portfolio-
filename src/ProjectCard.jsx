function ProjectCard({ title, description, techStack, status }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p>{description}</p>

      <h4>Tech Stack: {techStack}</h4>

      <span
        className={
          status === "Completed"
            ? "completed"
            : "progress"
        }
      >
        {status}
      </span>
    </div>
  );
}

function App() {
  const projects = [
    {
      title: "Todo App",
      description: "Task management application",
      techStack: "React, CSS",
      status: "Completed",
    },

    {
      title: "Weather App",
      description: "Weather forecasting app using API",
      techStack: "React, API",
      status: "In Progress",
    },

    {
      title: "Portfolio Website",
      description: "Personal portfolio website",
      techStack: "HTML, CSS, JS",
      status: "Completed",
    },

    {
      title: "Calculator",
      description: "Basic calculator project",
      techStack: "JavaScript, CSS",
      status: "Completed",
    },

    {
      title: "Blog Website",
      description: "Simple blogging platform",
      techStack: "React, Firebase",
      status: "In Progress",
    },
  ];

  return (
    <div id="project" className="container">
      <h1>Projects Section</h1>

      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            status={project.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;