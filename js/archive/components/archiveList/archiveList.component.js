import controller from './archiveList.controller';

const ArchiveList = {
  controller,
  template: `

    <div class="filter-box">
      <input
        class="search-input"
        ng-model="$ctrl.search"
        ng-model-options="{debounce: 500}"
        placeholder="Search..."
        type="text">

      <div class="form-group">
        <span class="fancyArrow">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 255 255" style="enable-background:new 0 0 255 255;" xml:space="preserve" data-inboxsdk-session-id="1489367182919-0.6727878747402856">
          <g>
            <g id="arrow-drop-down">
                <polygon points="0,63.75 127.5,191.25 255,63.75   "/>
                  </g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <g>
                  </g>
                  <head/></svg>
        </span>
        <!--<span>Sort By:</span>-->
        <select id="frameworkSelect" ng-cloak ng-model="$ctrl.orderParam">
          <option value="-timemark">Date Added: New First</option>
          <option value="timemark">Date Added: Old First</option>
          <option value="price">Price: low to high</option>
          <option value="-price">Price: high to low</option>
          <option value="difficultyNum">Difficulty: Beginner First</option>
          <option value="-difficultyNum">Difficulty: Advanced First</option>
          <option value="-lessons">Lessons: Most First</option>
          <option value="lessons">Lessons: Least First</option>
        </select>
      </div>

    </div>

  <!--ng-repeat="course in list.courses | filter:list.search | filter:list.selectFramework | filter:list.selectLang | filter:list.enrolled | calcPage | startFrom:list.pagination.currentPage*list.pagination.pageSize | limitTo:list.pagination.pageSize | orderBy:list.orderParam">-->

    <div class="archive-item" ng-repeat="post in $ctrl.data | orderBy:$ctrl.orderParam | filter:$ctrl.search | calcPage | startFrom:$ctrl.getStartFromData() | limitTo: $ctrl.paginationService.pageSize">
      <section>
        <div class="item-image-cont">
          <a ng-href="{{post.url}}">
            <img ng-src="{{post.image}}"/>
          </a>
        </div>


      </section>
      <section class="bottom">
        <h2>
          <a ng-href="{{post.url}}">
            {{post.title}}
          </a>
        </h2>
        <div class="author-tag">
          By
          <a href="/about-me">{{post.author}}</a>
          On
          {{post.date}}
          In
          <a ng-href="/{{::$ctrl.slugify(post.categories[0])}}">{{post.categories[0]}}</a>
        </div>
        <p>{{post.excerpt}}</p>
        <div ng-if="post.lessons" class="lessons">
          <p>
            <strong>Lessons:</strong>
            {{post.lessons}}
          </p>
        </div>
        <div class="tags">
          <div>
            <div ng-repeat="tag in post.tags" class="tag-cont">
              <a ng-href="/tag/{{$ctrl.slugify(tag)}}">
                <span class="tag-box">

                  <svg class="tag-icon" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 -256 1792 1792" id="svg4315" version="1.1" inkscape:version="0.48.3.1 r9886" height="100%" sodipodi:docname="tag_font_awesome.svg">
                    <metadata id="metadata4325">
                      <rdf:RDF>
                        <cc:Work rdf:about="">
                          <dc:format>image/svg+xml</dc:format>
                          <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
                        </cc:Work>
                      </rdf:RDF>
                    </metadata>

                    <defs id="defs4323"/>
                      <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="640" inkscape:window-height="480" id="namedview4321" showgrid="false" inkscape:zoom="0.13169643" inkscape:cx="896" inkscape:cy="896" inkscape:window-x="0" inkscape:window-y="25" inkscape:window-maximized="0" inkscape:current-layer="svg4315"/>

                      <g transform="matrix(1,0,0,-1,129.08475,1285.4237)" id="g4317">
                        <path d="m 448,1088 q 0,53 -37.5,90.5 Q 373,1216 320,1216 267,1216 229.5,1178.5 192,1141 192,1088 192,1035 229.5,997.5 267,960 320,960 q 53,0 90.5,37.5 Q 448,1035 448,1088 z M 1515,512 q 0,-53 -37,-90 L 987,-70 q -39,-37 -91,-37 -53,0 -90,37 L 91,646 Q 53,683 26.5,747 0,811 0,864 v 416 q 0,52 38,90 38,38 90,38 h 416 q 53,0 117,-26.5 64,-26.5 102,-64.5 l 715,-714 q 37,-39 37,-91 z" id="path4319" inkscape:connector-curvature="0" style="fill:currentColor"/>
                      </g>
                    </svg>

                  <span class="tag-name">{{tag}}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="button-cont">
          <span class="price"
            ng-if="post.price">
              {{post.price | currency:$:0 }}
          </span>
          <span class="price free"
            ng-if="!post.price">
              Free
          </span>
          <a
            ng-href="{{post.url}}"
            class="learn-more">
              Learn More
          </a>
        </div>
      </section>
    </div>

    <paginate-buttons></paginate-buttons>
  `
};

export default ArchiveList;
