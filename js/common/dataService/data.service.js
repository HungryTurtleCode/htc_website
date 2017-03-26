class DataService{
  constructor($http) {
    this.$http = $http;
    this.url = 'http://138.197.119.94';
  }
  setCommentNotifications(loc, replyKey, replyChain, lesson){
    return this.$http.post(`${this.url}/commentNotif`, {loc, replyKey, replyChain, lesson})
      .then(response => {
        console.log('DONE COMMENT NOTIF');
        return response.data;
      });
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
  subscribeUser(email, first_name, last_name){
    return this.$http.post(`${this.url}/acSubscribe`, {email: email, last_name: last_name || '', first_name: first_name || ''})
      .then(response => {
        return response.data;
      });
  }
}

DataService.$inject = ['$http'];

export default DataService;
