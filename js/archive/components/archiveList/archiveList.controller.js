class ArchiveListController {
  constructor(paginationService) {
    this.paginationService = paginationService;

    this.data = courseList;

    this.search = '';
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
  getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}

ArchiveListController.$inject = ['paginationService'];

export default ArchiveListController ;
