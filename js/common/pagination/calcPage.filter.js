import angular from 'angular';

const CalcPageFilter = (paginationService) => {
  return (input) => {
    if(Math.ceil(input.length/paginationService.pageSize) != paginationService.totalPages){
      paginationService.clickPaginationButton(1, input.length);
    }

    return input;
  }
};

CalcPageFilter.$inject = ['paginationService'];

export default CalcPage;
