function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My Portfolio</h1>

      <ul className="nav-links">
        <li className="nav-item">Home</li>

        <li className="nav-item">
  <a href="#project">Project</a>
</li>

        <li className="nav-item">
          <a href="#skills">Skills</a>
        </li>

        <li className="nav-item">
  <a href="#contact">Contact</a>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;