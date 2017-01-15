---
title: 'AngularJS Quiz App Tutorial Part 5 &#8211; Ng-model and Angular Filters'
date: 2016-05-22T20:24:08+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/5-angular-filters/
head-title: Part 5 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932282/Angular-quiz-part-5_qjajqt.jpg
excerpt: Angular Filters Create A Magic Search! Ok, enough playing around, let’s really dig into the power of AngularJS. Creating search functionality from scratch can be notoriously hard, but in this tutorial we will see how easy it is to create …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## Angular Filters Create A Magic Search!

Ok, enough playing around, let&#8217;s really dig into the power of AngularJS. Creating search functionality from scratch can be notoriously hard, but in this tutorial we will see how easy it is to create an automatically updating search feature using Angular [filters.](https://docs.angularjs.org/guide/filter){: target="_blank"}<!--_-->

Using Angular filters in this way is definitely one of my favourite features of AngularJS. It makes seemingly difficult tasks so easy and straight forward to do.

If you want to take a look at this search functionality in action, it can be seen in the video below or [check out the app here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->. As always this video is exactly the same as this article just to give you some options of how you want your information.

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

### Video Killed The Radio Stars

{% include video-embed.html videoID="zisGjJySdLA" %}

[The next part can be found here]({{site.baseurl}}/projects/6-ng-click-directive/)

Getting straight into it, will start off by creating an HTML form which will style with some bootstrap classes. We will add this code right at the top of the HTML markup for our list controller, as we want the search form to be at the top of the page.

![search area with bootstrap well](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464629293/search_area_fo9mpa.jpg){: class="aligncenter" width="800" height="191"}

This area is the whole grey box at the top of the page that will contain the search box as well as the start quiz button that we will create later. Right now we will focus on creating the search box by adding the icon and the text input area. The icon will be a [gylphicon](http://getbootstrap.com/components/){: target="_blank"}<!--_--> which comes bundled with Bootstrap these days.

{% highlight html linenos%}
<form class="form-inline well well-sm clearfix">
  <span class="glyphicon glyphicon-search"></span>
  <input 
      type="text" 
      placeholder="Search..." 
      class="form-control">
</form>
{% endhighlight %}

The form control class we used on the input is another bootstrap class just to let bootstrap know what this input is doing.

## Ng-Model Directive

Now that we have the markup done we can start creating the magic of the search functionality. To start this, we&#8217;re going to introduce a new directive &#8211; [ng-model](https://docs.angularjs.org/api/ng/directive/ngModel){: target="_blank"}<!--_-->

What ng-model does it allows us to bind an input on our page directly to a property on the view model. Remember we used the alias &#8220;vm&#8221; in our controller for the properties that the view model has access to.

So now if we create a property inside the controller and attach it on to the view model we can use ng-model to bind that directly to our input. This means that if we programmatically change the property inside the controller it will automatically update the input and vice versa.

{% highlight javascript linenos%}
function ListController(){
  var vm = this;

  vm.data = turtlesData;
  vm.activeTurtle = {}; 

  // Adding the Search property to be used in the ng-model
  vm.search = "";

  vm.changeActiveTurtle = changeActiveTurtle;

  function changeActiveTurtle(index){
    vm.activeTurtle = index;
  }
}
{% endhighlight %}

Here we created a property called &#8220;search&#8221; which would just be a string that contains the text the user is searching for. Which of course, is set to an empty string initially. Now let&#8217;s add the ng-model directive on to our input and bind to the search property.

{% highlight html linenos%}
<form class="form-inline well well-sm clearfix">
  <span class="glyphicon glyphicon-search"></span>
  <input 
      type="text" 
      placeholder="Search..." 
      class="form-control"
      ng-model="list.search">
</form>
{% endhighlight %}

## Using The Search Property With Angular Filters

If you&#8217;re used to using Unix command line  commands then you might be used to using the pipe symbol | to quite literally “pipe” the output of one command into the input of another. This is how Angular filters work.

We want to filter the output of the ng-repeat which is what constructs the entire list of turtles. So inside the quotes of our ng-repeat where it says “turtle in list.data” we had the pipe symbol at the end and then add the filters we want.

There are many filters that are included with Angular and you can also make your own if you want to. But the filter that we&#8217;re concerned with for the search functionality is called “filter” &#8211; the filter filter.

We will also be taking a look at other filters like the number filter later on this course.

The way filters work in angular is you specify the name of the filter you want to use, then a colon, followed by any argument she want to give the filter. In this case the argument we want to give the filter filter is the text that the user is searching for.

{% highlight html linenos%}
<div class="col-sm-6" ng-repeat="turtle in list.data | filter:list.search">
{% endhighlight %}

### How Is This Working?

This is a good illustration of the dynamic nature of AngularJS. I mentioned earlier the ng-repeat directive works something similar to a for loop in normal programming languages. But as you can see hear this is not quite right.

In a programming language, when a for loop is finished running that’s it. The ng-repeat and all other directives are constantly updating when you inputs are given.

This is us to use the filter in real time. When we type something into the input comma updates search property in our controller which is what is filtering the ng-repeat. Because this is now changed the ng-repeat will run again and repopulate the list with only entries that satisfy the filter. In other words only with Turtle Data that contain the search term.

### Moving On To Part 6

Our list of turtles is really taking shape now! In the [next part]({{site.baseurl}}/projects/6-ng-click-directive/) we will add the final touches which will been allowed to start building the quiz controller.

So I&#8217;ll see you over there in [part 6]({{site.baseurl}}/projects/6-ng-click-directive/).

Adrian


### Check Out The Whole Course Index

1. [Getting Started]({{site.baseurl}}/projects/1-build-angular-quiz-app-scratch/)
2. [Ng-Controller Directive and the (mis)use of $scope]({{site.baseurl}}/projects/2-ng-controller-scope/)
3. [Looping around with the ng-repeat directive]({{site.baseurl}}/projects/3-ng-repeat-directive/)
4. [Markup for the bootstrap modal]({{site.baseurl}}/projects/4-bootstrap-modal/)
5. *You Are Here*
6. [The powerful ng-click directive]({{site.baseurl}}/projects/6-ng-click-directive/)
7. [Services in Angular Make everything easier]({{site.baseurl}}/projects/7-angular-services/)
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
