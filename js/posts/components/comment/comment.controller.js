class commentController{
  constructor($sce) {
    this.$sce = $sce;
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
