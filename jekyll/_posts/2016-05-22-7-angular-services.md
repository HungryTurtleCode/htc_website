---
title: 'AngularJS Quiz App Tutorial Part 7 - Factories and Services'
date: 2016-05-22T20:18:56+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/7-angular-services/
head-title: Part 7 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932298/Angular-quiz-part-7_hy22ev.jpg
excerpt: Angular Services – Serving (Some) Of Your Needs Fully armed with the knowledge on how to hide and show HTML elements, we can now go ahead and create the quiz controller that we will show at the same time that …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
fbimg: /img/ng-quiz-app-fb.jpg
twitterimg: /img/ng-quiz-app-twitter.jpg
googleplusimg: /img/ng-quiz-app-fb.jpg
---
## Angular Services &#8211; Serving (Some) Of Your Needs

Fully armed with the knowledge on how to hide and show HTML elements, we can now go ahead and create the quiz controller that we will show at the same time that we hide the list controller &#8211; when the user clicks the “start quiz” button. Then we can learn about [Angular Services](https://docs.angularjs.org/guide/services){: target="_blank"}<!--_--> and how they solve some problems that may arise.

**If you want to see the app for yourself,** [check it out here.]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

### Pick Your Poison &#8211; Text Or Video

As always, you can read this article or you can watch the video below to get the same information.

{% include video-embed.html videoID="HrbkZO5Mt0g" %}

[The next part can be found here]({{site.baseurl}}/projects/8-dependency-injection/)

Below our list controller markup in the HTML we can create new controller div for our quiz. Just like we did with our list controller we will use the “controller as” syntax.

{% highlight html linenos%}
<div ng-controller="quizCtrl as quiz">
  <!-- Rest of the markup goes here -->
</div>
{% endhighlight %}

Of course, we will add this controller into another [JavaScript]({{site.baseurl}}/tags/javascript/){: target="_blank"}<!--_--> file in our controller directory. So we will need to reference that script in the HTML. So are application scripts at the bottom of our HTML looks like this now.

{% highlight html linenos%}
<script src="js/app.js"></script>
<script src="js/controllers/list.js"></script>
<script src="js/controllers/quiz.js"></script>
{% endhighlight %}

## Let&#8217;s Create Another Angular Controller

To start off the controller, we will use the [immediately invoked function expression](http://stackoverflow.com/questions/8228281/what-is-the-function-construct-in-javascript){: target="_blank"}<!--_--> that we have seen in earlier parts. The rest of the setup will be familiar as well. The only change is the name of the controller that we create.

{% highlight javascript linenos%}
(function(){

  angular
    .module("turtleFacts")
    .controller("quizCtrl", QuizController);

  function QuizController(){

    var vm = this;

  }

})();
{% endhighlight %}

### How Do We Show the Quiz Controller With the Quiz Is Active?

At this point, you may or may not have realised that we are running into a problem. Hiding the list controller was simple, the quizActive flag is on the list controller, so we can manipulate it and then use it for the ng-hide.

However, we want to show the quiz controller at the same time. So ideally, we would use the same quizActive property to do that right? quizActive flicks to true and the ng-hide on the list controller hide the list controller and we use ng-show on the quizController to show that at the same time.

Unfortunately, Angular does not allow controllers to communicate like that. Controllers are totally separate. So we do not have access to the quizActive flag on the list controller when we are inside the quiz controller. So what shall we do?

## Introducing Angular Services

This is where we can use a useful tool in the Angular Toolbox &#8211; [services.](https://docs.angularjs.org/guide/services){: target="_blank"}<!--_--> There are many types of services available in Angular. Too many to cover in this tutorial series. So for now, we will be focusing on one type of service called Factories.

Factories in Angular will allow us to share some data between the controllers &#8211; which is exactly what we want.

A common use case for services like factories in angular would be for example, an application with multiple controllers, all of which need to pull some data from an API. In that case, it would be possible to write the API calls into every controller separately. But this is repeating code and breaking a key rule of code.

Instead, that API logic could be put into a service and all controllers can be given access to that service. Note that a controller wouldn’t automatically have access, you would have to explicitly allow it.

Now, all the controllers can make an API call without having to repeat code. Perfect. This also serves to separate out concerns and ensure that all bits of code are only doing one thing. Added bonus.

Because controllers can share code via a service, it is possible to use the service to contain properties that all the controllers will need access to. This is our use case.

### Get Building Your Factory!

We will create a new directory in our project called factories, which is, of course, where we will store any factories we create. We can then create a new script called quizmetrics.js which will be a factory that holds all data relevant to the general operation of the quiz app that all controllers may need access to.

Again, we use an IIFE to start things off. Then call our turtleFacts module. But this time we call a new method &#8211; .factory. The factory method is much like the controller method in that it accepts two arguments &#8211; the name of the factory and the function that defines the factory.’

{% highlight javascript linenos%}
(function(){

  angular
    .module("turtleFacts")
    .factory("quizMetrics", QuizMetrics);

  function QuizMetrics(){

  }

})();
{% endhighlight %}

### A Brief Aside About How Factories Are Built

A factory does some logic then it returns something. It could be an object, or just a single property or a function or anything. Whatever it returns, is what the controllers that use the function will have access to.

So for our purposes, we will build an object that contains many properties that we will need in our controllers. Then this object is what we will return from the factory and ultimately will be what is shared between the controllers.

We will start creating the object inside the factory by adding the quizActive property that is currently in our list controller. We can then remove it from the list controller once that is done.

{% highlight javascript linenos%}
function QuizMetrics(){

  var quizObj = {
    quizActive = false
  };

  return quizObj;

}
{% endhighlight %}

Don&#8217;t forget to add the script that references the factory to the end of the HTML. I placed the code in js/factories/quizMetrics.js, so that is the source in my HTML script tag.

### On To Part 8

Now that we have the factory roughly built, we can start refactoring the list controller to remove the quizActive property and then inject the factory into the controller so we have access to the property again.

I will see you over there in [part 8.]({{site.baseurl}}/projects/8-dependency-injection/)

Adrian


### Check Out The Whole Course Index

1. [Getting Started]({{site.baseurl}}/projects/1-build-angular-quiz-app-scratch/)
2. [Ng-Controller Directive and the (mis)use of $scope]({{site.baseurl}}/projects/2-ng-controller-scope/)
3. [Looping around with the ng-repeat directive]({{site.baseurl}}/projects/3-ng-repeat-directive/)
4. [Markup for the bootstrap modal]({{site.baseurl}}/projects/4-bootstrap-modal/)
5. [Using Angular Filters to create real time search]({{site.baseurl}}/projects/5-angular-filters/)
6. [The powerful ng-click directive]({{site.baseurl}}/projects/6-ng-click-directive/)
7. *You Are Here*
8. [What is this infamous dependency injection in Angular?]({{site.baseurl}}/projects/8-dependency-injection/)
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
