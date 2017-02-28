class DataService{
  constructor($http) {
    this.$http = $http;
    this.url = 'http://138.197.119.94';
  }
  getSignedLessonVideo(user, video){
    return this.$http.post(`${this.url}/getVideo`, {video, user})
      .then(response => {
        return response.data.url;
      });
  }
  stripeBuy(data, user){
    return this.$http.post(`${this.url}/stripeBuy`, {courses: data, user})
      .then(response => {
        return response.data.url;
      });
  }
}

DataService.$inject = ['$http'];

export default DataService;
