import controller from './paginateBtns.controller';

const PaginateButtons = {
  controller,
  bindings: {
    totalItems: '<'
  },
  template: `
    <div class="pagination-btns">
      <button
        class="pagination-button prev"
        ng-disabled="$ctrl.paginationService.currentPage == 0"
        ng-click="$ctrl.paginationService.previousButton($ctrl.paginationService.totalItems)">
          Previous
      </button>
      <button
        class="pagination-button middle-pagination-buttons"
        ng-repeat="button in $ctrl.paginationService.pageRange track by $index"
        ng-click="$ctrl.paginationService.clickPaginationButton(button, $ctrl.paginationService.totalItems)"
        ng-class="{'pagination-active': button == $ctrl.paginationService.currentPage+1}">
          {{button}}
      </button>
      <button
        class="pagination-button next"
        ng-disabled="$ctrl.paginationService.currentPage >= $ctrl.totalItems/$ctrl.paginationService.pageSize - 1"
        ng-click="$ctrl.paginationService.nextButton($ctrl.paginationService.totalItems)">
          Next
      </button>
    </div>
  `
};

export default PaginateButtons;
