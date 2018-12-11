---
title: AngularJS Quiz App Tutorial Part 20 – Familiar Bootstrap Markup
date: 2016-05-22T20:15:33+00:00
author: Adrian
layout: post-sidebar
alias: /code-projects/angular-quiz-app/20-familiar-bootstrap/
head-title: Part 20 AngularJS Quiz App Tutorial
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FAngular-quiz-part-20_jtmhg5.jpg?alt=media&token=07629e87-bb51-4d29-bcec-9b0b88ae939b
excerpt: Some Really Familiar Bootstrap Markup This lesson isn’t introducing anything new. Infact, you will have seen much of this code before. What we are tackling is the area at the top of the results controller that shows what questions the user …

videoID: AxQcLIRoxYw
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
## Some Really Familiar Bootstrap Markup

This lesson isn’t introducing anything new. Infact, you will have seen much of this code before. What we are tackling is the area at the top of the results controller that shows what questions the user got right and wrong along with a legend. This is very much like the progress area in the quiz controller. Let’s take a look at some familiar bootstrap code.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/demos/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

[The next part can be found here]({{site.baseurl}}/projects/21-function-with-ng-class/)

I say that it is similar, the markup is almost identical with a few key differences. Mainly the colors used are no longer red and blue but are instead red and green to indicate correct or incorrect. The glyphicons used are also different &#8211; a tick and an x this time.

![results progress area]({% asset_path results_progress_area %}){: class="aligncenter" width="800" height="187"}

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

This lesson really was short. I don’t want to get into the [next part]({{site.baseurl}}/projects/21-function-with-ng-class/) in this article as it will then be way too long. So you will just have to click through to the <a href="{{site.baseurl}}/projects/21-function-with-ng-class/">next part</a> to get all that wonderful goodness there.

See you in [part 21]({{site.baseurl}}/projects/21-function-with-ng-class/)

Adrian

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
