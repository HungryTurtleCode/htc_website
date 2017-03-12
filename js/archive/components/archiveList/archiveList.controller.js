class ArchiveListController {
  constructor(paginationService) {
    this.paginationService = paginationService;

    this.data = courseList;
  }
  getStartFromData(){
    return this.paginationService.currentPage * this.paginationService.pageSize;
  }
  slugify(name){
    if(name){
      let arr = name.split(' ');
      arr = arr.join('-');
      return arr.toLowerCase();
    }
  }
}

ArchiveListController.$inject = ['paginationService'];

export default ArchiveListController ;
