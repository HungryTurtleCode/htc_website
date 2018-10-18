import angular from 'angular';
// import courseCard from './courseCard';
// import myCourses from './myCourses';
import account from './account';
// import completed from './completed';
// import bookmarked from './bookmarked';
import titleblock from './titleblock';

const ComponentModule = angular
  .module('component.module', [
    // courseCard,
    // myCourses,
    account,
    // completed,
    // bookmarked,
    titleblock
  ])
  .name;

export default ComponentModule;
