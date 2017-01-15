---
title: AngularJS Quiz App Tutorial Part 20 – Familiar Bootstrap Markup
date: 2016-05-22T20:15:33+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/20-familiar-bootstrap/
head-title: Part 20 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932383/Angular-quiz-part-20_jtmhg5.jpg
excerpt: Some Really Familiar Bootstrap Markup This lesson isn’t introducing anything new. Infact, you will have seen much of this code before. What we are tackling is the area at the top of the results controller that shows what questions the user …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## Some Really Familiar Bootstrap Markup

This lesson isn’t introducing anything new. Infact, you will have seen much of this code before. What we are tackling is the area at the top of the results controller that shows what questions the user got right and wrong along with a legend. This is very much like the progress area in the quiz controller. Let’s take a look at some familiar bootstrap code.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="AxQcLIRoxYw" %}

[The next part can be found here]({{site.baseurl}}/projects/angular-quiz-app/21-function-with-ng-class/)

I say that it is similar, the markup is almost identical with a few key differences. Mainly the colors used are no longer red and blue but are instead red and green to indicate correct or incorrect. The glyphicons used are also different &#8211; a tick and an x this time.

![results progress area](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631239/results_progress_area_wx6nqj.jpg){: class="aligncenter" width="800" height="187"}

Other than those differences the code is identical. So I will not bore you by explaining every line of the markup. Instead, I will just show you what we have.

{% highlight html linenos%}
<div class="row">
  <div class="col-xs-8">
    <h2>Results:</h2>
    <div class="btn-toolbar">

      <button class="btn"
        ng-repeat="question in results.dataService.quizQuestions"
        ng-class="{'btn-success': question.correct, 'btn-danger': !question.correct}"
        ng-click="results.setActiveQuestion($index)">

          <span class="glyphicon"
            ng-class="{'glyphicon-ok': question.correct, 'glyphicon-remove': !question.correct}"></span>
                 
      </button>
    </div>
  </div>
  <div class="col-xs-4">
    <div class="row">
      <h4>Legend:</h4>
      <div class="col-sm-4">
        <button class="btn btn-success">
          <span class="glyphicon glyphicon-ok"></span>
        </button>
        <p>Correct</p>
      </div>
      <div class="col-sm-4">
        <button class="btn btn-danger">
          <span class="glyphicon glyphicon-remove"></span>
        </button>
        <p>Incorrect</p>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

Note the key differences. We are now using the correct property we set to true or false on every question when we marked the quiz to style the buttons accordingly using ng-class on the button and the glyphicons.

We are referencing question.correct here has question is the alias for the ng-repeat. So each iteration through ng-repeat will be a different question in the quiz.

Also note that we do not have to say something like question.correct == true (although, this would also be valid and provide the output we need) because question.correct is already a boolean value so ng-class can evaluate it straight away. There is no need to add in extra computation when it is not needed.

### The Definition Of Short And Sweet

This lesson really was short. I don’t want to get into the [next part]({{site.baseurl}}/projects/angular-quiz-app/21-function-with-ng-class/) in this article as it will then be way too long. So you will just have to click through to the <a href="{{site.baseurl}}/projects/angular-quiz-app/21-function-with-ng-class/">next part</a> to get all that wonderful goodness there.

See you in [part 21]({{site.baseurl}}/projects/angular-quiz-app/21-function-with-ng-class/)

Adrian

### Check Out The Whole Course Index

1. [Getting Started]({{site.baseurl}}/projects/1-build-angular-quiz-app-scratch/)
2. [Ng-Controller Directive and the (mis)use of $scope]({{site.baseurl}}/projects/angular-quiz-app/2-ng-controller-scope/)
3. [Looping around with the ng-repeat directive]({{site.baseurl}}/projects/angular-quiz-app/3-ng-repeat-directive/)
4. [Markup for the bootstrap modal]({{site.baseurl}}/projects/angular-quiz-app/4-bootstrap-modal/)
5. [Using Angular Filters to create real time search]({{site.baseurl}}/projects/angular-quiz-app/5-angular-filters/)
6. [The powerful ng-click directive]({{site.baseurl}}/projects/angular-quiz-app/6-ng-click-directive/)
7. [Services in Angular Make everything easier]({{site.baseurl}}/projects/angular-quiz-app/7-angular-services/)
8. [What is this infamous dependency injection in Angular?]({{site.baseurl}}/projects/angular-quiz-app/8-dependency-injection/)
9. [Let&#8217;s Build A Factory]({{site.baseurl}}/projects/angular-quiz-app/9-angular-factories/)
10. [The ng-class directive]({{site.baseurl}}/projects/angular-quiz-app/10-ng-class/)
11. [More Bootstrap Markup &#8211; The Well]({{site.baseurl}}/projects/angular-quiz-app/11-bootstrap-well/)
12. [Adding some logic to the controller]({{site.baseurl}}/projects/angular-quiz-app/12-controller-logic/)
13. [Making things disappear with ng-if]({{site.baseurl}}/projects/angular-quiz-app/13-ng-if/)
14. [The $index property for ng-repeat]({{site.baseurl}}/projects/angular-quiz-app/14-index-for-ng-repeat/)
15. [Reusing code is always a good idea]({{site.baseurl}}/projects/angular-quiz-app/15-reusing-code/)
16. [Using Bootstrap to help with styling error messages]({{site.baseurl}}/projects/angular-quiz-app/16-bootstrap-alerts/)
17. [The final prompt after the quiz]({{site.baseurl}}/projects/angular-quiz-app/17-final-prompt/)
18. [Marking the quiz]({{site.baseurl}}/projects/angular-quiz-app/18-marking-the-quiz/)
19. [More dependency injection]({{site.baseurl}}/projects/angular-quiz-app/19-angular-dependency-injection/)
20. *You Are Here*
21. [More than one way to use ng-class]({{site.baseurl}}/projects/angular-quiz-app/21-function-with-ng-class/)
22. [Another Angular Filter]({{site.baseurl}}/projects/angular-quiz-app/22-angular-number-filter/)
23. [More usage of Ng-if]({{site.baseurl}}/projects/angular-quiz-app/23-angular-ng-if/)
24. [Finishing The App]({{site.baseurl}}/projects/angular-quiz-app/24-finished-angular-project/)

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
