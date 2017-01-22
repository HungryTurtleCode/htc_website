import config from './config';
import Auth from './auth';
import $ from './htcQuery';

const htc_auth = new Auth();

$('#fb_signin').click((event) => {
  htc_auth.facebookSignIn()
    .then((result) => {
      console.log('here');
      console.log(result);
    });
});

$('#fb_signout').click((event) => {
  htc_auth.signOut()
    .then(() => console.log('signed out'))
    .catch((err) => console.log('error signing out', err));
});
