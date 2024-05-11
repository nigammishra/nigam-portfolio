import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formRef.current.user_name.value;
    const email = formRef.current.user_email.value;
    const message = formRef.current.message.value;

    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    window.location.href = `mailto:nigammishra826@gmail.com?subject=${subject}&body=${body}`;
    setMessage(true);
    formRef.current.reset();
  };

  return (
    <section id="contact" style={{ paddingBottom: '50px', marginTop: '8rem' }}>
      <h5>Get In Touch</h5>
      <h5>I do receive your messages and will respond asap if the valid email is provided :)</h5>
      <h2>Contact Me</h2>
     
      <div className="container contact__container"> 
      <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>nigammishra826@gmail.com</h5>
            <h5>Contact me:-8260821103</h5>
            <a href="mailto:nigammishra826@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Full Name" name="user_name" required />
          <input type="email" placeholder="Your Email" name="user_email" required />
          <textarea placeholder="Your message" rows="7" name="message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
