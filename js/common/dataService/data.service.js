class DataService{
  constructor($http) {
    this.$http = $http;
  }
  getSignedLessonVideo(user, video){
    return this.$http.post('http://45.55.193.198/getVideo', {video, user})
      .then(response => {
        return response.data.url;
      });
  }
}

DataService.$inject = ['$http'];

export default DataService;
