import controller from './comment.controller';

const CommentComponent = {
  controller,
  bindings: {
    data: '<',
    refresh: '&',
    highlight: '<',
    replyTo: '@'
  },
  template: `
    <div class="comment-cont" ng-class="{'reply': $ctrl.data.is_reply, 'comment-highlight': $ctrl.highlight === $ctrl.data.id}" scroll-here="$ctrl.highlight === $ctrl.data.id">
      <div class="header">
        <div class="image-cont" style="background: url({{::$ctrl.data.image || 'https://s3.us-east-2.amazonaws.com/images.hungryturtlecode.com/profile_images/default_user_image.jpg'}}); background-size: cover"></div>
        <span class="name" ng-bind-html="::$ctrl.formattedName()"></span>
        <span class="date">{{::$ctrl.data.date | date}}</span>

      </div>
      <div class="padding">
        <div class="body">
          <p>{{$ctrl.data.text}}</p>
        </div>
        <div class="footer">
          <span class="score">
            ({{$ctrl.data.score}})
          </span>
          <span class="up"
            ng-click="$ctrl.vote('up')"
            ng-class="{'active': $ctrl.voted === 'up'}">
            Up
          </span>
          <span class="down"
            ng-click="$ctrl.vote('down')"
            ng-class="{'active': $ctrl.voted === 'down'}">
            Down
          </span>
          <span class="reply"
            ng-click="$ctrl.reply = true"
            ng-if="!$ctrl.reply">
              reply
          </span>
          <span class="reply"
            ng-click="$ctrl.reply = false"
            ng-if="$ctrl.reply">
              close reply box
          </span>
        </div>
      </div>
    </div>
    <comment-form
      ng-if="$ctrl.reply"
      refresh="$ctrl.refresh()"
      is-reply="{{$ctrl.replyTo || $ctrl.data.id}}">
    </comment-form>
    <comment
      ng-repeat="comment in $ctrl.data.replies | orderBy:'date'"
      refresh="$ctrl.refresh()"
      data="comment"
      highlight="$ctrl.highlight"
      reply-to="{{$ctrl.replyTo || $ctrl.data.id}}"
    </comment>
  `
};

export default CommentComponent;
