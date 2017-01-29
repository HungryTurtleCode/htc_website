const titleBlock = {
  bindings: {
    title: '@',
    subtitle: '@'
  },
  template: `
    <div class="titles">
      <h1>{{$ctrl.title}}</h1>
      <h3>{{$ctrl.subtitle}}</h3>
    </div>
  `
};

export default titleBlock;
