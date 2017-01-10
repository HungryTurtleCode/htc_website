---
title: 'AngularJS Quiz App Tutorial Part 8 &#8211; Dependency Injection'
date: 2016-05-22T20:18:46+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/8-dependency-injection/
head-title: Part 8 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932306/Angular-quiz-part-8_imuigb.jpg
excerpt: Make The Factory Useful – Dependency Injection It is no use to us to have a factory if we cannot use it inside our controller. In this part we will inject the factory into the list controller so we can …
categories:
  - Basic Angular Quiz App
---
## Make The Factory Useful &#8211; Dependency Injection

<span style="font-weight: 400;">It is no use to us to have a factory if we cannot use it inside our controller. In this part we will inject the factory into the list controller so we can use it. Then we will refactor the list controller to remove the now redundant quizActive code. Let&#8217;s dive into <a href="https://docs.angularjs.org/guide/di" target="_blank">some dependency injection</a>.</span><!--more-->

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

### You Know The Drill.

Watch the video, or read the article. Or both.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631128/AngularJS-Turtle-Quiz-App-8_zrm9mz.webp);">
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

[The next part can be found here.](https://hungryturtlecode.com/code-projects/angular-quiz-app/9-angular-factories/)

<span style="font-weight: 400;">First things first, injecting the factory into the controller. To do this we will make use of an Angular method called $inject. This is an explicit way for us to inject any dependencies into our controllers.</span>

<pre class="lang:js decode:true" title="Injecting the QuizMetrics Factory">(function(){

    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics'];

    // Rest of code left out to keep this snippet clean

})();</pre>

As you can see, with $inject we call it and set it equal to an array. Inside this array we just list all the dependencies in standard array syntax.

We are not done quite yet. We now need to pass that factory that we injected, into our controller function as an argument. This allows us to then bind to the properties on the factory like we would with any other properties.

<pre class="lang:js decode:true">(function(){

    angular
        .module("turtleFacts")
        .controller("listCtrl", ListController);

    ListController.$inject = ['quizMetrics'];

    function ListController(quizMetrics){
        var vm = this;

        vm.quizMetrics = quizMetrics;

        // Rest of Controller code
    }

})();</pre>

<span style="font-weight: 400;">We have given the view model (ie. the html) access to all properties on the factory object by creating a property on the controller using the vm. Syntax and setting it equal to the factory object.</span>

### Getting Rid Of The Redundant Code

<span style="font-weight: 400;">We now have access to the quizActive property on the factory but also have a quizActive property inside the controller. This is now redundant so we shall remove it.</span>

There is also a function in the controller called activateQuiz. But isn’t this logic part of the general logic for the quiz? It is not specifically for the list controller.

This means that the list controller is doing more than one job! No separation of concerns. So we will remove that function from the controller and add that function into our factory, thus allowing all controllers access to that code.

With that code removed from the list controller, the controller looks like this:

<span style="font-weight: 400;">(Notice we haven’t removed the activateQuiz function, just the logic inside it. This is because we will call the function we add to our factory from inside this function in our controller later on)</span>

<pre class="lang:js decode:true" title="The current list controller">function ListController(){
    var vm = this;

    vm.data = turtlesData;
    vm.activeTurtle = {};
    vm.search = "";
    vm.changeActiveTurtle = changeActiveTurtle;
    vm.activateQuiz = activateQuiz;

    function changeActiveTurtle(index){
        vm.activeTurtle = index;
    }

    function activateQuiz(){
        // Fix this further down the tutorial
    }
}</pre>

Now let’s add that function that we removed from the controller into the factory. To keep things more general (and maybe help us down the road) we will call the function in the factory changeState.

<pre class="lang:js decode:true">(function(){

    angular
        .module("turtleFacts")
        .factory("quizMetrics", QuizMetrics);

    function QuizMetrics(){

        var quizObj = {
            quizActive: false,
            changeState: changeState
        };

        return quizObj;

        function changeState(state){
            quizObj.quizActive = state;
        }
    }
}</pre>

### Wait! That Looks Weird!

<span style="font-weight: 400;">Now, you may notice a few things with that above snippet from our factory. Number one, we are again using named functions instead of inline anonymous functions. Again, this keeps things more explicit. </span>

But the second thing you may notice, especially if you are used to more traditional <a href="https://hungryturtlecode.com/best-programming-languages-to-learn-2016/" target="_blank">programming languages</a> like C, is that we are declaring our functions at the bottom, below the return statement. This would be invalid code in many languages. So why do we do it here?

First of all, <a href="https://hungryturtlecode.com/tutorials/javascript-tuts/" target="_blank">JavaScript</a> allows this syntax due to a concept called hoisting, which I won’t go into now. Just know that the code is valid. Secondly, because it is valid code, we do it this way to make things easier to read. To separate out the interface and the implementation.

<span style="font-weight: 400;">So when you first see this factory, you will straight away see the object that is being returned. At a quick glance you can know exactly what the code is doing at a high level, without having to dig into the actual implementation. It just makes it easier for us developers to read. The computer doesn’t care.</span>

### Back In The Controller

<span style="font-weight: 400;">Inside the activateQuiz function that we left blank earlier we can now call the changeState function that is on our factory and pass it in the value of true. This will set the quizActive to the true state.</span>

<pre class="lang:js decode:true" title="Fixing the activateQuiz funciton">function activateQuiz(){

    // We will create this function on the factory soon
    quizMetrics.changeState(true);
}</pre>

<span style="font-weight: 400;">You may be wondering why we called quizMetrics.changeState and not vm.quizMetrics.changeState.</span>

<span style="font-weight: 400;">The reason for this is that we passed in quizMetrics to the controller, so we still have access to it in it raw form. We just added the used the vm. Syntax to attach all the quizMetrics properties to our view. But it is a secondary source. We should still be using the original factory that was passed in.</span>

### Back To The Future &#8211; Now With Dependency Injection

<span style="font-weight: 400;">We are nearly back to the functionality we had before we started playing around with the factory. The only thing that is left to change is the ng-hide on the list controller html. This is still referencing list.quizActive, which doesn’t exist anymore. </span>

<pre class="lang:xhtml decode:true" title="Ng-Hide on the list markup">&lt;div ng-controller="listCtrl as list" ng-hide="list.quizMetrics.quizActive"&gt;</pre>

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock321850">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

## Dependency Injection For The Quiz Controller

<span style="font-weight: 400;">Now we inject the factory into our quiz controller in the exact same way as we did with the list controller. The quiz controller script will look something like this:</span>

<pre class="lang:js decode:true">(function(){

    angular
        .module("turtleFacts")
        .controller("quizCtrl", QuizController);

    QuizController.$inject = ['quizMetrics'];

    function QuizController(quizMetrics){

        var vm = this;

        vm.quizMetrics = quizMetrics;

    }

})();</pre>

Now we have access to the factory properties &#8211; including the quizActive property. We can now use this in an ng-show to show the quiz controller markup whenever the start quiz button is pressed.

<pre class="lang:xhtml decode:true " title="Ng-Show On The Quiz Markup">&lt;div ng-controller="quizCtrl as quiz" ng-show="quiz.quizMetrics.quizActive"&gt;</pre>

### Onwards To Part 9

We are now well on our way to creating this full application. In the [next part](https://hungryturtlecode.com/code-projects/angular-quiz-app/9-angular-factories/) we will look at how we can separate the concerns out even further using the knowledge we now have. This will lead us nicely into creating the markup to display the questions in the quiz.

I will see you in [part 9.](https://hungryturtlecode.com/code-projects/angular-quiz-app/9-angular-factories/)

Adrian

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
  <em>You are here</em>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/9-angular-factories/">Let&#8217;s Build A Factory</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/10-ng-class/">The ng-class directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/11-bootstrap-well/">More Bootstrap Markup &#8211; The Well</a>
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
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/19-angular-dependency-injection/">More dependency inj</a>.
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
