import controller from './contactForm.controller';

const ContactForm = {
  controller,
  template: `
    <form class="contact-form" method="post" action="http://138.197.119.94/contact">
      <label>Name:</label>
      <input type="text" placeholder="Name" name="name"/>
      <label>Email Address:</label>
      <input type="text" placeholder="Email" name="email"/>
      <label>Subject</label>
      <input type="text" placeholder="Subject" name="subject"/>
      <label>Message:</label>
      <textarea></textarea>
      <button type="submit">Send Message</button>
    </form>
  `
};

export default ContactForm;
