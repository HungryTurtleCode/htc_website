---
id: 324
title: 'Console.table() &#8211; Javascript Debugging Tips'
date: 2016-01-30T20:40:06+00:00
author: Adrian
layout: post
guid: https://hungryturtlecode.com/?p=324
permalink: /tips-tricks/console-log-table/
factory_shortcodes_assets:
  - 'a:0:{}'
per-page-ath-content:
  - '<title>Console.log() - Javascript Debugging - Hungry Turtle Code</title>'
crp_related_posts:
  - '<div class="crp_related "><h3>You Might Also Find These Interesting...</h3><ul><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/3-ng-repeat-directive/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932269/Angular-quiz-part-3_tuziev.jpg" alt="AngularJS Quiz App Tutorial Part 3 &#8211; Ng-Repeat And Bootstrap" title="AngularJS Quiz App Tutorial Part 3 &#8211; Ng-Repeat And Bootstrap" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/3-ng-repeat-directive/"     class="crp_title">AngularJS Quiz App Tutorial Part 3 &#8211; Ng-Repeat And&hellip;</a></li><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/9-angular-factories/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932313/Angular-quiz-part-9_sjwfx2.jpg" alt="AngularJS Quiz App Tutorial Part 9 &#8211; More About Factories" title="AngularJS Quiz App Tutorial Part 9 &#8211; More About Factories" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/9-angular-factories/"     class="crp_title">AngularJS Quiz App Tutorial Part 9 &#8211; More About&hellip;</a></li><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/4-bootstrap-modal/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932276/Angular-quiz-part-4_xidsve.jpg" alt="AngularJS Quiz App Tutorial Part 4 &#8211; Bootstrap Modal Functionality" title="AngularJS Quiz App Tutorial Part 4 &#8211; Bootstrap Modal Functionality" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/4-bootstrap-modal/"     class="crp_title">AngularJS Quiz App Tutorial Part 4 &#8211; Bootstrap Modal&hellip;</a></li><li><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_200,w_200,x_77,y_0/h_150,w_150/v1452201151/keyboardpart2_jyf4dm.jpg" alt="Fun with jQuery Keyboard Events Part 2" title="Fun with jQuery Keyboard Events Part 2" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/"     class="crp_title">Fun with jQuery Keyboard Events Part 2</a></li><li><a href="https://hungryturtlecode.com/best-programming-languages-to-learn-2016/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,h_150/c_crop,h_150,w_150,x_37,y_0/v1452614939/5872169307_15b5d16087_o_nfril6.jpg" alt="Best Programming Language to Learn in 2016" title="Best Programming Language to Learn in 2016" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/best-programming-languages-to-learn-2016/"     class="crp_title">Best Programming Language to Learn in 2016</a></li><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/5-angular-filters/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932282/Angular-quiz-part-5_qjajqt.jpg" alt="AngularJS Quiz App Tutorial Part 5 &#8211; Ng-model and Angular Filters" title="AngularJS Quiz App Tutorial Part 5 &#8211; Ng-model and Angular Filters" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/5-angular-filters/"     class="crp_title">AngularJS Quiz App Tutorial Part 5 &#8211; Ng-model and&hellip;</a></li><li><a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_400,w_400,x_0,y_0/h_150,w_150/v1463876657/Angular-Quiz-App_kifpk9.jpg" alt="Build An Angular Quiz App From Scratch" title="Build An Angular Quiz App From Scratch" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/"     class="crp_title">Build An Angular Quiz App From Scratch</a></li><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/8-dependency-injection/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932306/Angular-quiz-part-8_imuigb.jpg" alt="AngularJS Quiz App Tutorial Part 8 &#8211; Dependency Injection" title="AngularJS Quiz App Tutorial Part 8 &#8211; Dependency Injection" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/8-dependency-injection/"     class="crp_title">AngularJS Quiz App Tutorial Part 8 &#8211; Dependency&hellip;</a></li></ul><div class="crp_clear"></div></div>'
image: https://res.cloudinary.com/djxscnpzf/image/upload/v1454187383/JavaScript-DebuggngTip_yremrj.jpg
categories:
  - Javascript
  - 'Tips &amp; Tricks'
---
## Is console.log The Only Option?

Like me, many of you probably use console.log() to debug your <a href="https://hungryturtlecode.com/tutorials/javascript-tuts/" target="_blank">javascript</a> code a lot of the time. The problem isn&#8217;t big enough to require the setting of breakpoints <!--more-->but you don&#8217;t want something intrusive like alert().

Console.log() is great for that. But is it always the best solution?

### Let&#8217;s Put Everything On The Table

Some of you may already know about console.log()&#8217;s lesser known brother, console.table(). Although, I would take a guess that many of you have never heard of it. I certainly hadn&#8217;t heard of it until relatively recently.

I don&#8217;t really know why it is such an obscure thing because it is extremely useful.

Below is a video tutorial where I go through using console.table(). As always, there will be a write up about it below, but I urge you to take a look at the video just to see it in action.

## Console.log Debugging Or Console.table()?

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,q_62,w_800/v1454178162/Console-Table-Javascript-debugging-Tip_cabsdo.jpg);">
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

So this will just be a quick one today. As you may already know, or have already guessed, console.table allows you to print out arrays and objects to the console.

This is great because it&#8217;s well organised, unlike the standard dropdowns we get for objects when we console.log them. On top of that you can also sort columns to quickly see exactly what you need to.

Let&#8217;s create ourselves an array to practice with:

<pre class="lang:js decode:true">var turtles = [
    {
        name: "bob",
        type: "loggerhead"
    },
    {
        name: "sally",
        type: "leatherback"
    },
    {
        name: "amanda",
        type: "green"
    }
];</pre>

So here we have a happy group of turtles that we can print out in our table.

### How does console.log() output this?

Just for reference, let&#8217;s print out this array in the console with <span class="lang:js decode:true crayon-inline ">console.log(turtles)</span>  :<img class="aligncenter wp-image-444" src="https://res.cloudinary.com/djxscnpzf/image/upload/v1454185790/console-log-turtles_uc5yv2.jpg" alt="console log debugging output" width="302" height="298" />

### Now let&#8217;s make it better with console.table

Here is the output when we use <span class="lang:js decode:true crayon-inline">console.table(turtles)</span> : <img class="aligncenter wp-image-445" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1454185828/console-table-turtles_ciu374.jpg" alt="console.table debugging output" width="800" height="112" />

You can click on the headers of each column to sort that column. This is a great feature to get a quick overview of some data if you know where it should be.

## How About Using Some JSON?

Probably a more likely use case for this is to take a quick look at some JSON data you receive from an API call. So let&#8217;s simulate that by building an object to test with:

<pre class="lang:js decode:true ">var turtles = {
    badTurtle: {
        name: "bob",
        type: "loggerhead",
        age: 100
    },
    hungryTurtle: {
        name: "sally",
        type: "leatherback",
        age: 83
    },
    excitedTurtle: {
        name: "amanda",
        type: "green",
        age: 56
    }
}</pre>

This object is very much like our previous array except we have now added an age property to each turtle, the reason for this will become clearer shortly.

Again, for reference here is the output from <span class="lang:js decode:true crayon-inline ">console.log(turtles)</span> : <img class="aligncenter wp-image-446" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1454185811/console-log-turtles-object_qj8no9.jpg" alt="console.log debugging output" width="800" height="404" />

And here is the glorious output from <span class="lang:js decode:true crayon-inline ">console.table(turtles)</span>  :<img class="aligncenter wp-image-449" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1454185886/console-table-turtles-object_vcou1u.jpg" alt="console.table debugging output" width="800" height="111" />

Notice here that instead of listing by the index number like it did for the array it will actually use the name assigned to each object as the index. This obviously provides another level of ease to looking through the data.

## What If Our Object Has 20 Properties?

Of course, a problem can arise here if the object we are dealing with has a lot of properties, which will translate as a lot of columns in our table. This could be problematic as the data becomes hard to read through again.

Fortunately, the console.table API allows use to pass in an optional second argument which will specify the columns we are concerned with and only print those out.

This could be done like this: <span class="lang:js decode:true crayon-inline ">console.table(turtles, &#8220;name&#8221;)</span>

Which would produce this output:<img class="aligncenter wp-image-450" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1454185844/console-table-turtles-name_n1shsk.jpg" alt="console.table additional arguments" width="800" height="135" />

If you require many columns, the second argument can be an array containing as many properties as you would like.

Keeping with our turtles example, we may only want the name and age of each turtle (this is why I added a third property to the objects, to allow the selection of more than one column, without selecting them all).

<span class="lang:js decode:true crayon-inline">console.table(turtles, [&#8220;name&#8221;, &#8220;age&#8221;]</span>

Now we will see the following in the console:<img class="aligncenter wp-image-451" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1454185863/console-table-turtles-name-age_a216it.jpg" alt="console.table additional debugging arguments" width="800" height="138" />

This is a very powerful part of the <a href="https://developer.mozilla.org/en/docs/Web/API/console" target="_blank">console API</a> and I feel too few developers are aware of it. I hope you can take this knowledge and use it to become a better developer.

Until next time, take a look at some more [javascript tips and tricks](https://hungryturtlecode.com/tips-tricks/javascript-tips/).

Stay hungry, keep coding.

Adrian

**Please tell your friends about this if you found it useful&#8230;**