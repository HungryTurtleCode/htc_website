---
title: AngularJS Quiz App Tutorial Part 20 – Familiar Bootstrap Markup
date: 2016-05-22T20:15:33+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/20-familiar-bootstrap/
head-title: Part 20 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932383/Angular-quiz-part-20_jtmhg5.jpg
excerpt: Some Really Familiar Bootstrap Markup This lesson isn’t introducing anything new. Infact, you will have seen much of this code before. What we are tackling is the area at the top of the results controller that shows what questions the user …
categories:
  - Basic Angular Quiz App
---
## Some Really Familiar Bootstrap Markup

<span style="font-weight: 400;">This lesson isn’t introducing anything new. Infact, you will have seen much of this code before. What we are tackling is the area at the top of the results controller that shows what questions the user got right and wrong along with a legend. This is very much like the progress area in the quiz controller. Let’s take a look at some familiar bootstrap code.</span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631284/AngularJS-Turtle-Quiz-App-20_vizdzh.webp);">
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

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/21-function-with-ng-class/)

<span style="font-weight: 400;">I say that it is similar, the markup is almost identical with a few key differences. Mainly the colors used are no longer red and blue but are instead red and green to indicate correct or incorrect. The glyphicons used are also different &#8211; a tick and an x this time.</span>

<img class="aligncenter wp-image-932" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631239/results_progress_area_wx6nqj.jpg" alt="results progress area" width="800" height="197" />

Other than those differences the code is identical. So I will not bore you by explaining every line of the markup. Instead, I will just show you what we have.

<pre class="lang:xhtml decode:true " title="Results and Legend">&lt;div class="row"&gt;
    &lt;div class="col-xs-8"&gt;
        &lt;h2&gt;Results:&lt;/h2&gt;
        &lt;div class="btn-toolbar"&gt;

            &lt;button class="btn"
                    ng-repeat="question in results.dataService.quizQuestions"
                    ng-class="{'btn-success': question.correct, 'btn-danger': !question.correct}"
                    ng-click="results.setActiveQuestion($index)"&gt;

                        &lt;span class="glyphicon"
                              ng-class="{'glyphicon-ok': question.correct, 'glyphicon-remove': !question.correct}"&gt;&lt;/span&gt;
                       
            &lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="col-xs-4"&gt;
        &lt;div class="row"&gt;
            &lt;h4&gt;Legend:&lt;/h4&gt;
            &lt;div class="col-sm-4"&gt;
                &lt;button class="btn btn-success"&gt;
                    &lt;span class="glyphicon glyphicon-ok"&gt;&lt;/span&gt;
                &lt;/button&gt;
                &lt;p&gt;Correct&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="col-sm-4"&gt;
                &lt;button class="btn btn-danger"&gt;
                    &lt;span class="glyphicon glyphicon-remove"&gt;&lt;/span&gt;
                &lt;/button&gt;
                &lt;p&gt;Incorrect&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

<span style="font-weight: 400;">Note the key differences. We are now using the correct property we set to true or false on every question when we marked the quiz to style the buttons accordingly using ng-class on the button and the glyphicons.</span>

<span style="font-weight: 400;">We are referencing question.correct here has question is the alias for the ng-repeat. So each iteration through ng-repeat will be a different question in the quiz. </span>

<span style="font-weight: 400;">Also note that we do not have to say something like question.correct == true (although, this would also be valid and provide the output we need) because question.correct is already a boolean value so ng-class can evaluate it straight away. There is no need to add in extra computation when it is not needed.</span>

### The Definition Of Short And Sweet

<span style="font-weight: 400;">This lesson really was short. I don’t want to get into the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/21-function-with-ng-class/">next part </a>in this article as it will then be way too long. So you will just have to click through to the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/21-function-with-ng-class/">next part</a> to get all that wonderful goodness there.</span>

See you in [part 21](https://hungryturtlecode.com/code-projects/angular-quiz-app/21-function-with-ng-class/)

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock217656">
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
  <em>You are here</em>
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
