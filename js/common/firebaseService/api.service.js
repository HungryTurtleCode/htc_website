class ApiService{
  constructor($http) {
    this.$http = $http;

    this.apiVersion = 'v0';
    this.url = this.getBaseUrl() + this.apiVersion;

    this.checkForJWT();
  }
  checkForJWT() {
    var value = "; " + document.cookie;
    var parts = value.split("; htca=");
    let token = '';
    if (parts.length == 2) {
      token = parts.pop().split(";").shift();
      localStorage.setItem('htca', JSON.stringify(token));
    } else {
      token = JSON.parse(localStorage.getItem('htca')) || '';
    }
    this.$http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
      .then(this._handleDeauth.bind(this))
      .catch(err => console.error(err));
  }
  get(url) {
    return this.$http.get(this.url + url)
      .then(res => res.data)
      .then(this._handleDeauth.bind(this))
      .catch(err => console.error(err));
  }
  put(url, data) {
    return this.$http.put(this.url + url, data)
      .then(res => res.data)
      .then(this._handleDeauth.bind(this))
      .catch(err => console.error(err));
  }
  delete(url) {
    return this.$http.delete(this.url + url)
      .then(res => res.data)
      .then(this._handleDeauth.bind(this))
      .catch(err => console.error(err));
  }
  _handleDeauth(res) {
    if (res.deauth) {
      localStorage.setItem('htca', JSON.stringify(''));
      this.$http.defaults.headers.common['Authorization'] = '';
    } else if (res.token) {
      localStorage.setItem('htca', JSON.stringify(res.token));
      this.$http.defaults.headers.common['Authorization'] = `Bearer ${res.token}`;
    }
    return res;
  }
}

ApiService.$inject = ['$http'];

export default ApiService;
