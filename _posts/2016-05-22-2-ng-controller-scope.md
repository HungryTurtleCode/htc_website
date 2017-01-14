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

In the [last part](/1-build-angular-quiz-app-scratch) we wrote our first bits of [Angular](https://docs.angularjs.org/api){: target="_blank"}<!--_--> code. One of those bits was the code that instantiates the controller for our list view. In this part we will take that Angular [Controller](https://docs.angularjs.org/api/ng/directive/ngController){: target="_blank"}<!--_--> <!--more-->and use it to dynamically insert data into our HTML. This gives us great control over the content that is on our page.

As the saying goes, there are many ways to skin a cat. What that means for us now is that there is more than one way that we can create properties on our controller and insert that data into our HTML.

In this article I will explain the two main methods of doing this and the pros and cons of both. I will of course also tell you which method I prefer and why.

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

## Angular Controller Video Tutorial

As always, the more visually inclined can just watch this video and you will receive all the same information as you would from the article. If you prefer to read just scroll down past the video.

{% include video-embed.html videoID="mCDI3ZH3E58" %}

[The next part can be found here]({{site.url}}/code-projects/angular-quiz-app/3-ng-repeat-directive/)

## Method 1: $scope Service

The first method and the most commonly used method in beginners tutorials is using an Angular Service (more on what these are later in the course) call [$scope](https://docs.angularjs.org/guide/scope){: target="_blank"}<!--_-->. Although it is the most common, in my opinion it is not the best method. But I will explain it anyway.

We start off inside the list controller that we created in the previous tutorial and into the function we pass <span class="lang:default decode:true crayon-inline ">$scope</span> . We can view $scope as simply an object that we are passing into our function. We can then attach properties onto that object and have access to those properties in our HTML.

So for example we could attach a property called &#8220;dummyData&#8221; onto $scope like this:

{% highlight javascript linenos%}
function ListController($scope){
  $scope.dummyData = "Hello  World";
}
{% endhighlight %}

Heading back into the HTML we could use that wonderful {{}} syntax to grab hold of that property like this:

{% highlight html linenos%}
<div ng-controller="listCtrl">
  {{dummyData}}
</div>
{% endhighlight %}

This will display the text &#8220;Hello World&#8221; out inside the div. Fantastic.

### The Problems With $scope.

This approach is fine in smaller applications but as your applications grow just having bindings to a property like &#8220;dummyData&#8221; may get confusing. Especially if you have a property called dummyData inside more than one of your controllers, all of which have a different value.

This lack of explicit declaration of the data you are using can become a problem. I prefer to make everything explicit and immediately obvious what I am trying to do.

This is where the next method of doing this comes in.

## Method 2: Controller As Syntax

The next method removes the $scope from our function and instead we bind our properties onto the &#8220;[this](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this){: target="_blank"}<!--_-->&#8221; object inside our function.

To make this easier I usually set &#8220;this&#8221; equal to a variable at the start of the function and use that variable throughout. This saves some potential confusion later on.

{% highlight javascript linenos%}
function ListController(){
  var vm = this;
  vm.dummyData = "Hello World";
}
{% endhighlight %}

I used the variable name &#8220;vm&#8221; which simply stands for &#8220;view model&#8221;. We are attaching these properties onto the view model &#8211; the view being our HTML.

We then attached that same dummyData property onto vm like we did with $scope earlier.

### Our Code Is Broken!

If you now try to render the HTML using this controller code you will find the code no longer works. This is because we have to make a few changes in our HTML. This is where the name of the &#8220;Controller As&#8221; syntax will become apparent.

We need to make a few small changes. The first of which is changing <span class="lang:xhtml decode:true crayon-inline">ng-controller=&#8221;listCtrl&#8221;</span>  to <span class="lang:xhtml decode:true crayon-inline">ng-controller=&#8221;listCtrl as list&#8221;</span> .

What we are doing here is creating an alias for our controller. Notice is is the name of the controller as before, then &#8220;as list&#8221;. So we are referring to our controller as list. In other words, when we use the name &#8220;list&#8221;, Angular will know we are referring to the listCtrl controller.

Now inside the {{}} we can refer to the exact controller which the dummyData property is on:

{% highlight html linenos%}
<div ng-controller="listCtrl as list">
  {{list.dummyData}}
</div>
{% endhighlight %}

Ahhhh! Yes! Everything is explicit now. No more potential confusion. When we see list.dummyData there is no doubt at all as to where the dummyData property is coming from. Just how we like it.

## Which To Use?

Ultimately It does not really matter which of these methods you use. Just pick one and be consistent with it. Consistency is the key when you are coding, especially if you are working in teams.

However, if I was to recommend a method to use, I would definitely recommend going with the controller as syntax. It may be a bit more typing in the short term, but it will save you a lot of headaches in the future.

### Onwards to Part 3

In [part 3](/code-projects/angular-quiz-app/3-ng-repeat-directive) we will be taking a look at another directive within Angular &#8211; ng-repeat. We will be using that to start building the markup for the list of turtles.

See you over [there](/code-projects/angular-quiz-app/3-ng-repeat-directive).

Adrian



### Check Out The Whole Course Index

1. [Getting Started]({{site.url}}/code-projects/1-build-angular-quiz-app-scratch/)
2. *You Are Here*
3. [Looping around with the ng-repeat directive]({{site.url}}/code-projects/angular-quiz-app/3-ng-repeat-directive/)
4. [Markup for the bootstrap modal]({{site.url}}/code-projects/angular-quiz-app/4-bootstrap-modal/)
5. [Using Angular Filters to create real time search]({{site.url}}/code-projects/angular-quiz-app/5-angular-filters/)
6. [The powerful ng-click directive]({{site.url}}/code-projects/angular-quiz-app/6-ng-click-directive/)
7. [Services in Angular Make everything easier]({{site.url}}/code-projects/angular-quiz-app/7-angular-services/)
8. [What is this infamous dependency injection in Angular?]({{site.url}}/code-projects/angular-quiz-app/8-dependency-injection/)
9. [Let&#8217;s Build A Factory]({{site.url}}/code-projects/angular-quiz-app/9-angular-factories/)
10. [The ng-class directive]({{site.url}}/code-projects/angular-quiz-app/10-ng-class/)
11. [More Bootstrap Markup &#8211; The Well]({{site.url}}/code-projects/angular-quiz-app/11-bootstrap-well/)
12. [Adding some logic to the controller]({{site.url}}/code-projects/angular-quiz-app/12-controller-logic/)
13. [Making things disappear with ng-if]({{site.url}}/code-projects/angular-quiz-app/13-ng-if/)
14. [The $index property for ng-repeat]({{site.url}}/code-projects/angular-quiz-app/14-index-for-ng-repeat/)
15. [Reusing code is always a good idea]({{site.url}}/code-projects/angular-quiz-app/15-reusing-code/)
16. [Using Bootstrap to help with styling error messages]({{site.url}}/code-projects/angular-quiz-app/16-bootstrap-alerts/)
17. [The final prompt after the quiz]({{site.url}}/code-projects/angular-quiz-app/17-final-prompt/)
18. [Marking the quiz]({{site.url}}/code-projects/angular-quiz-app/18-marking-the-quiz/)
19. [More dependency injection]({{site.url}}/code-projects/angular-quiz-app/19-angular-dependency-injection/)
20. [Reusing and slightly modifying some previous Bootstrap]({{site.url}}/code-projects/angular-quiz-app/20-familiar-bootstrap/)
21. [More than one way to use ng-class]({{site.url}}/code-projects/angular-quiz-app/21-function-with-ng-class/)
22. [Another Angular Filter]({{site.url}}/code-projects/angular-quiz-app/22-angular-number-filter/)
23. [More usage of Ng-if]({{site.url}}/code-projects/angular-quiz-app/23-angular-ng-if/)
24. [Finishing The App]({{site.url}}/code-projects/angular-quiz-app/24-finished-angular-project/)


Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
