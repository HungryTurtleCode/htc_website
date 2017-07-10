import angular from 'angular';

const VideoCursor = ($timeout) => ({
  restrict: 'A',
  link($scope, $element, $attrs) {
    let overlayPlayContainer, controlsContainer;

    $timeout(() => {
      overlayPlayContainer = angular.element($element[0].querySelector('.overlayPlayContainer'));
      controlsContainer = angular.element($element[0].querySelector('.controls-container'));
    });

    $element.bind('mousemove', () => {
      overlayPlayContainer.css('cursor', 'default');
      if(controlsContainer.hasClass('hide-animation')){
        controlsContainer.addClass('show-animation');
      }
      resetTimer();
    });
    $element.bind('mouseleave', () => {
      if(controlsContainer.hasClass('show-animation')){
        controlsContainer.removeClass('show-animation');
      }
    });

    let timeoutId;

    function startTimer(){
      timeoutId = window.setTimeout(goInactive, 4000);
    }
    function resetTimer(){
      window.clearTimeout(timeoutId);

      startTimer();
    }
    function goInactive(){
      controlsContainer.removeClass('show-animation');
      overlayPlayContainer.css('cursor', 'none');
    }
  }
});

VideoCursor .$inject = ['$timeout'];

export default VideoCursor ;
