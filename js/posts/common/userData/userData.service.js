class userData{
  constructor(firebaseService) {
    this.fb = firebaseService;
    this.user = {
      user_name: 'Adrian',
      user_id: 'sdfs',
      image: 'https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/1484172_10151935197492795_852819600_n.jpg?oh=921dd9d6c50b90ccc87b5ab5f0d9a8c8&oe=5902A22E'
    }
  }
  setComment(loc, text, isReply){
    return this.fb.setComment(
      loc,
      text,
      isReply,
      this.user.user_name,
      this.user.user_id,
      this.user.image
    )
    .then(() => true)
    .catch(err => err);
  }
}

userData.$inject = ['firebaseService'];

export default userData;
