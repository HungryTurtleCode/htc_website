class ArchiveListController {
  constructor(paginationService, analytics, $location) {
    this.paginationService = paginationService;
    this.analytics = analytics;
    this.$location = $location;

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
  trackSearch(query){
    this.analytics.fbTrackEvent(
      'Search',
      {
        search_string: query
      },
      'search_string'
    );
    this.analytics.trackUserEvent(
      'Search',
      {
        event: query,
        location: this.getPageLocations()
      }
    );
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
  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i - 1] === 'lessons' && arr[i] === '#!'){
        this.isLesson = true;
      }
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
      if(arr[i] === '' || arr[i] === '#!'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 1]];

    return newArr.join('/');
  }
}

ArchiveListController.$inject = ['paginationService', 'analyticsService', '$location'];

export default ArchiveListController ;
