import controller from './comment.controller';

const CommentComponent = {
  controller,
  bindings: {
      data: '<'
  },
  template: `
    <div class="comment-cont" ng-class="{'reply': $ctrl.data.isReply}">
      <div class="header">
        <div class="image-cont" style="background: url({{$ctrl.data.image}}); background-size: cover"></div>
        <span class="name" ng-bind-html="$ctrl.formattedName()"></span>
        <span class="date">{{::$ctrl.data.date * 1000 | date}}</span>

      </div>
      <div class="padding">
        <div class="body">
          <p>{{$ctrl.data.text}}</p>
        </div>
        <div class="footer">
          <span class="score">
            ({{$ctrl.data.score}})
          </span>
          <span class="up">
            Up
          </span>
          <span class="down">
            Down
          </span>
          <span class="reply">reply</span>
        </div>
      </div>
    </div>
  `
};

export default CommentComponent;
