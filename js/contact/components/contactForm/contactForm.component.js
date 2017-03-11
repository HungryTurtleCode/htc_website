import controller from './contactForm.controller';

const ContactForm = {
  controller,
  template: `
    <form class="contact-form" action="">
      <label>Name:</label>
      <input type="text" placeholder="Name" ng-model="$ctrl.name"/>
      <label>Email Address:</label>
      <input type="text" placeholder="Email" ng-model="$ctrl.email"/>
      <label>Subject</label>
      <input type="text" placeholder="Subject" ng-model="$ctrl.subject"/>
      <label>Message:</label>
      <textarea ng-model="$ctrl.msg"></textarea>
      <span class="feedback" ng-class="{'error': $ctrl.error}">
        {{$ctrl.feedbackText}}
      </span>
      <button ng-click="$ctrl.submit()">Send Message</button>
    </form>
  `
};

export default ContactForm;
