import controller from './buyButton.controller';

const BuyButton = {
  controller,
  template: `
    <div ng-hide="$ctrl.loading">
      <div class="price">
        <p class="amount">
          {{$ctrl.courseData.price | currency:"$":0}}
        </p>
      </div>
      <button class="take-course"
        ng-click="$ctrl.takeCourse()">
        Take This Course
      </button>
    </div>
    <div class="buy-button-loading" ng-show="$ctrl.loading">
      Loading...
    </div>
  `
};

export default BuyButton;
