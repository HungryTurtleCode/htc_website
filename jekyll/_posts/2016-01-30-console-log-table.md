---
title: 'Console.table() - Javascript Debugging Tips'
date: 2016-01-30T20:40:06+00:00
author: Adrian
layout: post-sidebar
alias: /tips-tricks/console-log-table/
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2Fconsole_table.jpg?alt=media&token=5ff492d9-f393-45b8-8acb-02f94c51e497 
excerpt: Is console.log The Only Option? Like me, many of you probably use console.log() to debug your javascript code a lot of the time. The problem isn’t big enough to require the setting of breakpoints
course-index: js-debugging
videoID: zi9JA9LLIcM
categories:
  - Tutorials
tags:
  - Javascript
  - Debugging
---
## Is console.log The Only Option?

Like me, many of you probably use console.log() to debug your [javascript]({{site.baseurl}}/tags/javascript/){: target="_blank"}<!--_--> javascript</a> code a lot of the time. The problem isn&#8217;t big enough to require the setting of breakpoints <!--more-->but you don&#8217;t want something intrusive like alert().

Console.log() is great for that. But is it always the best solution?

### Let&#8217;s Put Everything On The Table

Some of you may already know about console.log()&#8217;s lesser known brother, console.table(). Although, I would take a guess that many of you have never heard of it. I certainly hadn&#8217;t heard of it until relatively recently.

I don&#8217;t really know why it is such an obscure thing because it is extremely useful.

## Console.log Debugging Or Console.table()?

So this will just be a quick one today. As you may already know, or have already guessed, console.table allows you to print out arrays and objects to the console.

This is great because it&#8217;s well organised, unlike the standard dropdowns we get for objects when we console.log them. On top of that you can also sort columns to quickly see exactly what you need to.

Let&#8217;s create ourselves an array to practice with:

{% highlight javascript linenos%}
var turtles = [
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
];
{% endhighlight %}

So here we have a happy group of turtles that we can print out in our table.

### How does console.log() output this?

Just for reference, let&#8217;s print out this array in the console with 
{% ihighlight javascript %}{% raw %}
console.log(turtles)
{% endraw %}{% endihighlight %}:

![console log debugging output]({% asset_path console_log_turtle %}){: class="aligncenter" width="302" height="298"}

### Now let&#8217;s make it better with console.table

Here is the output when we use 
{% ihighlight javascript %}{% raw %}
console.table(turtles)
{% endraw %}{% endihighlight %}: 

![console.table debugging output]({% asset_path console_table_turtle %}){: class="aligncenter" width="800" height="112"}

You can click on the headers of each column to sort that column. This is a great feature to get a quick overview of some data if you know where it should be.

## How About Using Some JSON?

Probably a more likely use case for this is to take a quick look at some JSON data you receive from an API call. So let&#8217;s simulate that by building an object to test with:

{% highlight javascript linenos %}
var turtles = {
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
}
{% endhighlight %}

This object is very much like our previous array except we have now added an age property to each turtle, the reason for this will become clearer shortly.

Again, for reference here is the output from 
{% ihighlight javascript %}{% raw %}
console.log(turtles)
{% endraw %}{% endihighlight %}: 

![console.log debugging output]({% asset_path console_log_turtle2 %}){: class="aligncenter" width="800" height="404"}

And here is the glorious output from 
{% ihighlight javascript %}{% raw %}
console.table(turtles)
{% endraw %}{% endihighlight %}:

![console.table debugging output]({% asset_path console_table_turtle2 %}){: class="aligncenter" width="800" height="111"}

Notice here that instead of listing by the index number like it did for the array it will actually use the name assigned to each object as the index. This obviously provides another level of ease to looking through the data.

## What If Our Object Has 20 Properties?

Of course, a problem can arise here if the object we are dealing with has a lot of properties, which will translate as a lot of columns in our table. This could be problematic as the data becomes hard to read through again.

Fortunately, the console.table API allows use to pass in an optional second argument which will specify the columns we are concerned with and only print those out.

This could be done like this: 
{% ihighlight javascript %}{% raw %}
console.table(turtles, "name&")
{% endraw %}{% endihighlight %}

Which would produce this output:

![console.table additional arguments]({% asset_path console_table_turtle_name %}){: class="aligncenter" width="800" height="135"}

If you require many columns, the second argument can be an array containing as many properties as you would like.

Keeping with our turtles example, we may only want the name and age of each turtle (this is why I added a third property to the objects, to allow the selection of more than one column, without selecting them all).

{% ihighlight javascript %}{% raw %}
console.table(turtles, ["name", "age"]
{% endraw %}{% endihighlight %}

Now we will see the following in the console:

![console.table additional debugging arguments]({% asset_path console_table_turtle_name_age %}){: class="aligncenter" width="800" height="138"}

This is a very powerful part of the [console API](https://developer.mozilla.org/en/docs/Web/API/console){: target="_blank"}<!--_--> and I feel too few developers are aware of it. I hope you can take this knowledge and use it to become a better developer.

Until next time, take a look at some more [javascript tips and tricks]({{site.baseurl}}/tags/javascript/).

Stay hungry, keep coding.

Adrian

**Please tell your friends about this if you found it useful&#8230;**
