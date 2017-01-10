---
title: Fun with jQuery Keyboard Events
date: 2015-12-27T12:02:02+00:00
author: Adrian
layout: post
permalink: /tutorials/jquery-keyboard-events/
image: https://res.cloudinary.com/djxscnpzf/image/upload/v1450671694/other-side-jquery-tutorial_ndl1kx.jpg
excerpt: How do I track keystrokes with jQuery? I often hear people who are just getting into programming ask things like, “but how do I use this in the real world?”. It is all well and good understanding things from a …
categories:
  - Javascript
  - jQuery
  - Tutorials
---
## How do I track keystrokes with jQuery?

I often hear people who are just getting into programming ask things like, &#8220;but how do I use this in the real world?&#8221;. It is all well and good understanding things from a theoretical standpoint, but it&#8217;s all about actually using that knowledge to make something awesome.

So today I am going to explain how you can build a pretty simple effect using <a href="https://hungryturtlecode.com/tutorials/javascript-tuts/jquery-tuts/" target="_blank">jQuery</a> by monitoring user keystrokes.

### But What Is This Awesome Effect?

It is a recreation of a marketing campaign that Honda used a few years ago. The campaign itself was called &#8220;The Other Side&#8221; and was used to showcase the difference in driver experience between two of their cars.

The effect itself is best experienced than explained, but unfortunately the original webpage doesn&#8217;t exist anymore. You can watch the video tutorial below and I demo the effect.

To try (and probably fail) to explain the effect &#8211; a video is played which looks like a typical advert for this car, but then it prompts you to press the &#8220;r&#8221; key. When you press the &#8220;r&#8221; key, the video switches to a different advert for a different car.

However, the clever bit is that each of the two adverts are practically identical, one just has a &#8220;light&#8221; happy feeling while the other has a darker more adventurous feel.

By pressing and releasing the &#8220;r&#8221; key, you can switch back and forth between these two &#8220;parallel universes&#8221; so to speak.

### You Talk Too Much; Show Me Some Code!

Head over to the <a href="https://github.com/adiman9/hondadoubleside" target="_blank">GitHub repo</a> and you will be able to get the video assets you need. You can also take a look at the code from the tutorial.

### Video or Text Tutorial? Pick Your Side.

I hate to discriminate, so I offer all my tutorials as both videos for us more visually inclined learners and as a full text based tutorial for those of you lovely people that prefer to read. Or maybe you want to read the tutorial then solidify that by watching the video? Or maybe you just want to leave now. Whatever floats your boat.

## &#8220;Other Side&#8221; jQuery Video Tutorial

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_775/v1451773551/fun_with_keyboard_events3_lej3hr.jpg);">
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

### Reading is cool though&#8230;

## The Other Side &#8211; A Story of Two Parts.

So I decided to split this tutorial into two separate parts. The first part (this part) will purely be focusing on just creating the effect as quickly as possible. Let&#8217;s just get some results!

Part 2 can be found [here](https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/).

The code written in this tutorial will be very much in the style of a typical <a href="https://hungryturtlecode.com/tips-tricks/javascript-tips/" target="_blank">beginner JavaScript</a> and specifically jQuery developer.

If just creating the effect is all you are after, this tutorial is probably all you need. If you are wanting to improve as a JS developer, then [part 2](https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/) is right up your alley.

In the next part we will take the code we have written in the part and refactor it into a much more modular style and get the code working a lot more efficiently with better general coding practices.

## Let&#8217;s Get Cracking Shall We

If you haven&#8217;t seen this effect already, watch the first minute of the above video where I briefly demo the original advert. It will really help your understanding of what&#8217;s going on if you have seen it.

So to start off, this is the HTML structure we will need to get going.

<pre class="scroll:true lang:xhtml decode:true " title="The HTML">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Honda Test&lt;/title&gt;
    &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;How did Honda do the "Double Sided Story"?&lt;/h1&gt;
    &lt;div class="container"&gt;
        &lt;div id="darkvidcont" class="vidcont"&gt;
            &lt;video id="darkvid" muted src="assets\dark side final.mp4" controls width="1260" height="536"&gt;&lt;/video&gt;
        &lt;/div&gt;
        &lt;div id="lightvidcont" class="vidcont"&gt;
            &lt;video id="lightvid" src="assets\light side final.mp4" controls width="1260" height="536"&gt;&lt;/video&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;script src="https://code.jquery.com/jquery-2.1.4.min.js"&gt;&lt;/script&gt;
    &lt;script src="js/main.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

There isn&#8217;t anything fancy going on here. The key parts are the two videos and their containing divs. Of course, we only want to see and hear one video at any given time, so we mute the video inside <span class="lang:xhtml decode:true crayon-inline ">id=&#8221;darkvidcont&#8221;</span> initially.

Before we get started with the JavaScript there are a few little tricky things we have to take care of with the CSS.

The way the effect will work is both videos will play at the same time, they will just be on top of each other. Only the volume of the visible video will be on &#8211; this is why we muted the other video in the HTML. This gives the appearance that there is only one video on the page.

When the user presses the &#8220;r&#8221; key (or whatever key you want to use) the currently visible video will be muted, then moved off the screen. This will expose the video behind it, which will be unmuted &#8211; leaving the impression that that is now the only video playing.

When the key is released, the reverse occurs and the originally visible video is now back in place and unmuted.

## What Has This Got To Do With CSS?

Well, the easiest way to move elements back and forth off the screen is <span class="lang:css decode:true crayon-inline">position: absolute;</span>and then programmatically change the position rules (top, bottom, left right).

Easy! Right? We can simply reference the &#8220;vidcont&#8221; class, which references the respective containers for the two videos.

<pre class="lang:css decode:true " title="Video Container CSS">.vidcont{
    position: absolute;
}</pre>

Unfortunately, as some of you may know, when you position an element absolutely the default frame of reference to position it to becomes the entire window. So if we were to set <span class="lang:default decode:true crayon-inline ">top: 0; left: 0;</span>  we would put the videos in the very top left of the window.

This isn&#8217;t what we want. Instead, we want it to be positioned relative to our overall container (which has the convenient class of &#8220;container&#8221;).

### The Trick With position: absolute

The way position absolute works is it needs a frame of reference. That frame of reference is &#8220;the nearest parent element that is positioned&#8221;.

What is meant by &#8220;element that is positioned&#8221; is an element that is either <span class="lang:default decode:true crayon-inline ">position: relative;</span>  or <span class="lang:default decode:true crayon-inline">position: absolute;</span> . Any normal element you create is not positioned as the default for HTML elements is <span class="lang:default decode:true crayon-inline ">position: static;</span> .

A simple way around this is to just give our <span class="lang:default decode:true crayon-inline "><div class=&#8221;container&#8221;> </span> the CSS rule of position relative. This won&#8217;t affect where on the page the element is unless we change the top, left etc rules.

But it will now become the frame of reference for any absolutely positioned elements inside it.

So now we can add that as well as some house keeping CSS:

<pre class="lang:css decode:true " title="The REst of the CSS">.container{
    margin: 50px auto;
    width: 1260px;
    position: relative;
}

h1{
    margin: 50px auto;
    width: 700px;
}</pre>

## On To The JavaScript!

To get us started &#8211; as we are using jQuery &#8211; we will throw in the obligatory <span class="lang:js decode:true crayon-inline ">$(document).ready();</span>  just to ensure that all the code we write only starts executing when the page has loaded.

I use headphones a lot, so I like to just start by setting the volume on both videos to something low. Just to try reduce the risk of me doing something dumb (which is a lot) and blasting my ears.

This is achieved with the prop method and we pass it the attributes of volume and set it to 0.2.

Now its time to create an event listener to listen for keydown events. This is done using the .on() method attached to the whole document and passing it the attribute of &#8220;keydown&#8221; and then placing our logic inside the callback function. We also give the callback function a parameter which will be passed to it by jQuery.

This will be the information about the event itself. Here I have called this parameter event, but you can call it whatever you want.

So what we have so far is:

<pre class="lang:js decode:true" title="Intermediate jQuery ">$(document).ready(function(){

    $('#lightvid').prop('volume', 0.2);
    $('#darkvid').prop('volume', 0.2);

    $(document).on('keydown', function (event) {
        //Some Logic
    });
});</pre>

This will trigger every single time any key is pressed. This isn&#8217;t quite where we need to be. What we need to do now is add some logic that checks if the key that is pressed.

Like I said above, we have the callback function a parameter which will be given to us by jQuery and will contain the information about the event that triggered the callback. We can use this to run our check for what key was pressed.

<pre class="lang:js decode:true " title="Check if r key is pressed">if(event.keyCode === 82){
    // What to do when the "r" key is pressed.
}</pre>

The keydown event has an attribute called keyCode which is a number that corresponds to the key that was pressed. Here we are checking if that keyCode is 82, which corresponds to lower case r. To see a list of keyCodes take a look at <a href="https://css-tricks.com/snippets/javascript/javascript-keycodes/" target="_blank">CSS-Tricks</a>.

Now we can specify what we want to happen when our key is pressed. In this case we want to move the currently visible video off the screen and mute it, while unmuting the newly exposed video.

<pre class="lang:default decode:true" title="Key Down Logic">if(e.keyCode === 82){
    $('#lightvidcont').css('top', -2000 + 'px');
    $('#lightvid').prop('muted', true);
    $('#darkvid').prop('muted', false);
}</pre>

The exact reverse process has to then happen when the key is released &#8211; when the keyup event is fired.

<pre class="lang:default decode:true " title="Key Up Logic">$(document).on('keyup', function(e){
    if(e.keyCode === 82){
        $('#lightvidcont').css('top', 0 + 'px');
        $('#lightvid').prop('muted', false);
        $('#darkvid').prop('muted', true);
    }
});</pre>

## Yay! We are done.

Kind of. When you press and release your key of choice, it will indeed move the top video on and off the screen. The problem is that if you hit play on the top video, the bottom video remains paused &#8211; so you don&#8217;t get the wonderful synchronised effect.

So we now have to add a bit of logic that couples the playing and pausing of the two respective videos.

We will start by invoking the trusty .on() method on our video and passing it the event of &#8220;play&#8221;. Inside the callback function we have many options as to how you can couple the playing of both videos.

Bearing in mind that using <span class="lang:js decode:true crayon-inline">$(&#8216;video&#8217;).on(&#8216;play&#8217;&#8230;</span>  will trigger every time either video is played. So what I did to couple them is to simply loop through all videos on the page (only two here) and play them all. The ensures that regardless of which video is played, all videos will couple with it.

<pre class="lang:js decode:true" title="Play Coupling">$('video').on('play', function() {
    for(var i = 0; i &lt; 2; i++){
        $('video').get(i).play();
    }
});</pre>

This exact same process is repeated for the pause event to couple that and now we are done!

<pre class="lang:js decode:true " title="Final JavaScript Code">$(document).ready(function(){

    $('#lightvid').prop('volume', 0.2);
    $('#darkvid').prop('volume', 0.2);

    $(document).on('keydown', function (e) {
        if(e.keyCode === 82){
            $('#lightvidcont').css('top', -2000 + 'px');
            $('#lightvid').prop('muted', true);
            $('#darkvid').prop('muted', false);
        }
    });

    $(document).on('keyup', function(e){
        if(e.keyCode === 82){
            $('#lightvidcont').css('top', 0 + 'px');
            $('#lightvid').prop('muted', false);
            $('#darkvid').prop('muted', true);
        }
    });

    $('video').on('pause', function() {
        for(var i = 0; i &lt; 2; i++){
            $('video').get(i).pause();
        }
    });

    $('video').on('play', function() {
        for(var i = 0; i &lt; 2; i++){
            $('video').get(i).play();
        }
    });
});</pre>

And that&#8217;s all there is to it. Of course, this is not necessarily the best way of doing this, but it is certainly one way of doing it.

Now you can head over to [part 2](https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/), where we will take this code and clean it up a bit and make it modular and easier to read.

See you there!

Adrian
