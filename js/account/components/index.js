import angular from 'angular';
import courseCard from './courseCard';

const ComponentModule = angular
  .module('component.module', [
    courseCard
  ])
  .name;

export default ComponentModule;
