---
title: Fun with jQuery Keyboard Events Part 2
date: 2016-01-03T01:55:46+00:00
author: Adrian
layout: post-sidebar
permalink: /tutorials/jquery-keyboard-events-part-2/
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2Fother_side_2.jpg?alt=media&token=d94618c9-82b3-4a31-9554-2d8e65ba9d3a 
excerpt: What Is This Modular JavaScript You Speak Of? This is part 2 of this mini series recreating the “Other Side” video effect using jQuery keyboard events. If you haven’t seen part 1, go take a look at that first. In …
course-index: jquery-keyboard
categories:
  - Tutorials
tags:
  - jQuery
  - Javascript
videoID: wzDXp0ekhZA
---
## What Is This Modular JavaScript You Speak Of?

This is part 2 of this mini series recreating the &#8220;Other Side&#8221; video effect using jQuery keyboard events. If you haven&#8217;t seen [part 1]({{site.baseurl}}/tutorials/jquery-keyboard-events/), go take a look at that first.

In this tutorial we will take the exact code from the previous part and modularise it. What I mean by that is we don&#8217;t have everything in one place. We split the code out so that each part of the code only does one specific job.

For example you don&#8217;t check if the key is pressed then have the code to handle what happens when the code is pressed together. You separate them out.

What this does is makes everything easier to read and understand at a glance. Rather than having to read the code line by line to get an understanding of what is going on.

### How Do We Go About Modularising?

What a great question! I&#8217;m glad you asked. There are many ways to do it but one common way is to create a [Javascript]({{site.baseurl}}/tags/javascript/){: target="_blank"}<!--_--> object that has methods (similar to functions). Each of these methods then handles a specific task within your application and then calls other methods when other tasks are required.

**Don&#8217;t worry if you don&#8217;t understand objects and methods and all that fancy stuff.** Just follow along for now. We want to get you creating cool things for now. Worry about the rest later.

To start with, we will create an object called doubleSided.

{% highlight javascript linenos %}
var doubleSided = {

};
{% endhighlight %}

If you are thinking it looks kinda like declaring a variable, you would be correct.

## Efficiency!! GIVE ME MORE EFFICIENCY!!

I briefly mentioned this in the first video. Every time you make a jQuery selector call like 
{% ihighlight javascript %}{% raw %}
$(".element")
{% endraw %}{% endihighlight %}
, jQuery will scan the entire document to find it. So if you are making multiple calls to the same element &#8211; for example, every time a key is pressed &#8211; you are wasting a lot of resources.

Why not just scan once for an element you know you will need a lot and then just save it? This would be smart! This is known as caching.

Being the clever JS developers that we all are, we decide to scan for everything we need once and just cache it all.

To cache a jQuery selector all we need to do is set it equal to a variable.

{% ihighlight javascript %}{% raw %}
var cachedElement = $(".element");
{% endraw %}{% endihighlight %}
scans to document once and finds all elements with the class of &#8220;element&#8221; then saves that into a variable.

Now next time we need that we can just reference the variable &#8220;cachedElement&#8221; instead of scanning the whole document again.

### What about the objects?

Let&#8217;s now get back to the object we created earlier. Inside that object we want to create a method that will initialise our application &#8211; let&#8217;s call it init();

Inside this method, we want to call all the methods we need to get our app started. Namely, we will need to call a method to cache the DOM and call a method to bind all these elements to the events we want to monitor (play, pause, keyup and keydown). I will also add a further method to set the volume like we did in the [previous part]({{site.baseurl}}/tutorials/jquery-keyboard-events/).

{% highlight javascript linenos %}
var doubleSided = {
  init: function(){
    this.cacheDom();
    this.setVolume();
    this.bindEvents();
  }
};
{% endhighlight %}

To create methods, we simply type the name of the method followed by a colon &#8211; then the function you want. Note you can also create object properties (which are like variables within the object) in this same manner. 
{% ihighlight javascript %}{% raw %}
property: "variable"
{% endraw %}{% endihighlight %}
would be valid.

Within this init function we are calling three other methods from within the object (which we haven&#8217;t created yet). Notice that we use the keyword &#8220;this&#8221;. What that means is that we are telling javascript that we want to call a method, but it should look for that method inside _this_ object. ie. it is a method contained within the current object.

If we were to simply call cacheDom, JavaScript would look for a function called cacheDom **OUTSIDE** of the object. Using &#8220;this&#8221; tells it that is actually within the object.

{% highlight javascript linenos %}
var doubleSided = {
  init: function(){
    this.cacheDom();
    this.setVolume();
    this.bindEvents();
  },
  cacheDom: function(){

  },
  bindEvents: function(){

  },
  setVolume: function(){

  }
};
{% endhighlight %}

## Give Me Your Cache

Let&#8217;s actually add some code to these methods.

Much like when we wanted to create methods that we can call from within the object using the &#8220;this&#8221; keyword, we can create variables, or properties that we can use elsewhere in the object using the &#8220;this&#8221; keyword.

{% highlight javascript linenos %}
cacheDom: function(){
  this.$lvid = $('#lightvid');
  this.$dvid = $('#darkvid');
  this.$lvidcont = $('#lightvidcont');
  this.$vids = $('video');
  this.$doc = $(document);
}
{% endhighlight %}

Here we have just taken all the jQuery DOM calls from part 1 and set them as properties within our object. This is our cacheDom method complete.

### We Are In A Bind

Now let&#8217;s take all of those properties and bind them to the correct events.

{% highlight javascript linenos %}
bindEvents: function(){
  this.$doc.on('keydown', this.keydownFunc);
  this.$doc.on('keyup', this.keyupFunc);
  this.$vids.on('pause', this.pauseVid);
  this.$vids.on('play', this.playVid);
}
{% endhighlight %}

We are still using the 
{% ihighlight javascript %}{% raw %}
.on()
{% endraw %}{% endihighlight %}
method, but this time instead of attaching that directly to a jQuery selector call, we attach it to the properties we cached. For the callback of each of these we are calling more methods from within the object that we will create next.

Notice how much more modular this approach is. We do not have the logic directly in the callback, we instead call a separate method &#8211; allowing us to keep everything clean.

## This &#8211; A Bit Of Context

The above bindEvents method looks fine. We have taken the code from part one, replaced the jQuery selector call with our cached property and replaced the callback logic with a method call.

It should all work now. WRONG!

The this keyword actually causes some issues here. The issue is something called JavaScript context. I will not go into depth about this because it can be a very deep subject, but I will do my best to explain why it is an issue here.

So as I have explained previously, the this keyword tells JavaScript to look inside our object. Unfortunately, that is not always true. The this keyword, references the current &#8220;context&#8221;. For our purposes, the context will usually be the object, so the original definition is correct.

### .on() Changes Everything

Now when we call a method from within 
{% ihighlight javascript %}{% raw %}
.on()
{% endraw %}{% endihighlight %}
the context within that method changes to the element that 
{% ihighlight javascript %}{% raw %}
.on()
{% endraw %}{% endihighlight %}
is attached to.

For example, we call this.keydownFunc from within the on keydown method call. Now we skip forward to inside the keydownFunc method and we call 
{% ihighlight javascript %}{% raw %}
this.$lvid
{% endraw %}{% endihighlight %}
, we would expect our cached variable of $lvid to be found.

But in this case, that call will return undefined! The reason for this is the context has changed. The 
{% ihighlight javascript %}{% raw %}
.on()
{% endraw %}{% endihighlight %}
method that invoked the keydownFunc method was attached to our cached variable for the 
{% ihighlight javascript  %}{% raw %}
$("document")
{% endraw %}{% endihighlight %}
, which means that the context within the keydownFunc method changes from our doubleSided object to the jQuery 
{% ihighlight javascript %}{% raw %}
$("document")
{% endraw %}{% endihighlight %}
call.

Calling 
{% ihighlight javascript %}{% raw %}
this.$lvid
{% endraw %}{% endihighlight %}
from inside the keydownFunc is equivalent to calling 
{% ihighlight javascript %}{% raw %}
$("document").$lvid
{% endraw %}{% endihighlight %}
which of course doesn&#8217;t exist.

I know this may seem very complicated and confusing. I will do a full tutorial on context soon.

### But How Do We Fix This Problem

Fortunately, the wonderful developers of jQuery realised that this could potentially be a problem and provided us a way to override the changing of context.

The way we do this is with the 
{% ihighlight javascript %}{% raw %}
.bind()
{% endraw %}{% endihighlight %}
method.

{% highlight javascript linenos%}
bindEvents: function(){
  this.$doc.on('keydown', this.keydownFunc.bind(this));
  this.$doc.on('keyup', this.keyupFunc.bind(this));
  this.$vids.on('pause', this.pauseVid.bind(this));
  this.$vids.on('play', this.playVid.bind(this));
}
{% endhighlight %}

Now we have added 
{% ihighlight javascript %}{% raw %}
.bind(this)
{% endraw %}{% endihighlight %}
on to the end of our method calls.

What the 
{% ihighlight javascript %}{% raw %}
.bind()
{% endraw %}{% endihighlight %}
method does is takes the argument passed into it and says to the method call it is attached to, &#8220;I want you to forget about the context you think you should have, I want you to use the context of the argument I have been given&#8221;.

So by passing &#8220;this&#8221; as the argument, the context inside the bindEvents method (which of course, is our object) will become the context within all of the subsequent method calls. Solving our problem.

## Onwards! Madness In Our Methods.

Set the volume quickly, before we move onto creating the last 4 methods.

{% highlight javascript linenos %}
setVolume: function(){
  this.$lvid.prop('volume', 0.2);
  this.$dvid.prop('volume', 0.2);
}
{% endhighlight %}

The last 4 methods are keydownFunc, keyupFunc, pauseVid and playVid. Let&#8217;s start with keydownFunc.

At this point it is as simple as taking the code from part 1 and just change the jQuery selector calls to our cached variables.

{% highlight javascript linenos %}
keydownFunc: function(event){
  if(event.keyCode === 82){
    this.$lvidcont.css('top', -2000 + 'px');
    this.$dvid.prop('muted', false);
    this.$lvid.prop('muted', true);
  }
}
{% endhighlight %}

Again, we pass the function an &#8220;event&#8221; argument. The rest is pretty self explanatory if you have seen part 1.

The rest follows on pretty simply&#8230;

{% highlight javascript linenos %}
keyupFunc: function(e){
  if(e.keyCode === 82){
    this.$lvidcont.css('top', 0 + 'px');
    this.$lvid.prop('muted', false);
    this.$dvid.prop('muted', true);
  }
},
playVid: function(){
  for(var i = 0; i &lt; 2; i++){
    this.$vids.get(i).play();
  }
},
pauseVid: function(){
  for(var i = 0; i &lt; 2; i++){
    this.$vids.get(i).pause();
  }
}
{% endhighlight %}

## Putting It All Together

Now we have written all the code, lets put it all together and see what we have.

{% highlight javascript linenos %}
var doubleSided = {
  init: function(){
    this.cacheDom();
    this.setVolume();
    this.bindEvents();
  },
  cacheDom: function(){
    this.$lvid = $('#lightvid');
    this.$dvid = $('#darkvid');
    this.$lvidcont = $('#lightvidcont');
    this.$vids = $('video');
    this.$doc = $(document);
  },
  bindEvents: function(){
    this.$doc.on('keydown', this.keydownFunc.bind(this));
    this.$doc.on('keyup', this.keyupFunc.bind(this));
    this.$vids.on('pause', this.pauseVid.bind(this));
    this.$vids.on('play', this.playVid.bind(this));
  },
  setVolume: function(){
    this.$lvid.prop('volume', 0.2);
    this.$dvid.prop('volume', 0.2);
  },
  keydownFunc: function(e){
    if(e.keyCode === 82){
      this.$lvidcont.css('top', -2000 + 'px');
      this.$dvid.prop('muted', false);
      this.$lvid.prop('muted', true);
    }
  },
  keyupFunc: function(e){
    if(e.keyCode === 82){
      this.$lvidcont.css('top', 0 + 'px');
      this.$lvid.prop('muted', false);
      this.$dvid.prop('muted', true);
    }
  },
  playVid: function(){
    for(var i = 0; i &lt; 2; i++){
      this.$vids.get(i).play();
    }
  },
  pauseVid: function(){
    for(var i = 0; i &lt; 2; i++){
      this.$vids.get(i).pause();
    }
  }
};

doubleSided.init();
{% endhighlight %}

Ahhhhhh! So much better. It is much easier to read and see what is going on at a glance.

The only thing left to do is to call 
{% ihighlight javascript %}{% raw %}
doubleSided.init();
{% endraw %}{% endihighlight %}
from outside our object just to invoke all the code we have written.

Writing code in this fashion has so many benefits such as increased security, increased efficiency, easier readability of code which leads to easier to maintain code &#8211; which of course makes everyone happy.

Hope you enjoyed it! See you soon for [another tutorial]({{site.baseurl}}/tutorials/)

Stay hungry and keep coding,

Adrian
