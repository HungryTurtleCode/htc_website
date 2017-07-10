import controller from './bookmarkButton.controller';

const BookmarkButton = {
  controller,
  bindings: {
    course: '<'
  },
  template: `
    <button ng-click="$ctrl.bookmark()">
      {{$ctrl.text}}
    </button>
  `
};

export default BookmarkButton;
