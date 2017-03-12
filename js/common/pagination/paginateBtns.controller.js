class PaginateButtonsController{
  constructor(paginationService) {
    this.paginationService = paginationService;
  }
}

PaginateButtonsController.$inject = ['paginationService'];

export default PaginateButtonsController;
