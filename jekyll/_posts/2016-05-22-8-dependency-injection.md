---
title: 'AngularJS Quiz App Tutorial Part 8 - Dependency Injection'
date: 2016-05-22T20:18:46+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/8-dependency-injection/
head-title: Part 8 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932306/Angular-quiz-part-8_imuigb.jpg
excerpt: Make The Factory Useful – Dependency Injection It is no use to us to have a factory if we cannot use it inside our controller. In this part we will inject the factory into the list controller so we can …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## Make The Factory Useful &#8211; Dependency Injection

It is no use to us to have a factory if we cannot use it inside our controller. In this part we will inject the factory into the list controller so we can use it. Then we will refactor the list controller to remove the now redundant quizActive code. Let&#8217;s dive into [some dependency injection](https://docs.angularjs.org/guide/di){: target="_blank"}<!--_-->.

**If you want to see the app for yourself,** [check it out here.]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

### You Know The Drill.

Watch the video, or read the article. Or both.

{% include video-embed.html videoID="txzLabEIP_w" %}

[The next part can be found here.]({{site.baseurl}}/projects/9-angular-factories/)

First things first, injecting the factory into the controller. To do this we will make use of an Angular method called $inject. This is an explicit way for us to inject any dependencies into our controllers.

{% highlight javascript linenos%}
(function(){

  angular
    .module("turtleFacts")
    .controller("listCtrl", ListController);

  ListController.$inject = ['quizMetrics'];

  // Rest of code left out to keep this snippet clean

})();
{% endhighlight %}

As you can see, with $inject we call it and set it equal to an array. Inside this array we just list all the dependencies in standard array syntax.

We are not done quite yet. We now need to pass that factory that we injected, into our controller function as an argument. This allows us to then bind to the properties on the factory like we would with any other properties.

{% highlight javascript linenos%}
(function(){

  angular
    .module("turtleFacts")
    .controller("listCtrl", ListController);

  ListController.$inject = ['quizMetrics'];

  function ListController(quizMetrics){
    var vm = this;

    vm.quizMetrics = quizMetrics;

    // Rest of Controller code
  }

})();
{% endhighlight %}

We have given the view model (ie. the html) access to all properties on the factory object by creating a property on the controller using the vm. Syntax and setting it equal to the factory object.

### Getting Rid Of The Redundant Code

We now have access to the quizActive property on the factory but also have a quizActive property inside the controller. This is now redundant so we shall remove it.

There is also a function in the controller called activateQuiz. But isn’t this logic part of the general logic for the quiz? It is not specifically for the list controller.

This means that the list controller is doing more than one job! No separation of concerns. So we will remove that function from the controller and add that function into our factory, thus allowing all controllers access to that code.

With that code removed from the list controller, the controller looks like this:

(Notice we haven’t removed the activateQuiz function, just the logic inside it. This is because we will call the function we add to our factory from inside this function in our controller later on)

{% highlight javascript linenos%}
function ListController(){
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
}
{% endhighlight %}

Now let’s add that function that we removed from the controller into the factory. To keep things more general (and maybe help us down the road) we will call the function in the factory changeState.

{% highlight javascript linenos%}
(function(){

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
}
{% endhighlight %}

### Wait! That Looks Weird!

Now, you may notice a few things with that above snippet from our factory. Number one, we are again using named functions instead of inline anonymous functions. Again, this keeps things more explicit.

But the second thing you may notice, especially if you are used to more traditional [programming languages]({{site.baseurl}}/best-programming-languages-to-learn-2016/){: target="_blank"}<!--_--> like C, is that we are declaring our functions at the bottom, below the return statement. This would be invalid code in many languages. So why do we do it here?

First of all, [JavaScript]({{site.baseurl}}/tags/javascript/){: target="_blank"}<!--_--> allows this syntax due to a concept called hoisting, which I won’t go into now. Just know that the code is valid. Secondly, because it is valid code, we do it this way to make things easier to read. To separate out the interface and the implementation.

So when you first see this factory, you will straight away see the object that is being returned. At a quick glance you can know exactly what the code is doing at a high level, without having to dig into the actual implementation. It just makes it easier for us developers to read. The computer doesn’t care.

### Back In The Controller

Inside the activateQuiz function that we left blank earlier we can now call the changeState function that is on our factory and pass it in the value of true. This will set the quizActive to the true state.

{% highlight javascript linenos%}
function activateQuiz(){

  // We will create this function on the factory soon
  quizMetrics.changeState(true);
}
{% endhighlight %}

You may be wondering why we called quizMetrics.changeState and not vm.quizMetrics.changeState.

The reason for this is that we passed in quizMetrics to the controller, so we still have access to it in it raw form. We just added the used the vm. Syntax to attach all the quizMetrics properties to our view. But it is a secondary source. We should still be using the original factory that was passed in.

### Back To The Future &#8211; Now With Dependency Injection

We are nearly back to the functionality we had before we started playing around with the factory. The only thing that is left to change is the ng-hide on the list controller html. This is still referencing list.quizActive, which doesn’t exist anymore.

{% highlight html linenos%}
<div ng-controller="listCtrl as list" ng-hide="list.quizMetrics.quizActive">
{% endhighlight %}

## Dependency Injection For The Quiz Controller

Now we inject the factory into our quiz controller in the exact same way as we did with the list controller. The quiz controller script will look something like this:

{% highlight javascript linenos%}
(function(){

  angular
    .module("turtleFacts")
    .controller("quizCtrl", QuizController);

  QuizController.$inject = ['quizMetrics'];

  function QuizController(quizMetrics){

    var vm = this;

    vm.quizMetrics = quizMetrics;

  }

})();
{% endhighlight %}

Now we have access to the factory properties &#8211; including the quizActive property. We can now use this in an ng-show to show the quiz controller markup whenever the start quiz button is pressed.

{% highlight html linenos%}
<div ng-controller="quizCtrl as quiz" ng-show="quiz.quizMetrics.quizActive">
{% endhighlight %}

### Onwards To Part 9

We are now well on our way to creating this full application. In the [next part]({{site.baseurl}}/projects/9-angular-factories/) we will look at how we can separate the concerns out even further using the knowledge we now have. This will lead us nicely into creating the markup to display the questions in the quiz.

I will see you in [part 9.]({{site.baseurl}}/projects/9-angular-factories/)

Adrian

### Check Out The Whole Course Index

1. [Getting Started]({{site.baseurl}}/projects/1-build-angular-quiz-app-scratch/)
2. [Ng-Controller Directive and the (mis)use of $scope]({{site.baseurl}}/projects/2-ng-controller-scope/)
3. [Looping around with the ng-repeat directive]({{site.baseurl}}/projects/3-ng-repeat-directive/)
4. [Markup for the bootstrap modal]({{site.baseurl}}/projects/4-bootstrap-modal/)
5. [Using Angular Filters to create real time search]({{site.baseurl}}/projects/5-angular-filters/)
6. [The powerful ng-click directive]({{site.baseurl}}/projects/6-ng-click-directive/)
7. [Services in Angular Make everything easier]({{site.baseurl}}/projects/7-angular-services/)
8. *You Are Here*
9. [Let&#8217;s Build A Factory]({{site.baseurl}}/projects/9-angular-factories/)
10. [The ng-class directive]({{site.baseurl}}/projects/10-ng-class/)
11. [More Bootstrap Markup &#8211; The Well]({{site.baseurl}}/projects/11-bootstrap-well/)
12. [Adding some logic to the controller]({{site.baseurl}}/projects/12-controller-logic/)
13. [Making things disappear with ng-if]({{site.baseurl}}/projects/13-ng-if/)
14. [The $index property for ng-repeat]({{site.baseurl}}/projects/14-index-for-ng-repeat/)
15. [Reusing code is always a good idea]({{site.baseurl}}/projects/15-reusing-code/)
16. [Using Bootstrap to help with styling error messages]({{site.baseurl}}/projects/16-bootstrap-alerts/)
17. [The final prompt after the quiz]({{site.baseurl}}/projects/17-final-prompt/)
18. [Marking the quiz]({{site.baseurl}}/projects/18-marking-the-quiz/)
19. [More dependency injection]({{site.baseurl}}/projects/19-angular-dependency-injection/)
20. [Reusing and slightly modifying some previous Bootstrap]({{site.baseurl}}/projects/20-familiar-bootstrap/)
21. [More than one way to use ng-class]({{site.baseurl}}/projects/21-function-with-ng-class/)
22. [Another Angular Filter]({{site.baseurl}}/projects/22-angular-number-filter/)
23. [More usage of Ng-if]({{site.baseurl}}/projects/23-angular-ng-if/)
24. [Finishing The App]({{site.baseurl}}/projects/24-finished-angular-project/)


Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
