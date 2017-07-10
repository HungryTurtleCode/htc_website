class DataService{
  constructor($http) {
    this.$http = $http;
    // this.url = 'https://138.197.119.94';
    this.url = 'https://api.hungryturtlecode.com';
  }
  trackAcEvent(data){
    return this.$http.post(`${this.url}/acEvent`, data)
      .then(response => {
        return response.data;
      });
  }
  tagSearch(email, query){
    return this.$http.post(`${this.url}/tagSearch`, {email, query})
      .then(response => {
        return response.data;
      });
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
    return this.$http.post(`${this.url}/paypalBuy`, {courses: data, user: user.user_id, email: user.email})
      .then(response => {
        return response.data;
      });
  }
  stripeBuy(data, user, token){
    return this.$http.post(`${this.url}/stripeBuy`, {courses: data, user: user.user_id, email: user.email, token: token})
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
  migrateUser(to, from){
    return this.$http.post(`${this.url}/migrateUser`, {to_user: to, from_user: from})
      .then(response => {
        return response.data;
      });
  }
}

DataService.$inject = ['$http'];

export default DataService;
