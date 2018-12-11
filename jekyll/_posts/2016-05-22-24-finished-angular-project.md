---
title: AngularJS Quiz App Tutorial Part 24 – The Finished App
date: 2016-05-22T19:42:30+00:00
author: Adrian
layout: post-sidebar
alias: /code-projects/angular-quiz-app/24-finished-angular-project/
head-title: Part 24 AngularJS Quiz App Tutorial
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FAngular-quiz-part-24_l0q3sc.jpg?alt=media&token=f85a27b6-2bf8-453d-9184-b5d138eb61ed
excerpt: We Have Made It To The End, Friends There is only one small thing that we still have left to do before you have your finished Angular project. That feature is just adding a button that will take us back …

videoID: EEOMwWO0lhg
repo: TurtleFactQuiz
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
## We Have Made It To The End, Friends

There is only one small thing that we still have left to do before you have your finished Angular [project]({{site.baseurl}}/projects/){: target="_blank"}<!--_-->. That feature is just adding a button that will take us back to the start &#8211; the list page.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/demos/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

Right underneath the well that holds the questions we will add a large button to take the user back to the facts page. This button will have an ng-click that will call a function that will reset all the data in the application and allow the user to repeat the quiz again without any of the data from their first attempt interfering.

![go back to facts button]({% asset_path go_back_to_facts_button %}){: class="aligncenter" width="800" height="435"}

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

Well done! You have completed an [Angular Project]({{site.baseurl}}/tags/angularjs){: target="_blank"}<!--_-->. If this is the first one you have ever made then extra congratulations to you. You have made a huge step; a step that many “developers” never make. They remain armchair developers and don’t actually write code. Which is no way to improve.

I really hope that you have enjoyed this series and that you have learnt a bit about Angular and see just how useful it can be. If you apply some of the knowledge learnt here to one of your own projects I would love to hear about it. Get hold of me via the contact me page on the site or on facebook or twitter.

I look forward to creating many more courses for you in the future and hopefully we can continue to learn from and inspire each other into the future.

If you haven’t already, sign up to my email newsletter where I will keep you up to data with general news in the developer world as well as keep you up to date with all my latest projects, courses and tutorials. Also I would greatly appreciate if you could hit the subscribe button above to subscribe to my youtube channel. I love and appreciate everyone’s ongoing support.

Until my next course, why not check out some of the other content that I have created on the site.

Stay hungry, and keep coding!

Adrian

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
