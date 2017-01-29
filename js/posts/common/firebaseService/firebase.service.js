import firebase from 'firebase';

class firebaseService{
  constructor() {
    this.fb = firebase;
    this.ref = firebase.database().ref();
  }
  getUserMeta(user){
    return this.ref
      .child('users')
      .child(user)
      .child('userInfo')
      .once('value')
      .then(snap => {
        return snap.val();
      });
  }
  getComments(url){
    if(url !== ''){
      return this.ref
        .child('comments')
        .child(url)
        .once('value')
        .then(snap => {
          return this.deepObjToArray(snap.val());
        });
    }
  }
  updateCommentScore(page, comment, score){
    let loc = page + comment;

    this.ref
      .child('comments')
      .child(loc)
      .child('score')
      .set(score)
  }
  deepObjToArray(obj){
    return Object.keys(obj).map(key => {
      if(typeof obj[key] === 'object'){
        Object.keys(obj[key]).forEach(newKey => {
          if(typeof obj[key][newKey] === 'object'){
            obj[key][newKey] = this.deepObjToArray(obj[key][newKey]);
          }
        })
      }
      return obj[key];
    });
  }
  setComment(loc, text, isReply, user_name, user_id, image){
    let comment = {
      text,
      user_name,
      isReply,
      user_id,
      image,
      date: firebase.database.ServerValue.TIMESTAMP,
      score: 0
    }

    let commentRef = this.ref
      .child('comments')
      .child(loc);

    let newComment = commentRef.push();
    comment.firebase_id = newComment.key;

    return newComment.set(comment)
      .then(data => true)
      .catch(err => {
        console.error(err)
        return err;
      });
  }
}

export default firebaseService;
