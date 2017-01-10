---
id: 1078
title: Console.time() – Javascript Debugging Tips
date: 2016-07-29T14:08:37+00:00
author: Adrian
layout: post
guid: https://hungryturtlecode.com/?p=1078
permalink: /tips-tricks/console-time/
factory_shortcodes_assets:
  - 'a:0:{}'
per-page-ath-content:
  - '<title>Console.time() - Javascript Debugging - Hungry Turtle Code</title>'
crp_related_posts:
  - '<div class="crp_related "><h3>You Might Also Find These Interesting...</h3><ul><li><a href="https://hungryturtlecode.com/tips-tricks/console-log-table/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_400,w_400,x_0,y_0/h_150,w_150/v1454187383/JavaScript-DebuggngTip_yremrj.jpg" alt="Console.table() &#8211; Javascript Debugging Tips" title="Console.table() &#8211; Javascript Debugging Tips" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tips-tricks/console-log-table/"     class="crp_title">Console.table() &#8211; Javascript Debugging Tips</a></li><li><a href="https://hungryturtlecode.com/tips-tricks/console-trace/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_400,w_400,x_0,y_0/h_150,w_150/v1469193480/JavaScript_DebuggngTip_1_tgpysg.jpg" alt="Console.trace() &#8211; Javascript Debugging Tips" title="Console.trace() &#8211; Javascript Debugging Tips" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tips-tricks/console-trace/"     class="crp_title">Console.trace() &#8211; Javascript Debugging Tips</a></li><li><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_200,w_200,x_77,y_0/h_150,w_150/v1452201151/keyboardpart2_jyf4dm.jpg" alt="Fun with jQuery Keyboard Events Part 2" title="Fun with jQuery Keyboard Events Part 2" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/"     class="crp_title">Fun with jQuery Keyboard Events Part 2</a></li><li><a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_400,w_400,x_0,y_0/h_150,w_150/v1463876657/Angular-Quiz-App_kifpk9.jpg" alt="Build An Angular Quiz App From Scratch" title="Build An Angular Quiz App From Scratch" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/"     class="crp_title">Build An Angular Quiz App From Scratch</a></li><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/12-controller-logic/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932332/Angular-quiz-part-12_sfbie2.jpg" alt="AngularJS Quiz App Tutorial Part 12 – Controller Logic" title="AngularJS Quiz App Tutorial Part 12 – Controller Logic" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/12-controller-logic/"     class="crp_title">AngularJS Quiz App Tutorial Part 12 – Controller Logic</a></li><li><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_200,w_200,x_77,y_0/h_150,w_150/v1450671694/other-side-jquery-tutorial_ndl1kx.jpg" alt="Fun with jQuery Keyboard Events" title="Fun with jQuery Keyboard Events" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events/"     class="crp_title">Fun with jQuery Keyboard Events</a></li><li><a href="https://hungryturtlecode.com/best-programming-languages-to-learn-2016/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,h_150/c_crop,h_150,w_150,x_37,y_0/v1452614939/5872169307_15b5d16087_o_nfril6.jpg" alt="Best Programming Language to Learn in 2016" title="Best Programming Language to Learn in 2016" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/best-programming-languages-to-learn-2016/"     class="crp_title">Best Programming Language to Learn in 2016</a></li><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932356/Angular-quiz-part-16_nvilyd.jpg" alt="AngularJS Quiz App Tutorial Part 16 – Error Handling With Bootstrap Alerts" title="AngularJS Quiz App Tutorial Part 16 – Error Handling With Bootstrap Alerts" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/"     class="crp_title">AngularJS Quiz App Tutorial Part 16 – Error Handling With&hellip;</a></li></ul><div class="crp_clear"></div></div>'
image: https://res.cloudinary.com/djxscnpzf/image/upload/v1469797935/JavaScript_DebuggngTip_q5dxwx.jpg
categories:
  - Javascript
  - 'Tips &amp; Tricks'
---
## Just In Time &#8211; Console.time

I have seen some amazing ways of timing how long javascript code takes to run. Taking timestamps and comparing them is a common way. But console.time is method in the console API that allows you to do exactly that with not other hassle.

This isn&#8217;t the first <a href="https://hungryturtlecode.com/tips-tricks/javascript-tips/" target="_blank">Javascript debugging tip</a> I have given. You can check out <a href="https://hungryturtlecode.com/tips-tricks/console-log-table/" target="_blank">console.table</a> and <a href="https://hungryturtlecode.com/tips-tricks/console-trace/" target="_blank">console.trace</a>, if you haven&#8217;t already.

### Video Tutorial

<div class="embedoverlay overlay" style="background: url(https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1469796112/Youtube_Thumbnail_t1nliq.jpg);">
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

Starting off, here is the very boring HTML that I started with.

<pre class="lang:xhtml decode:true " title="The HTML Used">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
	&lt;meta charset="UTF-8"&gt;
	&lt;title&gt;Console.Time&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;h1&gt;Experimenting With console.time()&lt;/h1&gt;

	&lt;script src="script.js"&gt;&lt;/script&gt;
	
&lt;/body&gt;
&lt;/html&gt;</pre>

## Let&#8217;s Take Our Time

If we want to time how long a bit of code takes to run, we will probably want some code that takes a bit of time to run in the first place. No point timing how long it takes to add two numbers together.

Conditionals take a bit of time to compute, so let&#8217;s have loads of them! We can create a for loop to loop through millions of times and on every loop, check if it is the end of the loop. That should take some time to run.

<pre class="lang:js decode:true" title="Javascript For Loop With Conditional">for(var i = 0; i &lt; 100000000; i++){
    if(i == 99999999){
			
    }
}</pre>

Now that we have that, we can use console.time to actually time how long it takes to run. To do that we need to put a console.time call before the start of the for loop and a console.timeEnd call after the for loop has run.

You can also have many instances of console.time running at any given point. To distinguish between them all, you can give them each a name, which is the argument that console.time and timeEnd each take. We will just call this one &#8220;firstTimer&#8221;.

<pre class="lang:js decode:true" title="Adding console.time calls">console.time("firstTimer");

for(var i = 0; i &lt; 100000000; i++){
    if(i == 99999999){
	console.timeEnd("firstTimer");
    }
}

</pre>

### Run The Code

If you check the console once this code has been executed you will see this:

<img class="alignleft wp-image-1089" title="First console.time" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_400/v1469796843/Selection_001_puxuoj.jpg" alt="console output" width="400" height="198" />

It looped through 100 million times and made a conditional check on each one, all in 0.315secs. I find that pretty amazing. Computers eh?

But why stop there? I said that you can have multiple instances of console.time running inside the same code. So let&#8217;s try that.

This time I think I will use setTimeout to &#8220;waste&#8221; some time. I can set it to take a certain amount of time before the next code runs, which will be the console.timeEnd call.

<pre class="lang:js decode:true" title="Using setTimeout">console.time("secondTimer");

setTimeout(function(){

    console.timeEnd("secondTimer");

}, 2000);</pre>

Running all this code inside the browser we see this:

<img class="wp-image-1090 aligncenter" title="Second time" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_400/v1469796843/Selection_002_tao5uh.jpg" alt="second timer console output" width="400" height="232" />

The first timer runs the same as it did but then we get the second call to console.time. Notice it too slightly more than the 2000 that we set in the timeout. This will be the overhead of actually calling the functions involved in the code.

## Can You Run Two Console.time&#8217;s Simultaneously?

Of course! Let&#8217;s try it. Let&#8217;s call a third console.time at the same time that we call the second. But put a second setTimeout inside the first one and only end the third console.time when the second timeout completes.

<pre class="lang:js decode:true" title="Simultaneous console.time calls">console.time("secondTimer");
console.time("thirdTimer");

setTimeout(function(){

    console.timeEnd("secondTimer");

    setTimeout(function(){

	console.timeEnd("thirdTimer");

    }, 3000);

}, 2000);</pre>

Running this in the browser we get three timer values. The first two are the same as we have seen in the past. Then we also get the third one which is the first timeout of 2000ms plus the second period of 3000ms, totalling 5000ms plus a bit of overhead as before.

<img class="aligncenter wp-image-1095" title="Third Timer" src="https://res.cloudinary.com/djxscnpzf/image/upload/v1469797184/Selection_004_hvlyuz.jpg" alt="Third Timer Console Output" width="630" height="388" />

There you go. That is about all there is to say about console.time. Go out and use this in your own projects and make your code a bit more efficient by learning where your bottlenecks are.

Until next time,

Stay hungry and keep coding,

Adrian

&nbsp;

**Please tell your friends about this if you found it useful…**