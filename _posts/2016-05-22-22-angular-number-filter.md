---
title: AngularJS Quiz App Tutorial Part 22 – Final Functions For RestultsCtrl
date: 2016-05-22T20:14:46+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/22-angular-number-filter/
head-title: Part 22 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932393/Angular-quiz-part-22_zw1ina.jpg
excerpt: Last Two Functions For The ResultsCtrl In this part we will add the final two functions into the results controller. A function that will be similar to the setActiveQuestion in the quiz controller but not nearly as complex and the …
categories:
  - Basic Angular Quiz App
---
## Last Two Functions For The ResultsCtrl

<span style="font-weight: 400;">In this part we will add the final two functions into the results controller. A function that will be similar to the setActiveQuestion in the quiz controller but not nearly as complex and the second function will be to calculate the percentage score the user got in the quiz. We will also briefly discuss another filter &#8211; the <a href="https://docs.angularjs.org/api/ng/filter/number">Angular number filter.</a></span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631312/AngularJS-Turtle-Quiz-App-22_wvgj8o.webp);">
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

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/23-angular-ng-if/)

<img class="aligncenter wp-image-937" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631575/results_progress_button_navigation_rppnlx.jpg" alt="results progress navigation buttons" width="800" height="224" />

<span style="font-weight: 400;">The last thing we said in the last part was that clicking the buttons in the results area does nothing. So here we will create a function that allows the user to click any of those buttons and get taken to the corresponding question to see how they did.</span>

So remember back to when we created the buttons in the results area, we added an ng-click that calls setActiveQuestion. But this of course, isn’t the same as the setActiveQuestion on the quiz controller, it just has the same name. We now need to create this new function.

In the ng-click we gave it an argument of $index, so in the function we will need to take that argument and set the active question to that index. Remember $index is coming from the ng-repeat. So if the user clicks on the 5th button from the left $index will equal 4 (0 index remember), then the function sets the active question to 4, so we see the corresponding data displaying.

<pre class="lang:js decode:true" title="setActiveQuestion function">vm.setActiveQuestion = setActiveQuestion;

function setActiveQuestion(index){

    vm.activeQuestion = index;

}
</pre>

<span style="font-weight: 400;">You may by now realise that we could get rid of this function and just add the code directly into the ng-click to change activeQuestion to $index. If you did think that, you are perfectly correct and in fact, that way is probably better. I only used the function to expose everyone to as many ways of doing things as possible to really get an idea of how Angular works.</span>

## Calculating User&#8217;s Percentage Score

<span style="font-weight: 400;">The final area to add to the results page is the bit in between the buttons and the question which shows the percentage score the user got. In the HTML, between the buttons and question we will add the following HTML markup.</span>

<img class="aligncenter wp-image-939" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631575/percentage_score_area_kbddbv.jpg" alt="score and percentage" width="800" height="316" />

<pre class="lang:xhtml decode:true" title="Displaying score and percentage">&lt;div class="row"&gt;
    &lt;div class="col-xs-12 top-buffer"&gt;
        
        &lt;h2&gt;You Scored {{results.quizMetrics.numCorrect}} / {{results.dataService.quizQuestions.length}}&lt;/h2&gt;
                    
        &lt;h2&gt;&lt;strong&gt;{{results.calculatePerc()}}%&lt;/strong&gt;&lt;/h2&gt;

    &lt;/div&gt;
&lt;/div&gt;</pre>

Here we make use of the numCorrect property that we created earlier which is incremented in the markQuiz function everytime the user gets an answer correct. We also use the .length method on the quizQuestions object to find the total number of questions in the quiz.

The final thing you will notice is we call a function called calculatePerc. Which is what we will create now.

<pre class="lang:js decode:true" title="calculatePerc function">vm.calculatePerc = calculatePerc;

function calculatePerc(){

    return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;

}</pre>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock505071">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

### A Small Caveat &#8211; Angular Number Filter

<span style="font-weight: 400;">In this quiz we have 10 questions which will result in the percentage always being a nice whole number. But if you have a different number of questions, you may end up with a percentage that has many decimal places. This can look bad and you should keep that under control. </span>

There is another <a href="https://docs.angularjs.org/api/ng/filter/number" target="_blank">Angular Filter</a> that will allow you to filter the number down to a certain number of decimal places. This would be how to do that:

<pre class="lang:xhtml decode:true " title="Using the number filter in Angular">&lt;h2&gt;&lt;strong&gt;{{results.calculatePerc() | number:2}}%&lt;/strong&gt;&lt;/h2&gt;</pre>

<span style="font-weight: 400;">The standard | is used to tell Angular we are going to use a filter and the filter we use is called number. The a colon followed by the arguments for the filter. In this case, the only argument is the number of decimal places that you want to display.</span>

### Only Two Tasks Until We Have Finished The App

<span style="font-weight: 400;">There are only two things left for us to do. The first is to fix the image questions again &#8211; just like we did in the quiz controller and the final task is to add the “go back to quiz” button. Then we are done.</span>

In [part 23](https://hungryturtlecode.com/code-projects/angular-quiz-app/23-angular-ng-if/) we will tackle fixing up the image questions.

<span style="font-weight: 400;">See you there</span>

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
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/19-angular-dependency-injection/">More dependency injection</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/">Reusing and slightly modifying some previous Bootstrap</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/21-function-with-ng-class/">More than one way to use ng-class</a>
</li>
<li style="font-weight: 400;">
  <em>You are here</em>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/23-angular-ng-if/">More usage of Ng-if</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/24-finished-angular-project/">Finishing The App</a>
</li>

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
