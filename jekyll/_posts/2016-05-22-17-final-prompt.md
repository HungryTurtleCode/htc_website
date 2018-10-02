---
title: AngularJS Quiz App Tutorial Part 17 – Final Prompt Before Results
date: 2016-05-22T20:16:04+00:00
author: Adrian
layout: post-sidebar
alias: /code-projects/angular-quiz-app/17-final-prompt/
head-title: Part 17 AngularJS Quiz App Tutorial
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FAngular-quiz-part-17_blwjwc.jpg?alt=media&token=8bb7a5e3-615b-4127-8ca1-741f4577285b
excerpt: The End Of The Quiz Controller Is Near The only thing left for us to do with the quiz controller is just prompt the user when they have finished just to confirm they want to move onto the results page. …
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
videoID: 6uZfUfB4bN8
---
## The End Of The Quiz Controller Is Near

The only thing left for us to do with the quiz controller is just prompt the user when they have finished just to confirm they want to move onto the results page. The finalise flag will come in useful here to allow the use of ng-show to show the prompt when the end is reached.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

[The next part can be found here]({{site.baseurl}}/projects/18-marking-the-quiz/)

The code for the little prompt is simple, it is just a [bootstrap well](http://www.tutorialspoint.com/bootstrap/bootstrap_wells.htm){: target="_blank"}<!--_--> with two buttons. We will place this markup at the end of the row that contains the well for the questions. This is the markup we will need.

![end of quiz prompt]({% asset_path final_prompt %}){: class="aligncenter" width="800" height="290"}

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

![prompt not displaying how we want]({% asset_path prompt_not_displaying_correctly %}){: class="aligncenter" width="800" height="354"}

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

We called the markQuiz function but it is yet to be created. So in the [next part]({{site.baseurl}}/projects/18-marking-the-quiz/) we will create that function inside the quizMetrics factory.

See you in [part 18.]({{site.baseurl}}/projects/18-marking-the-quiz/)

Adrian

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.

