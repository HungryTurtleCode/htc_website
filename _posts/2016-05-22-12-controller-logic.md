---
title: AngularJS Quiz App Tutorial Part 12 – Controller Logic
head-title: Part 12 AngularJS Quiz App Tutorial
date: 2016-05-22T20:17:27+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/12-controller-logic/
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932332/Angular-quiz-part-12_sfbie2.jpg
excerpt: Controller Logic Keeps Us Going We set ourselves up nicely in the last part. The ng-click calls a function on the quizController every time the “continue” button is clicked. This function will then need to change the activeQuestion property to …
categories:
  - Basic Angular Quiz App
---
## Controller Logic Keeps Us Going

<span style="font-weight: 400;">We set ourselves up nicely in the last part. The ng-click calls a function on the quizController every time the “continue” button is clicked. This function will then need to change the activeQuestion property to the next available unanswered question in the quiz. So follow along with the article or the video as we build this controller logic.</span>

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

### Video Tutorial, For The More Visually Inclined

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631184/AngularJS-Turtle-Quiz-App-12_adxl4u.webp);">
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

[The next part can be found here.](https://hungryturtlecode.com/code-projects/angular-quiz-app/13-ng-if/)

Let’s get started on the questionAnswered function to get this functionality working. So let’s first take an overview look at what this function will need to do.

For starters, we need to check if the question the user has just clicked continue on has been answered or if it has been skipped. If it has been answered we need to increment a variable that will count the total number of question that have been answered in the quiz so far. This will be used to allow us to know when the user has finished. We will obviously need to create this variable on the controller.

Once we have incremented the total questions answered, we check if the quiz has been finished ie. the total questions answered is equal to the total number of questions in the quiz.

<span style="font-weight: 400;">If the quiz isn’t finished then we must increment the activeQuestion property to the next available unanswered question.</span>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock378599">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

## Controller Logic To Check If The Question Has Been Answered

<span style="font-weight: 400;">If you remember back to the JSON for each question you will remember that there is a selected flag for each question. This is initially set to null, meaning the question has not been answered. As soon as the user does answer the question then this selected property will be set to the index of the possible answer they selected (0-3).</span>

We still need to create the function that will set this selected value, but just keep in mind that this is something we will be doing in the future.

With this knowledge, it is now possible to detect if the question has been answered by checking if the selected property for this question equals null. If it does, the question hasn’t been answered and if it does then, of course, it has been answered.

This is the start of the questionAnswered function:

<pre class="lang:js decode:true" title="questionAnswered Function">var numQuestionsAnswered = 0;

function questionAnswered(){

    if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
        numQuestionsAnswered++;
    }

}</pre>

You can see that we initialise a numQuestionsAnswered variable. Notice that we used var and not vm. To create the variable. This is because the view does not need access to this variable. It is exclusively for the controller to use.

<span style="font-weight: 400;">Then we check to see if the question has been answered, ie the selected property for this question doesn’t equal null. If the question has been answered, then we increment the numQuestionsAnswered variable.</span>

### Check If All Questions In The Quiz Have Been Answered

<span style="font-weight: 400;">Inside the conditional statement we incremented the number of questions answered. Now that we have done that, we don’t want to move straight onto the rest of the function. Instead, we want to make sure the user hasn’t just finished the quiz. There is no point doing all this extra logic if they have just answered the final question.</span>

Still inside the conditional we can add a further conditional to check if we are at the end of the quiz. To check this we simply compare the number of answered questions to the total number of questions in the quiz.

<pre class="lang:js decode:true">function questionAnswered(){

    var quizLength = DataService.quizQuestions.length;

    if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
        numQuestionsAnswered++;

        if(numQuestionsAnswered &gt;= quizLength){
           //Finalise the quiz
        }
    }

}</pre>

Just to make things easier we stored the length of the quiz in a variable before the conditional, incase we need it again. The logic inside the second conditional is something we will return to later. But the logic will do some final checks and then return from the function call.

<span style="font-weight: 400;">Now that the checks have been done the further logic that needs to be done when the quiz isn’t finished can be added. At the end of the questionAnswered function, after the conditional blocks we can think about incrementing the activeQuestion to the next available unanswered question.</span>

### Avoiding Annoyances In Applications

<span style="font-weight: 400;">This bit of code in our app isn’t as simple as just incrementing activeQuestion. This is because we have the buttons in the progress bar that will allow the user to hop between questions. </span>

For example, let’s say the users skips the first question without answering it. They are taken to question two. They then answer it and are taken to question three. At this point they remember the answer to question one, so they hit the button in the progress area to take them back to question one.

<span style="font-weight: 400;">Hitting this button will change activeQuestion to the index of the first question, 0 (we will implement this logic soon). Now they answer the question and hit continue. If we only incremented the activeQuestion when the user hits continue, they will be taken to question two, which they have already answered. </span>

This is an annoyance, so I would rather avoid it.

### Calling Another Function

<span style="font-weight: 400;">Instead we need to scan through all the questions and find the lowest indexed question that has yet to be answered. In the previous example this logic would skip question two because it has been answered and it would instead find that question three is the lowest index that hasn’t been answered yet.</span>

This is a bit more complex, so I would urge you to separate the logic into another function that we then simply call from the current function.

This is exactly what I have done and I will call the function setActiveQuestion. So I will create the function inside the controller just like we have been doing in the past and then call it from within the questionAnswered function using vm.setActiveQuestion().

<pre class="lang:js decode:true" title="Adding the setActiveQuestion function">function QuizController(quizMetrics, DataService){

    var vm = this;

    vm.quizMetrics = quizMetrics; 
    vm.dataService = DataService;
    vm.activeQuestion = 0;
    vm.questionAnswered = questionAnswered;
    vm.setActiveQuestion = setActiveQuestion;

    var numQuestionsAnswered = 0;

    function setActiveQuestion(){
        // Will create this logic shortly
    }

    function questionAnswered(){

        if(DataService.quizQuestions[vm.activeQuestion].selected !== null){
            numQuestionsAnswered++;
        }
        vm.setActiveQuestion();
    }
}</pre>

<span style="font-weight: 400;">Here the setActiveQuestion function is obviously blank, but you can see how it was created and then called.</span>

## setActiveQuestion Is A Bit Loopy

<span style="font-weight: 400;">Let’s now start building out the setActiveQuestion function. Here are the first few lines inside the function.</span>

<pre class="lang:js decode:true" title="setActiveQuestion function">function setActiveQuestion(){
    var breakOut = false;
    var quizLength = DataService.quizQuestions.length - 1;

    while(!breakOut){
        // Indefinite Loop
    }
}</pre>

We are using a while loop here to loop indefinitely until we find a question that has yet to be answered. So we use a variable called breakOut, which is set to false and loop continuously, while breakOut is false. As soon as we find an unanswered question we will set breakOut to true, which will break the while loop and all is good.

The quizLength variable is pretty self explanatory as it is very similar to the one we created earlier. The main difference this time is that we are taking 1 away from the length. We do this because activeQuestion is 0 index. So if the length of the quiz is 10 questions, the activeQuestion will cycle from 0-9. Hence we take one away from the actual length to make it 0 index too.

Inside the while loop we will add a kind of fancy looking line of code, but it achieving a simple task.

<pre class="lang:js decode:true" title="Inside the while loop">while(!breakOut){
    vm.activeQuestion = vm.activeQuestion &lt; quizLength?++vm.activeQuestion:0;
}</pre>

This is basically a condensed if statement. It checks if the activeQuestion is less than the length of the quiz. If it is, it simply increments activeQuestion and if activeQuestion isn’t less than the length ie, it is the same size (last question in quiz) then we set activeQuestion back to 0 to continue looping from the start.

The reason we want this line of code to increment or reset activeQuestion to zero is simple. Say we skip question 1, but then answer all other questions. When we click continue on the final question, the code will check if all questions have been answered, which they havent been. This will then trigger the setActiveQuestion function.

If we only increment activeQuestion here, we will end up incrementing it past the total length of the quiz. Which would be invalid. So instead, we want to go back to the start of the quiz to find where that unanswered question is.

We know there is an unanswered question because we checked if total number of questions answered was equal to total questions and it wasn’t. So we know there is an unanswered question. So go back and keep going until we find it.

Now we need some logic that will check if the current activeQuestion, after that last line (the incremented version or the reset back to zero) is unanswered.

<pre class="lang:js decode:true ">while(!breakOut){
    vm.activeQuestion = vm.activeQuestion &lt; quizLength?++vm.activeQuestion:0;
    

    if(DataService.quizQuestions[vm.activeQuestion].selected === null){
        breakOut = true;
    }
}
</pre>

Hopefully, this conditional make a bit of sense to you. We are simply testing to see if the question is unanswered, if it isn’t then the while loop loops again and we again increment activeQuestion or reset it to zero if we where on the last question.

<span style="font-weight: 400;">If the question is unanswered then the code inside the conditional runs and we set breakOut to true, which breaks the loop and ultimately returns the function with the newly found unanswered question as the active question.</span>

### Moving On To Part 13

<span style="font-weight: 400;">In the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/13-ng-if/">next part</a> we will fix some of the issues that you may have seen while flicking through the quiz in it’s current state &#8211; The image urls display instead of the images themselves for image based questions.</span>

See you over in [part 13](https://hungryturtlecode.com/code-projects/angular-quiz-app/13-ng-if/)

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
  <em>You are here</em>
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
