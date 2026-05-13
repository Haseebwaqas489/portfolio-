function Contact() {

  const socialLinks = [
    {
      name: "Email",
      link: "waqashaseeb57@gmail.com"
    },

    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/haseeb-waqas-570531275/"
    },

    {
      name: "GitHub",
      link: "https://github.com/Haseebwaqas489"
    }
  ];

  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-heading">Contact</h1>

      <div className="contact-box">
        {socialLinks.map((social, index) => (
          <div className="contact-card" key={index}>

            <h3 className="contact-name">
              {social.name}
            </h3>

            <p className="contact-link">
              {social.link}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;