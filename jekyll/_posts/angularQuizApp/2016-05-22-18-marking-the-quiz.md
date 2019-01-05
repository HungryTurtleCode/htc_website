---
title: AngularJS Quiz App Tutorial Part 18 – Marking The Quiz
date: 2016-05-22T20:15:55+00:00
author: Adrian
layout: post-sidebar
alias: /code-projects/angular-quiz-app/18-marking-the-quiz/
head-title: Part 18 AngularJS Quiz App Tutorial
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FAngular-quiz-part-18_eybezd.jpg?alt=media&token=70cb5428-d3fe-4394-88f4-1625ac3033d8
excerpt: No Quiz Is Complete Without It Being Marked In the last part we reference a function on the quizMetrics factory that we have not yet created. So it will be the task of this part to create that function – …

videoID: mBDbwKr4DyQ
repo: HungryTurtleCode/TurtleFactQuiz
demo: turtlefacts
fbimg: /assets/ng-quiz-app-fb.jpg
twitterimg: /assets/ng-quiz-app-twitter.jpg
course-index: angular-quiz
series: Basic Angular Quiz App
loop: false

categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
resources:
  - name: Angular Docs
    link: https://docs.angularjs.org/api
---
## No Quiz Is Complete Without It Being Marked

In the [last part]({{site.baseurl}}/projects/17-final-prompt/){: target="_blank"}<!--_--> we reference a function on the quizMetrics factory that we have not yet created. So it will be the task of this part to create that function &#8211; a function that will mark the answers to the quiz and calculate how many correct answers that user gave. Let&#8217;s get on with marking the quiz.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/demos/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

[The next part can be found here]({{site.baseurl}}/projects/19-angular-dependency-injection/)

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

See you in [part 19]({{site.baseurl}}/projects/19-angular-dependency-injection/).

Adrian


Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
