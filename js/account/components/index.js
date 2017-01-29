import angular from 'angular';
import courseCard from './courseCard';
import myCourses from './myCourses';

const ComponentModule = angular
  .module('component.module', [
    courseCard,
    myCourses
  ])
  .name;

export default ComponentModule;
