import $ from './htcQuery';
import HTC from './htc';

import auth_handler from '../components/auth_handler';

class Dom{
  constructor(Auth_Handler) {
    this.auth_handler = Auth_Handler;
  }
  $onInit(){
    this.cacheDom();
    this.registerEvents();
  }
  cacheDom(){
    this.fbSignin = $('#fb_signin');
    this.signOut = $('#signout');
  }
  registerEvents(){
    this.fbSignin.click(() => this.auth_handler.fbSignin());
    this.signOut.click(() => this.auth_handler.signOut());
  }
}

Dom.$inject = ['Auth_Handler'];

HTC.module('DomService', Dom)
