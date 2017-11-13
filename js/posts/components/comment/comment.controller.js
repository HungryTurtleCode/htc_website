class commentController{
  constructor($sce, firebaseService, $location, userData) {
    this.$sce = $sce;
    this.fb = firebaseService;
    this.$location = $location;
    this.userData = userData;

    this.loc = this.getPageLocations();
  }
  formattedName(){
    let name = this.data.name.split(' ');
    if(name[2]){
      name[1] = '<span class="highlight-name">' + name[1] + '</span>';
      name[2] = '<span class="accent-name">' + name[2] + '</span> <span class="wrote">wrote:</span>';
    }else if(name[1]){
      name[1] = '<span class="highlight-name">' + name[1] + '</span><span class="accent-name wrote"> wrote:</span>';
    }else{
      name[0] = name[0] + '<span class="highlight-name wrote"> wrote:</span>'
    }
    return this.$sce.trustAsHtml(name.join('').toLowerCase());
  }
  vote(type){
    if(this.voted === type) return;
    if(this.userData.user.user_id === this.data.user_id) return;

    // TODO
    // FIXME will need to implement a system that avoids user's voting on comments they have already voted for

    this.voted = type;
    if(type === 'up'){
      // TODO refactor the id in the comment to be id and not firebase_id
      this.fb.upvoteComment(this.data.id)
    }else if(type === 'down'){
      this.fb.downvoteComment(this.data.id)
    }
  }
  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length-1; i >= 0; i--){
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
      if(arr[i] === '' || arr[i].charAt(0) === '#'){
        arr.splice(i, 1);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1]];
    newArr.push('');

    return newArr.join('/');
  }
}

commentController.$inject = ['$sce', 'firebaseService', '$location', 'userData'];

export default commentController;
