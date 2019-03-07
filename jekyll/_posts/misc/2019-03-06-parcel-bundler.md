---
title: What is Parcel Bundler?
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FWhat%20Is%20Parcel%20Bundler.jpg?alt=media&token=86dccb67-3691-4946-8c75-7f045da6d68a
excerpt: What is Parcel Bundler and why is it the future? For years now javascript bundlers have become the norm for frontend development workflows. But it is almost a cliche to say that they are difficult to set up and configure. Parcel Bundler aims to solve that by giving you a zero configuration option with all the power of the currently accepted tooling.

videoID: Wwh3WJ41znI

categories:
  - Tutorials
tags:
  - Javascript
  - Tooling
  - React
resources:
  - name: Parcel
    link: https://parceljs.org
---
## Why is Parcel the future?

If you have spent any amount of time in the javascript community you have either run into a problem with configuring a build system / bundler or you have heard people moaning about problems they have had with it. It is the single biggest barrier to entry in the javascript community. No one wants to spend hours just to "get ready" to write actual code.

Most of the modern frameworks have realised that this is a problem and try to help by providing zero config solutions that abstract the tooling away from you. These are things like [create react app](https://github.com/facebook/create-react-app) and [Angular CLI](https://cli.angular.io/). These tools are amazing but the problem with them is they are tied to a specific framework.

What if you want to just tinker with all sorts of different things in javascript just to get a feel for them. Or what if you simply want to build an entire project with just Vanilla Javascript? [Yes people still do that]({{site.baseurl}}/projects/parallax-mountains/).

In that case you have three options:
1. Put everything in one huge file to avoid the need to imports.
2. Use explicitly referenced global script tags so you can split into multiple files.
3. Use a bundler.

Option 1 and 2 limit the amount of modern javascript syntax you can use. You will have to write only code that has browser support that matches your needs. Option 1 is a complete no go because your code will become unmaintainable extremely quickly.

So that leaves options 3: use a bundler. However, I certainly wouldn't want to spend hours setting up Webpack just to start hacking on such a project (for the record, I love webpack and use it all the time. It's just no the easiest thing for a beginner to get started with).

## The solution
The solution to all this is a project called [Parcel](https://parceljs.org). It is a zero configuration module bundler. What that means is gives you all the conveniences of using a bundler (ability to use modules, modern syntax, importing non-javascript assets like css and images etc) but it figures out the tools you need instead of you having to manually configure it.

When I first heard about this I honestly thought it would be a hokey pipe dream thing that barely worked. But much to my surprise I started using it and found that for the most part it just works.

### The beauty
The beauty of this tool is it allows the developers (us) to focus on actually writing code instead of configuring their development environment. In the perfect world we want to just write the code we need and have it just work. Unfortunately, in the real world that isn't how things work - we need to install the dependencies and tools required to get everything working. Parcel does a pretty good job (it's far from perfect but it is pretty amazing) at doing the heavy lifting for us.

## An example
I'm going to illustrate the power of Parcel by going back to the roots of how most of us learned to write javascript - by adding a script tag that references an {% ihighlight bash %}{% raw %}
index.js
{% endraw %}{% endihighlight %} and then writing our code in that without the need for build tools. But as we will see, Parcel allows us to extend that workflow to use all the bundler features as well!

### Start

Create a new {% ihighlight bash %}{% raw %}
index.html
{% endraw %}{% endihighlight %} and fill it with the standard boilerplate code:

{% highlight html linenos%}{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Parcel</title>
</head>
<body>
  <script src="index.js"></script>
</body>
</html>
{% endraw %}{% endhighlight %}

Then create the {% ihighlight bash %}{% raw %}
index.js
{% endraw %}{% endihighlight %} and put a hello world console log in there:

{% highlight javascript linenos%}{% raw %}
console.log('Hello World');
{% endraw %}{% endhighlight %}

Ahh the memories. Now we can use a tool like 
{% ihighlight bash %}{% raw %}
live-server
{% endraw %}{% endihighlight %} to run this code in the browser. This will show us our beautify "hello world" in the console. This workflow is really nice until we want to start using modern javascript features that the browser doesn't support yet. Things like module import and exports.

We can quickly illustrate this by creating another file called {% ihighlight bash %}{% raw %}
hello.js
{% endraw %}{% endihighlight %} and fill it with the following code:

{% highlight javascript linenos%}{% raw %}
export function hello(name) {
  console.log('Hello', name);
}
{% endraw %}{% endhighlight %}

Now we want to import and run that function into our main index.js file:

{% highlight javascript linenos%}{% raw %}
import { hello } from './hello';

hello('Hungry Turtle Code');

// rest of code
{% endraw %}{% endhighlight %}

With our live-server still running we can check out what the browser thinks of our changes:

![Unexpected Token Console Error]({% asset_path no_parcel_error %}){: class="aligncenter"}

**Woops**

The unexpected token is the opening { in the import statement. The browser has no idea what that is.

## Parcel to the rescue

In the past, if we wanted to solve this problem we would have to spend the next several hours configuring a build tools or bundler to allow us to use this syntax. But no more! Just install parcel:

{% highlight bash linenos%}{% raw %}
yarn add --dev parcel-bundler
{% endraw %}{% endhighlight %}

Then add this to your {% ihighlight bash %}{% raw %}
package.json
{% endraw %}{% endihighlight %}:

{% highlight json linenos%}{% raw %}
"scripts": {
  "start": "parcel index.html"
}
{% endraw %}{% endhighlight %}

For those who have used webpack before this may be slightly strange. In the webpack world you must specify a javascript file as an entry point, but with parcel you give it the html file. It will figure out that you have linked to a javascript file called index.js and it will deal with it.

Simply run the following:

{% highlight bash linenos%}{% raw %}
yarn start
{% endraw %}{% endhighlight %}

You will be greeted with this console output:

![Parcel Bundle Output]({% asset_path parcel_output %}){: class="aligncenter"}

Heading over to the browser to localhost:1234

![Parcel To The Rescue]({% asset_path parcel_hello_world %}){: class="aligncenter"}

### What just happened?
By simply installing parcel our code suddenly works! That is pretty amazing and honestly this alone is enough to sell me on the merits of Parcel. However, we ain't seen nothin' yet. Let's try something crazy.

## Craziness

Let's push the boat out a little and make a more elaborate application. Let's say a React application. As many of you will know, React requires extra tooling to handle [JSX](https://reactjs.org/docs/introducing-jsx.html). Bearing in mind we haven't even installed React into our project yet let's start writing some React:

{% highlight javascript linenos%}{% raw %}
import React from 'react';
import ReactDom from 'react-dom';
{% endraw %}{% endhighlight %}

If we save and take a look at the 
{% ihighlight bash %}{% raw %}
yarn start
{% endraw %}{% endihighlight %} script that is running in the terminal we will see that Parcel notices that we don't have React and ReactDom so it will install them for us. 

![Mind Blown]({% asset_path mind_blown %}){: class="aligncenter"}

***It should be noted at this point that it isn't always the best idea to let Parcel handle installing dependencies. You should still try to do that yourself but know that Parcel can do it for you, but it will cause some strange behaviour sometimes.***

Onwards with our React:

{% highlight react linenos%}{% raw %}
import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return (
    <h1>Hello React</h1>  
  );
}

ReactDom.render(<App />, document.getElementById('app'));
{% endraw %}{% endhighlight %}

And add a div with id of "app" into our html:

{% highlight html linenos%}{% raw %}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Parcel</title>
</head>
<body>
  <div id="app"></div>
  <script src="index.js"></script>
</body>
</html>
{% endraw %}{% endhighlight %}

Head over to the browser:

![Parcel Hello React Output]({% asset_path parcel_hello_react %}){: class="aligncenter"}

WOW. The first time I saw this, it genuinely exploded my brain. React is working, with jsx and everything without having to configure any build tool and without using create-react-app. This is life changing stuff.

We can go back to the hello.js and make that export a React component that we can then import into the index and make use of:

{% highlight react linenos%}{% raw %}
import React from 'react';

export function Hello({ name }) {
  return (
    <h3>Hello, {name}</h3>
  );
}
{% endraw %}{% endhighlight %}

Then import it:

{% highlight react linenos%}{% raw %}
import React from 'react';
import ReactDom from 'react-dom';
import { Hello } from './hello';

function App() {
  return (
    <React.Fragment>
      <h1>Hello React</h1>
      <Hello name="Hungry Turtle Code" />
    </React.Fragment>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
{% endraw %}{% endhighlight %}

Taking a look in the browser and we will see our Hello components has been imported as expected and it is displaying nicely on the page.

![Parcel Hello Component]({% asset_path parcel_hello_component %}){: class="aligncenter"}

### What else is possible
Just like other bundlers parcel is capable of handling other asset types, not just javascript. This means we can import things like css and images into our javascript bundles as well. 

A full list of the assets types that are supported can be seen [on the parcel website](https://parceljs.org/css.html)

That is about it for this basic run through the Parcel Bundler. I hope you got something out of this tutorial and see the power and convenience that Parcel can bring to your workflow.

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
