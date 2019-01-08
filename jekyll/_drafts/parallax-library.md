---
title: Hacky Parallax Code To NPM Library
image: 
excerpt: In this tutorial we will take the hacky parallax code we wrote before and turn it into a nice generalised library that can be used to implement arbitrary parallax website. Ultimately we will publish the library to NPM.

videoID: 
repo: adiman9/ParallaxProvider
fbimg: 
twitterimg: 
course-index: parallax-library
series: Parallax Library

categories:
  - Projects
tags:
  - Javascript
  - Make a Library
  - Parallax Library
resources:
  - name: Resource name
    link: link
---
## Let's write a library

[In the previous part]({{site.baseurl}}/projects/parallax-mountains) I wrote some pretty hacky code to get a parallax effect going. In this part I will rebuild that idea into a generalised library that anyone can use to build similar effects easily. In the coming parts we will publish the library on NPM for the world to actually use.

I think this is a good illustration for how typical open source projects some into being. It starts off with someone who has an idea for something they think is cool or something they think will help people out, then they create a super hacky prototype to flesh out the idea a little. Once they have something they think might work then they will start converting it into cleaner code in the format or a library.

## What were the problems

What were the problems we faced in the previous part? What made the code so hacky?

### Issue 1
One of which was that we were constantly converting a global scroll offset a value that was normalised against the position of the current section. For example we had the
{% ihighlight javascript %}{% raw %}
WORD_SPLIT_END
{% endraw %}{% endihighlight %} constant which would define the end of the word split section and the start of the scrolling section. Inside the scrolling section we would normalise the offset for the scrolling section like this:

{% highlight javascript linenos%}{% raw %}
const offset = yoff - WORD_SPLIT_END;
{% endraw %}{% endhighlight %}

That results in offset being 0 at the exact point that the scrolling section comes into view. So the offset here will always refer to how far we have scrolled into the "scolling" section of the page.

### Issue 2
The second issue was separation of concerns. Ideally we would like to think about the logic for each "section" completely separately. But instead we had to mix the logic for each section up with each other.

The root cause of this issue is that there are 3 phases that can exist in the lifecycle of a "section":
* Phase 1: Before we reach the section.
* Phase 2: While we are scrolling through the section.
* Phase 3: When the scroll has past the section.

But we were handling this using just if statements checking if we were past the end of each section.

That means that the logic for phase 1 - before the section - has to go in the previous conditional block, logic for phase 2 - inside the section's conditional and phase 3 logic in the conditional block afterwards. And herein lies the spaghetti and mixing of concerns.

Here is an example to illustrate what I am talking about:

{% highlight javascript linenos%}{% raw %}
const yoff = window.pageYOffset;
const END_OF_SECTION_ONE = 500;
const END_OF_SECTION_TWO = 1200;
const END_OF_SECTION_THREE = 2000;

if (yoff < END_OF_SECTION_ONE) {
  // Things we have to handle here:
  //     - Section 1: Phase 2
  //     - Section 2: Phase 1
} else if (yoff < END_OF_SECTION_TWO) {
  // Things we have to handle here:
  //     - Section 1: Phase 3
  //     - Section 2: Phase 2
  //     - Section 3: Phase 1
} else if (yoff < END_OF_SECTION_THREE) {
  // Things we have to handle here:
  //     - Section 2: Phase 3
  //     - Section 3: Phase 2
}
{% endraw %}{% endhighlight %}

See how mixed up this is?

## The solution
I think it would cool if each section had it's own "controller" function that gets passed in the offset relative to that section's mount point and the duration of the section (these will be defined in configuration somewhere). Then in that controller you can define a conditional block that checks:

* If offset is less than zero - we are before the section and therefore in Phase 1.
* If offset is greater than zero but less than duration - we are inside the section and therefor Phase 2.
* If offset is greater than duration - we have past the section and therefore Phase 3.

{% highlight javascript linenos%}{% raw %}
function sectionCtrl(offset, duration) {
  if (offset < 0) {
    // Phase 1
  } else if (offset < duration) {
    // Phase 2
  } else {
    // Phase 3
  }
}
{% endraw %}{% endhighlight %}

If each section has it's own controller that deals with this then we have beautifully handled both of our issues. Issue one is no longer because the library will pass in the normalised offset and relieve us from having to calculate it manually and issue two is no longer because each section has a dedicated controller - no more mixing of concerns.

### How will the library know where the section is?

This leads us to the configuration of the web page we are making.

My idea is this - each section will be defined using an object like follows:

{% highlight javascript linenos%}{% raw %}
const section = {
  mountPoint: 500,
  duration: 460,
  controller: sectionCtrl,
}
{% endraw %}{% endhighlight %}

Where each option is:
* **mountPoint**: the pixel offset that this section is mounted
* **duration**: the amount of pixels of scroll this section will last
* **controller**: a reference to a function that will be called as the section controller

We will then pass an array of these section configuration objects into the library when we instantiate it and we have a functional page!

{% highlight javascript linenos%}{% raw %}
const p = new ParallaxProvider([
    {
      mountPoint: 0,
      duration: 500,
      controller: sectionCtrl,
    },
    {
      mountPoint: 500,
      duration: 1200,
      controller: sectionTwoCtrl,
    },
    {
      mountPoint: 1300,
      duration: 500,
      controller: sectionThreeCtrl,
]);
{% endraw %}{% endhighlight %}

## Enough design, let's build something

We now have a pretty solid idea of how we want this library to function. Let's create it!

**TODO folder setup**

![Image alt text]({% asset_path nodemon-terminal %}){: class="aligncenter" width="800"}

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
