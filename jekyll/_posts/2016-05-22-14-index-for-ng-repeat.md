---
title: AngularJS Quiz App Tutorial Part 14 – index for Ng-Repeat
date: 2016-05-22T20:16:58+00:00
author: Adrian
layout: post-sidebar
alias: /code-projects/angular-quiz-app/14-index-for-ng-repeat/
head-title: Part 14 AngularJS Quiz App Tutorial
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FAngular-quiz-part-14_swngy0.jpg?alt=media&token=01ff7799-c3a7-4acf-add9-5a53ff857548
excerpt: Index For Ng-Repeat Will Help User Feedback We now have the questions all displaying nicely in the quiz. The problem we face now is that when the user selects an answer there is no visual feedback to let them know …
loop: false
series: Basic Angular Quiz App

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
videoID: lQ4lVuGC2F4
---
## Index For Ng-Repeat Will Help User Feedback

We now have the questions all displaying nicely in the quiz. The problem we face now is that when the user selects an answer there is no visual feedback to let them know that they have selected that answer. In this part we will introduce [index for ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat){: target="_blank"}<!--_--> and create that feedback for the users.

**If you want to see the app for yourself,** [check it out here.](/turtlefacts)

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

[The next part can be found here]({{site.baseurl}}/projects/15-reusing-code/)

Getting started on the text questions first we will go into the h4 that holds each possible answer. Here we will add an ng-class that will give it a blue (bg-info) background when the user selects that answer. Watch the video tutorial to see this in action.

![Quiz question answer feedback]({% asset_path answer_feedback %}){: class="aligncenter" width="800" height="357"}

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

Keeping it short and sweet. Let’s move onto [part 15]({{site.baseurl}}/projects/15-reusing-code/) where we will finalise the quiz and then think about moving onto the results page.

See you over in [part 15.]({{site.baseurl}}/projects/15-reusing-code/)

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
