import controller from './buyButton.controller';

const BuyButton = {
  controller,
  template: `
    <div ng-hide="$ctrl.loading">
      <button class="take-course"
        ng-click="$ctrl.takeCourse()">
        Take This Course
      </button>
    </div>
  `
};

export default BuyButton;
