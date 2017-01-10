---
title: AngularJS Quiz App Tutorial Part 17 – Final Prompt Before Results
date: 2016-05-22T20:16:04+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/17-final-prompt/
head-title: Part 17 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932361/Angular-quiz-part-17_blwjwc.jpg
excerpt: The End Of The Quiz Controller Is Near The only thing left for us to do with the quiz controller is just prompt the user when they have finished just to confirm they want to move onto the results page. …
categories:
  - Basic Angular Quiz App
---
## The End Of The Quiz Controller Is Near

<span style="font-weight: 400;">The only thing left for us to do with the quiz controller is just prompt the user when they have finished just to confirm they want to move onto the results page. The finalise flag will come in useful here to allow the use of ng-show to show the prompt when the end is reached.</span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631245/AngularJS-Turtle-Quiz-App-17_xo9hh2.webp);">
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

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/18-marking-the-quiz/)

<span style="font-weight: 400;">The code for the little prompt is simple, it is just a <a href="http://www.tutorialspoint.com/bootstrap/bootstrap_wells.htm" target="_blank">bootstrap well</a> with two buttons. We will place this markup at the end of the row that contains the well for the questions. This is the markup we will need.</span>

<img class="aligncenter wp-image-927" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630890/final_prompt_ofyoe2.jpg" alt="end of quiz prompt" width="800" height="290" />

<pre class="lang:xhtml decode:true" title="Final Prompt">&lt;div class="well well-sm" ng-show="quiz.finalise"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col-xs-12"&gt;
            &lt;h3&gt;Are you sure you want to submit your answers?&lt;/h3&gt;
            &lt;button class="btn btn-success" ng-click="quiz.finaliseAnswers()"&gt;Yes&lt;/button&gt;
            &lt;button class="btn btn-danger" ng-click="quiz.finalise = false"&gt;No&lt;/button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

Onto the well that of this markup we have added the trusty ng-show directive that will only show this prompt when the finalise property is true.

Each of the buttons both have an ng-click directive attached onto them. The no button simply sets finalise back to false which removes the prompt and keeps the user in the quiz to make some changes. Simple enough.

The yes button contains a function we will need to create. This function will reset all the properties and variables that we have been using throughout the course of the life of the quiz.

<img class="aligncenter wp-image-928" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630890/prompt_not_displaying_correctly_hdirnl.jpg" alt="prompt not displaying how we want" width="800" height="354" />

You may have noticed that the prompt simply displays under the quiz questions at the minute. This isn’t exactly what we want. Instead, we want the questions to hide while the prompt is showing just to avoid possible confusion. This way the user is in no doubt what they have to do. We do this by adding an ng-hide to the question well div.

<pre class="lang:xhtml decode:true" title="The questions div">&lt;h3&gt;Question:&lt;/h3&gt;
&lt;div class="well well-sm" ng-hide="quiz.finalise"&gt;</pre>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock558774">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

## Another Method Inside The Controller

<span style="font-weight: 400;">The final thing for us to do is create the function that will run when the user clicks the yes button in the final prompt &#8211; the finaliseAnswers function. I won’t bore you by repeating the process to add another function to the controller.</span>

<pre class="lang:js decode:true" title="Finalise Answers function">function finaliseAnswers(){

    vm.finalise = false;
    numQuestionsAnswered = 0;
    vm.activeQuestion = 0;
    quizMetrics.markQuiz();
    
}</pre>

Note that this is just the function itself. This will be inside the quiz controller and it will be added to the view model in the same way as before &#8211; using a named function &#8211; something like <span class="lang:default decode:true crayon-inline ">vm.finaliseAnswers = finaliseAnswers.</span>

The first three lines inside the function are pretty self explanatory &#8211; just resetting the properties to their default values.

<span style="font-weight: 400;">Next, we will call a function which we will create in the next part. This function will mark the answers the user gave against the correct answers to the quiz.</span>

### **Refactoring the changeState Function**

<span style="font-weight: 400;">Earlier we created a function called changeState that takes a boolean argument and changes the state of the quiz to that boolean. However, shortly we will be creating another controller &#8211; the results controller. This means the results controller will also have a state that will need manipulating. </span>

So let’s modify the changeState function to take a second argument which will be the metric to change &#8211; quiz or results controller. This way the same function can be used to manipulate the state of both areas of the quiz.

Here is the new version of the changeState function.

<pre class="lang:js decode:true" title="changeState function">function changeState(metric, state){
    if(metric === "quiz"){
        quizObj.quizActive = state;
    }else if(metric === "results"){
        quizObj.resultsActive = state;
    }else{
        return false;
    }
}</pre>

I also added a new property to the quizObj object to make this possible &#8211; resultsActive. This is needed to ensure we actually have a state to change.

<pre class="lang:js decode:true">var quizObj = {

    quizActive: false,
    resultsActive: false,
    changeState: changeState 
                
};</pre>

With this new function, we can complete the finaliseAnswers function by setting the quiz state to false (which removes the quiz from the view) and set the results state to true, which will take us to the results page.

<pre class="lang:js decode:true" title="Finished finaliseAnswers function">function finaliseAnswers(){

            vm.finalise = false;
            numQuestionsAnswered = 0;
            vm.activeQuestion = 0;
            quizMetrics.markQuiz();
            quizMetrics.changeState("quiz", false);
            quizMetrics.changeState("results", true);

}</pre>

### Remember To Go Back And Change What We Have Broken

<span style="font-weight: 400;">Right now, we have broken the call to the changeState function we had in the list controller that triggered the quiz in the first place. We only passed in a state and not a metric to that. The code we broke was in the activateQuiz function inside the list controller.</span>

<pre class="lang:js decode:true " title="Fixed activateQuiz">function activateQuiz(){

    quizMetrics.changeState("quiz", true);

}</pre>

<span style="font-weight: 400;">Now the code is working again.</span>

### The Quiz Needs To Be Marked!

<span style="font-weight: 400;">We called the markQuiz function but it is yet to be created. So in the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/18-marking-the-quiz/">next part </a>we will create that function inside the quizMetrics factory. </span>

See you in [part 18.](https://hungryturtlecode.com/code-projects/angular-quiz-app/18-marking-the-quiz/)

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
  <em>You are here</em>
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

&nbsp;
