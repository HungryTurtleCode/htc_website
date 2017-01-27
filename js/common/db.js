import firebase from 'firebase';
import HTC from './htc';

class DatabaseService{
  constructor() {}

  $onInit(){
    this.ref = firebase.database().ref();
  }
}

DatabaseService.$inject = [];

HTC.module('dbService', DatabaseService);
