class ApiService{
  constructor($http) {
    this.$http = $http;

    this.apiVersion = 'v0';
    this.url = this.getBaseUrl() + this.apiVersion;
  }
  getBaseUrl() {
    if(window.location.hostname === 'localhost'){
      return 'http://localhost:8080/';
    } else {
      return 'https://api.hungryturtlecode.com/';
    }
  }
  // TODO add better error handling Tue 18 Jul 2017 19:42:41 UTC
  post(url, data) {
    return this.$http.post(this.url + url, data)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
  get(url) {
    return this.$http.get(this.url + url)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
  put() {
    return this.$http.put(this.url + url, data)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
  delete() {
    return this.$http.delete(this.url + url)
      .then(res => res.data)
      .catch(err => console.error(err));
  }
}

ApiService.$inject = ['$http'];

export default ApiService;
