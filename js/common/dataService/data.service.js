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
  paypalBuy(data, user){
    return this.$http.post(`${this.url}/paypalBuy`, {courses: data, user})
      .then(response => {
        return response.data;
      });
  }
  stripeBuy(data, user, token){
    return this.$http.post(`${this.url}/stripeBuy`, {courses: data, user, token: token})
      .then(response => {
        return response.data;
      });
  }
}

DataService.$inject = ['$http'];

export default DataService;
