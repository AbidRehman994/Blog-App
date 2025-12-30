const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>

      <div className="contact-info">
        <p><strong>📍 Address:</strong> Peshawar, KPK, Pakistan</p>
        <p><strong>📞 Phone:</strong> +92 300 1234567</p>
        <p>
          <strong>📧 Email:</strong>{" "}
          <a href="mailto:contact@dummyblogs.com">
            contact@dummyblogs.com
          </a>
        </p>
        <p>
          <strong>💬 WhatsApp:</strong>{" "}
          <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer">
            Chat on WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
