import angular from 'angular';
import contactForm from './contactForm.component';

const contactFormComponent = angular
  .module('contactForm', [])
  .component('contactForm', contactForm)
  .name;

export default contactFormComponent;
