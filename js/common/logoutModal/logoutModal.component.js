import controller from './logoutModal.controller';

const LogOutComponent = {
  controller,
  bindings: {
    closeModal: '&'
  },
  template: `
    <div class="login-modal-container" ng-click="$ctrl.hide($event)">
      <div class="modal" ng-click="$ctrl.stopPropagation($event)">
        <div class="logout-cont">
          <h3>Are you sure you want to sign out?</h3>
          <div class="buttons">
            <button class="yes"
              ng-click="$ctrl.signOut($event)">
                Yes
            </button>
            <button class="no"
              ng-click="$ctrl.hide($event)">
                No
            </button>
          </div>
        </div>
      </div>
    </div>
  `
};

export default LogOutComponent;
