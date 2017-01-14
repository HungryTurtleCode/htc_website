---
title: AngularJS Quiz App Tutorial Part 24 – The Finished App
date: 2016-05-22T19:42:30+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/24-finished-angular-project/
head-title: Part 24 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932403/Angular-quiz-part-24_l0q3sc.jpg
excerpt: We Have Made It To The End, Friends There is only one small thing that we still have left to do before you have your finished Angular project. That feature is just adding a button that will take us back …
categories:
  - Basic Angular Quiz App
---
## We Have Made It To The End, Friends

There is only one small thing that we still have left to do before you have your finished Angular [project]({{site.url}}/code-projects/){: target="_blank"}<!--_-->. That feature is just adding a button that will take us back to the start &#8211; the list page.

**If you want to see the app for yourself,** [check it out here]({{site.url}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="EEOMwWO0lhg" %}

Right underneath the well that holds the questions we will add a large button to take the user back to the facts page. This button will have an ng-click that will call a function that will reset all the data in the application and allow the user to repeat the quiz again without any of the data from their first attempt interfering.

![go back to facts button](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464632017/go_back_to_facts_button_jbyhci.jpg){: class="aligncenter" width="800" height="435"}

{% highlight html linenos%}
<button class="btn btn-primary btn-lg" ng-click="results.reset()">
  Go Back To Facts
</button>
{% endhighlight %}

Now create the reset function. This function will change the results state back to false and reset the numCorrect property to zero (this is to stop interference on subsequent attempts at the quiz). Then we want to loop through all the questions in the quiz and reset the correct and selected properties back to null.

{% highlight javascript linenos%}
function reset(){

  quizMetrics.changeState("results", false);
  quizMetrics.numCorrect = 0;

  for(var i = 0; i < DataService.quizQuestions.length; i++){
    var data = DataService.quizQuestions[i]; //binding the current question to data to keep code clean

    data.selected = null;
    data.correct = null;
  }
}
{% endhighlight %}

## Yay! A Finished Angular Project!

Well done! You have completed an [Angular Project]({{site.url}}/code-projects/javascript-projects/angularjs/){: target="_blank"}<!--_-->. If this is the first one you have ever made then extra congratulations to you. You have made a huge step; a step that many “developers” never make. They remain armchair developers and don’t actually write code. Which is no way to improve.

I really hope that you have enjoyed this series and that you have learnt a bit about Angular and see just how useful it can be. If you apply some of the knowledge learnt here to one of your own projects I would love to hear about it. Get hold of me via the contact me page on the site or on facebook or twitter.

I look forward to creating many more courses for you in the future and hopefully we can continue to learn from and inspire each other into the future.

If you haven’t already, sign up to my email newsletter where I will keep you up to data with general news in the developer world as well as keep you up to date with all my latest projects, courses and tutorials. Also I would greatly appreciate if you could hit the subscribe button above to subscribe to my youtube channel. I love and appreciate everyone’s ongoing support.

Until my next course, why not check out some of the other content that I have created on the site.

Stay hungry, and keep coding!

Adrian

### Check Out The Whole Course Index

1. [Getting Started]({{site.url}}/code-projects/1-build-angular-quiz-app-scratch/)
2. [Ng-Controller Directive and the (mis)use of $scope]({{site.url}}/code-projects/angular-quiz-app/2-ng-controller-scope/)
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
24. *You Are Here*


Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
