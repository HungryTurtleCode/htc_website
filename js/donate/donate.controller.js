class DonationController{
  constructor(auth) {
    this.auth = auth;
  }
}

DonationController.$inject = ['auth'];

export default DonationController;
