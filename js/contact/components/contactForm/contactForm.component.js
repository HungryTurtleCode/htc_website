import controller from './contactForm.controller';

const ContactForm = {
  controller,
  template: `
    <form class="contact-form">
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        ng-model="$ctrl.name"
        ng-class="{'error': $ctrl.emptyName && !$ctrl.name, 'success': $ctrl.emptyName && $ctrl.name}"/>

      <label>Email Address: <span ng-if="$ctrl.invalidEmail && !$ctrl.validateEmail($ctrl.email)">Email Address Is Invalid</span></label>
      <input
        type="text"
        placeholder="Email"
        ng-model="$ctrl.email"
        ng-class="{'error': $ctrl.emptyEmail && !$ctrl.validateEmail($ctrl.email), 'success': $ctrl.emptyEmail && $ctrl.validateEmail($ctrl.email)}"/>
      <label>Subject</label>
      <input
        type="text"
        placeholder="Subject"
        ng-model="$ctrl.subject"
        ng-class="{'error': $ctrl.emptySubject && !$ctrl.subject, 'success': $ctrl.emptySubject && $ctrl.subject}"/>
      <label>Message:</label>
      <textarea
        ng-model="$ctrl.msg"
        ng-class="{'error': $ctrl.emptyMessage && !$ctrl.msg, 'success': $ctrl.emptyMessage && $ctrl.msg}"></textarea>
      <span class="feedback" ng-class="{'error': $ctrl.error}">
        {{$ctrl.feedbackText}}
      </span>
      <button ng-click="$ctrl.submit()">Send Message</button>
    </form>
  `
};

export default ContactForm;
