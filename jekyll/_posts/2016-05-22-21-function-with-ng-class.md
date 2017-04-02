---
title: AngularJS Quiz App Tutorial Part 21 – A New Way To Use Ng-Class
date: 2016-05-22T20:15:10+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/21-function-with-ng-class/
head-title: Part 21 AngularJS Quiz App Tutorial
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FAngular-quiz-part-21_vaxed8.jpg?alt=media&token=da4b2142-1fac-41cc-ab94-2353473bd0ad
excerpt: Deja Vu + A New Way To Use Ng-Class Much like the previous part, the markup in this part will be very similar to that of the markup in the quiz controller. But we will spice things up a bit …
loop: false

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
---
## Deja Vu + A New Way To Use Ng-Class

Much like the [previous part]({{site.baseurl}}/projects/20-familiar-bootstrap/){: target="_blank"}<!--_-->, the markup in this part will be very similar to that of the markup in the quiz controller. But we will spice things up a bit by adding new elements and showing a different way of using ng-class &#8211; using a function with ng-class instead of an object with name:value pairs.

**If you want to see the app for yourself,** [check it out here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

{% include video-embed.html videoID="bGyvJMprAcg" %}

[The next part can be found here]({{site.baseurl}}/projects/22-angular-number-filter/)

Below the row we created in the last part we will continue to create the markup for the question area of the results section.

![results question area](){: class="aligncenter" width="800" height="344"}

{% highlight html linenos%}{% raw %}
<div class="row">
  <h3>Questions:</h3>
  <div class="well well-sm">
    <div class="row">
      <div class="col-xs-12">

        <h4> {{}} </h4>
     
      </div>
    </div>
  </div>
</div>
{% endraw %}{% endhighlight %}

Inside the {% raw %}{{}}{% endraw %} syntax of the h4 we will need to reference the active question again to ensure the correct data is showing. This means we will need to create an active question variable on the results controller.

{% highlight javascript linenos%}
function ResultsController(quizMetrics, DataService){

  var vm = this;

  vm.quizMetrics = quizMetrics; // binding the object from factory to vm 
  vm.dataService = DataService;

  vm.activeQuestion = 0;

}
{% endhighlight %}

Now that that&#8217;s done we can write the code into that h4. It will be much like the code in the h4 of the quiz controller so if you don’t quite understand what is going on here go back to the part where we created this markup in the quiz controller. Continuing on, we will also ng-repeat all the possible answers of the active question.

{% highlight html linenos%}{% raw %}
<div class="row">
  <h3>Questions:</h3>
  <div class="well well-sm">
    <div class="row">
      <div class="col-xs-12">

        <h4> {{results.activeQuestion+1 +". "+results.dataService.quizQuestions[results.activeQuestion].text}} </h4>
        
        <div class="row"
          ng-if="results.dataService.quizQuestions[results.activeQuestion].type === 'text'">
                       
            <div class="col-sm-6" ng-repeat="answer in results.dataService.quizQuestions[results.activeQuestion].possibilities">
              <h4 class="answer">
                         
                {{answer.answer}}

              </h4>
            </div>
        </div>
      
      </div>
    </div>
  </div>
</div>
{% endraw %}{% endhighlight %}

### Adding More Feedback To Each Answer

If you have seen the [final application]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->, you will notice that the answers in the results section display “correct answer” and if you gave a different answer it will display “your answer” on that on to let you know what answer you gave and what the actual correct answer was.
 
![results question additonal feedback]({% asset_path results_question_additional_feedback %}){: class="aligncenter" width="800" height="262"}

To implement that we need to create the two sets of text and ng-show then depending on the conditions of each possible answer.

{% highlight html linenos%}{% raw %}
<h4 class="answer">
        
  {{answer.answer}}
                                    
  <p class="pull-right"
    ng-show="$index !== results.quizMetrics.correctAnswers[results.activeQuestion] && $index === results.dataService.quizQuestions[results.activeQuestion].selected">
      Your Answer
  </p>
           
  <p class="pull-right"
    ng-show="$index === results.quizMetrics.correctAnswers[results.activeQuestion]">
      Correct Answer
  </p>

</h4>
{% endraw %}{% endhighlight %}

## Fancy Expressions and a Function With Ng-Class

The expressions in the above code snippet may look a bit daunting initially but let’s walk through them.

Starting with the “Correct Answer” text. The expression in the ng-show is comparing the $index (which is the current index of the ng-repeat) to the correct answer for this particular question. We are doing this by referencing the correctAnswers property that we added to the quizMetrics factory earlier. Using activeQuestion to get the answer for the current active question.

The ng-show on the “Your Answer” text is a bit more complicated. We are using two conditions here. The first one is checking the this possible answer is not the correct answer (using the same method as we did for the “Correct Answer” area). We do this as if the user gave the correct answer we can simply display “Correct Answer”, no need to tell them that was also the answer they gave. The absence of the “Your Answer” prompt implies their answer is correct.

The next condition to the expression is checking if this answer is in fact that answer that the user gave. We do this by referencing the selected property on the question, which of course stores the user’s answer for that particular question.

Both of these conditions have to be true, for the “Your Answer” text to display on the question.

### The Questions Need Backgrounds

We want to style the correct answer with a green background and if the user answered incorrectly, style their answer with a red background. We will do this using ng-class. But instead of using the object notation for ng-class like we have done in the past, we will give it a function that returns the class to display.

{% highlight html linenos%}
<h4 class="answer"
  ng-class="results.getAnswerClass($index)">
</h4>
{% endhighlight %}

It calls the getAnswerClass function (which we will create shortly) and passes in the $index from the ng-repeat. This function can then do some logic and figure out which class should be added and return that from the function. Whatever is returned by the function will be added as a class to the element by ng-class.

Heading into the results controller, let’s create the function. All we will need to do inside the function is figure out if the argument passed in ($index) is the index of the correct answer. We will do this by referencing the array of correct answers we have used in the past.

If the argument is the correct answer, we return the green background class which is the bootstrap class of bg-success. If that conditional fails, there is an else if block that test if the argument passed in is the answer the user gave. If it is, then the class of bg-danger is returned, which is the red background.

{% highlight javascript linenos%}
vm.getAnswerClass = getAnswerClass;

function getAnswerClass(index){

  if(index === quizMetrics.correctAnswers[vm.activeQuestion]){
    return "bg-success";
  }else if(index === DataService.quizQuestions[vm.activeQuestion].selected){
    return "bg-danger";
  }

}
{% endhighlight %}

We can have the else if simply check if the answer is the one the user gave and not check if it also isn’t the correct answer (like we did in the ng-show) because we already know the answer wasn’t correct as the first if statement failed.

### End Of The Road For This Part

There isn’t much left for us to do in the application. The [next thing]({{site.baseurl}}/projects/22-angular-number-filter/) to do is to create the function that will allow the user to hop between questions using the buttons at the top.

See you in [part 22]({{site.baseurl}}/projects/22-angular-number-filter/) for that

Adrian

### Check Out The Whole Course Index

{% include course-index.html %}

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
