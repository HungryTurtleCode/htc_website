---
title: 'AngularJS Quiz App Tutorial Part 3 &#8211; Ng-Repeat And Bootstrap'
date: 2016-05-22T20:24:13+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/3-ng-repeat-directive/
head-title: Part 3 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932269/Angular-quiz-part-3_tuziev.jpg
excerpt: Ng-Repeat Directive Will Do Your Work For You Now armed with the ability to create controller properties with some data attached then inserting that data into our HTML we can move on to create something useful.
categories:
  - Basic Angular Quiz App
---
## Ng-Repeat Directive Will Do Your Work For You

Now armed with the ability to create controller properties with some data attached then inserting that data into our HTML we can move on to create something useful.<!--more--> We will be using the 

[ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat){: target="_blank"}<!--_--> directive (which will save us a lot of typing. YAY!) along with [bootstrap](http://getbootstrap.com/){: target="_blank"}<!--_--> to start creating the list of turtles in our application.

Of course, in any application some data is needed. This data is usually fetched from an [API](https://en.wikipedia.org/wiki/Application_programming_interface){: target="_blank"}<!--_--> on a backend server. However, for this tutorial we will just be focusing on the front end implementation of this application. As a result, we will need to simulate the data in some way.

**If you want to check out the finished app,** [you can see it here]({{site.url}}/turtlefacts).

The git repo [can be found here](https://github.com/adiman9/HungryTurtleFactQuiz){: target="_blank"}<!--_-->.

### Angular Video Tutorial Goodness

As always, for those of you more visually inclined this full tutorial is in video form below. For the rest of you continue reading below the video for the same content in written form.

{% include video-embed.html videoID="iAX67gisQ2M" %}

[The next part of the series can be found here.]({{site.url}}/code-projects/angular-quiz-app/4-bootstrap-modal/)

The way we will simulate the API request in this application is to simply paste the [JSON data](url){: target="_blank"}<!--_--> we would normally get from a server, straight into our code as a variable. We will then attach that variable as a property on our controller which will give us access to all of that data inside our HTML.

This variable will go inside our IIFE for the list controller but it will live outside of the function for the controller itself. We will then create a property on our controller that binds to this.

{: class="big-code-snippet"}
{% highlight javascript linenos%}
var turtlesData = [
  {
    type: "Green Turtle",
    image_url: "http://www.what-do-turtles-eat.com/wp-content/uploads/2014/10/Sea-Turtles-Habitat.jpg",
    locations: "Tropical and subtropical oceans worldwide",
    size: "Up to 1.5m and up to 300kg",
    lifespan: "Over 80 years",
    diet: "Herbivore",
    description: "The green turtle is a large, weighty sea turtle with a wide, smooth carapace, or shell. It inhabits tropical and subtropical coastal waters around the world and has been observed clambering onto land to sunbathe. It is named not for the color of its shell, which is normally brown or olive depending on its habitat, but for the greenish color of its skin. There are two types of green turtles—scientists are currently debating whether they are subspecies or separate species—including the Atlantic green turtle, normally found off the shores of Europe and North America, and the Eastern Pacific green turtle, which has been found in coastal waters from Alaska to Chile."
  },
  {
    type: "Loggerhead Turtle",
    image_url: "http://i.telegraph.co.uk/multimedia/archive/02651/loggerheadTurtle_2651448b.jpg",
    locations: "Tropical and subtropical oceans worldwide",
    size: "90cm, 115kg",
    lifespan: "More than 50 years",
    diet: "Carnivore",
    description: "Loggerhead turtles are the most abundant of all the marine turtle species in U.S. waters. But persistent population declines due to pollution, shrimp trawling, and development in their nesting areas, among other factors, have kept this wide-ranging seagoer on the threatened species list since 1978. Their enormous range encompasses all but the most frigid waters of the world's oceans. They seem to prefer coastal habitats, but often frequent inland water bodies and will travel hundreds of miles out to sea."
  },
  {
    type: "Leatherback Turtle",
    image_url: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/8/13/1313246505515/Leatherback-turtle-007.jpg",
    locations: "All tropical and subtropical oceans",
    size: "Up to 2m, up to 900kg",
    lifespan: "45 years",
    diet: "Carnivore",
    description: "Leatherbacks are the largest turtles on Earth, growing up to seven feet (two meters) long and exceeding 2,000 pounds (900 kilograms). These reptilian relics are the only remaining representatives of a family of turtles that traces its evolutionary roots back more than 100 million years. Once prevalent in every ocean except the Arctic and Antarctic, the leatherback population is rapidly declining in many parts of the world. While all other sea turtles have hard, bony shells, the inky-blue carapace of the leatherback is somewhat flexible and almost rubbery to the touch. Ridges along the carapace help give it a more hydrodynamic structure. Leatherbacks can dive to depths of 4,200 feet (1,280 meters)—deeper than any other turtle—and can stay down for up to 85 minutes."
  },
  {
    type: "Hawksbill Sea Turtle",
    image_url: "http://assets.worldwildlife.org/photos/163/images/carousel_small/SCR_290360hawskbill-why-matter-LG.jpg?1345565532",
    locations: "Tropical Coastal areas around the world",
    size: "Over 1m, 45-68kg",
    lifespan: "30-50 Years",
    diet: "Carnivore",
    description: "Dolor possimus voluptas hic aliquam rem doloremque minus maiores accusantium? Laborum perferendis harum blanditiis quod quia? Aspernatur sunt et fuga delectus ab rem excepturi. Ipsa quibusdam facere consequuntur magnam vitae? Consectetur consectetur necessitatibus beatae delectus quibusdam in! Est nobis omnis iusto illum fugiat maxime! Neque fugiat reiciendis sequi corrupti minima facere distinctio aliquam est voluptatibus. Sint incidunt soluta atque ducimus."
  },
  {
    type: "Alligator Snapping Turtle",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Alligator_snapping_turtle_-_Geierschildkr%C3%B6te_-_Alligatorschildkr%C3%B6te_-_Macrochelys_temminckii_01.jpg",
    locations: "Along the Atlantic Coast of USA",
    size: "around 60cm, up to 100kg",
    lifespan: "20-70 years",
    diet: "Carnivore",
    description: "The prehistoric-looking alligator snapping turtle is the largest freshwater turtle in North America and among the largest in the world. With its spiked shell, beaklike jaws, and thick, scaled tail, this species is often referred to as the 'dinosaur of the turtle world.' Found almost exclusively in the rivers, canals, and lakes of the southeastern United States, alligator snappers can live to be 50 to 100 years old. Males average 26 inches (66 centimeters) in shell length and weigh about 175 pounds (80 kilograms), although they have been known to exceed 220 pounds (100 kilograms). The much smaller females top out at around 50 pounds (23 kilograms)."
  },
  {
    type: "Kemp's Ridley Sea Turtle",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Kemp's_Ridley_sea_turtle_nesting.JPG",
    locations: "Coastal areas of the North Atlantic",
    size: "65cm, up to 45kg",
    lifespan: "Around 50 years",
    diet: "Omnivore",
    description: "The Kemp’s ridley turtle is the world’s most endangered sea turtle, and with a worldwide female nesting population roughly estimated at just 1,000 individuals, its survival truly hangs in the balance. Their perilous situation is attributed primarily to the over-harvesting of their eggs during the last century. And though their nesting grounds are protected and many commercial fishing fleets now use turtle excluder devices in their nets, these turtles have not been able to rebound. For this reason, their nesting processions, called arribadas, make for especially high drama. During an arribada, females take over entire portions of beaches, lugging their big bodies through the sand with their flippers until they find a satisfying spot to lay their eggs. Even more riveting is the later struggle to the ocean of each tiny, vulnerable hatchling. Beset by predators, hatchlings make this journey at night, breaking out of their shells using their caruncle, a single temporary tooth grown just for this purpose."
  },
  {
    type: "Olive Ridley Turtle",
    image_url: "http://images.nationalgeographic.com/wpf/media-live/photos/000/006/cache/ridley-sea-turtle_688_600x450.jpg",
    locations: "Tropical coastal areas around the world",
    size: "70cm, 45kg",
    lifespan: "50 years",
    diet: "Omnivore",
    description: "The olive ridley turtle is named for the generally greenish color of its skin and shell, or carapace. It is closely related to the Kemp’s ridley, with the primary distinction being that olive ridleys are found only in warmer waters, including the southern Atlantic, Pacific and Indian Oceans. Olive and Kemp’s ridleys are the smallest of the sea turtles, weighing up to 100 pounds (45 kilograms) and reaching only about 2 feet (65 centimeters) in shell length. The olive ridley has a slightly smaller head and smaller shell than the Kemp’s."
  },
  {
    type: "Eastern Snake Necked Turtle",
    image_url: "https://c1.staticflickr.com/3/2182/2399413165_bcc8031cac_z.jpg?zz=1",
    locations: "Eastern Australia",
    size: "Up to 30cm",
    lifespan: "25 years",
    diet: "Carnivore",
    description: "Snake-necked turtles, as the name suggests, have an unusually long neck. Their necks may be up to 60 percent of their carapace length. Their carapace is oval and flattened, usually dark-brown to black measuring up to 11 inches (27.5 cm) in length. Scutes are shed as the animals grow. The males have a longer, thicker tail than females and a concave plastron. They are excellent swimmers; they have large, webbed feet with sharp claws used to tear apart food."
  }
];
{% endhighlight %}

So here we have simply created a turtlesData variable and set it equal to all of the JSON. The JSON itself is all the information for all of our turtles. There is a name, image, location, size, lifespan, diet and general description for each turtle.

Now we can create the property inside our controller function. That is as easy as creating a property and setting it equal to the variable we created called turtlesData.

This is because our controller function and the variable are within the same context in the code ie. they are both inside the same IIFE. (Don&#8217;t worry if you don&#8217;t understand that last sentence. It isn&#8217;t super important right now. Although, I will do a tutorial explaining all of that sort of stuff soon).

{% highlight javascript linenos%}
function ListController(){
  var vm = this;

  vm.data = turtlesData;
}
{% endhighlight %}

## What is this Ng-Repeat Directive You Speak Of?

Now that we have access to the information about all of our turtles we can start thinking about how to create all of our markup.

![ng-repeat for turtle data](https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464618638/ng-repeat_for_turtle_data_xj4hdb.jpg){: class="aligncenter" width="800" height="415"}

The old fashioned way of doing that would be to hard code all of the HTML for each of our turtles individually. Of course this results in a lot of repeated code and waaaaaay too much typing for us to do. We are lazy remember!

In steps the [ng-repeat](https://docs.angularjs.org/api/ng/directive/ngRepeat){: target="_blank"}<!--_--> directive. What this lovely directive allows us to do is declare an area of markup and tell Angular that it should repeat that markup for each item in a dataset that we specify.

In our case we will create the markup for one of our turtles &#8211; also taking advantage of the {% raw %}{{}}{% endraw %} binding to grab hold of each bit of information we want. Then using the ng-repeat directive, we will tell angular to simply repeat all of that markup for each turtle in the JSON. Phew! That&#8217;s more like it.

### We Need An Alias Again.

Much like we used an alias for our controller when we used the controller as syntax, we will also use an alias when using ng-repeat. The alias in this case will be the name we will use to reference each iteration of the repeating loop through our data.

The markup for a general ng-repeat will look something like this:

{% highlight html linenos%}{% raw %}
<div ng-repeat="data in controller.items">
  {{data}}
</div>
{% endraw %}{% endhighlight %}

Here we have a property on our controller called items which is an object or array that we can loop through. We give each iteration through that loop an alias of data.

Using that alias we can put inside the {% raw %}{{}}{% endraw %} syntax and that will print out the value of each respective value in the items array or object.

Of course, we can also harness this if our data is an object or array or objects or array ie nested objects or arrays (or multidimensional would be another name). This is in fact what we are going to do.

### The Markup For Our List of Turtles.

The top level property we are going to loop through is the data property on our list controller which of course is our JSON data. Each iteration through the ng-repeat will loop through each turtle. But each turtle has many properties such as type, image_url, location etc.

We can grab hold of these by using the dot notation something like this:

{% highlight html linenos%}{% raw %}
<div ng-repeat="turtle in list.data">
  {{turtle.type}}
</div>
{% endraw %}{% endhighlight %}

This will print out the type property of each turtle in our data property. Using this we can now build the actual markup we need and lay out our information for each turtle nicely.

## Bootstrapping Our App Markup With Bootstrap

This course is not focused on Bootstrap so I will not spend a lot of time explaining the different elements used. However, if you want to learn more [let me know]({{site.url}}/contact-me/){: target="_blank"}<!--_--> and I may do a full course on Bootstrap. Especially with Bootstrap 4 looming just around the corner.

Here is the start of the markup with the ng-repeat directive added in:

{% highlight html linenos%}
<div class="row">
  <div class="col-sm-6" ng-repeat="turtle in list.data">

  </div>
</div>
{% endhighlight %}

The class we have given the inside div here is what will make the element responsive to different screen sizes. The ng-repeat has been added to the inside div so that div and anything inside it will be repeated for every element in the data property on the list controller.

We now want to create the grey area that will contain the turtles themselves then add the image and all the info for each turtle respectively.

This is the [Bootstrap](http://getbootstrap.com/){: target="_blank"}<!--_--> to do that along with the bindings to the data that we need:

{% highlight html linenos%}{% raw %}
<div class="row">
  <div class="col-sm-6" ng-repeat="turtle in list.data">

    <div class="well well-sm">
      <div class="row">

        <div class="col-md-6">
          <img ng-src="{{turtle.image_url}}"
            class="img-rounded img-responsive well-image">
        </div>

        <div class="col-md-6">
          <h4>{{turtle.type}}</h4>

          <p><strong>Locations: </strong>{{turtle.locations}}</p>
          <p><strong>Size: </strong>{{turtle.size}}</p>
          <p><strong>Average Lifespan: </strong>{{turtle.lifespan}}</p>
          <p><strong>Diet: </strong>{{turtle.diet}}</p>
        </div>

      </div><!-- row -->
    </div><!-- well -->

  </div><!-- col-sm-6 -->
</div>
{% endraw %}{% endhighlight %}

### ng-src? Wait! That&#8217;s new!

This should all be easy to understand for the most part. The one new thing that you haven&#8217;t seen yet is the ng-src on the image. Notice that the image does not have a normal src attribute at all.

The reason for this is because the URL for the image is coming from the JSON data and therefore we want to use the {% raw %}{{}}{% endraw %} binding syntax to grab hold of it.

So you may think that we could just add that binding syntax to the normal src attribute and Angular will replace the binding with the url and the image will render just fine.

Unfortunately this is not the case. The reason for this is easy to understand though.

Basically, it comes down to the order things are rendered. With images when you use the normal src attribute the HTML tries to fetch the URL straight away as the page is loading. Importantly, this is before Angular has had time to load and hook into the page.

This of course means that the HTML will see {% raw %}{{turtle.image_url}}{% endraw %} when it looks at the src attribute. This literal string of course isn&#8217;t a URL and the HTML will not know what to do with it.

Finally when Angular loads it will change that literal string to the URL that we want but by that stage the HTML thinks all of the work with image urls is done and it will not try to fetch the url and therefore no image will be displayed.

To stop this problem, Angular added in a helpful directive called [ng-src](https://docs.angularjs.org/api/ng/directive/ngSrc){: target="_blank"}<!--_--> which is to be used in place of the normal src attribute when dealing with Angular model data.

Now the HTML doesn&#8217;t see a normal src attribute so it will simply skip that image. But when Angular loads up and hooks into the page it will see the ng-src and fetch the image from the url that it obtains from our data and the image will now display as we want.

## Finishing Off The List Markup

The final thing we need to do is add the markup for the &#8220;Learn More&#8221; button. We will be using simple Bootstrap classes to style the button. The markup itself will go directly after the paragraphs that contain all the turtle information.

We will need to used two Bootstrap attributes on this button as will intend this button to trigger the modal that we will create later.

{% highlight html linenos%}
<button class="btn btn-primary pull-right"
    data-toggle="modal"
    data-target="#turtle-info">Learn More</button>
{% endhighlight %}

The data-toggle bootstrap attribute let&#8217;s  bootstrap know that we intend to use this button to trigger a modal.

The data-target bootstrap attribute tells bootstrap exactly which modal we want to trigger with this button. In this case we have told it will be the modal with the id of &#8220;turtle-info&#8221;. We will need to remember that and give the modal that id when we create it.

### Moving On To Part 4

That&#8217;s it for this part. In [part 4](https://hungryturtlecode.com/code-projects/angular-quiz-app/4-bootstrap-modal/) we will fix up the image sizing issues that we have with the images in our list and start creating the modal markup.

See you there&#8230;

Adrian

&nbsp;

### Check Out The Whole Course Index

1. [Getting Started]({{site.url}}/code-projects/1-build-angular-quiz-app-scratch/)
2. [Ng-Controller Directive and the (mis)use of $scope]({{site.url}}/code-projects/angular-quiz-app/2-ng-controller-scope/)
3. *You Are Here*
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
17. [The final prompt after the quiz]({{site.url}}/code-projects/angular-quiz-app/17-final-prompt/)
18. [Marking the quiz]({{site.url}}/code-projects/angular-quiz-app/18-marking-the-quiz/)
19. [More dependency injection]({{site.url}}/code-projects/angular-quiz-app/19-angular-dependency-injection/)
20. [Reusing and slightly modifying some previous Bootstrap]({{site.url}}/code-projects/angular-quiz-app/20-familiar-bootstrap/)
21. [More than one way to use ng-class]({{site.url}}/code-projects/angular-quiz-app/21-function-with-ng-class/)
22. [Another Angular Filter]({{site.url}}/code-projects/angular-quiz-app/22-angular-number-filter/)
23. [More usage of Ng-if]({{site.url}}/code-projects/angular-quiz-app/23-angular-ng-if/)
24. [Finishing The App]({{site.url}}/code-projects/angular-quiz-app/24-finished-angular-project/)



Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
