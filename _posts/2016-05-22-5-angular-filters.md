---
title: 'AngularJS Quiz App Tutorial Part 5 &#8211; Ng-model and Angular Filters'
date: 2016-05-22T20:24:08+00:00
author: Adrian
layout: post
permalink: /code-projects/angular-quiz-app/5-angular-filters/
head-title: Part 5 AngularJS Quiz App Tutorial
image: https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/v1463932282/Angular-quiz-part-5_qjajqt.jpg
excerpt: Angular Filters Create A Magic Search! Ok, enough playing around, let’s really dig into the power of AngularJS. Creating search functionality from scratch can be notoriously hard, but in this tutorial we will see how easy it is to create …
categories:
  - Basic Angular Quiz App
---
## Angular Filters Create A Magic Search!

<span style="font-weight: 400;">Ok, enough playing around, let&#8217;s really dig into the power of AngularJS. Creating search functionality from scratch can be notoriously hard, but in this tutorial we will see how easy it is to create an automatically updating search feature using Angular <a href="https://docs.angularjs.org/guide/filter" target="_blank">filters.</a> </span><!--more-->

Using Angular filters in this way is definitely one of my favourite features of AngularJS. It makes seemingly difficult tasks so easy and straight forward to do.

<span style="font-weight: 400;">If you want to take a look at this search functionality in action, it can be seen in the video below or <a href="/turtlefacts" target="_blank">check out the app here</a>. As always this video is exactly the same as this article just to give you some options of how you want your information. </span>

<span style="font-weight: 400;">The git repo <a href="https://github.com/adiman9/HungryTurtleFactQuiz" target="_blank">can be found here</a>.</span>

### Video Killed The Radio Stars

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1457631087/AngularJS-Turtle-Quiz-App-5_jbj8ca.jpg);">
  <div class="embedoverlaycont ">
    <div class="g-ytsubscribe" data-channelid="UC7Vxnf06GP6w42Lg3TQLXSw" data-layout="default" data-count="default" data-onytevent="onYtEvent">
    </div>
    
    <h2 class="optinform">
      Get all my latest content and exclusive offers direct to your inbox
    </h2>
    
    <p class="optinform">
      Just enter you email below
    </p>
    
    <div class="embedform optinform">
    </div>
    
    <p class="embedreturn">
      <small>Go back to the video</small>
    </p>
  </div>
</div>

<div class="embedcont"style="width: 100%; text-align: center;">
</div>

<div style="display: inline-block; padding-right: 20px; font-weight: bold; color: red; vertical-align: top; padding-top: 12px;">
  Subscribe To My Channel...
</div>

<div style="margin-top: 5px; display: inline-block">
  <div class="g-ytsubscribe" data-channelid="UC7Vxnf06GP6w42Lg3TQLXSw" data-layout="default" data-count="default" data-onytevent="onYtEvent">
  </div>
</div>

<div id="embedcode" style="display: none;">
</div>

&nbsp;

[The next part can be found here](https://hungryturtlecode.com/code-projects/angular-quiz-app/6-ng-click-directive/)

<span style="font-weight: 400;">Getting straight into it, will start off by creating an HTML form which will style with some bootstrap classes. We will add this code right at the top of the HTML markup for our list controller, as we want the search form to be at the top of the page.</span>

<img class="aligncenter wp-image-905" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1464629293/search_area_fo9mpa.jpg" alt="search area with bootstrap well" width="800" height="191" />

This area is the whole grey box at the top of the page that will contain the search box as well as the start quiz button that we will create later. Right now we will focus on creating the search box by adding the icon and the text input area. The icon will be a <a href="http://getbootstrap.com/components/" target="_blank">glyphicon</a> which comes bundled with Bootstrap these days.

<pre class="lang:xhtml decode:true" title="The Start Of The Form">&lt;form class="form-inline well well-sm clearfix"&gt;
    &lt;span class="glyphicon glyphicon-search"&gt;&lt;/span&gt;
    &lt;input 
        type="text" 
        placeholder="Search..." 
        class="form-control"&gt;
&lt;/form&gt;</pre>

The form control class we used on the input is another bootstrap class just to let bootstrap know what this input is doing.

<div id="angularsociallockerbox" style="margin: 50px 0; border-radius: 30px; border: 3px solid #00BCD4; padding: 30px;">
  <h3>
    Download Commented Code And PDFs For This Entire Series
  </h3>
  
  <p>
    Get correct and fully commented code for the start of all 24 parts, plus the finished app. Also get a PDF with the entire 24 chapter tutorial in it, so you can learn anywhere!
  </p>
  
  <p>
    I will also throw in individual PDFs of all chapters, just to allow efficient learning of specific topics.
  </p>
  
  <div class="onp-locker-call" style="display: none;" data-lock-id="onpLock890250">
  </div>
  
  <p>
    I don&#8217;t want to force you to share my stuff to get the real content (I really hate that too). So you will still get 100% of the content &#8211; these bonuses don&#8217;t have any new information in them that you don&#8217;t already have in these articles or on github.
  </p>
  
  <p>
    However, they do make things more convenient for you to learn. So if you want these bonuses and are willing to help me out, just give me a share using one of the buttons above. It is greatly appreciated. Thanks
  </p>
</div>

## Ng-Model Directive

<span style="font-weight: 400;">Now that we have the markup done we can start creating the magic of the search functionality. To start this, we&#8217;re going to introduce a new directive &#8211; <a href="https://docs.angularjs.org/api/ng/directive/ngModel" target="_blank">ng-model.</a></span>

What ng-model does it allows us to bind an input on our page directly to a property on the view model. Remember we used the alias &#8220;vm&#8221; in our controller for the properties that the view model has access to.

So now if we create a property inside the controller and attach it on to the view model we can use ng-model to bind that directly to our input. This means that if we programmatically change the property inside the controller it will automatically update the input and vice versa.

<pre class="lang:js decode:true" title="Search Property On The Controller">function ListController(){
    var vm = this;

    vm.data = turtlesData;
    vm.activeTurtle = {}; 

    // Adding the Search property to be used in the ng-model
    vm.search = "";



    vm.changeActiveTurtle = changeActiveTurtle;

    function changeActiveTurtle(index){
        vm.activeTurtle = index;
    }
}</pre>

Here we created a property called &#8220;search&#8221; which would just be a string that contains the text the user is searching for. Which of course, is set to an empty string initially. Now let&#8217;s add the ng-model directive on to our input and bind to the search property.

<pre class="lang:xhtml decode:true" title="Using ng-model directive">&lt;form class="form-inline well well-sm clearfix"&gt;
    &lt;span class="glyphicon glyphicon-search"&gt;&lt;/span&gt;
    &lt;input 
        type="text" 
        placeholder="Search..." 
        class="form-control"
        ng-model="list.search"&gt;
&lt;/form&gt;</pre>

## Using The Search Property With Angular Filters

<span style="font-weight: 400;">If you&#8217;re used to using Unix command line  commands then you might be used to using the pipe symbol | to quite literally “pipe” the output of one command into the input of another. This is how Angular filters work.</span>

We want to filter the output of the ng-repeat which is what constructs the entire list of turtles. So inside the quotes of our ng-repeat where it says “turtle in list.data” we had the pipe symbol at the end and then add the filters we want.

There are many filters that are included with Angular and you can also make your own if you want to. But the filter that we&#8217;re concerned with for the search functionality is called “filter” &#8211; the filter filter.

We will also be taking a look at other filters like the number filter later on this course.

The way filters work in angular is you specify the name of the filter you want to use, then a colon, followed by any argument she want to give the filter. In this case the argument we want to give the filter filter is the text that the user is searching for.

<pre class="lang:xhtml decode:true " title="Using The Filter On The Ng-Repeat">&lt;div class="col-sm-6" ng-repeat="turtle in list.data | filter:list.search"&gt;</pre>

### How Is This Working?

<span style="font-weight: 400;">This is a good illustration of the dynamic nature of AngularJS. I mentioned earlier the ng-repeat directive works something similar to a for loop in normal programming languages. But as you can see hear this is not quite right. </span>

In a programming language, when a for loop is finished running that’s it. The ng-repeat and all other directives are constantly updating when you inputs are given.

<span style="font-weight: 400;">This is us to use the filter in real time. When we type something into the input comma updates search property in our controller which is what is filtering the ng-repeat. Because this is now changed the ng-repeat will run again and repopulate the list with only entries that satisfy the filter. In other words only with Turtle Data that contain the search term.</span>

### Moving On To Part 6

<span style="font-weight: 400;">Our list of turtles is really taking shape now! In the <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/6-ng-click-directive/">next part</a> we will add the final touches which will been allowed to start building the quiz controller.</span>

So I&#8217;ll see you over there in [part 6](https://hungryturtlecode.com/code-projects/angular-quiz-app/6-ng-click-directive/).

<span style="font-weight: 400;">Adrian</span>

&nbsp;

### Check Out The Whole Course Index

<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/">Getting Started</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/2-ng-controller-scope/">Ng-controller directive and the (mis)use of $scope</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/3-ng-repeat-directive/">Looping around with the ng-repeat directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/4-bootstrap-modal/">Markup for the Bootstrap Modal</a>
</li>
<li style="font-weight: 400;">
  <em>You are here</em>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/6-ng-click-directive/">The powerful ng-click directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/7-angular-services/">Services in Angular Make everything easier</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/8-dependency-injection/">What is this infamous dependency injection in Angular?</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/9-angular-factories/">Let&#8217;s Build A Factory</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/10-ng-class/">The ng-class directive</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/11-bootstrap-well/">More Bootstrap Markup &#8211; The Well</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/12-controller-logic/">Adding some logic to the controller</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/13-ng-if/">Making things disappear with ng-if</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/14-index-for-ng-repeat/">The $index property for ng-repeat</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/15-reusing-code/">Reusing code is always a good idea</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/">Using Bootstrap to help with styling error messages</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/17-final-prompt/">The final prompt after the quiz</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/18-marking-the-quiz/">Marking the quiz</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/19-angular-dependency-injection/">More dependency injection</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/20-familiar-bootstrap/">Reusing and slightly modifying some previous Bootstrap</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/21-function-with-ng-class/">More than one way to use ng-class</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/22-angular-number-filter/">Another Angular Filter</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/23-angular-ng-if/">More usage of Ng-if</a>
</li>
<li style="font-weight: 400;">
  <a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/24-finished-angular-project/">Finishing The App</a>
</li>

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
