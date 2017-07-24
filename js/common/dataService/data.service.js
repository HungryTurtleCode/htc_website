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
}

DataService.$inject = ['$http'];

export default DataService;
