---
title: AngularJS Quiz App Tutorial Part 11 – More Bootstrap
head-title: Part 11 AngularJS Quiz App Tutorial
date: 2016-05-22T20:17:31+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/11-bootstrap-well/
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932326/Angular-quiz-part-11_jxnkd4.jpg
excerpt: Bootstrapping The Quiz Questions No waiting around here, let’s just jump straight into creating the markup for the questions in the quiz. The whole area will be surrounded in a bootstrap well and we will pull the questions from the …
categories:
  - Basic Angular Quiz App
---
## Bootstrapping The Quiz Questions

<span style="font-weight: 400;">No waiting around here, let’s just jump straight into creating the markup for the questions in the quiz. The whole area will be surrounded in a bootstrap well and we will pull the questions from the data service we created before.</span><!--more-->

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631170/AngularJS-Turtle-Quiz-App-11_agwkjq.webp);">
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

[Here is the next part](https://hungryturtlecode.com/code-projects/angular-quiz-app/12-controller-logic/)

<img class="aligncenter wp-image-914" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630050/quiz_question_area_z87xpz.jpg" alt="question area markup" width="800" height="278" />

<span style="font-weight: 400;">The base of the HTML shouldn’t be new to you, so I will just show you the code with the bootstrap well and the foundation of the question markup. </span>

<pre class="lang:xhtml decode:true" title="Question Markup">&lt;div class="row"&gt;
    &lt;h3&gt;Question:&lt;/h3&gt;
    &lt;div class="well well-sm"&gt;
        &lt;div class="row"&gt;
            &lt;div class="col-xs-12"&gt;
                &lt;!-- Question Area --&gt;

                &lt;h4&gt;&lt;!-- The question will go in here --&gt;&lt;/h4&gt;

            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

Inside this div is where we will need to add the text for the question as well as all possible answers for that question. We could just <a href="https://docs.angularjs.org/api/ng/directive/ngRepeat" target="_blank">ng-repeat</a> all questions, but they would then display all the questions in a column down the page. We want only one question with a continue button to take us to the next (or to use the buttons in the progress section).

<span style="font-weight: 400;">So instead, what we will do is to create a property on our controller that indicates the question that is active. Then the corresponding text and possible answers will be displayed for that question. Doing it this way allows us to easily move to the next question by incrementing the active question.</span>

### Active Question

<span style="font-weight: 400;">First, we need to create the activeQuestion property inside the quiz controller. We will initialise this to 0. This is because we are starting from the first question, which of course, in <a href="https://hungryturtlecode.com/best-programming-languages-to-learn-2016/" target="_blank">programming languages</a> tends to start from a 0 index.</span>

This is what our quiz controller looks like thus far.

<pre class="lang:js decode:true " title="Quiz Controller">(function(){

    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics', 'DataService'];

    function QuizController(quizMetrics, DataService){

        var vm = this;

        vm.quizMetrics = quizMetrics; 
        vm.dataService = DataService;
        vm.activeQuestion = 0;

    }

})();</pre>

To make things look a bit nicer, I like to add the question number before the question. Something like this:

<li style="font-weight: 400;">
  <span style="font-weight: 400;">This is a wonderful question that you will know the answer to.</span>
</li>

We could just start with the number one and increment the number as the user progresses through the quiz. The problem there is that that wouldn’t allow the user to go back to a question, which is a feature we want in our quiz.

But we have the activeQuestion property which holds a number of the current question, just in 0 index form. So all we need to do is to add 1 to that value. Then we can print out the text of the question which we get from the question JSON in the dataservice by accessing the index of the active question.

<pre class="lang:xhtml decode:true" title="The question">&lt;h4&gt;{{quiz.activeQuestion+1 + ". " + quiz.dataService.quizQuestions[quiz.activeQuestion].text}}&lt;/h4&gt;</pre>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock521964">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

## Now We Bring Out The Ng-Repeat Gunz

<span style="font-weight: 400;">Directly below the h4 we just created we will create a new row that will house the possible answers. Each answer will take up half the width of the well, so we will give it the corresponding bootstrap class.</span>

On the div for the question, we can use ng-repeat to repeat itself for all four possible answers to the question. This is the code that we will add right after the h4 from the last few paragraphs.

<pre class="lang:xhtml decode:true">&lt;div class="row"&gt;
    &lt;div class="col-sm-6" ng-repeat="answer in quiz.dataService.quizQuestions[quiz.activeQuestion].possibilities"&gt;
        &lt;h4 class="answer"&gt;
            &lt;!-- Possible answers go here --&gt;
        &lt;/h4&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

So here we are referencing the possible answers using a long string similar to the one we created to get the question text, except this time we are referencing <span class="lang:default decode:true crayon-inline ">.possibilities</span>  instead of <span class="lang:default decode:true crayon-inline ">.text</span> . But we are still getting that by finding the activeQuestion index of the quizQuestions property on the dataService which we have access to in the quiz controller.

The ng-repeat has the alias of answer and the possibilities object that we are looping through each have a value of answer, which is the text of the possible answer. Just to jog your memory, here is a snippet of the JSON we are dealing with.

<pre class="lang:js decode:true" title="Question JSON">{
    type: "text",
    text: "What is the typical lifespan of a Green Sea Turtle?",
    possibilities: [
        {
            answer: "150 years"
        },
        {
            answer: "10 years"
        },
        {
            answer: "80 years"
        },
        {
            answer: "40 years"
        }
    ],
    selected: null,
    correct: null
}</pre>

Now using the ng-repeat alias of answer (which will be looping through the object of possibilities) we can reference the answer value in each object. This gives us answer.answer. We will add this like so:

<pre class="lang:xhtml decode:true">&lt;div class="row"&gt;
    &lt;div class="col-sm-6" ng-repeat="answer in quiz.dataService.quizQuestions[quiz.activeQuestion].possibilities"&gt;
        &lt;h4 class="answer"&gt;
            {{answer.answer}}
        &lt;/h4&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

### Adding Custom Styling To The Questions

<span style="font-weight: 400;">The answers may be there right now, but they are certainly not looking pretty like we want them to. So we need to add our own custom styling.</span>

Adding the class of answer to the possible answers h4 will then allow us to add the following to the style.css

<pre class="lang:css decode:true" title="Answer CSS">.answer{
    padding: 15px 20px;
    border-radius: 10px;
    border: 1px solid #bbb;
}
.answer:hover{
    cursor: pointer;
}</pre>

### Creating The Continue Button

<span style="font-weight: 400;">This will be a simple case of adding a button element to the HTML just at the bottom of the current bootstrap well. The button will be styled using some bootstrap classes and we will add an <a href="https://docs.angularjs.org/api/ng/directive/ngClick" target="_blank">ng-click directive</a> to trigger the functionality that will allow us to change the active question (which will in turn, automatically change the text and answers).</span>

<pre class="lang:xhtml decode:true " title="Continue Button">&lt;button class="btn btn-warning" ng-click="quiz.questionAnswered()"&gt;Continue&lt;/button&gt;</pre>

The function that we reference here is one we have not created yet but that is what we will tackle in the next part of this series.

So I will see you there, in <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/12-controller-logic/" target="_blank">part 12.</a>

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
  <em>You are here</em>
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
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/">Using Bootstrap to help with styling error messages</a>
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
