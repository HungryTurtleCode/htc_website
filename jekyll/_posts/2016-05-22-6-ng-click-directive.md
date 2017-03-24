---
title: 'AngularJS Quiz App Tutorial Part 6 - Ng-click and ng-show directives'
date: 2016-05-22T20:18:56+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/6-ng-click-directive/
head-title: Part 6 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932292/Angular-quiz-part-6_njlvtc.jpg
excerpt: Ng-Click Directive And Ng-Show / Ng-Hide We’re nearly in a position to move away from our list controller and start building out the quiz controller. But before we can do that we need to create the “start quiz” button, which …
loop: false

course-index: angular-quiz
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
fbimg: /assets/ng-quiz-app-fb.jpg
twitterimg: /assets/ng-quiz-app-twitter.jpg
googleplusimg: /assets/ng-quiz-app-fb.jpg
---
## Ng-Click Directive And Ng-Show / Ng-Hide

We&#8217;re nearly in a position to move away from our list controller and start building out the quiz controller. But before we can do that we need to create the “start quiz” button, which is what we will tackle first. We will then use the ng-click directive to control functionality when the button is clicked.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

### Video Or Text Tutorial?

Take your pick. You can watch the video below or you can read through this article to get the same information.

{% include video-embed.html videoID="ZKbPtYYbSOg" %}

[The next part can be found here]({{site.baseurl}}/projects/7-angular-services/)

As you can see from the [example application]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_--> in the video the button is on the right hand side of the grey area where are search bar is. This is part of the same form in the HTML. So we will start by creating a button with some bootstrap classes to pull it to the right.

![start quiz button](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464629514/start_quiz_button_te7jts.jpg){: class="aligncenter" width="800" height="148"}

{% highlight html linenos%}
<form class="form-inline well well-sm clearfix">
  <span class="glyphicon glyphicon-search"></span>
  <input 
      type="text" 
      placeholder="Search..." 
      class="form-control"
      ng-model="list.search">

  <button class="btn btn-warning pull-right">
    <strong>Start Quiz</strong>
  </button>
</form>
{% endhighlight %}

### Showing And Hiding HTML elements with Angular

Now that we actually have the button we needed to do something. When we click the button we want our turtle list markup to disappear and be replaced with the quiz. To do this we will utilise a partnership between the ng-click directive and [ng-hide](https://docs.angularjs.org/api/ng/directive/ngHide){: target="_blank"}<!--_-->.

Both of these are new directives but they&#8217;re also pretty self explanatory. We will first focus on the ng-show and ng-hide directives.

Ng-hide will accept a [boolean](https://en.wikipedia.org/wiki/Boolean_data_type){: target="_blank"}<!--_--> or an expression that evaluates to a boolean. If this boolean is true then that element will hide and if it&#8217;s false the element will show. <a href="https://docs.angularjs.org/api/ng/directive/ngShow" target="_blank">Ng-show</a> is another similar directive that is the exact opposite of ng-hide. Either can be used but they tend to both be useful to keep things more semantically explicit.

The boolean that we will use to hide the list controller markup, as well as showing the quiz controller markup (using ng-hide and ng-show respectively) will be a property on our controllers which we will call quizActive.

We will add the following code to our list controller.

{% highlight javascript linenos%}
function ListController(){
  var vm = this;

  vm.data = turtlesData;
  vm.activeTurtle = {};
  vm.search = "";
  
  //Set to false initially so the list shows when the app loads
  vm.quizActive = false;

  vm.changeActiveTurtle = changeActiveTurtle;

  function changeActiveTurtle(index){
    vm.activeTurtle = index;
  }
}
{% endhighlight %}

Property is initially set to false as when the application loads the quiz is not active and we want the list controller to display. For this reason we can use ng-hide on our list controller div and it will display when the application first loads just like we want (because quizActive is false, so it does not hide the div).

We can add the ng-hide directive to our list controller markup like so.

{% highlight html linenos%}
<div ng-controller="listCtrl as list" ng-hide="list.quizActive">
{% endhighlight %}

### But Nothing Happens When I Click The Button!

We can now show and hide the list controller markup (or any html elements for that matter) using Angular. But now we want to programmatically hide the list controller when we click the start quiz button.

This is achieved using the ng-click directive to trigger a function on our controller that will change the quizActive property. Inside the quotes of the ng-click directive we will add the name of a function or literal expression (in our case a function name) that will run when that HTML element is clicked.

{% highlight html linenos%}
<button class="btn btn-warning pull-right"
        ng-click="list.activateQuiz()">
            <strong>Start Quiz</strong>
</button>
{% endhighlight %}

Now we need to create the activateQuiz function. We will do this in the same way that we have created a function in the past &#8211; by initialising and named function inside or controller.

The activateQuiz function will be extremely simple as all we need to do is set the quizActive property to true.

{% highlight javascript linenos%}
vm.activateQuiz = activateQuiz;

function activateQuiz(){
  vm.quizActive = true;
}
{% endhighlight %}

### Moving On To Part 7

In [part 7]({{site.baseurl}}/projects/7-angular-services/) of this series we will start diving deeper into Angular. We will be thinking about the problems that arise when we are trying to share information across controllers (the quizActive state between the list controller and the quiz controller).

Of course, we will solve these problems and introduce some new Angular features in the process &#8211; Services. We will also be kicking things off with our quiz controller. So lot&#8217;s to look forward to.

See you over there in [part 7]({{site.baseurl}}/projects/7-angular-services/).

Adrian

### Check Out The Whole Course Index

{% include course-index.html %}

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
