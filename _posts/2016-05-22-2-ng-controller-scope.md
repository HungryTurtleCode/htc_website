---
title: 'AngularJS Quiz App Tutorial Part 2 &#8211; Controller Properties and $scope'
date: 2016-05-22T20:25:51+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/2-ng-controller-scope/
head-title: Part 2 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932261/Angular-quiz-part-2_j1jjhy.jpg
excerpt: Using An Angular Controller To Add Content In the last part we wrote our first bits of Angular code. One of those bits was the code that instantiates the controller for our list view. In this part we will take …
categories:
  - Basic Angular Quiz App
---
## Using An Angular Controller To Add Content

In the [last part](/1-build-angular-quiz-app-scratch) we wrote our first bits of <a href="https://docs.angularjs.org/api" target="_blank">Angular</a> code. One of those bits was the code that instantiates the controller for our list view. In this part we will take that Angular <a href="https://docs.angularjs.org/api/ng/directive/ngController" target="_blank">Controller</a> <!--more-->and use it to dynamically insert data into our HTML. This gives us great control over the content that is on our page.

As the saying goes, there are many ways to skin a cat. What that means for us now is that there is more than one way that we can create properties on our controller and insert that data into our HTML.

In this article I will explain the two main methods of doing this and the pros and cons of both. I will of course also tell you which method I prefer and why.

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.

## Angular Controller Video Tutorial

As always, the more visually inclined can just watch this video and you will receive all the same information as you would from the article. If you prefer to read just scroll down past the video.

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631043/AngularJS-Turtle-Quiz-App-2_ugllz2.webp);">
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

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/3-ng-repeat-directive/)

## Method 1: $scope Service

The first method and the most commonly used method in beginners tutorials is using an Angular Service (more on what these are later in the course) call <a href="https://docs.angularjs.org/guide/scope" target="_blank">$scope</a>. Although it is the most common, in my opinion it is not the best method. But I will explain it anyway.

We start off inside the list controller that we created in the previous tutorial and into the function we pass <span class="lang:default decode:true crayon-inline ">$scope</span> . We can view $scope as simply an object that we are passing into our function. We can then attach properties onto that object and have access to those properties in our HTML.

So for example we could attach a property called &#8220;dummyData&#8221; onto $scope like this:

<pre class="lang:js decode:true" title="$scope syntax">function ListController($scope){
    $scope.dummyData = "Hello  World";
}</pre>

Heading back into the HTML we could use that wonderful {{}} syntax to grab hold of that property like this:

<pre class="lang:xhtml decode:true" title="Binding to our dummyData">&lt;div ng-controller="listCtrl"&gt;
    {{dummyData}}
&lt;/div&gt;</pre>

This will display the text &#8220;Hello World&#8221; out inside the div. Fantastic.

### The Problems With $scope.

This approach is fine in smaller applications but as your applications grow just having bindings to a property like &#8220;dummyData&#8221; may get confusing. Especially if you have a property called dummyData inside more than one of your controllers, all of which have a different value.

This lack of explicit declaration of the data you are using can become a problem. I prefer to make everything explicit and immediately obvious what I am trying to do.

This is where the next method of doing this comes in.

## Method 2: Controller As Syntax

The next method removes the $scope from our function and instead we bind our properties onto the &#8220;<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this" target="_blank">this</a>&#8221; object inside our function.

To make this easier I usually set &#8220;this&#8221; equal to a variable at the start of the function and use that variable throughout. This saves some potential confusion later on.

<pre class="lang:js decode:true" title="Controller As Syntax">function ListController(){
    var vm = this;

    vm.dummyData = "Hello World";
}</pre>

I used the variable name &#8220;vm&#8221; which simply stands for &#8220;view model&#8221;. We are attaching these properties onto the view model &#8211; the view being our HTML.

We then attached that same dummyData property onto vm like we did with $scope earlier.

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
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock615868">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

### Our Code Is Broken!

If you now try to render the HTML using this controller code you will find the code no longer works. This is because we have to make a few changes in our HTML. This is where the name of the &#8220;Controller As&#8221; syntax will become apparent.

We need to make a few small changes. The first of which is changing <span class="lang:xhtml decode:true crayon-inline">ng-controller=&#8221;listCtrl&#8221;</span>  to <span class="lang:xhtml decode:true crayon-inline">ng-controller=&#8221;listCtrl as list&#8221;</span> .

What we are doing here is creating an alias for our controller. Notice is is the name of the controller as before, then &#8220;as list&#8221;. So we are referring to our controller as list. In other words, when we use the name &#8220;list&#8221;, Angular will know we are referring to the listCtrl controller.

Now inside the {{}} we can refer to the exact controller which the dummyData property is on:

<pre class="lang:xhtml decode:true">&lt;div ng-controller="listCtrl as list"&gt;
    {{list.dummyData}}
&lt;/div&gt;</pre>

Ahhhh! Yes! Everything is explicit now. No more potential confusion. When we see list.dummyData there is no doubt at all as to where the dummyData property is coming from. Just how we like it.

## Which To Use?

Ultimately It does not really matter which of these methods you use. Just pick one and be consistent with it. Consistency is the key when you are coding, especially if you are working in teams.

However, if I was to recommend a method to use, I would definitely recommend going with the controller as syntax. It may be a bit more typing in the short term, but it will save you a lot of headaches in the future.

### Onwards to Part 3

In [part 3](/code-projects/angular-quiz-app/3-ng-repeat-directive) we will be taking a look at another directive within Angular &#8211; ng-repeat. We will be using that to start building the markup for the list of turtles.

See you over [there](/code-projects/angular-quiz-app/3-ng-repeat-directive).

Adrian

&nbsp;

### Check Out The Whole Course Index

<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/">Getting Started</a>
</li>
<li style="font-weight: 400;">
  <em>You are here</em>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/3-ng-repeat-directive/">Looping around with the ng-repeat directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/4-bootstrap-modal/">Markup for the bootstrap modal</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/5-angular-filters/">Using Angular Filters to create real time search</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/6-ng-click-directive/">The powerful ng-click directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/7-angular-services/">Services in Angular Make everything easier</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/8-dependency-injection/">What is this infamous dependency injection in Angular?</a>
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
