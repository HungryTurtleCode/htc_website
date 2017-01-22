import config from './config';
import Auth from './auth';

const htc_auth = new Auth();

let buttonSignin = document.getElementById('fb_signin');
let buttonSignout = document.getElementById('fb_signout');

buttonSignin.addEventListener('click', () => {
  htc_auth.facebookSignIn()
    .then((result) => {
      console.log('here');
      console.log(result);
    });
});

buttonSignout.addEventListener('click', () => {
  htc_auth.signOut()
    .then(() => console.log('signed out'))
    .catch((err) => console.log('error signing out', err));
});

