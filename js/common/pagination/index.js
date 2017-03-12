import angular from 'angular';

import calcPage from './calcPage.filter';
import startFrom from './startFrom.filter';
import paginationService from './pagination.service';

const PaginationComponent = angular
  .module('pagination.module', [])
  .filter('calcPage', calcPage)
  .filter('startFrom', startFrom)
  .service('paginationService', paginationService);
  .name;

export default PaginationComponent;
