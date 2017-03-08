import angular from 'angular';

const fileread= () => ({
  restrict: 'A',
  scope: {
    fileread: '='
  },
  link($scope, $element, $attrs) {
    $element.bind('change', function(changeEvent){
      let files = changeEvent.target.files;
      let numFiles = files.length;

      if(numFiles > 1){
        $scope.fileread = [];
      }

      for(let i = 0; i < numFiles; i++){

        let reader = new FileReader();

        reader.onload = function(loadEvent){
          $scope.$apply(function(){
            if(numFiles > 1){
              $scope.fileread.push(loadEvent.target.result);
            }else{
              $scope.fileread = [loadEvent.target.result];
            }
          });
        }
        reader.readAsDataURL(changeEvent.target.files[i]);
      }
    });
  }
});

fileread.$inject = [];

export default fileread;
