function Profile() {
  return (
    
    <div className="profile-card">
      <img
      className="profile-img"
        src="https://react.dev/images/docs/scientists/MK3eW3As.jpg"
        alt="profile"
      />

      <h1 className="profile-name">Haseeb Waqas</h1>

      <h3 className="profile-role">Frontend Developer</h3>

      <p className="profile-text">
        I love building websites using React JS.
      </p>

      <button className="profile-btn">Available for Work</button>
    </div>
  );
}
export default Profile;
