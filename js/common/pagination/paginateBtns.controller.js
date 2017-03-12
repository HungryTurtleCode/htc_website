class PaginateButtonsController{
  constructor(paginationService) {
    this.paginationService = paginationService;
  }
  getNextDisabledState(){
    return this.paginationService.currentPage >= this.paginationService.totalItems / this.paginationService.pageSize - 1;
  }
}

PaginateButtonsController.$inject = ['paginationService'];

export default PaginateButtonsController;
