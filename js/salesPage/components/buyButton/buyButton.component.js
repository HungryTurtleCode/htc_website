import controller from './buyButton.controller';

const BuyButton = {
  controller,
  template: `
    <button class="take-course"
      ng-click="$ctrl.takeCourse()">
      Take This Course
    </button>
  `
};

export default BuyButton;
