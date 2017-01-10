---
title: AngularJS Quiz App Tutorial Part 19 – More Dependency Injection
date: 2016-05-22T20:15:37+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/19-angular-dependency-injection/
head-title: Part 19 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932376/Angular-quiz-part-19_f7ugae.jpg
excerpt: First Steps To Getting The Results We have finished the quiz controller so now it is time to start the results controller. In the last part we created a property called resultsActive, which is what we will use to trigger …
categories:
  - Basic Angular Quiz App
---
## First Steps To Getting The Results

<span style="font-weight: 400;">We have finished the quiz controller so now it is time to start the results controller. In the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/18-marking-the-quiz/">last part</a> we created a property called resultsActive, which is what we will use to trigger the results area to show using an ng-show. We will also delve into some more angular dependency injection.</span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631271/AngularJS-Turtle-Quiz-App-19_oe6wsk.webp);">
  <div class="embedoverlaycont ">
    <div class="g-ytsubscribe" data-channelid="UC7Vxnf06GP6w42Lg3TQLXSw" data-layout="default" data-count="default" data-onytevent="onYtEvent">
    </div>
    
    <h2 class="optinform">
      Get all my latest content and exclusive offers direct to your inbox
    </h2>
    
    <p class="optinform">
      Just enter you email below
    </p>
    
    <div class="embedform optinform">
    </div>
    
    <p class="embedreturn">
      <small>Go back to the video</small>
    </p>
  </div>
</div>

<div class="embedcont"style="width: 100%; text-align: center;">
</div>

<div style="display: inline-block; padding-right: 20px; font-weight: bold; color: red; vertical-align: top; padding-top: 12px;">
  Subscribe To My Channel...
</div>

<div style="margin-top: 5px; display: inline-block">
  <div class="g-ytsubscribe" data-channelid="UC7Vxnf06GP6w42Lg3TQLXSw" data-layout="default" data-count="default" data-onytevent="onYtEvent">
  </div>
</div>

<div id="embedcode" style="display: none;">
</div>

&nbsp;

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/)

<span style="font-weight: 400;">Before we can start showing the results area we need to create it. So in the HTML, under the quiz controller markup let’s create a new div with a new <a href="https://docs.angularjs.org/api/ng/directive/ngController" target="_blank">ng-controller directive</a>. Again using the &#8220;controller as&#8221; syntax.</span>

<pre class="lang:xhtml decode:true" title="Results Markup">&lt;div ng-controller="resultsCtrl as results"&gt;
    &lt;!-- results controller markup --&gt;
&lt;/div&gt;</pre>

Now the controller itself needs to be created. So create a new file called results.js inside the controllers directory. The script will be started with an <a href="http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript" target="_blank">IIFE</a> as using and the rest should also look familiar to you by now.

<pre class="lang:js decode:true" title="Results Controller">(function(){

    angular
        .module("turtleFacts")
        .controller("resultsCtrl", ResultsController);

    function ResultsController(quizMetrics, DataService){
        var vm = this;
    }

})();</pre>

<div id="angularsociallockerbox" style="margin: 50px 0; border-radius: 30px; border: 3px solid #00BCD4; padding: 30px;">
  <h3>
    Download Commented Code And PDFs For This Entire Series
  </h3>
  
  <p>
    Get correct and fully commented code for the start of all 24 parts, plus the finished app. Also get a PDF with the entire 24 chapter tutorial in it, so you can learn anywhere!
  </p>
  
  <p>
    I will also throw in individual PDFs of all chapters, just to allow efficient learning of specific topics.
  </p>
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock852153">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

### More Angular Dependency Injection

<span style="font-weight: 400;">I mentioned that we will change the visibility of the results controller markup depending on the value of the resultsActive property on the quizMetrics factory object. This means that we need access to that factory from inside the results controller &#8211; this means dependency injection!</span>

<pre class="lang:js decode:true" title="Dependency Injection">ResultsController.$inject = ['quizMetrics', 'DataService'];

function ResultsController(quizMetrics, DataService){
    // Code for results controller here
}</pre>

Also don’t forget to add the script tag to the bottom of the html page.

<pre class="lang:xhtml decode:true">&lt;!-- Our application scripts --&gt;
&lt;script src="js/app.js"&gt;&lt;/script&gt;
&lt;script src="js/controllers/list.js"&gt;&lt;/script&gt;
&lt;script src="js/controllers/quiz.js"&gt;&lt;/script&gt;
&lt;script src="js/controllers/results.js"&gt;&lt;/script&gt;
&lt;script src="js/factories/quizMetrics.js"&gt;&lt;/script&gt;
&lt;script src="js/factories/dataservice.js"&gt;&lt;/script&gt;</pre>

With the quizMetrics injected into the results controller we can use the ng-show directive to display the results markup.

<pre class="lang:xhtml decode:true" title="Using ng-show on the results">&lt;div ng-controller="resultsCtrl as results" ng-show="results.quizMetrics.resultsActive"&gt;

&lt;/div&gt;</pre>

### A Bit Of A Problem

<span style="font-weight: 400;">If you now run through the application you will see that when the user clicks yes on the prompt at the end of the quiz, the list controller shows again. This is because we only hide the list controller when quizActive is true. But when the yes button is clicked in that prompt is sets quizActive back to false and resultsActive to true. So the list controller shows with the restults controller below it.</span>

We need to amend this by changing the ng-hide on the list controller to hide when either the quiz controller or the results controller is active.

<pre class="lang:xhtml decode:true " title="Fixing ng-hide on list markup">&lt;div ng-controller="listCtrl as list" ng-hide="list.quizMetrics.quizActive || list.quizMetrics.resultsActive"&gt;

&lt;/div&gt;</pre>

### On To The Next One, On To The Next One&#8230;

<span style="font-weight: 400;">With that done, we now have the results controller showing when it should be. The <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/">next step</a> from here is to start populating the results controller with some content. That is what we will do in the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/">next part.</a></span>

See you in [part 20](https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/)

<span style="font-weight: 400;">Adrian</span>

&nbsp;

### Check Out The Whole Course Index

<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/">Getting Started</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/2-ng-controller-scope/">Ng-controller directive and the (mis)use of $scope</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/3-ng-repeat-directive/">Looping around with the ng-repeat directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/4-bootstrap-modal/">Markup for the Bootstrap Modal</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/5-angular-filters/">Using Angular Filters to create real time search</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/6-ng-click-directive/">The powerful ng-click directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/7-angular-services/">Services in Angular make everything easier</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/8-dependency-injection/">What is this infamous dependency injection in Angular?</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/9-angular-factories/">Let&#8217;s build a Factory</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/10-ng-class/">The ng-class directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/11-bootstrap-well/">More Bootstrap markup &#8211; the well</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/12-controller-logic/">Adding some logic to the controller</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/13-ng-if/">Making things disappear with ng-if</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/14-index-for-ng-repeat/">The $index property for ng-repeat</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/15-reusing-code/">Reusing code is always a good idea</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/">Using Bootstrap to help styling an error message</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/17-final-prompt/">The final prompt after the quiz</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/18-marking-the-quiz/">Marking the quiz</a>
</li>
<li style="font-weight: 400;">
  <em>You are here</em>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/">Reusing and slightly modifying some previous Bootstrap</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/21-function-with-ng-class/">More than one way to use ng-class</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/22-angular-number-filter/">Another Angular Filter</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/23-angular-ng-if/">More usage of Ng-if</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/24-finished-angular-project/">Finishing The App</a>
</li>

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
