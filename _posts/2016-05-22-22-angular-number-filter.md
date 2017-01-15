---
title: AngularJS Quiz App Tutorial Part 22 – Final Functions For RestultsCtrl
date: 2016-05-22T20:14:46+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/22-angular-number-filter/
head-title: Part 22 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932393/Angular-quiz-part-22_zw1ina.jpg
excerpt: Last Two Functions For The ResultsCtrl In this part we will add the final two functions into the results controller. A function that will be similar to the setActiveQuestion in the quiz controller but not nearly as complex and the …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## Last Two Functions For The ResultsCtrl

In this part we will add the final two functions into the results controller. A function that will be similar to the setActiveQuestion in the quiz controller but not nearly as complex and the second function will be to calculate the percentage score the user got in the quiz. We will also briefly discuss another filter &#8211; the [Angular number filter](https://docs.angularjs.org/api/ng/filter/number){: target="_blank"}<!--_-->

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="mWmfEtzGtRY" %}

[The next part can be found here]({{site.baseurl}}/code-projects/angular-quiz-app/23-angular-ng-if/)

![results progress navigation buttons](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631575/results_progress_button_navigation_rppnlx.jpg){: class="aligncenter" width="800" height="224"}

The last thing we said in the last part was that clicking the buttons in the results area does nothing. So here we will create a function that allows the user to click any of those buttons and get taken to the corresponding question to see how they did.

So remember back to when we created the buttons in the results area, we added an ng-click that calls setActiveQuestion. But this of course, isn’t the same as the setActiveQuestion on the quiz controller, it just has the same name. We now need to create this new function.

In the ng-click we gave it an argument of $index, so in the function we will need to take that argument and set the active question to that index. Remember $index is coming from the ng-repeat. So if the user clicks on the 5th button from the left $index will equal 4 (0 index remember), then the function sets the active question to 4, so we see the corresponding data displaying.

{% highlight javascript linenos%}
vm.setActiveQuestion = setActiveQuestion;

function setActiveQuestion(index){

  vm.activeQuestion = index;

}
{% endhighlight %}

You may by now realise that we could get rid of this function and just add the code directly into the ng-click to change activeQuestion to $index. If you did think that, you are perfectly correct and in fact, that way is probably better. I only used the function to expose everyone to as many ways of doing things as possible to really get an idea of how Angular works.

## Calculating User&#8217;s Percentage Score

The final area to add to the results page is the bit in between the buttons and the question which shows the percentage score the user got. In the HTML, between the buttons and question we will add the following HTML markup.

![score and percentage](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631575/percentage_score_area_kbddbv.jpg){: class="aligncenter" width="800" height="316"}

{% highlight html linenos%}{% raw %}
<div class="row">
  <div class="col-xs-12 top-buffer">
      
    <h2>You Scored {{results.quizMetrics.numCorrect}} / {{results.dataService.quizQuestions.length}}</h2>
                
    <h2><strong>{{results.calculatePerc()}}%</strong></h2>

  </div>
</div>
{% endraw %}{% endhighlight %}

Here we make use of the numCorrect property that we created earlier which is incremented in the markQuiz function everytime the user gets an answer correct. We also use the .length method on the quizQuestions object to find the total number of questions in the quiz.

The final thing you will notice is we call a function called calculatePerc. Which is what we will create now.

{% highlight javascript linenos%}
vm.calculatePerc = calculatePerc;

function calculatePerc(){

  return quizMetrics.numCorrect / DataService.quizQuestions.length * 100;

}
{% endhighlight %}

### A Small Caveat &#8211; Angular Number Filter

In this quiz we have 10 questions which will result in the percentage always being a nice whole number. But if you have a different number of questions, you may end up with a percentage that has many decimal places. This can look bad and you should keep that under control.

There is another [Angular Filter](https://docs.angularjs.org/api/ng/filter/number){: target="_blank"}<!--_--> that will allow you to filter the number down to a certain number of decimal places. This would be how to do that:>

{% highlight html linenos%}{% raw %}
<h2><strong>{{results.calculatePerc() | number:2}}%</strong></h2>
{% endraw %}{% endhighlight %}

The standard \| is used to tell Angular we are going to use a filter and the filter we use is called number. The a colon followed by the arguments for the filter. In this case, the only argument is the number of decimal places that you want to display.

### Only Two Tasks Until We Have Finished The App

There are only two things left for us to do. The first is to fix the image questions again &#8211; just like we did in the quiz controller and the final task is to add the “go back to quiz” button. Then we are done.

In [part 23]({{site.baseurl}}/code-projects/angular-quiz-app/23-angular-ng-if/) we will tackle fixing up the image questions.

See you there

Adrian

### Check Out The Whole Course Index

1. [Getting Started]({{site.baseurl}}/code-projects/1-build-angular-quiz-app-scratch/)
2. [Ng-Controller Directive and the (mis)use of $scope]({{site.baseurl}}/code-projects/angular-quiz-app/2-ng-controller-scope/)
3. [Looping around with the ng-repeat directive]({{site.baseurl}}/code-projects/angular-quiz-app/3-ng-repeat-directive/)
4. [Markup for the bootstrap modal]({{site.baseurl}}/code-projects/angular-quiz-app/4-bootstrap-modal/)
5. [Using Angular Filters to create real time search]({{site.baseurl}}/code-projects/angular-quiz-app/5-angular-filters/)
6. [The powerful ng-click directive]({{site.baseurl}}/code-projects/angular-quiz-app/6-ng-click-directive/)
7. [Services in Angular Make everything easier]({{site.baseurl}}/code-projects/angular-quiz-app/7-angular-services/)
8. [What is this infamous dependency injection in Angular?]({{site.baseurl}}/code-projects/angular-quiz-app/8-dependency-injection/)
9. [Let&#8217;s Build A Factory]({{site.baseurl}}/code-projects/angular-quiz-app/9-angular-factories/)
10. [The ng-class directive]({{site.baseurl}}/code-projects/angular-quiz-app/10-ng-class/)
11. [More Bootstrap Markup &#8211; The Well]({{site.baseurl}}/code-projects/angular-quiz-app/11-bootstrap-well/)
12. [Adding some logic to the controller]({{site.baseurl}}/code-projects/angular-quiz-app/12-controller-logic/)
13. [Making things disappear with ng-if]({{site.baseurl}}/code-projects/angular-quiz-app/13-ng-if/)
14. [The $index property for ng-repeat]({{site.baseurl}}/code-projects/angular-quiz-app/14-index-for-ng-repeat/)
15. [Reusing code is always a good idea]({{site.baseurl}}/code-projects/angular-quiz-app/15-reusing-code/)
16. [Using Bootstrap to help with styling error messages]({{site.baseurl}}/code-projects/angular-quiz-app/16-bootstrap-alerts/)
17. [The final prompt after the quiz]({{site.baseurl}}/code-projects/angular-quiz-app/17-final-prompt/)
18. [Marking the quiz]({{site.baseurl}}/code-projects/angular-quiz-app/18-marking-the-quiz/)
19. [More dependency injection]({{site.baseurl}}/code-projects/angular-quiz-app/19-angular-dependency-injection/)
20. [Reusing and slightly modifying some previous Bootstrap]({{site.baseurl}}/code-projects/angular-quiz-app/20-familiar-bootstrap/)
21. [More than one way to use ng-class]({{site.baseurl}}/code-projects/angular-quiz-app/21-function-with-ng-class/)
22. *You Are Here*
23. [More usage of Ng-if]({{site.baseurl}}/code-projects/angular-quiz-app/23-angular-ng-if/)
24. [Finishing The App]({{site.baseurl}}/code-projects/angular-quiz-app/24-finished-angular-project/)


Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
