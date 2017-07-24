class DataService{
  constructor($http) {
    this.$http = $http;

    // TODO migrage all of this service to the fbService Mon 24 Jul 2017 15:10:57 UTC


    // this.url = 'https://138.197.119.94';
    if(window.location.hostname === 'localhost'){
      this.url = 'http://localhost:8080/v0';
    } else {
      this.url = 'https://api.hungryturtlecode.com/v0';
    }
  }
  trackAcEvent(data){
    return this.$http.post(`${this.url}/analytics/activecampaign`, {data})
      .then(response => {
        return response.data.success;
      });
  }

  // TODO refactor calls to this to use the correct arg footprint Mon 24 Jul 2017 15:11:58 UTC
  paypalBuy(data, user){
    return this.$http.post(`${this.url}/purchase/paypal`, {courses: data})
      .then(response => {
        // TODO check actual return value Mon 24 Jul 2017 15:12:38 UTC

        // TODO if the caller of this func redirects then look into reconciling that with server redirects instead.
        return response.data;
      });
  }

  // TODO update the arg footprint on all calls Mon 24 Jul 2017 15:14:03 UTC
  stripeBuy(data, user, token){
    return this.$http.post(`${this.url}/purchase/stripe`, {courses: data, token: token})
      .then(response => {
        // TODO check actual return value Mon 24 Jul 2017 15:12:38 UTC
        // TODO if the caller of this func redirects then look into reconciling that with server redirects instead.
        return response.data;
      });
  }




  // TODO remove all calls to the below funcs Mon 24 Jul 2017 16:07:04 UTC



  // DONE
  // migrateUser(to, from){
  //   return this.$http.post(`${this.url}/migrateUser`, {to_user: to, from_user: from})
  //     .then(response => {
  //       return response.data;
  //     });
  // }
  // DONE
  // setCommentNotifications(loc, replyKey, replyChain, lesson){
  //   return this.$http.post(`${this.url}/commentNotif`, {loc, replyKey, replyChain, lesson})
  //     .then(response => {
  //       console.log('DONE COMMENT NOTIF');
  //       return response.data;
  //     });
  // }
  // DONE
  // getSignedLessonVideo(user, video){
  //   return this.$http.post(`${this.url}/getVideo`, {video, user})
  //     .then(response => {
  //       return response.data.url;
  //     });
  // }
  // DONE
  // tagSearch(email, query){
  //   return this.$http.post(`${this.url}/tagSearch`, {email, query})
  //     .then(response => {
  //       return response.data;
  //     });
  // }
  // DONE
  // subscribeUser(email, first_name, last_name){
  //   return this.$http.post(`${this.url}/acSubscribe`, {email: email, last_name: last_name || '', first_name: first_name || ''})
  //     .then(response => {
  //       return response.data;
  //     });
  // }

}

DataService.$inject = ['$http'];

export default DataService;
