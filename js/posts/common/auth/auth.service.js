class Auth{
  constructor(firebaseService) {
    this.fb = firebaseService;
  }
  waitForAuth(){
    firebase.auth().onAuthStateChanged((user) => {
      console.log('sdf');
    })
  }
}

Auth.$inject = ['firebaseService'];

export default Auth;
