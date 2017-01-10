---
title: AngularJS Quiz App Tutorial Part 24 – The Finished App
date: 2016-05-22T19:42:30+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/24-finished-angular-project/
head-title: Part 24 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932403/Angular-quiz-part-24_l0q3sc.jpg
excerpt: We Have Made It To The End, Friends There is only one small thing that we still have left to do before you have your finished Angular project. That feature is just adding a button that will take us back …
categories:
  - Basic Angular Quiz App
---
## We Have Made It To The End, Friends

<span style="font-weight: 400;">There is only one small thing that we still have left to do before you have your finished Angular <a href="https://hungryturtlecode.com/code-projects/" target="_blank">project</a>. That feature is just adding a button that will take us back to the start &#8211; the list page.</span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631336/AngularJS-Turtle-Quiz-App-24_ebjfmg.webp);">
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

<span style="font-weight: 400;">Right underneath the well that holds the questions we will add a large button to take the user back to the facts page. This button will have an ng-click that will call a function that will reset all the data in the application and allow the user to repeat the quiz again without any of the data from their first attempt interfering.</span>

<img class="aligncenter wp-image-945" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464632017/go_back_to_facts_button_jbyhci.jpg" alt="go back to facts button" width="800" height="435" />

<pre class="lang:xhtml decode:true" title="Go back to facts button">&lt;button class="btn btn-primary btn-lg" ng-click="results.reset()"&gt;Go Back To Facts&lt;/button&gt;</pre>

Now create the reset function. This function will change the results state back to false and reset the numCorrect property to zero (this is to stop interference on subsequent attempts at the quiz). Then we want to loop through all the questions in the quiz and reset the correct and selected properties back to null.

<pre class="lang:js decode:true " title="Reset function">function reset(){

    quizMetrics.changeState("results", false);
    quizMetrics.numCorrect = 0;

    for(var i = 0; i &lt; DataService.quizQuestions.length; i++){
        var data = DataService.quizQuestions[i]; //binding the current question to data to keep code clean

        data.selected = null;
        data.correct = null;
    }
}</pre>

## Yay! A Finished Angular Project!

<span style="font-weight: 400;">Well done! You have completed an <a href="https://hungryturtlecode.com/code-projects/javascript-projects/angularjs/" target="_blank">Angular Project</a>. If this is the first one you have ever made then extra congratulations to you. You have made a huge step; a step that many “developers” never make. They remain armchair developers and don’t actually write code. Which is no way to improve.</span>

I really hope that you have enjoyed this series and that you have learnt a bit about Angular and see just how useful it can be. If you apply some of the knowledge learnt here to one of your own projects I would love to hear about it. Get hold of me via the contact me page on the site or on facebook or twitter.

I look forward to creating many more courses for you in the future and hopefully we can continue to learn from and inspire each other into the future.

If you haven’t already, sign up to my email newsletter where I will keep you up to data with general news in the developer world as well as keep you up to date with all my latest projects, courses and tutorials. Also I would greatly appreciate if you could hit the subscribe button above to subscribe to my youtube channel. I love and appreciate everyone’s ongoing support.

Until my next course, why not check out some of the other content that I have created on the site.

Stay hungry, and keep coding!

<span style="font-weight: 400;">Adrian</span>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock563649">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

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
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/19-angular-dependency-injection/">More dependency injection</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/">Reusing and slightly modifying some previous Bootstrap</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/21-function-with-ng-class/">More than one way to use ng-class</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/22-angular-number-filter/">Another Angular filter</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/23-angular-ng-if/">More usage of ng-if</a>
</li>
<li style="font-weight: 400;">
  <em>You are here</em>
</li>

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
