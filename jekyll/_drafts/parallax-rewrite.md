---
title: Using the Parallax Library
image: 
excerpt: Let's take the hacky parallax website code we wrote before and rewrite it to use our shiny new parallax library.

videoID: 
repo: adiman9/ParallaxProvider
fbimg: 
twitterimg: 
course-index: parallax-library
series: Parallax Library
demo: parallaxbasic

categories:
  - Projects
tags:
  - Javascript
  - Open Source
  - Parallax Library
resources:
  - name: HTML Markup
    link: https://github.com/adiman9/ParallaxProvider/blob/master/examples/fixedModulesThenScroll/index.html
---
## Converting the old page to use the new library

[In the previous part]({{site.baseurl}}/projects/parallax-library) we wrote a nice reusable library to help us solve the problems we faced in [part 1]({{site.baseurl}}/projects/parallax-mountains). In this part we will rebuild that hacky code from part 1 using the library we built.

The html and css we had from part 1 are perfect, there is no need to change any of that. They can be found here:

* [HTML](https://github.com/adiman9/ParallaxProvider/blob/master/examples/fixedModulesThenScroll/index.html)
* [CSS](https://github.com/adiman9/ParallaxProvider/blob/master/examples/fixedModulesThenScroll/src/main.css)

Start by grabbing a reference to all the elements we will need. This is exactly the same as we did it in part 1:

{% highlight javascript linenos%}{% raw %}
const firstpage = document.querySelector('.firstpage');
const thirdpage = document.querySelector('.thirdpage');
const fg = document.querySelector('.foreground');
const mg = document.querySelector('.middleground');
const bg = document.querySelector('.background');
const title = document.querySelector('.firstpage h1');
const phaseTwoTitleParts = document.querySelectorAll('.secondpage h1 span');
const logoimg = document.querySelector('.turtlemascot');
const app = document.querySelector('#app');
const imgs = document.querySelectorAll('.img');
const progressLine = document.querySelector('.progress-line');
{% endraw %}{% endhighlight %}

Then create an instance of the ParallaxProvider class and pass it an array of section objects:

{% highlight javascript linenos%}{% raw %}
export default new ParallaxProvider([
  {
    mountPoint: 0,
    duration: 500,
    controller: phaseOne,
  },
  {
    mountPoint: 0,
    duration: 300,
    controller: phaseOneTransition,
  },
  {
    mountPoint: 0,
    duration: 1000,
    controller: phaseTwo,
  },
  {
    mountPoint: -500,
    duration: 500,
    controller: turtleExpand,
  },
  {
    mountPoint: 100,
    duration: 2000,
    controller: calcScroll,
  },
]);
{% endraw %}{% endhighlight %}

Just like in the first part we have the first section and the transition, then the second section but then we have the turtle scaling as a separate section this time. You will also notice that the turtle section is mounted at -500. That means that it starts 500 pixels *before* the end of the second section. Visually, the turtle scaling is part of the second section but in the code it can be a separate section, providing even more separation of concerns and less need for different
conditionals.

### Define the controllers
Each section has a controller attached to it but we have yet to define the actual code for each controller. So let's do that now.

Let's start with the first section:

{% highlight javascript linenos%}{% raw %}
function phaseOne(offset, duration) {
  if (offset < duration) {
    const perc = offset / duration;
    fg.style.transform = `scale(${1 + 0.4 * perc})`;
    mg.style.transform = `scale(${1 + 0.1 * perc})`; 
    bg.style.transform = `scale(${1 + 0.04 * perc})`;
    title.style.transform = `scale(${1 + 0.35 * perc})`;
  } else {
    fg.style.transform = `scale(1.4)`;
    mg.style.transform = `scale(1.1)`; 
    bg.style.transform = `scale(1.04)`;
    title.style.transform = `scale(1.35)`;
  }
}
{% endraw %}{% endhighlight %}

Here we have a very simple check to see if we are within the confines of the section. If we are inside the section we do that scaling in the same way as we saw in part 1 and if we are not in the section (we must be past it because the section starts at 0 pixels) then we reset the transform to be fully scaled ready for the user to scroll back into the section.

### Transition code

Here is the controller for the transition:

{% highlight javascript linenos%}{% raw %}
function phaseOneTransition(offset, duration) {
  if (offset < 0) {
    firstpage.style.opacity = '1';
  } else if (offset < duration) {
    const perc = offset / duration;
    firstpage.style.display = 'block';
    firstpage.style.opacity = `${1 - perc}`;
  } else {
    firstpage.style.opacity = '0';
    firstpage.style.display = 'none';
  }
}
{% endraw %}{% endhighlight %}

Simple check if we are before the start of the transition, if we are set opacity of the first page to 1. If we are inside the transition boundary we make sure the first page is visible by setting it to display block and animate the opacity based on how far into the transition we are. Finally a check to see if we are past the transition, in which case we set the opacity to 0 and display to none.

How much cleaner is that than the hacky code we had before? Wonderful stuff.

### Section 2 controller

Here is the section 2 controller:

{% highlight javascript linenos%}{% raw %}
function phaseTwo(offset, duration) {
  const MIDDLE_TRIGGER = 250;

  if (offset < 0) {
    phaseTwoTitleParts[0].style.transform = `translate3d(0, 0, 0)`;
    phaseTwoTitleParts[1].style.transform = `translate3d(0, 0, 0)`;
    phaseTwoTitleParts[2].style.transform = `translate3d(0, 0, 0)`;
  } else if (offset < duration) {
    phaseTwoTitleParts[0].style.display = `inline-block`;
    phaseTwoTitleParts[1].style.display = `inline-block`;
    phaseTwoTitleParts[2].style.display = `inline-block`;

    phaseTwoTitleParts[0].style.transform = `translate3d(0, -${offset}px, 0)`;
    phaseTwoTitleParts[1].style.transform = `translate3d(0, 0, 0)`;
    phaseTwoTitleParts[2].style.transform = `translate3d(0, ${offset}px, 0)`;

    if (offset > MIDDLE_TRIGGER) {
      phaseTwoTitleParts[1].style.transform = `translate3d(-${offset -
        MIDDLE_TRIGGER}px, 0, 0)`;
    }
  } else {
    phaseTwoTitleParts[0].style.display = `none`;
    phaseTwoTitleParts[1].style.display = `none`;
    phaseTwoTitleParts[2].style.display = `none`;
  }
}
{% endraw %}{% endhighlight %}

This one is slightly more complicated, but ultimately the structure is exactly the same. 

We have a check to see if we are before, inside or after the section. If we are before we reset the translation of each part of the title to 0. If we are after we set the display of each part to none so they don't display and potentially interfere with other sections. If we are inside we reset the display to inline-block to ensure they actually show on the page and then we set to work animating the translation of each part of the title.

Initially we translate the "Hungry" and "Code" up and down respectively based on the current offset into the section. We also have a constant that we called
{% ihighlight javascript %}{% raw %}
MIDDLE_TRIGGER
{% endraw %}{% endihighlight %} that acts as the trigger point for when the "Turtle" word starts to animate. We have a check to see if we have past that trigger point. If we have we translate the "Turtle" to the left, again at the same pace as the scrolling. This is achieved by using the offset and subtracting the trigger point to normalise the value.

### Scaling Turtle Image

Here is the controller that handles that scaling of the turtle:

{% highlight javascript linenos%}{% raw %}
function turtleExpand(offset, duration) {
  if (offset < 0) {
    logoimg.style.transform = `scale(0)`;
  } else if (offset < duration) {
    const scaleAmt = easeOutBack(offset, 0, 1.1, duration);
    logoimg.style.transform = `scale(${scaleAmt})`;
  }
}
{% endraw %}{% endhighlight %}

Where 
{% ihighlight javascript %}{% raw %}
easeOutBack
{% endraw %}{% endihighlight %} is a tweening function [i found here](https://github.com/danro/jquery-easing/blob/master/jquery.easing.js#L119) and it is defined like this:

{% highlight javascript linenos%}{% raw %}
// Tweening
function easeOutBack(t, b, c, d, s) {
  let v = s;
  let p = t;
  if (s === undefined) v = 1.70158;
  const val = c * ((p = p / d - 1) * p * ((v + 1) * p + v) + 1) + b;
  return val;
}
{% endraw %}{% endhighlight %}

This is just a way to make the scaling of the turtle image look a bit better and not quite as robotic. It makes it pop a little.

The arguments it takes are:
* t: current time through the animation
* b: starting value of the animation curve (in our case the initial value of the scale - 0)
* c: ending value of the animation (in our case the final value of scale - 1.2)
* d: duration of the animation

### Section 3

The code for the final scrolling section looks like this:

{% highlight javascript linenos%}{% raw %}
function calcScroll(offset, duration) {
  if (offset < 0) {
    app.style.transform = `translate3d(0, 0, 0)`;
  } else if (offset < duration) {
    app.style.transform = `translate3d(0, -${offset}px, 0)`;
    imgs[0].style.transform = `translate3d(0, -${offset * 0.1}px, 0)`;
    imgs[1].style.transform = `translate3d(0, -${offset * 0.25}px, 0)`;

    const progressTrigger = duration * 0.2;

    if (offset > progressTrigger) {
      const progressDur = duration - progressTrigger;
      const progressOff = offset - progressTrigger;
      const progress = Math.min(1, progressOff / progressDur) * 100;
      progressLine.style.transform = `translate3d(0, -${100 - progress}%, 0)`;
    } else {
      progressLine.style.transform = `translate3d(0, -100%, 0)`;
    }
  }
}
{% endraw %}{% endhighlight %}

This code should be starting to look pretty familiar to you. All we are doing is resetting app translation to 0 if we are before the section and if we are inside the section we are translating the whole app container at the same pace as we are scrolling and then offsetting each image by different amounts to give a parallax effect. Again we also have a trigger to add the progress line in, which is done by calculating the percentage progress through it and translating the bar down
accordingly.

There we have it folks, we have fully converted the original spaghetti code into wonderful clean code that uses our library. The code is now much easier to read and much easier to maintain. Go us!

In the next part of this series we will go back to the library and write some tests for it using jest. In the part after that we will deploy it to the NPM repositories using all the best practices for open source projects.

I'm looking forward to it!

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
