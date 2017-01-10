---
title: AngularJS Quiz App Tutorial Part 21 – A New Way To Use Ng-Class
date: 2016-05-22T20:15:10+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/21-function-with-ng-class/
head-title: Part 21 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932387/Angular-quiz-part-21_vaxed8.jpg
excerpt: Deja Vu + A New Way To Use Ng-Class Much like the previous part, the markup in this part will be very similar to that of the markup in the quiz controller. But we will spice things up a bit …
categories:
  - Basic Angular Quiz App
---
## Deja Vu + A New Way To Use Ng-Class

<span style="font-weight: 400;">Much like the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/" target="_blank">previous part</a>, the markup in this part will be very similar to that of the markup in the quiz controller. But we will spice things up a bit by adding new elements and showing a different way of using ng-class &#8211; using a function with ng-class instead of an object with name:value pairs.</span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631296/AngularJS-Turtle-Quiz-App-21_ngcffe.webp);">
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

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/22-angular-number-filter/)

<span style="font-weight: 400;">Below the row we created in the last part we will continue to create the markup for the question area of the results section.</span>

<img class="aligncenter wp-image-934" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631351/results_question_area_crj88d.jpg" alt="results question area" width="800" height="344" />

<pre class="lang:xhtml decode:true" title="Answers">&lt;div class="row"&gt;
    &lt;h3&gt;Questions:&lt;/h3&gt;
    &lt;div class="well well-sm"&gt;
        &lt;div class="row"&gt;
            &lt;div class="col-xs-12"&gt;

                &lt;h4&gt; {{}} &lt;/h4&gt;
           
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

Inside the {{}} syntax of the h4 we will need to reference the active question again to ensure the correct data is showing. This means we will need to create an active question variable on the results controller.

<pre class="lang:js decode:true" title="Adding an activeQuestion property">function ResultsController(quizMetrics, DataService){

    var vm = this;

    vm.quizMetrics = quizMetrics; // binding the object from factory to vm 
    vm.dataService = DataService;

    vm.activeQuestion = 0;

}</pre>

Now that that&#8217;s done we can write the code into that h4. It will be much like the code in the h4 of the quiz controller so if you don’t quite understand what is going on here go back to the part where we created this markup in the quiz controller. Continuing on, we will also ng-repeat all the possible answers of the active question.

<pre class="lang:xhtml decode:true">&lt;div class="row"&gt;
    &lt;h3&gt;Questions:&lt;/h3&gt;
    &lt;div class="well well-sm"&gt;
        &lt;div class="row"&gt;
            &lt;div class="col-xs-12"&gt;

                &lt;h4&gt; {{results.activeQuestion+1 +". "+results.dataService.quizQuestions[results.activeQuestion].text}} &lt;/h4&gt;
                
                &lt;div class="row"
                     ng-if="results.dataService.quizQuestions[results.activeQuestion].type === 'text'"&gt;
                               
                         &lt;div class="col-sm-6" ng-repeat="answer in results.dataService.quizQuestions[results.activeQuestion].possibilities"&gt;
                             &lt;h4 class="answer"&gt;
                                     
                                     {{answer.answer}}
   
                             &lt;/h4&gt;
                         &lt;/div&gt;
                &lt;/div&gt;
            
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</pre>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock865253">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

### Adding More Feedback To Each Answer

<span style="font-weight: 400;">If you have seen the <a href="/turtlefacts" target="_blank">final application</a>, you will notice that the answers in the results section display “correct answer” and if you gave a different answer it will display “your answer” on that on to let you know what answer you gave and what the actual correct answer was.</span>

<img class="aligncenter wp-image-935" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631351/results_question_additional_feedback_hwcbiu.jpg" alt="results question additional feedback" width="800" height="262" />

To implement that we need to create the two sets of text and ng-show then depending on the conditions of each possible answer.

<pre class="lang:xhtml decode:true" title="Added feedback">&lt;h4 class="answer"&gt;
        
    {{answer.answer}}
                                      
    &lt;p class="pull-right"
       ng-show="$index !== results.quizMetrics.correctAnswers[results.activeQuestion] && $index === results.dataService.quizQuestions[results.activeQuestion].selected"&gt;Your Answer&lt;/p&gt;
             
    &lt;p class="pull-right"
       ng-show="$index === results.quizMetrics.correctAnswers[results.activeQuestion]"&gt;Correct Answer&lt;/p&gt;

&lt;/h4&gt;</pre>

## Fancy Expressions and a Function With Ng-Class

<span style="font-weight: 400;">The expressions in the above code snippet may look a bit daunting initially but let’s walk through them. </span>

<span style="font-weight: 400;">Starting with the “Correct Answer” text. The expression in the ng-show is comparing the $index (which is the current index of the ng-repeat) to the correct answer for this particular question. We are doing this by referencing the correctAnswers property that we added to the quizMetrics factory earlier. Using activeQuestion to get the answer for the current active question.</span>

The ng-show on the “Your Answer” text is a bit more complicated. We are using two conditions here. The first one is checking the this possible answer is not the correct answer (using the same method as we did for the “Correct Answer” area). We do this as if the user gave the correct answer we can simply display “Correct Answer”, no need to tell them that was also the answer they gave. The absence of the “Your Answer” prompt implies their answer is correct.

The next condition to the expression is checking if this answer is in fact that answer that the user gave. We do this by referencing the selected property on the question, which of course stores the user’s answer for that particular question.

<span style="font-weight: 400;">Both of these conditions have to be true, for the “Your Answer” text to display on the question.</span>

### The Questions Need Backgrounds

<span style="font-weight: 400;">We want to style the correct answer with a green background and if the user answered incorrectly, style their answer with a red background. We will do this using ng-class. But instead of using the object notation for ng-class like we have done in the past, we will give it a function that returns the class to display.</span>

<pre class="lang:xhtml decode:true" title="Calling a function from ng-class">&lt;h4 class="answer"
    ng-class="results.getAnswerClass($index)"&gt;</pre>

It calls the getAnswerClass function (which we will create shortly) and passes in the $index from the ng-repeat. This function can then do some logic and figure out which class should be added and return that from the function. Whatever is returned by the function will be added as a class to the element by ng-class.

Heading into the results controller, let’s create the function. All we will need to do inside the function is figure out if the argument passed in ($index) is the index of the correct answer. We will do this by referencing the array of correct answers we have used in the past.

If the argument is the correct answer, we return the green background class which is the bootstrap class of bg-success. If that conditional fails, there is an else if block that test if the argument passed in is the answer the user gave. If it is, then the class of bg-danger is returned, which is the red background.

<pre class="lang:js decode:true " title="getAnswerClass">vm.getAnswerClass = getAnswerClass;

function getAnswerClass(index){

    if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
        return "bg-success";
    }else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
        return "bg-danger";
    }

}</pre>

<span style="font-weight: 400;">We can have the else if simply check if the answer is the one the user gave and not check if it also isn’t the correct answer (like we did in the ng-show) because we already know the answer wasn’t correct as the first if statement failed.</span>

### End Of The Road For This Part

<span style="font-weight: 400;">There isn’t much left for us to do in the application. The <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/22-angular-number-filter/">next thing</a> to do is to create the function that will allow the user to hop between questions using the buttons at the top.</span>

See you in [part 22](https://hungryturtlecode.com/code-projects/angular-quiz-app/22-angular-number-filter/) for that

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
  <em>You are here</em>
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
