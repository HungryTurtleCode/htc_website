import controller from './archiveList.controller';

const ArchiveList = {
  controller,
  template: `
    <div class="archive-item" ng-repeat="post in $ctrl.data">
      <h2>
        <a ng-href="{{post.url}}">
          {{post.title}}
        </a>
      </h2>
      <section>
        <div class="item-image-cont">
          <a ng-href="{{post.url}}">
            <img ng-src="{{post.image}}"/>
          </a>
        </div>
      </section>
      <section class="bottom">
        <p>{{post.excerpt}}</p>
        <div class="button-cont">
          <a
            ng-href="{{post.url}}"
            class="learn-more">
              Learn More
          </a>
        </div>
      </section>
    </div>
  `
};

export default ArchiveList;
