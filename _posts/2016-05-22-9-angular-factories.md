---
title: 'AngularJS Quiz App Tutorial Part 9 &#8211; More About Factories'
date: 2016-05-22T20:18:05+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/9-angular-factories/
head-title: Part 9 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932313/Angular-quiz-part-9_sjwfx2.jpg
excerpt: Mocking An API Request With Angular Factories We have already covered how to build a basic factory when we built the quizMetrics factory in a previous part. In this part, we will build another factory; this time to mock data …
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## Mocking An API Request With Angular Factories

We have already covered how to build a basic factory when we built the quizMetrics factory in a [previous part]({{site.url}}/code-projects/angular-quiz-app/8-dependency-injection/){: target="_blank"}<!--_-->. In this part, we will build another factory; this time to mock data coming from an API. Let&#8217;s continue using Angular factories to further separate concerns.

Earlier, we mentioned that we won’t be using an actual API in this application but will instead copy and paste the JSON into the scripts. This is what we did for the list data in the list controller.

The only problem with that is that now we have the JSON copied into the list controller and now if we followed that same idea we would copy the quiz JSON into the quiz controller. Things are starting to get messy.

To solve this problem we will create a factory and copy all of the data into that instead (including refactoring the data out of the list controller and into the factory). That way our controllers have no knowledge of where the data is coming from, just that it is getting the data.

This way, we can copy the data in for now, but at a later date we can actually make API requests and put all the logic into the factory and the controller still receives the data in the exact same way. We won’t have to touch the controllers to make this change. Can you see how this allows our application to grow over time?

We don’t have to completely refactor the entire codebase to allow API calls, which is something we would have to do if we copied the data into each controller separately. We now put all that data into a factory and separate all of our concerns. It’s all coming together nicely.

**If you want to see the app for yourself,** [check it out here.]({{site.url}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

### Get On With It!

Ok, enough chat, let&#8217;s write some code.

{% include video-embed.html videoID="TlR3bI7Azvk" %}

[The next part can be found here]({{site.url}}/code-projects/angular-quiz-app/10-ng-class/)

We will create another script in the factories directory and call it dataservice.js. We will start this in the exact same way we started the quizMetrics factory.

{% highlight javascript linenos%}
(function(){

  angular
    .module("turtleFacts")
    .factory("DataService", DataService);


  function DataService(){

    var dataObj = {
      // We will add properties to this object soon
    };

    return dataObj;
  }

})();
{% endhighlight %}

Now we will add the object we will return and start adding in some of the data that we need. The turtlesData variable that contained the JSON from our list controller will be copied over into this factory and we will create a new variable to hold the JSON for the quiz questions.

{% highlight javascript linenos%}
function DataService(){

  var dataObj = {
    turtlesData: turtlesData,
    quizQuestions: quizQuestions
  };

  return dataObj;
}
{% endhighlight %}

We can see that we have created some entries in the dataObj which reference variables that contain JSON that we have copied into the script at the bottom. This is then returned from the factory so that our controllers can use this data.

The turtlesData is the exact same JSON as we used before. The quizQuestions is new JSON which can be seen here:

{: class="big-code-snippet"}
{% highlight javascript linenos%}
var quizQuestions  = [
  {
    type: "text",
    text: "How much can a loggerhead weigh?",
    possibilities: [
        {
            answer: "Up to 20kg"
        },
        {
            answer: "Up to 115kg"
        },
        {
            answer: "Up to 220kg"
        },
        {
            answer: "Up to 500kg"
        }
    ],
    selected: null,
    correct: null
  },
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
  },
  {
    type: "image",
    text: "Which of these is the Alligator Snapping Turtle?",
    possibilities: [
        {
            answer: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1"
        },
        {
            answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
        },
        {
            answer: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg"
        },
        {
            answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
        }
    ],
    selected: null,
    correct: null
  },
  {
    type: "image",
    text: "Which of these is the Green Turtle?",
    possibilities: [
        {
            answer: "http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg"
        },
        {
            answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
        },
        {
            answer: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg"
        },
        {
            answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
        }
    ],
    selected: null,
    correct: null
  },
  {
    type: "text",
    text: "Where does the Kemp's Ridley Sea Turtle live?'",
    possibilities: [
        {
            answer: "Tropical waters all around the world"
        },
        {
            answer: "Eastern Australia"
        },
        {
            answer: "Coastal North Atlantic"
        },
        {
            answer: "South pacific islands"
        }
    ],
    selected: null,
    correct: null
  },
  {
    type: "text",
    text: "What is the most common turtle in US waters?",
    possibilities: [
        {
            answer: "Loggerhead turtle"
        },
        {
            answer: "Leatherback turtle"
        },
        {
            answer: "Hawksbill Turtle"
        },
        {
            answer: "Alligator Snapping Turtle"
        }
    ],
    selected: null,
    correct: null
  },
  {
    type: "text",
    text: "What is the largest sea turtle on earth?",
    possibilities: [
        {
            answer: "Eastern Snake Necked Turtle"
        },
        {
            answer: "Olive Ridley Sea Turtle"
        },
        {
            answer: "Kemp's Ridley Sea Turtle'"
        },
        {
            answer: "Leatherback"
        }
    ],
    selected: null,
    correct: null
  },
  {
    type: "image",
    text: "Which of these is the Olive Ridley Turtle?",
    possibilities: [
        {
            answer: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg"
        },
        {
            answer: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532"
        },
        {
            answer: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg"
        },
        {
            answer: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG"
        }
    ],
    selected: null,
    correct: null
  },
  {
    type: "text",
    text: "How Heavy can a leatherback turtle be?",
    possibilities: [
        {
            answer: "900kg"
        },
        {
            answer: "40kg"
        },
        {
            answer: "110kg"
        },
        {
            answer: "300kg"
        }
    ],
    selected: null,
    correct: null
  },
  {
    type: "text",
    text: "Which of these turtles are herbivores?",
    possibilities: [
        {
            answer: "Loggerhead Turtle"
        },
        {
            answer: "Hawksbill Turtle"
        },
        {
            answer: "Leatherback Turtle"
        },
        {
            answer: "Green Turtle"
        }
    ],
    selected: null,
    correct: null
  }
];
{% endhighlight %}

Taking a closer look at the JSON for each quiz question we see that it has a type (text, or image) which allows us to have different styles of questions, the text of the question itself, four possible answers and two flags called selected and correct which are initialised to null. We will discuss all of this more later.

## Angular Factories leads to Dependency Injection

We have seen it all before. So we will just go back to our controllers and add the “dataservice” factory to the array of dependencies. Also adding it as an argument to the controller functions. </span>

Here is the quiz controller:

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
      
  }

})();
{% endhighlight %}

We also do the same in the list controller. While we are in there we can delete the turtlesData variable that we now have in the factory (if you haven’t already removed it).

{% highlight javascript linenos%}
(function(){

  angular
    .module("turtleFacts")
    .controller("listCtrl", ListController);

  ListController.$inject = ['quizMetrics', 'DataService'];

  function ListController(quizMetrics, DataService){

    var vm = this;
    
    vm.quizMetrics = quizMetrics;
    vm.data = DataService.turtlesData; 
    vm.activeTurtle = {}; 
    vm.changeActiveTurtle = changeActiveTurtle; 
    vm.activateQuiz = activateQuiz; 
    vm.search = ""; 

    function changeActiveTurtle(index){
      vm.activeTurtle = index;
    }

    function activateQuiz(){
      quizMetrics.changeState(true);
    }
  }

})();
{% endhighlight %}

Notice that we previously had a line 
{% ihighlight javascript %}{% raw %}
vm.data = turtlesData
{% endraw %}{% endihighlight %} but of course, the turtlesData variable doesn’t exist in the controller, it is now inside the dataservice factory. So we change that line to 
{% ihighlight javascript %}{% raw %}
vm.data = DataService.turtlesData
{% endraw %}{% endihighlight %}.

Before we forget, we need to add the new dataservice factory script to the tags at the bottom of our HTML. The scripts area of the HTML now looks like this:

{% highlight html linenos%}
<script src="js/app.js"></script>
<script src="js/controllers/list.js"></script>
<script src="js/controllers/quiz.js"></script>   
<script src="js/factories/quizMetrics.js"></script>
<script src="js/factories/dataservice.js"></script>
{% endhighlight %}

### Onwards And Upwards

In [part 10]({{site.url}}/code-projects/angular-quiz-app/10-ng-class/) we will use the quiz JSON we now have access to and start creating the bootstrap markup for the quiz.

See you over there.

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
9. *You Are Here*
10. [The ng-class directive]({{site.url}}/code-projects/angular-quiz-app/10-ng-class/)
11. [More Bootstrap Markup &#8211; The Well]({{site.url}}/code-projects/angular-quiz-app/11-bootstrap-well/)
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
