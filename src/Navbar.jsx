function Navbar() {
  return (
    <nav className = "navbar">
      <h1 className = "logo">My Portfolio</h1>

         <ul className   ="nav-links">
         <li className="nav-item">Home</li>
         <li className="nav-item">Project</li>
        <li className="nav-item">Skills</li>
        <li className="nav-item">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;