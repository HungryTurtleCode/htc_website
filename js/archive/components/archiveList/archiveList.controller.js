class ArchiveListController {
  constructor() {
    this.data = courseList;
    console.log(this.data);
  }
  slugify(name){
    if(name){
      let arr = name.split(' ');
      arr = arr.join('-');
      return arr.toLowerCase();
    }
  }
}

export default ArchiveListController ;
