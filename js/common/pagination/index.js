import angular from 'angular';

import calcPage from './calcPage.filter';
import startFrom from './startFrom.filter';
import paginationService from './pagination.service';
import paginateButtons from './paginateBtns.component';

const PaginationComponent = angular
  .module('pagination.module', [])
  .filter('calcPage', calcPage)
  .filter('startFrom', startFrom)
  .service('paginationService', paginationService)
  .component('paginateButtons', paginateButtons)
  .name;

export default PaginationComponent;
