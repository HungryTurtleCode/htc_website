class ArchiveListController {
  constructor(paginationService) {
    this.paginationService = paginationService;

    this.data = courseList;
    this.setupData(this.data);
  }
  setupData(){
    let difficultyData = {
      beginner: 1,
      intermediate: 2,
      advanced: 3
    };

    this.data = this.data.map(item => {
      item.price = item.price || 0;
      item.lessons = item.lessons || 0;
      item.difficultyNum = difficultyData[item.skill.toLowerCase()] || 2;
      return item;
    });
  }
  $onInit(){
    this.search = this.getParameterByName('search') || '';
    this.orderParam = '-timemark';
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
