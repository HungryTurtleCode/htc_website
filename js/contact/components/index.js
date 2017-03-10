import angular from 'angular';

import contactForm from './contactForm';

const Component = angular
  .module('contact.components', [
    contactForm
  ])
  .name;

export default Component;
