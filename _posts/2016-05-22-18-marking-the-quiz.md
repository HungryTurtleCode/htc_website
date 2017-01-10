---
title: AngularJS Quiz App Tutorial Part 18 – Marking The Quiz
date: 2016-05-22T20:15:55+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/18-marking-the-quiz/
head-title: Part 18 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932371/Angular-quiz-part-18_eybezd.jpg
excerpt: No Quiz Is Complete Without It Being Marked In the last part we reference a function on the quizMetrics factory that we have not yet created. So it will be the task of this part to create that function – …
categories:
  - Basic Angular Quiz App
---
## No Quiz Is Complete Without It Being Marked

<span style="font-weight: 400;">In the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/17-final-prompt/">last part</a> we reference a function on the quizMetrics factory that we have not yet created. So it will be the task of this part to create that function &#8211; a function that will mark the answers to the quiz and calculate how many correct answers that user gave. Let&#8217;s get on with marking the quiz.</span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631258/AngularJS-Turtle-Quiz-App-18_lxp8md.webp);">
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

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/19-angular-dependency-injection/)

<span style="font-weight: 400;">Without wasting any time, jump into the quizMetrics factory and get started. The first thing we will need to mark the quiz is the correct answers to all the questions. The correct answers will be another piece of data in the dataService factory. Much like we have copy and pasted in the data for the list and the quiz, we will also paste in the data for the correct answers.</span>

So at the bottom of the data service factory, paste the following:

<pre class="lang:js decode:true" title="Correct Answers data">var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];</pre>

Then inside dataObj of that service we add the correctAnswers. Like this:

<pre class="lang:js decode:true" title="dataObj Object">var dataObj = {
    turtlesData: turtlesData,
    quizQuestions: quizQuestions,
    correctAnswers: correctAnswers
};</pre>

To get hold of this data from inside the quizMetrics factory we will need to inject the dataService into the factory (yes, we can inject dependencies into services too!). This process is exactly the same as the dependency injection that you have seen already in the controllers.

<pre class="lang:js decode:true" title="Dependency Injection into a factory">angular
    .module("turtleFacts")
    .factory("quizMetrics", QuizMetrics);

    QuizMetrics.$inject = ['DataService'];

    function QuizMetrics(DataService){
        // Rest of quizMetrics code left out to keep snippet clean
    }</pre>

### The Function That Will Be Marking The Quiz

Now that we have the correct answers and have access to them in the quizMetrics factory, we can create the markQuiz function. Before we start that we will add a reference to that function in the dataObj of the quizMetrics factory, along with a few properties.

These other properties include a property to track the total number of correct answers the user has given (defaulted to 0), and a property to house the correct answers inside the quizMetrics factory object. Of course, we could just access the answers from the dataService, but the answers are a bit of data related to the quiz, so we will just keep things easy to understand and keep that stored there.

<pre class="lang:js decode:true" title="quizObj Object in the QuizMetrics factory">var quizObj = {
    quizActive: false,
    resultsActive: false,
    changeState: changeState, 
    correctAnswers: [],
    markQuiz: markQuiz, 
    numCorrect: 0
};</pre>

Now onto the implementation of the markQuiz function. This is simply a case of looping through all the questions in the quiz and then comparing the answer the user gave (which is stored in the selected property for each question) against the correct answer. If they match, we will set the “correct” property in the data to true and increment the numCorrect property. If the answers do not match then the correct flag is set to false.

<pre class="lang:js decode:true " title="markQuiz function">function markQuiz(){

    quizObj.correctAnswers = DataService.correctAnswers;

    for(var i = 0; i &lt; DataService.quizQuestions.length; i++){
        if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
            DataService.quizQuestions[i].correct = true;
            quizObj.numCorrect++;
        }else{
            DataService.quizQuestions[i].correct = false;
        }
    }

}</pre>

### This Part Was Short, On To The Next One

<span style="font-weight: 400;">We have now finished the entire quiz controller and can move on to thinking about the implementation of the results controller. </span>

<span style="font-weight: 400;">See you in <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/19-angular-dependency-injection/">part 19</a>.</span>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock793578">
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
  <em>You are here</em>
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
