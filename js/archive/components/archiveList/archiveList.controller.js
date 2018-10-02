class ArchiveListController {
  constructor(paginationService, analytics, $location, firebase) {
    this.paginationService = paginationService;
    this.analytics = analytics;
    this.$location = $location;
    this.fb = firebase;

    this.data = courseList;
    this.enrollments = [];
    this.setupData(this.data);
  }
  $onInit(){
    this.search = this.getParameterByName('search') || '';
    this.orderParam = '-timemark';
    this.fb.getUserEnrolledCourses()
      .then(res => {
        this.enrollments = res.map(val => val.course_id);
        this.setupData();
      });
  }
  isEnrolledInCourse(course) {
    return this.enrollments.indexOf(course) > -1;
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
      const urlSplit = item.url.split('/').filter(val => !!val);
      item.id = urlSplit[urlSplit.length - 1];
      item.enrolled = this.isEnrolledInCourse(item.id);
      return item;
    });
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
        value: query,
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
    const hashend = window.location.hash.replace('#!', '');
    return window.location.pathname + hashend.split('?')[0];
    // let url = this.$location.absUrl();
    // let arr = url.split('/');

    // for(let i = arr.length-1; i >= 0; i--){
    //   if(arr[i - 1] === 'lessons' && arr[i] === '#!'){
    //     this.isLesson = true;
    //   }
    //   let matches = arr[i].match(/\?([^&]*)/);
    //   if(matches){
    //     arr[i] = arr[i].slice(0, matches.index);
    //   }
    //   if(arr[i] === '' || arr[i].charAt(0) === '#'){
    //     arr.splice(i, 1);
    //   }
    // }

    // let newArr = [arr[arr.length - 1]];

    // return newArr.join('/');
  }
}

ArchiveListController.$inject = ['paginationService', 'analyticsService', '$location', 'firebaseService'];

export default ArchiveListController ;
