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
    this.fbSignin = $('.log-in .fb');
    this.glSignin = $('.log-in .gl');
    this.ghSignin = $('.log-in .gh');
    this.logInHeaderBtns = $('.log-in-header-btn');

    this.signOut = $('#signout');
  }
  registerEvents(){
    this.fbSignin.click(() => this.auth_handler.fbSignin());
    this.glSignin.click(() => this.auth_handler.fbSignin());
    this.ghSignin.click(() => this.auth_handler.fbSignin());
    this.logInHeaderBtns.click(e => this.auth_handler.setActive(e, this.logInHeaderBtns))
    this.signOut.click(() => this.auth_handler.signOut());
  }
}

Dom.$inject = ['Auth_Handler'];

HTC.module('DomService', Dom)
