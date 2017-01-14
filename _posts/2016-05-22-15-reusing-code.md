---
title: AngularJS Quiz App Tutorial Part 15 – Reusing Code
date: 2016-05-22T20:16:34+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/15-reusing-code/
head-title: Part 15 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932350/Angular-quiz-part-15_xy7gaj.jpg
excerpt: Custom CSS For Image Feedback + Code Reuse Having nice user feedback is great, but move forward to the image questions and you will find that it all breaks. There is no feedback whatsoever for the image questions. In this …
categories:
  - Basic Angular Quiz App
---
## Custom CSS For Image Feedback + Code Reuse

Having nice user feedback is great, but move forward to the image questions and you will find that it all breaks. There is no feedback whatsoever for the image questions. In this part we will fix that problem. Then we will see how we can start reusing code we have already written to make the progress buttons skip to their corresponding question.

**If you want to see the app for yourself,** [check it out here]({{site.url}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="kDQco9gfYmo" %}

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/)

Much like we did for the text questions, we will add an ng-class and ng-click directive onto the row that handles the images. Instead of giving it a bootstrap class though, we will give it a custom class that we will style ourselves. This is because a background would be useless for our image. Instead, we want a nice border.

![image question border feedback](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630497/image_question_feedback_qqh29a.jpg){: class="aligncenter" width="800" height="423"}

{% highlight html linenos%}{% raw %}
<div class="row"
  ng-if="quiz.dataService.quizQuestions[quiz.activeQuestion].type === 'image'">
                           
    <div class="col-sm-6" 
      ng-repeat="answer in quiz.dataService.quizQuestions[quiz.activeQuestion].possibilities">
        <div class="image-answer"
          ng-class="{'image-selected': $index === quiz.dataService.quizQuestions[quiz.activeQuestion].selected}"
          ng-click="quiz.selectAnswer($index)">

            <img ng-src="{{answer.answer}}">

        </div>
    </div>
</div>
{% endraw %}{% endhighlight %}

The ng-click is identical this time as it was to the last. We are still using $index to update the selected flag on the data for the question.

### Let&#8217;s Get Stylish

The css required for this is extremely simple. All we need to do is add a border. We don’t need to round the edges as that has already been done by bootstrap. We add this line to the style.css.

{% highlight css linenos%}
.image-selected{
  border: 3px solid #56afdc;
}
{% endhighlight %}

## The Progress Buttons Need Attention

We have spoken about how the buttons in the progress area will be used to allow the user to navigate to specific questions in the quiz. Currently though, clicking on these buttons will not do anything. So let’s fix that by adding the functionality required.

![results progress navigation](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464630496/Progress_button_navigation_ayjwlo.jpg){: class="aligncenter" width="800" height="234"}

### Reusing Code Is Good Right?

Remember we have already created a function called setActiveQuestion that will increment the active question to the next available unanswered question. But what if we allowed the function to accept an optional argument of the index of question to go to.

This when the function is given an question index as an argument it will just automatically set activeQuestion to that index. But if no argument is given then it will just find the next unanswered question like it is doing now. This sounds like a good plan to me.

First things first, go to the markup for the buttons in the progress area. On this button html, add and ng-click directive that triggers the setActiveQuestion function. We can take advantage of the fact we are using ng-repeat to create all the buttons and use $index to find the index of the current button. This is what we will pass as the argument to setActiveQuestion.

{% highlight html linenos%}
<button class="btn"
  ng-repeat="question in quiz.dataService.quizQuestions"
  ng-class="{'btn-info': question.selected !== null, 'btn-danger': question.selected === null}" 
  ng-click="quiz.setActiveQuestion($index)">

    <span class="glyphicon"
      ng-class="{'glyphicon-pencil': question.selected !== null, 'glyphicon-question-sign': question.selected === null}"></span>
</button>
{% endhighlight %}

Time to add the new functionality into the setActiveQuestion function.

We start by using a conditional to check if an argument was passed into the function. If it wasn’t we run the code we already have and if it was we set active question to the index passed in. Simples.

{% highlight javascript linenos%}
function setActiveQuestion(index){

  if(index === undefined){
    var breakOut = false;

    var quizLength = DataService.quizQuestions.length - 1;

    while(!breakOut){

      if(DataService.quizQuestions[vm.activeQuestion].selected === null){
        breakOut = true;
      }

    }
  }else{
    vm.activeQuestion = index;
  }

}
{% endhighlight %}

Using <span class="lang:js decode:true crayon-inline">index === undefined</span>  we can check if the function has been given an argument or not. Giving us the exact functionality we want. The else block here is also pretty self explanatory.

### Onward and Upward&#8230;

Moving swiftly on to [part 16](https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/) of this tutorial series. In the next part we will take a look at adding some basic error handling and the final parts of the quiz controller.

See you in [part 16.](https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/)

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
15. *You Are Here*
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
