class commentController{
  constructor($sce) {
    this.$sce = $sce;
  }

  $onInit(){
    this.data = {
      isReply: false,
      user_name: 'Adrian Henry',
      image: 'https://scontent.flhr4-1.fna.fbcdn.net/v/t1.0-9/1484172_10151935197492795_852819600_n.jpg?oh=921dd9d6c50b90ccc87b5ab5f0d9a8c8&oe=5902A22E',
      text: 'This is the comment that the user left on this post',
      data: 1485704985,
      score: 3
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
}

commentController.$inject = ['$sce'];

export default commentController;
