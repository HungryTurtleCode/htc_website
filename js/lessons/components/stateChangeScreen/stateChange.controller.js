class StateChangeController{
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }
}

StateChangeController.$inject = ['$rootScope'];

export default StateChangeController;
