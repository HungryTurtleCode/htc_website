---
title: AngularJS Quiz App Tutorial Part 14 – index for Ng-Repeat
date: 2016-05-22T20:16:58+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/14-index-for-ng-repeat/
head-title: Part 14 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932344/Angular-quiz-part-14_swngy0.jpg
excerpt: Index For Ng-Repeat Will Help User Feedback We now have the questions all displaying nicely in the quiz. The problem we face now is that when the user selects an answer there is no visual feedback to let them know …
categories:
  - Basic Angular Quiz App
---
## Index For Ng-Repeat Will Help User Feedback

<span style="font-weight: 400;">We now have the questions all displaying nicely in the quiz. The problem we face now is that when the user selects an answer there is no visual feedback to let them know that they have selected that answer. In this part we will introduce <a href="https://docs.angularjs.org/api/ng/directive/ngRepeat" target="_blank">index for ng-repeat</a> and create that feedback for the users.</span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631207/AngularJS-Turtle-Quiz-App-14_me2pnt.webp);">
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

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/15-reusing-code/)

<span style="font-weight: 400;">Getting started on the text questions first we will go into the h4 that holds each possible answer. Here we will add an ng-class that will give it a blue (bg-info) background when the user selects that answer. Watch the video tutorial to see this in action.</span>

<img class="aligncenter wp-image-919" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630377/answer_feedback_wzalvk.jpg" alt="Quiz question answer feedback" width="800" height="357" />

But how do we use ng-class to only add the background when the user clicks on that answer? Well, we simply combine the efforts of ng-click and ng-class into one.

Remember that selected property on the JSON for each question? We can use ng-click to change that to the index of the question that was clicked on and use ng-class to display the background only if the index of that answer is the same as the index in the selected property for that question.

### How Do We Tell The Ng-Click The Index Of What Was Clicked?

<span style="font-weight: 400;">Fortunately, ng-repeat provides us with a handy parameter that can handle this for us &#8211; $index. This does exactly what is says on the tin. It will give us the index of the current iteration through the ng-repeat. </span>

<span style="font-weight: 400;">For example, on the first possible answer, $index = 0. On the second possible answer $index = 1 etc etc.</span>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock441655">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

## Bringing It All Together

<span style="font-weight: 400;">We can now give ng-click a function that will change the value of the selected property for the current question. We will do this by passing $index in as an argument to the function in ng-click. </span>

In the ng-class we can make a comparison between the $index of all the possible answers and the selected property for the question. Only the possible answer that matches will be given the background.

<pre class="lang:xhtml decode:true" title="Adding ng-class and ng-click">&lt;div class="row"
     ng-if="quiz.dataService.quizQuestions[quiz.activeQuestion].type === 'text'"&gt;
         &lt;div class="col-sm-6" ng-repeat="answer in quiz.dataService.quizQuestions[quiz.activeQuestion].possibilities"&gt;
             &lt;h4 class="answer"
                 ng-class="{'bg-info': $index === quiz.dataService.quizQuestions[quiz.activeQuestion].selected}"
                 ng-click="quiz.selectAnswer($index)"&gt;

                     {{answer.answer}}

             &lt;/h4&gt;
         &lt;/div&gt;
&lt;/div&gt;</pre>

Now let’s create the function in the quiz controller. This process will be familiar to you by now. I have left out all the rest of the code that we have added to the controller previously just to make sure you can see exactly what we are doing here.

<pre class="lang:js decode:true" title="selectAnswer Function">function selectAnswer(index){
    DataService.quizQuestions[vm.activeQuestion].selected = index;
}</pre>

<span style="font-weight: 400;">A simple one liner. We just set the selected flag of the active question to the index that was passed into the function. Easy stuff.</span>

### Why Does The Button In The Progress Area Change?

<span style="font-weight: 400;">Now that we have done this we can happily click a possible answer and get some nice feedback showing that we have selected that answer. But you may have noticed that the corresponding button in the progress area also changes when we make a selection. Why?</span>

You may not remember but earlier on, when we were creating the progress buttons we gave it an ng-class that depended on the selected flag also. Here is the code to jog your memory.

<pre class="lang:xhtml decode:true ">&lt;button class="btn"
        ng-repeat="question in quiz.dataService.quizQuestions"
        ng-class="{'btn-info': question.selected !== null, 'btn-danger': question.selected === null}" 
        ng-click="quiz.setActiveQuestion($index)"&gt;

            &lt;span class="glyphicon"
                  ng-class="{'glyphicon-pencil': question.selected !== null, 'glyphicon-question-sign': question.selected === null}"&gt;&lt;/span&gt;
&lt;/button&gt;</pre>

<span style="font-weight: 400;">So when the selected flag for each question changes it simultaneously and automatically changes the background of the selected answer, the background of the progress button and the glyphicon of the button too. NICE!</span>

### Enough $index, On To The Next Part

<span style="font-weight: 400;">Keeping it short and sweet. Let’s move onto <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/15-reusing-code/">part 15</a> where we will finalise the quiz and then think about moving onto the results page. </span>

See you over in [part 15.](https://hungryturtlecode.com/code-projects/angular-quiz-app/15-reusing-code/)

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
  <em>You are here</em>
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
