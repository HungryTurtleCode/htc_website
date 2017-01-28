import HTC from './htc';

class UserData{
  constructor(db) {
    this.db = db;
  }
  $onInit(){
    this.userId = null;
    this.userData;
  }
  setUserId(id){
    this.userId = id;
  }
  getUserData(id){
    let userId = id || this.userId;
    if(userId){
      return this.db.getUserData(userId);
    }
    console.error('Can\'t fetch data for unknown user');
    return Promise.reject('Can\'t fetch data for unknown user');
  }
}

UserData.$inject = ['dbService'];

HTC.module('userData', UserData);
