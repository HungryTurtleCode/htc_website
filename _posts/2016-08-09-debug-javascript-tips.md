---
id: 1082
title: Debug() – Javascript Debugging Tips
date: 2016-08-09T14:39:30+00:00
author: Adrian
layout: post
guid: https://hungryturtlecode.com/?p=1082
permalink: /tips-tricks/debug-javascript-tips/
factory_shortcodes_assets:
  - 'a:0:{}'
per-page-ath-content:
  - '<title>Debug() - Javascript Debugging - Hungry Turtle Code</title>'
crp_related_posts:
  - '<div class="crp_related "><h3>You Might Also Find These Interesting...</h3><ul><li><a href="https://hungryturtlecode.com/tips-tricks/console-trace/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_400,w_400,x_0,y_0/h_150,w_150/v1469193480/JavaScript_DebuggngTip_1_tgpysg.jpg" alt="Console.trace() &#8211; Javascript Debugging Tips" title="Console.trace() &#8211; Javascript Debugging Tips" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tips-tricks/console-trace/"     class="crp_title">Console.trace() &#8211; Javascript Debugging Tips</a></li><li><a href="https://hungryturtlecode.com/tips-tricks/console-time/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_400,w_400,x_0,y_0/h_150,w_150/v1469797935/JavaScript_DebuggngTip_q5dxwx.jpg" alt="Console.time() – Javascript Debugging Tips" title="Console.time() – Javascript Debugging Tips" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tips-tricks/console-time/"     class="crp_title">Console.time() – Javascript Debugging Tips</a></li><li><a href="https://hungryturtlecode.com/tips-tricks/console-log-table/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_400,w_400,x_0,y_0/h_150,w_150/v1454187383/JavaScript-DebuggngTip_yremrj.jpg" alt="Console.table() &#8211; Javascript Debugging Tips" title="Console.table() &#8211; Javascript Debugging Tips" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tips-tricks/console-log-table/"     class="crp_title">Console.table() &#8211; Javascript Debugging Tips</a></li><li><a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_400,w_400,x_0,y_0/h_150,w_150/v1463876657/Angular-Quiz-App_kifpk9.jpg" alt="Build An Angular Quiz App From Scratch" title="Build An Angular Quiz App From Scratch" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/1-build-angular-quiz-app-scratch/"     class="crp_title">Build An Angular Quiz App From Scratch</a></li><li><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_200,w_200,x_77,y_0/h_150,w_150/v1450671694/other-side-jquery-tutorial_ndl1kx.jpg" alt="Fun with jQuery Keyboard Events" title="Fun with jQuery Keyboard Events" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events/"     class="crp_title">Fun with jQuery Keyboard Events</a></li><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932356/Angular-quiz-part-16_nvilyd.jpg" alt="AngularJS Quiz App Tutorial Part 16 – Error Handling With Bootstrap Alerts" title="AngularJS Quiz App Tutorial Part 16 – Error Handling With Bootstrap Alerts" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/16-bootstrap-alerts/"     class="crp_title">AngularJS Quiz App Tutorial Part 16 – Error Handling With&hellip;</a></li><li><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_crop,h_200,w_200,x_77,y_0/h_150,w_150/v1452201151/keyboardpart2_jyf4dm.jpg" alt="Fun with jQuery Keyboard Events Part 2" title="Fun with jQuery Keyboard Events Part 2" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/tutorials/jquery-keyboard-events-part-2/"     class="crp_title">Fun with jQuery Keyboard Events Part 2</a></li><li><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/7-angular-services/"    ><img src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_180/c_crop,h_180,w_180,x_0,y_0/h_150,w_150/v1463932298/Angular-quiz-part-7_hy22ev.jpg" alt="AngularJS Quiz App Tutorial Part 7 &#8211; Factories and Services" title="AngularJS Quiz App Tutorial Part 7 &#8211; Factories and Services" width="150" height="150" class="crp_thumb crp_featured" /></a><a href="https://hungryturtlecode.com/code-projects/angular-quiz-app/7-angular-services/"     class="crp_title">AngularJS Quiz App Tutorial Part 7 &#8211; Factories and&hellip;</a></li></ul><div class="crp_clear"></div></div>'
image: https://res.cloudinary.com/djxscnpzf/image/upload/v1470611214/JavaScript_DebuggngTip_msy13l.jpg
categories:
  - Javascript
  - 'Tips &amp; Tricks'
---
## Debug() &#8211; The Death Of Ctrl+f

If you are anything like me, you have wasted countless hours of your life using ctrl+f to find functions inside your code. If you only have one file, ctrl+f is still going to be your best bet. But as soon as you start dealing with many files, the debug() method becomes a life saver!

This post will be continuing with my Javascript debugging series. If this is the first one you are seeing, you may be interested in some of the others as well.

### Videos Are Cool?

<div class="embedoverlay overlay" style="background: url(http://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1470610513/Thumbnail_ekoild.jpg);">
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

This isn&#8217;t going to be a long one today. The debug method is a pretty simple one to get your head around.

The HTML we are starting with is slightly different this time.

<pre class="lang:xhtml decode:true " title="HTML To Use">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
	&lt;meta charset="UTF-8"&gt;
	&lt;title&gt;Debug Method&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
	&lt;h1&gt;Experimenting With debug()&lt;/h1&gt;

	&lt;script src="script.js"&gt;&lt;/script&gt;
	&lt;script src="script2.js"&gt;&lt;/script&gt;
	&lt;script src="script3.js"&gt;&lt;/script&gt;
	&lt;script src="script4.js"&gt;&lt;/script&gt;
	&lt;script src="script5.js"&gt;&lt;/script&gt;
	
&lt;/body&gt;
&lt;/html&gt;</pre>

We are starting with 5 different script files to illustrate the power of the debug method. Inside each of these files we have 10 functions. Each of which just output their number as an alert. Like this:

<pre class="lang:js decode:true " title="First Javascript File">function function1(){
	alert("1");
}
function function2(){
	alert("2");
}
function function3(){
	alert("3");
}
function function4(){
	alert("4");
}
function function5(){
	alert("5");
}
function function6(){
	alert("6");
}
function function7(){
	alert("7");
}
function function8(){
	alert("8");
}
function function9(){
	alert("9");
}</pre>

### I Want To Find function23

Let&#8217;s assume that we don&#8217;t know what file function23 is in, but we want to find it. We are inside the browser and open up the sources tab. We could open up all the script files and start with the trusty ctrl+f in all the files looking for function23.

Or, we could use the debug method. All we need to do is pass the name of the function that we want to find into the debug method. In our case <span class="lang:js decode:true crayon-inline ">debug(function23)</span> . Run it in the console.

Nothing happened!

What is happening now, is the code is being monitored. Any time the function23 is called the code execution will stop and you will be jumped straight to the sources tab and taking into the code for function23. Pretty cool! Let&#8217;s try it by invoking function23 manually in the console.

<img class="aligncenter wp-image-1101" src="https://res.cloudinary.com/djxscnpzf/image/upload/c_scale,w_800/v1470610824/Selection_001_ixcb48.jpg" alt="Manually calling function 23 with debug" width="800" height="592" />

Straight away you can see that the execution of the code has been paused as soon as we called function23 manually from the console. Below you can also see where the code jumped to. Yep, function23 is highlighted, inside script3.js. No need to have to use ctrl+f to find that little rascal again!

<img class="aligncenter wp-image-1102" src="https://res.cloudinary.com/djxscnpzf/image/upload/v1470610824/Selection_002_pmbdhy.jpg" alt="Taken into the sources tab to function23" width="577" height="479" />

### Code Paused Before The Function Runs

A pretty awesome part about this is that the code execution pauses before the code inside the function runs. This means that if you in your local environment you can now add code into that function directly from the sources tab and then execute it without ever having to tamper with the actual file.

This can then tie in with other tips I have written about, like console.trace.

Maybe we know that a bug occurs somewhere in the callstack leading up to function23 but we don&#8217;t know the exact call stack as the application is dynamic. We can use debug on function23 and then use the application until the bug occurs, which will lead to a pause at function23.

Now we can insert a console.trace onto the first line of the function then resume execution. This console.trace will give us the exact call stack that lead up to the function23 call in this use case.

Can you see how using all these tips and ideas together can really speed things up? That means more time to do the actual coding!

Until next time,

Stay hungry and keep coding,

Adrian

&nbsp;