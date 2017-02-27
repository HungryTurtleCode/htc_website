class DataService{
  constructor($http) {
    this.$http = $http;
  }
  getSignedLessonVideo(user, video){
    return this.$http.post('http://138.197.119.94/getVideo', {video, user})
      .then(response => {
        return response.data.url;
      });
  }
}

DataService.$inject = ['$http'];

export default DataService;
