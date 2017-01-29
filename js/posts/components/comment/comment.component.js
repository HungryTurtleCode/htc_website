import controller from './comment.controller';

const CommentComponent = {
  controller,
  bindings: {
    data: '<',
    refresh: '&',
    commentNesting: '<'
  },
  template: `
    <div class="comment-cont" ng-class="{'reply': $ctrl.data.isReply}">
      <div class="header">
        <div class="image-cont" style="background: url({{$ctrl.data.image}}); background-size: cover"></div>
        <span class="name" ng-bind-html="$ctrl.formattedName()"></span>
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
      comment-nesting="$ctrl.commentNesting"
      is-reply="{{$ctrl.data.firebase_id}}">
    </comment-form>

    <comment
      ng-repeat="comment in $ctrl.data.replies | orderBy:'date'"
      refresh="$ctrl.refresh()"
      comment-nesting="$ctrl.commentNesting"
      data="comment"
    </comment>
  `
};

export default CommentComponent;
