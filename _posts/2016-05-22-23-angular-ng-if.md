---
title: AngularJS Quiz App Tutorial Part 23 – Ng-If (Again)
date: 2016-05-22T20:13:37+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/23-angular-ng-if/
head-title: Part 23 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932397/Angular-quiz-part-23_gxzkuu.jpg
excerpt: Our Old Enemy – The Image Questions When we created the quiz controller we had the problem of the image urls displaying instead of the images themselves on image questions. We again face this problem in the results controller. Having …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## Our Old Enemy &#8211; The Image Questions

When we created the quiz controller we had the problem of the image urls displaying instead of the images themselves on image questions. We again face this problem in the results controller. Having already solved it once though, it should pose no problems to us now. We will use the Angular ng-if directive to fix the problem again.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="xxH3dhPC5bY" %}

[The next part can be found here]({{site.baseurl}}/code-projects/angular-quiz-app/24-finished-angular-project/)

This time we want the images to display nicely but also want a border around the correct answer and if the user chose an incorrect answer, a border around the answer they selected. Both will provide feedback to the user.

![images not displaying correctly](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631777/results_images_not_displaying_viluf4.jpg){: class="aligncenter" width="800" height="266"}

Like we did in the quiz controller we just duplicate the row that contains the text questions and modify it slightly to house the image questions.

{% highlight html linenos%}{% raw %}
<div class="row">
  <div class="col-sm-6" ng-repeat="answer in results.dataService.quizQuestions[results.activeQuestion].possibilities">
                               	
    <div class="image-answer"
      ng-class="results.getAnswerClass($index)">
        <img ng-src="{{answer.answer}}">
    </div>

  </div>
</div>
{% endraw %}{% endhighlight %}

Now on the div with the class image-answer we will also give it an ng-class and pass in the same function we used earlier &#8211; getAnswerClass. You may say that this function returns one of two bootstrap classes, neither of which will give the images a border. You would be right.

Doing it this way cuts down on the code logic we need and we can just hook into those bootstrap classes using specificity on top of the image-answer class that the div already has to give it the required borders.

The two classes that the function can choose from is bg-success and bg-danger which are given to correct and incorrect answers respectively. We can now use those and hook into them in our own css.

Add the following to your stylesheet.

{% highlight css linenos%}
.image-answer.bg-success{
  border: 3px solid #5ea640;
}
.image-answer.bg-danger{
  border: 3px solid #b74848;
}
{% endhighlight %}

![results image feedback border](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464631777/results_image_feedback_pbhiu1.jpg){: class="aligncenter" width="800" height="545"}

## Return Of The Angular Ng-If Directive

Again, we only want to render one block or the other &#8211; either the text answer block or the image block, but never both. This is where ng-if comes into play again. Here are the two blocks with their respective ng-if statements added onto them.

{% highlight html linenos%}{% raw %}
<div class="row"
  ng-if="results.dataService.quizQuestions[results.activeQuestion].type === 'text'">
                               
    <div class="col-sm-6" ng-repeat="answer in results.dataService.quizQuestions[results.activeQuestion].possibilities">
      <h4 class="answer"
        ng-class="results.getAnswerClass($index)">
          {{answer.answer}}
                              
          <p class="pull-right"
            ng-show="$index !== results.quizMetrics.correctAnswers[results.activeQuestion] && $index === results.dataService.quizQuestions[results.activeQuestion].selected">Your Answer</p>
          <p class="pull-right"
            ng-show="$index === results.quizMetrics.correctAnswers[results.activeQuestion]">Correct Answer</p>
      </h4>
    </div>

</div>

							
<div class="row"
  ng-if="results.dataService.quizQuestions[results.activeQuestion].type === 'image'">
                               
    <div class="col-sm-6" ng-repeat="answer in results.dataService.quizQuestions[results.activeQuestion].possibilities">
                               		
      <div class="image-answer"
        ng-class="results.getAnswerClass($index)">
          <img ng-src="{{answer.answer}}">
      </div>
    </div>
</div>
{% endraw %}{% endhighlight %}

You can see that the statements are identical except for the type we are testing for. Image and text.

Now the app is pretty much in its completed state. We just need to give the user a way to return back to the fact page and start everything over again if they wish. Of course, we will need to reset everything when we go back as well, just so that it is a fresh start if the user wants to try again.

I will see you in the final part where we add that button and logic.

See you in [part 24]({{site.baseurl}}/code-projects/angular-quiz-app/24-finished-angular-project/)

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
22. [Another Angular Filter]({{site.baseurl}}/code-projects/angular-quiz-app/22-angular-number-filter/)
23. *You Are Here*
24. [Finishing The App]({{site.baseurl}}/code-projects/angular-quiz-app/24-finished-angular-project/)


Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
