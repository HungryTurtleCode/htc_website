---
title: AngularJS Quiz App Tutorial Part 17 – Final Prompt Before Results
date: 2016-05-22T20:16:04+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/17-final-prompt/
head-title: Part 17 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932361/Angular-quiz-part-17_blwjwc.jpg
excerpt: The End Of The Quiz Controller Is Near The only thing left for us to do with the quiz controller is just prompt the user when they have finished just to confirm they want to move onto the results page. …
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## The End Of The Quiz Controller Is Near

The only thing left for us to do with the quiz controller is just prompt the user when they have finished just to confirm they want to move onto the results page. The finalise flag will come in useful here to allow the use of ng-show to show the prompt when the end is reached.

**If you want to see the app for yourself,** [check it out here]({{site.url}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="6uZfUfB4bN8" %}

[The next part can be found here]({{site.url}}/code-projects/angular-quiz-app/18-marking-the-quiz/)

The code for the little prompt is simple, it is just a [bootstrap well](http://www.tutorialspoint.com/bootstrap/bootstrap_wells.htm){: target="_blank"}<!--_--> with two buttons. We will place this markup at the end of the row that contains the well for the questions. This is the markup we will need.

![end of quiz prompt](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630890/final_prompt_ofyoe2.jpg){: class="aligncenter" width="800" height="290"}

{% highlight html linenos%}
<div class="well well-sm" ng-show="quiz.finalise">
  <div class="row">
    <div class="col-xs-12">
      <h3>Are you sure you want to submit your answers?</h3>
      <button class="btn btn-success" ng-click="quiz.finaliseAnswers()">Yes</button>
      <button class="btn btn-danger" ng-click="quiz.finalise = false">No</button>
    </div>
  </div>
</div>
{% endhighlight %}

Onto the well that of this markup we have added the trusty ng-show directive that will only show this prompt when the finalise property is true.

Each of the buttons both have an ng-click directive attached onto them. The no button simply sets finalise back to false which removes the prompt and keeps the user in the quiz to make some changes. Simple enough.

The yes button contains a function we will need to create. This function will reset all the properties and variables that we have been using throughout the course of the life of the quiz.

![prompt not displaying how we want](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630890/prompt_not_displaying_correctly_hdirnl.jpg){: class="aligncenter" width="800" height="354"}

You may have noticed that the prompt simply displays under the quiz questions at the minute. This isn’t exactly what we want. Instead, we want the questions to hide while the prompt is showing just to avoid possible confusion. This way the user is in no doubt what they have to do. We do this by adding an ng-hide to the question well div.

{% highlight html linenos%}
<h3>Question:</h3>
<div class="well well-sm" ng-hide="quiz.finalise">
{% endhighlight %}

## Another Method Inside The Controller

The final thing for us to do is create the function that will run when the user clicks the yes button in the final prompt &#8211; the finaliseAnswers function. I won’t bore you by repeating the process to add another function to the controller.

{% highlight javascript linenos%}
function finaliseAnswers(){

  vm.finalise = false;
  numQuestionsAnswered = 0;
  vm.activeQuestion = 0;
  quizMetrics.markQuiz();
    
}
{% endhighlight %}

Note that this is just the function itself. This will be inside the quiz controller and it will be added to the view model in the same way as before &#8211; using a named function &#8211; something like 
{% ihighlight javascript %}{% raw %}
vm.finaliseAnswers = finaliseAnswers.
{% endraw %}{% endihighlight %}

The first three lines inside the function are pretty self explanatory &#8211; just resetting the properties to their default values.

Next, we will call a function which we will create in the next part. This function will mark the answers the user gave against the correct answers to the quiz.

### **Refactoring the changeState Function**

Earlier we created a function called changeState that takes a boolean argument and changes the state of the quiz to that boolean. However, shortly we will be creating another controller &#8211; the results controller. This means the results controller will also have a state that will need manipulating.

So let’s modify the changeState function to take a second argument which will be the metric to change &#8211; quiz or results controller. This way the same function can be used to manipulate the state of both areas of the quiz.

Here is the new version of the changeState function.

{% highlight javascript linenos%}
function changeState(metric, state){
  if(metric === "quiz"){
    quizObj.quizActive = state;
  }else if(metric === "results"){
    quizObj.resultsActive = state;
  }else{
    return false;
  }
}
{% endhighlight %}

I also added a new property to the quizObj object to make this possible &#8211; resultsActive. This is needed to ensure we actually have a state to change.

{% highlight javascript linenos%}
var quizObj = {

  quizActive: false,
  resultsActive: false,
  changeState: changeState 
                
};
{% endhighlight %}

With this new function, we can complete the finaliseAnswers function by setting the quiz state to false (which removes the quiz from the view) and set the results state to true, which will take us to the results page.

{% highlight javascript linenos%}
function finaliseAnswers(){

  vm.finalise = false;
  numQuestionsAnswered = 0;
  vm.activeQuestion = 0;
  quizMetrics.markQuiz();
  quizMetrics.changeState("quiz", false);
  quizMetrics.changeState("results", true);

}
{% endhighlight %}

### Remember To Go Back And Change What We Have Broken

Right now, we have broken the call to the changeState function we had in the list controller that triggered the quiz in the first place. We only passed in a state and not a metric to that. The code we broke was in the activateQuiz function inside the list controller.

{% highlight javascript linenos%}
function activateQuiz(){
  quizMetrics.changeState("quiz", true);
}
{% endhighlight %}

Now the code is working again.

### The Quiz Needs To Be Marked!

We called the markQuiz function but it is yet to be created. So in the [next part]({{site.url}}/code-projects/angular-quiz-app/18-marking-the-quiz/) we will create that function inside the quizMetrics factory.

See you in [part 18.]({{site.url}}/code-projects/angular-quiz-app/18-marking-the-quiz/)

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
17. *You Are Here*
18. [Marking the quiz]({{site.url}}/code-projects/angular-quiz-app/18-marking-the-quiz/)
19. [More dependency injection]({{site.url}}/code-projects/angular-quiz-app/19-angular-dependency-injection/)
20. [Reusing and slightly modifying some previous Bootstrap]({{site.url}}/code-projects/angular-quiz-app/20-familiar-bootstrap/)
21. [More than one way to use ng-class]({{site.url}}/code-projects/angular-quiz-app/21-function-with-ng-class/)
22. [Another Angular Filter]({{site.url}}/code-projects/angular-quiz-app/22-angular-number-filter/)
23. [More usage of Ng-if]({{site.url}}/code-projects/angular-quiz-app/23-angular-ng-if/)
24. [Finishing The App]({{site.url}}/code-projects/angular-quiz-app/24-finished-angular-project/)


Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.

