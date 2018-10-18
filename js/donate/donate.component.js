import controller from './donate.controller';

const DonateComponent = {
  controller,
  template: `
    <div class="list-area">
      <cart-payment
        class="clear"
      ></cart-payment>
    </div>
  `
};

export default DonateComponent;
