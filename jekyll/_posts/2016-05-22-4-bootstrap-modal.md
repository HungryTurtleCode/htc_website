---
title: 'AngularJS Quiz App Tutorial Part 4 - Bootstrap Modal Functionality'
date: 2016-05-22T20:24:11+00:00
author: Adrian
layout: post
alias: /code-projects/angular-quiz-app/4-bootstrap-modal/
head-title: Part 4 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932276/Angular-quiz-part-4_xidsve.jpg
excerpt: Bootstrap Modal Markup And Other CSS We made a good start on our bootstrap markup in last part but we did end up leaving a few little issues with the CSS most notably the image sizing was not consistent.
loop: false
categories:
  - Projects
tags:
  - AngularJS
  - Basic Angular Quiz App
  - Javascript
---
## Bootstrap Modal Markup And Other CSS

We made a good start on our bootstrap markup in [last part](/3-ng-repeat-directive) but we did end up leaving a few little issues with the CSS most notably the image sizing was not consistent. <!--more-->So let&#8217;s kick things off this time by just fixing up those problems. Then we will start creating the bootstrap modal.

If you want to see the app in action, [check it out here]({{site.baseurl}}/turtlefacts){: target="_blank"}<!--_-->

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

### As Always &#8211; Video Or Text

You can watch this full tutorial in video form below or you can continue reading past the video for a full written version.

{% include video-embed.html videoID="IW37XF2g7AU" %}

[The next part can be found here.]({{site.baseurl}}/projects/5-angular-filters/)

## Fixing Image Sizing Issues

![fixing image sizing](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464618858/image_sizing_issue_noibul.jpg){: class="aligncenter" width="800" height="431"}

We will get ourselves ready for resizing images by adding a class to each of the image tags in our HTML.

{% highlight html linenos%}{% raw %}
<img ng-src="{{turtle.image_url}}" 
     class="img-rounded img-responsive well-image">
{% endraw %}{% endhighlight %}

The class we use here is well-image, but we could use anything that we want here. Now, inside our style.css file which lives in our CSS folder we can create some rules for our well-image class.

{% highlight css linenos%}
.well-image{
  width: 100%;
  height: 162px;
}
{% endhighlight %}

We&#8217;ve given to the width of 100% just to ensure that the images always the full width of its container. The height could be any value that you choose I&#8217;ve just decided on 162 pixels due to some trial and error.

## Let&#8217;s Make The Modal Pop Up!

![popup bootstrap modal](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464618859/popup_modal_s7uu7k.jpg){: class="aligncenter" width="800" height="453"}

We want the [modal](https://www.sitepoint.com/understanding-bootstrap-modals/){: target="_blank"}<!--_--> to pop up on the screen when the user clicks the ”Learn More” button for any one of the turtles. This will be achieved using some functionality that is built into bootstrap. We will also need to trigger some controller functionality when the button is clicked and we will do that with a new Angular directive called [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick){: target="_blank"}<!--_-->

We will add this new [ng-click](https://docs.angularjs.org/api/ng/directive/ngClick){: target="_blank"}<!--_--> directive to the button along with the data-toggle and data-target attributes that we added in the previous part. Inside the quotes for the ng-click we give it the function that we want to trigger on the click event.

{% highlight html linenos%}
<button class="btn btn-primary pull-right" 
        data-toggle="modal" 
        data-target="#turtle-info" 
        ng-click="list.changeActiveTurtle(turtle)">Learn More>/button>
{% endhighlight %}

In this case we have called the function changeActiveTurtle, into which we pass turtle, which if you remember from the previous part is the alias given to each iteration of the ng-repeat.

So what this means for us is that when we click on the learn more button on any one of the individual Turtles the function will be passed the data for that particular turtle.

The function will then use this turtle information passed to it by the ng-click event to manipulate a property on our controller which indicates the currently active turtle.

It will then be the data associated to this currently active turtle property that we use to populate the modal with data. We will of course, have to create this function later.

### Inside the Angular Controller &#8211; Moar Properties

Before we create the function that manipulates the active turtle property we have to actually create that property on our controller. As there is nothing active when the application first loads we will just initialise this property to an empty object.

We use an object because the property will eventually be set to one of the sets of turtle data in our JSON, which are obviously objects.

{% highlight javascript linenos%}
function ListController(){
  var vm = this;

  vm.data = turtlesData;
  vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle

}
{% endhighlight %}

Now I need to create a function that will manipulate this active turtle property. Again, it would be perfectly fine to declare this function and set it equal to an anonymous function something like this.

{% highlight javascript linenos%}
function ListController(){
  var vm = this;

  vm.data = turtlesData;
  vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
  
  //This is one way you could declare the function, but not my preferred method
  vm.changeActiveTurtle = function(){
    // Code Here
  }
  
}
{% endhighlight %}

However, as you already know I prefer to declare the function by setting it a property equal to a named function and then declaring that named function further down in our controller. Something like this.

{% highlight javascript linenos%}
function ListController(){
  var vm = this;

  vm.data = turtlesData;
  vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
  
  // This is my preferred method
  vm.changeActiveTurtle = changeActiveTurtle;

  function changeActiveTurtle(){
    // Logic in here
  }
}</pre>
{% endhighlight %}

So now let&#8217;s create the logic inside the changeActiveTurtle function. When we called the function in the ng-click we pass today in the value of turtle which is the current index of the button that we clicked on and the data associated with that index. So we will need to give our functions in the controller some arguments.

The actual logic inside the function is only a single line of code that grabs hold of the activeTurtle property from within our controller and set equal to the index data that we passed into the function.

{% highlight javascript linenos%}
function ListController(){
  var vm = this;

  vm.data = turtlesData;
  vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
  
  // This is my preferred method
  vm.changeActiveTurtle = changeActiveTurtle;

  function changeActiveTurtle(index){
    vm.activeTurtle = index;
  }
}
{% endhighlight %}

## HTML Markup For The Bootstrap Modal

Now every time the learn more button is clicked the ng-click directive will trigger the changeActiveTurtle function which will set the active turtle to an object that contains all of the data associated with the turtle the user wants to learn more about.

We can now use this data in the modal. This allows us to create a generic modal with placeholders using the {% raw %}{{}}{% endraw %} Angular syntax that will then just insert the active turtle data as and when a particular turtle is clicked on.

So now it&#8217;s time to create HTML for this bootstrap modal and insert the angular bindings into it. We&#8217;ll start off by just creating a div for the modal and giving it the ID that we referenced in the  data-target attribute earlier &#8211; turtle-info. Along with this will also add a few more divs which are required by bootstrap to create a modal.

{% highlight html linenos%}
<div class="modal" id="turtle-info">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">

      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### A Little Reminder About The JSON

At the top of the modal area we want to display the name of the turtle that is being displayed. We will add this into an H2 tag inside a modal header div. Inside the H2 is where we will use the {% raw %}{{}}{% endraw %} syntax to grab hold of the name of the currently active turtle.

Because the active turtle object is just one of the objects inside the JSON which looks something like the below snippet. Using the dot operator on the activeTurtle object, we are able to grab hold of the type, the locations, the image_url etc.

{% highlight javascript linenos%}
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
}
{% endhighlight %}

So now with the H2 added into our modal the code looks like this.

{% highlight html linenos%}{% raw %}
<div class="modal-header">
  <h2>{{list.activeTurtle.type}}</h2>
</div>
{% endraw %}{% endhighlight %}

When I want some responsive code that will centre a large image of the turtle inside the mobile. We will make a div that is 8 columns ([out of the possible 12](https://getbootstrap.com/examples/grid/){: target="_blank"}<!--_-->) wide and then offset it by two columns to give it to columns of space on each side to make up the full 12 and that the div is centred.

{% highlight html linenos%}{% raw %}
<div class="modal-content">
  <div class="modal-header">
    <h2>{{list.activeTurtle.type}}</h2>
  </div>

  <div class="model-body">
    <div class="row">
      <div class="col-xs-8 col-xs-offset-2"> 
        <img ng-src="{{list.activeTurtle.image_url}}" 
            class="img-rounded img-responsive">
      </div>
    </div>
  </div>
</div>
{% endraw %}{% endhighlight %}

The code inside the ng-src is exactly the same as what we&#8217;ve seen earlier except we are referencing the image_url on the activeTurtle property instead.

### Adding The Text Info About The Turtle

To finish off the modal markup we want to create the area that will hold all of the text data about our turtle. This code should look very familiar to you so I won&#8217;t explain it in depth.

{% highlight html linenos%}{% raw %}
<div class="modal-content">
  <div class="modal-header">
    <h2>{{list.activeTurtle.type}}</h2>
  </div>
  <div class="modal-body">
    <div class="row">
      <div class="col-xs-8 col-xs-offset-2">
        <img ng-src="{{list.activeTurtle.image_url}}" class="img-rounded img-responsive">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <p><strong>Locations: </strong>{{list.activeTurtle.locations}}</p>
        <p><strong>Size: </strong>{{list.activeTurtle.size}}</p>
        <p><strong>Average Lifespan: </strong>{{list.activeTurtle.lifespan}}</p>
        <p><strong>Diet: </strong>{{list.activeTurtle.diet}}</p>
      </div>
    <div class="col-xs-12">
      <p>{{list.activeTurtle.description}}</p>
    </div>
  </div>
</div>
{% endraw %}{% endhighlight %}

At this point the text to slightly too close to the image and the description is too close to the bullet point so we want to just add a bit of margin at the top of these areas just to make it look a bit nicer.

We will add a class of top-buffer to the row contains all of the text currently. Then we will create this CSS rule.

{% highlight css linenos%}
.top-buffer{
  margin-top: 30px;
}
{% endhighlight %}

The final things to do in our model is to add the close button that will return us back to the list view. To do this will just create a simple button element and add some bootstrap classes to style it and float it right. A bootstrap attribute called data-dismiss is what will actually allow the button to exit the modal.

{% highlight html linenos%}{% raw %}
<div class="col-xs-12 top-buffer">
  <p>{{list.activeTurtle.description}}</p>
    
  <button class="btn btn-danger pull-right" 
          data-dismiss="modal">Close</button>
</div>
{% endraw %}{% endhighlight %}

### See You In The Next Part

That about wraps it up for this tutorial so I hope to see you over in the [next part](/projects/5-angular-filters/) where we will start to tackle my favourite part of the application. In fact, it&#8217;s one of my favourite features within the entirety of angular &#8211; using filters to create automatically updating search results.

So I will see you [over there in part 5](/projects/5-angular-filters/).

Adrian

&nbsp;

### Check Out The Whole Course Index

1. [Getting Started]({{site.baseurl}}/projects/1-build-angular-quiz-app-scratch/)
2. [Ng-Controller Directive and the (mis)use of $scope]({{site.baseurl}}/projects/2-ng-controller-scope/)
3. [Looping around with the ng-repeat directive]({{site.baseurl}}/projects/3-ng-repeat-directive/)
4. *You Are Here*
5. [Using Angular Filters to create real time search]({{site.baseurl}}/projects/5-angular-filters/)
6. [The powerful ng-click directive]({{site.baseurl}}/projects/6-ng-click-directive/)
7. [Services in Angular Make everything easier]({{site.baseurl}}/projects/7-angular-services/)
8. [What is this infamous dependency injection in Angular?]({{site.baseurl}}/projects/8-dependency-injection/)
9. [Let&#8217;s Build A Factory]({{site.baseurl}}/projects/9-angular-factories/)
10. [The ng-class directive]({{site.baseurl}}/projects/10-ng-class/)
11. [More Bootstrap Markup &#8211; The Well]({{site.baseurl}}/projects/11-bootstrap-well/)
12. [Adding some logic to the controller]({{site.baseurl}}/projects/12-controller-logic/)
13. [Making things disappear with ng-if]({{site.baseurl}}/projects/13-ng-if/)
14. [The $index property for ng-repeat]({{site.baseurl}}/projects/14-index-for-ng-repeat/)
15. [Reusing code is always a good idea]({{site.baseurl}}/projects/15-reusing-code/)
16. [Using Bootstrap to help with styling error messages]({{site.baseurl}}/projects/16-bootstrap-alerts/)
17. [The final prompt after the quiz]({{site.baseurl}}/projects/17-final-prompt/)
18. [Marking the quiz]({{site.baseurl}}/projects/18-marking-the-quiz/)
19. [More dependency injection]({{site.baseurl}}/projects/19-angular-dependency-injection/)
20. [Reusing and slightly modifying some previous Bootstrap]({{site.baseurl}}/projects/20-familiar-bootstrap/)
21. [More than one way to use ng-class]({{site.baseurl}}/projects/21-function-with-ng-class/)
22. [Another Angular Filter]({{site.baseurl}}/projects/22-angular-number-filter/)
23. [More usage of Ng-if]({{site.baseurl}}/projects/23-angular-ng-if/)
24. [Finishing The App]({{site.baseurl}}/projects/24-finished-angular-project/)


Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
