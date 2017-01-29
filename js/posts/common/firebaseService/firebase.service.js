import firebase from 'firebase';

class firebaseService{
  constructor() {
    this.fb = firebase;
    this.ref = firebase.database().ref();
  }
  setComment(loc, text, isReply, user_name, user_id, image){
    let comment = {
      text,
      user_name,
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
