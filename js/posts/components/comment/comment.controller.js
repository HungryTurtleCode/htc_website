class commentController{
  constructor($sce, firebaseService, $location) {
    this.$sce = $sce;
    this.fb = firebaseService;
    this.$location = $location;

    // this.loc = this.getPageLocations();
  }
  $onInit(){
    if(this.commentNesting){
      this.commentNesting += this.data.isReply + '/replies/'
      this.loc = this.getPageLocations() + this.commentNesting;
    }else{
      if(this.data.isReply){
        this.commentNesting = this.data.isReply + '/replies/';
        this.loc = this.getPageLocations() + this.commentNesting;
      }else{
        this.loc = this.getPageLocations();
      }
    }
  }
  formattedName(){
    let name = this.data.user_name.split(' ');
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
    if(this.voted === type){return;}

    let score = this.data.score;

    if(this.voted && this.voted !== type){
      this.fb.updateCommentScore(
        this.loc,
        this.data.firebase_id,
        score
      );
      return this.voted = null;
    }

    this.voted = type;
    if(type === 'up'){
      score++;
    }else if(type === 'down'){
      score--;
    }

    this.fb.updateCommentScore(
      this.loc,
      this.data.firebase_id,
      score);
  }
  getPageLocations(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length-1; i >= 0; i--){
      if(arr[i] === '' || arr[i] === '#!'){
        arr.splice(i, 1);
      }
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
    }

    let newArr = [arr[arr.length - 2], arr[arr.length - 1]];
    newArr.push('');

    return newArr.join('/');
  }
}

commentController.$inject = ['$sce', 'firebaseService', '$location'];

export default commentController;
