import HTC from './htc';

class UserData{
  constructor(db) {
    this.db = db;
  }
  $onInit(){
    this.userId = null;
    this.userMeta = null;
  }
  cacheUserId(id){
    this.userId = id;
  }
  cacheUserMeta(userMeta){
    this.userMeta = userMeta;
  }
  setUserBigData(data, user){
    user = user || this.userId;
    if(user){
      return this.db.setUserData(data, user);
    }
    console.error('Can\'t set data for unknown user');
    return Promise.reject('Can\'t set data for unknown user');
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
