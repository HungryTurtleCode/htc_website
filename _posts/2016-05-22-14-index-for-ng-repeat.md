---
title: AngularJS Quiz App Tutorial Part 14 – index for Ng-Repeat
date: 2016-05-22T20:16:58+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/14-index-for-ng-repeat/
head-title: Part 14 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932344/Angular-quiz-part-14_swngy0.jpg
excerpt: Index For Ng-Repeat Will Help User Feedback We now have the questions all displaying nicely in the quiz. The problem we face now is that when the user selects an answer there is no visual feedback to let them know …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## Index For Ng-Repeat Will Help User Feedback

We now have the questions all displaying nicely in the quiz. The problem we face now is that when the user selects an answer there is no visual feedback to let them know that they have selected that answer. In this part we will introduce [index for ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat){: target="_blank"}<!--_--> and create that feedback for the users.

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="lQ4lVuGC2F4" %}

[The next part can be found here]({{site.url}}/code-projects/angular-quiz-app/15-reusing-code/)

Getting started on the text questions first we will go into the h4 that holds each possible answer. Here we will add an ng-class that will give it a blue (bg-info) background when the user selects that answer. Watch the video tutorial to see this in action.

![Quiz question answer feedback](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630377/answer_feedback_wzalvk.jpg){: class="aligncenter" width="800" height="357"}

But how do we use ng-class to only add the background when the user clicks on that answer? Well, we simply combine the efforts of ng-click and ng-class into one.

Remember that selected property on the JSON for each question? We can use ng-click to change that to the index of the question that was clicked on and use ng-class to display the background only if the index of that answer is the same as the index in the selected property for that question.

### How Do We Tell The Ng-Click The Index Of What Was Clicked?

Fortunately, ng-repeat provides us with a handy parameter that can handle this for us &#8211; $index. This does exactly what is says on the tin. It will give us the index of the current iteration through the ng-repeat.

For example, on the first possible answer, $index = 0. On the second possible answer $index = 1 etc etc.

## Bringing It All Together

We can now give ng-click a function that will change the value of the selected property for the current question. We will do this by passing $index in as an argument to the function in ng-click.

In the ng-class we can make a comparison between the $index of all the possible answers and the selected property for the question. Only the possible answer that matches will be given the background.

{% highlight html linenos%}{% raw %}
<div class="row"
  ng-if="quiz.dataService.quizQuestions[quiz.activeQuestion].type === 'text'">
    <div class="col-sm-6" ng-repeat="answer in quiz.dataService.quizQuestions[quiz.activeQuestion].possibilities">
      <h4 class="answer"
        ng-class="{'bg-info': $index === quiz.dataService.quizQuestions[quiz.activeQuestion].selected}"
        ng-click="quiz.selectAnswer($index)">

          {{answer.answer}}

      </h4>
    </div>
</div>
{% endraw %}{% endhighlight %}

Now let’s create the function in the quiz controller. This process will be familiar to you by now. I have left out all the rest of the code that we have added to the controller previously just to make sure you can see exactly what we are doing here.

{% highlight javascript linenos%}
function selectAnswer(index){
  DataService.quizQuestions[vm.activeQuestion].selected = index;
}
{% endhighlight %}

A simple one liner. We just set the selected flag of the active question to the index that was passed into the function. Easy stuff.

### Why Does The Button In The Progress Area Change?

Now that we have done this we can happily click a possible answer and get some nice feedback showing that we have selected that answer. But you may have noticed that the corresponding button in the progress area also changes when we make a selection. Why?

You may not remember but earlier on, when we were creating the progress buttons we gave it an ng-class that depended on the selected flag also. Here is the code to jog your memory.

{% highlight html linenos%}
<button class="btn"
  ng-repeat="question in quiz.dataService.quizQuestions"
  ng-class="{'btn-info': question.selected !== null, 'btn-danger': question.selected === null}" 
  ng-click="quiz.setActiveQuestion($index)">

    <span class="glyphicon"
      ng-class="{'glyphicon-pencil': question.selected !== null, 'glyphicon-question-sign': question.selected === null}"></span>

</button>
{% endhighlight %}

So when the selected flag for each question changes it simultaneously and automatically changes the background of the selected answer, the background of the progress button and the glyphicon of the button too. NICE!

### Enough $index, On To The Next Part

Keeping it short and sweet. Let’s move onto [part 15]({{site.url}}/code-projects/angular-quiz-app/15-reusing-code/) where we will finalise the quiz and then think about moving onto the results page.

See you over in [part 15.]({{site.url}}/code-projects/angular-quiz-app/15-reusing-code/)

Adrian

&nbsp;

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
14. *You Are Here*
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
