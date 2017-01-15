---
title: AngularJS Quiz App Tutorial Part 18 – Marking The Quiz
date: 2016-05-22T20:15:55+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/18-marking-the-quiz/
head-title: Part 18 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932371/Angular-quiz-part-18_eybezd.jpg
excerpt: No Quiz Is Complete Without It Being Marked In the last part we reference a function on the quizMetrics factory that we have not yet created. So it will be the task of this part to create that function – …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## No Quiz Is Complete Without It Being Marked

In the [last part]({{site.baseurl}}/code-projects/angular-quiz-app/17-final-prompt/){: target="_blank"}<!--_--> we reference a function on the quizMetrics factory that we have not yet created. So it will be the task of this part to create that function &#8211; a function that will mark the answers to the quiz and calculate how many correct answers that user gave. Let&#8217;s get on with marking the quiz.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="mBDbwKr4DyQ" %}

[The next part can be found here]({{site.baseurl}}/code-projects/angular-quiz-app/19-angular-dependency-injection/)

Without wasting any time, jump into the quizMetrics factory and get started. The first thing we will need to mark the quiz is the correct answers to all the questions. The correct answers will be another piece of data in the dataService factory. Much like we have copy and pasted in the data for the list and the quiz, we will also paste in the data for the correct answers.

So at the bottom of the data service factory, paste the following:

{% highlight javascript linenos%}
var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];
{% endhighlight %}

Then inside dataObj of that service we add the correctAnswers. Like this:

{% highlight javascript linenos%}
var dataObj = {
  turtlesData: turtlesData,
  quizQuestions: quizQuestions,
  correctAnswers: correctAnswers
};
{% endhighlight %}

To get hold of this data from inside the quizMetrics factory we will need to inject the dataService into the factory (yes, we can inject dependencies into services too!). This process is exactly the same as the dependency injection that you have seen already in the controllers.

{% highlight javascript linenos%}
angular
  .module("turtleFacts")
  .factory("quizMetrics", QuizMetrics);

  QuizMetrics.$inject = ['DataService'];

  function QuizMetrics(DataService){
    // Rest of quizMetrics code left out to keep snippet clean
  }
{% endhighlight %}

### The Function That Will Be Marking The Quiz

Now that we have the correct answers and have access to them in the quizMetrics factory, we can create the markQuiz function. Before we start that we will add a reference to that function in the dataObj of the quizMetrics factory, along with a few properties.

These other properties include a property to track the total number of correct answers the user has given (defaulted to 0), and a property to house the correct answers inside the quizMetrics factory object. Of course, we could just access the answers from the dataService, but the answers are a bit of data related to the quiz, so we will just keep things easy to understand and keep that stored there.

{% highlight javascript linenos%}
var quizObj = {
  quizActive: false,
  resultsActive: false,
  changeState: changeState, 
  correctAnswers: [],
  markQuiz: markQuiz, 
  numCorrect: 0
};
{% endhighlight %}

Now onto the implementation of the markQuiz function. This is simply a case of looping through all the questions in the quiz and then comparing the answer the user gave (which is stored in the selected property for each question) against the correct answer. If they match, we will set the “correct” property in the data to true and increment the numCorrect property. If the answers do not match then the correct flag is set to false.

{% highlight javascript linenos%}
function markQuiz(){

  quizObj.correctAnswers = DataService.correctAnswers;

  for(var i = 0; i < DataService.quizQuestions.length; i++){
    if(DataService.quizQuestions[i].selected === DataService.correctAnswers[i]){
      DataService.quizQuestions[i].correct = true;
      quizObj.numCorrect++;
    }else{
      DataService.quizQuestions[i].correct = false;
    }
  }
}
{% endhighlight %}

### This Part Was Short, On To The Next One

We have now finished the entire quiz controller and can move on to thinking about the implementation of the results controller.

See you in [part 19]({{site.baseurl}}/code-projects/angular-quiz-app/19-angular-dependency-injection/).

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
18. *You Are Here*
19. [More dependency injection]({{site.baseurl}}/code-projects/angular-quiz-app/19-angular-dependency-injection/)
20. [Reusing and slightly modifying some previous Bootstrap]({{site.baseurl}}/code-projects/angular-quiz-app/20-familiar-bootstrap/)
21. [More than one way to use ng-class]({{site.baseurl}}/code-projects/angular-quiz-app/21-function-with-ng-class/)
22. [Another Angular Filter]({{site.baseurl}}/code-projects/angular-quiz-app/22-angular-number-filter/)
23. [More usage of Ng-if]({{site.baseurl}}/code-projects/angular-quiz-app/23-angular-ng-if/)
24. [Finishing The App]({{site.baseurl}}/code-projects/angular-quiz-app/24-finished-angular-project/)

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
