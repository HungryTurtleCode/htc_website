class SidebarLessonListController{
  constructor(firebaseService, $location) {
    this.fb = firebaseService;
    this.$location = $location;
  }
  $onInit(){
    let course = this.getCourseName();

    this.fb.getLessonList(course)
      .then(list => {
        console.log(list);
        if(!list) return;

        this.sort(list)

        let count = 1;

        this.lessonList = list.map((sec, index) => {
          if(index > 0){
            count += list[index - 1].lessons.length;
          }
          sec.lessons = sec.lessons.map((les, lesIndex) => {
            les.number = les.position + count;
            return les;
          });

          return sec;
        });
      });
  }
  sort(list){
    let i = 0;

    while(i < list.length - 1){
      if(list[i].position > list[i+1].position){
        let temp = Object.assign({}, list[i]);
        list[i] = list[i+1];
        list[i+1] = temp;
        i = 0;
        if(list[i].lessons){
          this.sort(list[i].lessons);
        }
      }else{
        i++;
        if(list[i].lessons){
          this.sort(list[i].lessons);
        }
      }
    }
  }
  getCourseName(){
    let url = this.$location.absUrl();
    let arr = url.split('/');

    for(let i = arr.length-1; i >= 0; i--){
      let matches = arr[i].match(/\?([^&]*)/);
      if(matches){
        arr[i] = arr[i].slice(0, matches.index);
      }
      if(arr[i] === '' || arr[i] === '#!'){
        arr.splice(i, 1);
      }
    }

    return arr[arr.length - 1];
  }
}

SidebarLessonListController.$inject = ['firebaseService', '$location'];

export default SidebarLessonListController;
