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
        ng-class="{'disabled-btn': $ctrl.inCart || $ctrl.enrolled}"
        ng-click="$ctrl.takeCourse()">
          {{$ctrl.buttonText}}
      </button>
      <div class="goto"
        ng-if="$ctrl.enrolled">
          <a ng-href="/lessons/#!/{{$ctrl.courseData.course}}/">
            Go To Course
          </a>
      </div>
      <div class="goto"
        ng-if="$ctrl.inCart">
          <a href="/checkout">
            Go To Cart
          </a>
      </div>
    </div>
    <div class="buy-button-loading" ng-show="$ctrl.loading">
      <htc-spinner></htc-spinner>
    </div>
  `
};

export default BuyButton;
