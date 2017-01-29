import HTC from './htc';

const htcIf = (ctx, el, attrs) => {
  ctx.$watch(attrs['htc-if'].value, (newVal, oldVal) => {
    if(newVal){
      el.show();
    }else{
      el.hide();
    }
  });
}

HTC.directive('htc-if', htcIf);


