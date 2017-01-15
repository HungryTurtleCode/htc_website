---
title: AngularJS Quiz App Tutorial Part 11 – More Bootstrap
head-title: Part 11 AngularJS Quiz App Tutorial
date: 2016-05-22T20:17:31+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/11-bootstrap-well/
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932326/Angular-quiz-part-11_jxnkd4.jpg
excerpt: Bootstrapping The Quiz Questions No waiting around here, let’s just jump straight into creating the markup for the questions in the quiz. The whole area will be surrounded in a bootstrap well and we will pull the questions from the …
categories:
  - Basic Angular Quiz App
---
## Bootstrapping The Quiz Questions

No waiting around here, let’s just jump straight into creating the markup for the questions in the quiz. The whole area will be surrounded in a bootstrap well and we will pull the questions from the data service we created before.

**If you want to see the app for yourself,** [check it out here.]({{site.url}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="UC8aWbE9_G4" %}

[Here is the next part]({{site.url}}/code-projects/angular-quiz-app/12-controller-logic/)

![question area markup](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630050/quiz_question_area_z87xpz.jpg){: class="aligncenter" width="800" height="278"}

The base of the HTML shouldn’t be new to you, so I will just show you the code with the bootstrap well and the foundation of the question markup.

{% highlight html linenos%}
<div class="row">
  <h3>Question:</h3>
  <div class="well well-sm">
    <div class="row">
      <div class="col-xs-12">
        <!-- Question Area -->

        <h4><!-- The question will go in here --></h4>

      </div>
    </div>
  </div>
</div>
{% endhighlight %}

Inside this div is where we will need to add the text for the question as well as all possible answers for that question. We could just [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat){: target="_blank"}<!--_--> all questions, but they would then display all the questions in a column down the page. We want only one question with a continue button to take us to the next (or to use the buttons in the progress section).

So instead, what we will do is to create a property on our controller that indicates the question that is active. Then the corresponding text and possible answers will be displayed for that question. Doing it this way allows us to easily move to the next question by incrementing the active question.

### Active Question

First, we need to create the activeQuestion property inside the quiz controller. We will initialise this to 0. This is because we are starting from the first question, which of course, in [programming languages]({{site.url}}/best-programming-languages-to-learn-2016/){: target="_blank"}<!--_--> tends to start from a 0 index.

This is what our quiz controller looks like thus far.

{% highlight javascript linenos%}
(function(){

  angular
    .module("turtleFacts")
    .controller("quizCtrl", QuizController);

  QuizController.$inject = ['quizMetrics', 'DataService'];

  function QuizController(quizMetrics, DataService){

    var vm = this;

    vm.quizMetrics = quizMetrics; 
    vm.dataService = DataService;
    vm.activeQuestion = 0;

  }

})();
{% endhighlight %}

To make things look a bit nicer, I like to add the question number before the question. Something like this:

1. This is a wonderful question that you will know the answer to.

We could just start with the number one and increment the number as the user progresses through the quiz. The problem there is that that wouldn’t allow the user to go back to a question, which is a feature we want in our quiz.

But we have the activeQuestion property which holds a number of the current question, just in 0 index form. So all we need to do is to add 1 to that value. Then we can print out the text of the question which we get from the question JSON in the dataservice by accessing the index of the active question.

{% highlight html linenos%}{% raw %}
<h4>{{quiz.activeQuestion+1 + ". " + quiz.dataService.quizQuestions[quiz.activeQuestion].text}}</h4>
{% endraw %}{% endhighlight %}

## Now We Bring Out The Ng-Repeat Gunz

Directly below the h4 we just created we will create a new row that will house the possible answers. Each answer will take up half the width of the well, so we will give it the corresponding bootstrap class.

On the div for the question, we can use ng-repeat to repeat itself for all four possible answers to the question. This is the code that we will add right after the h4 from the last few paragraphs.

{% highlight html linenos%}
<div class="row">
  <div class="col-sm-6" 
    ng-repeat="answer in quiz.dataService.quizQuestions[quiz.activeQuestion].possibilities">
      <h4 class="answer">
        <!-- Possible answers go here -->
      </h4>
  </div>
</div>
{% endhighlight %}

So here we are referencing the possible answers using a long string similar to the one we created to get the question text, except this time we are referencing 
{% ihighlight css %}{% raw %}
.possibilities
{% endraw %}{% endihighlight %}
instead of 
{% ihighlight css %}{% raw %}
.text
{% endraw %}{% endihighlight %}. But we are still getting that by finding the activeQuestion index of the quizQuestions property on the dataService which we have access to in the quiz controller.

The ng-repeat has the alias of answer and the possibilities object that we are looping through each have a value of answer, which is the text of the possible answer. Just to jog your memory, here is a snippet of the JSON we are dealing with.

{% highlight javascript linenos%}
{
  type: "text",
  text: "What is the typical lifespan of a Green Sea Turtle?",
  possibilities: [
    {
      answer: "150 years"
    },
    {
      answer: "10 years"
    },
    {
      answer: "80 years"
    },
    {
      answer: "40 years"
    }
  ],
  selected: null,
  correct: null
}</pre>
{% endhighlight %}

Now using the ng-repeat alias of answer (which will be looping through the object of possibilities) we can reference the answer value in each object. This gives us answer.answer. We will add this like so:

{% highlight html linenos%}{% raw %}
<div class="row">
  <div class="col-sm-6" 
    ng-repeat="answer in quiz.dataService.quizQuestions[quiz.activeQuestion].possibilities">
      <h4 class="answer">
        {{answer.answer}}
      </h4>
  </div>
</div>
{% endraw %}{% endhighlight %}

### Adding Custom Styling To The Questions

The answers may be there right now, but they are certainly not looking pretty like we want them to. So we need to add our own custom styling.

Adding the class of answer to the possible answers h4 will then allow us to add the following to the style.css

{% highlight css linenos%}
.answer{
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid #bbb;
}
.answer:hover{
  cursor: pointer;
}
{% endhighlight %}

### Creating The Continue Button

This will be a simple case of adding a button element to the HTML just at the bottom of the current bootstrap well. The button will be styled using some bootstrap classes and we will add an [ng-click directive](https://docs.angularjs.org/api/ng/directive/ngClick){: target="_blank"}<!--_--> to trigger the functionality that will allow us to change the active question (which will in turn, automatically change the text and answers).

{% highlight html linenos%}
<button class="btn btn-warning" ng-click="quiz.questionAnswered()">Continue</button>
{% endhighlight %}

The function that we reference here is one we have not created yet but that is what we will tackle in the next part of this series.

So I will see you there, in [part 12]({{site.url}}/code-projects/angular-quiz-app/12-controller-logic/).

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
11. *You Are Here*
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
