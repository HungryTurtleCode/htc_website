---
title: Create an API with Express JS
head-title: Express JS Basic Setup
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FBuild%20an%20API%20with%20ExpressJS%20from%20Scratch.jpg?alt=media&token=e5ced716-dece-4580-b6be-a852236a6d22
excerpt: Let's create a basic API using the ExpressJS framework built on top of Node.js. Using the data from the angular quiz app we will use express and mongodb to fetch the data from an API.

videoID: kibitXQ9aME
repo: HungryTurtleCode/expressQuizApi
fbimg: 
twitterimg: 
course-index: express-quiz-api
series: Express Quiz API

categories:
  - Projects
tags:
  - ExpressJS
  - Express Quiz API
  - Javascript
  - HTTP
resources:
  - name: AngularJS Quiz code
    link: https://github.com/HungryTurtleCode/TurtleFactQuiz
  - name: Express Docs
    link: https://expressjs.com/en/4x/api.html
---
## Getting Started With Express JS

A while ago (probably too long, i'm sorry) I made a tutorial that showed you how to make a [quiz app in AngularJS]({{site.baseurl}}/projects/1-build-angular-quiz-app-scratch){: target="_blank"}<!--_-->. That tutorial was entirely focused on the front end and hardcoded the data. This time we will take that data and build it into an API for the quiz app to consume.

While I will be using the data from the quiz app, no prior knowledge of the app is required to complete this tutorial, so even if you haven't seen that tutorial feel free to continue with building this API. You will definitely learn the basics of how to create an API using Express.

### Let's get started

To start with, make sure you have node.js and npm installed on your machine. A quick google will reveal to you the best way to get those installed, or you can always check out the [node website](https://nodejs.org/en/download/){: target="_blank"}<!--_-->.

Create a new folder on your machine and let's initialise a {% ihighlight bash %}package.json{% endihighlight %} using the command:

{% highlight bash %}
  npm init
{% endhighlight %}

This will prompt you for some information, I always hit enter a few times and accpet all the default values.

### Installing dependencies

At this point we obviously need to install express into our project so we can start creating our API. I will also install another tool called nodemon that will massively speed up our development workflow.

Nodemon helps us by automatically refreshing the server when we make changes to the code. If we did not use nodemon we would run our server code using normal node and when we made changes to the code we would have to manaully kill the server then manually restart it. As you can imagine when we are developing the API we will be making A LOT of changes to the code and having to manually kill and restart the server every single time we make a change can be a massive time sink and
really sap our productivity.

Using nodemon removes all the manual work and it will monitor all of our source files and if any of them change it will automatically restart the server so that the new code is always the code running on the server. Wonderful!

So let's install those using npm or yarn (they are basically the same really, you can use either. If you don't know what yarn is don't worry about it, just use npm.)

{% highlight bash %}
  npm install express && npm install --save-dev nodemon
{% endhighlight %}

OR

{% highlight bash %}
  yarn add express nodemon
{% endhighlight %}

Now that we have nodemon installed I will just create a quick npm script to allow use to make use of it. In your {% ihighlight bash %}package.json{% endihighlight %} under the "scripts" key add the following:

{% highlight json %}
"scripts": {
  "start": "nodemon index.js"
}
{% endhighlight %}

Keep in mind we haven't created the index.js yet though. That is coming.

### But what is an npm script?

An npm script is basically just a terminal command(s) you can run using npm by typing {% ihighlight bash %}npm run <name of script>{% endihighlight %}. There are also a few special script names where you don't have to use the "run" keyword, "start" is one of those script names. So when we type {% ihighlight bash %}npm start{% endihighlight %} into the terminal and hit enter npm will run {% ihighlight bash %}nodemon index.js{% endihighlight %} for us in the
background.

Why not just run {% ihighlight bash %}nodemon index.js{% endihighlight %} manually you may ask? Well, you could. But there are a few reasons why npm scripts are better. For one if you want to run the command manually you will need to install nodemon globally, which is polluting the globally installed packages - but when you run a command like that using an npm script it will look for the package in the node_modules folder instead. Secondly, you may want more complex commands to run and you don't want to be typing them out manually every time when you can just use a handy dandy npm script alias.

As an aside, you can also run the npm scripts using yarn like I did in the video. Again this is totally up to you and makes no difference.

## Can we write some actual code please?

Create yourself an {% ihighlight bash %}index.js{% endihighlight %} and let's write some express code!

First step is to require in express and instantiate the express app. That is done using the following code:

{% highlight javascript %}
const express = require('express');

const app = express();
{% endhighlight %}

Now we have access to the app object within express. This exposes to us many different peices of functionality. One such peice of functionality is the ability to listen for requests on certain routes within our API. 

For example we could listen to a GET request on the /test route like this:

{% highlight javascript %}
app.get('/test', (req, res) => {
  // do something with the request
});
{% endhighlight %}

I will explain what is going on in all this now.

So what are routes? And what kind of requests are we listening to?

A route is simply the url path after the point at which our API is mounted. More concreately if we have an api running on https://myamazingapi.com then the route will be whatever we request that comes after that url eg https://myamazingapi.com/users would be requesting the users route of our api.

In another example we could mount an api at https://myotherapi.com/info/api so all requests to the api have to start with info/api and therefor to make the same request to the users route as we did before we would now have to request https://myotherapi.com/info/api/users

So routes are just the relative url path from the point that the api is mounted. Hopefully that makes a bit of sense.

In the above example we are listening to the GET request, but what is that and what other requests can we listen for?

These are something known as [HTTP requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods){: target="_blank"}<!--_-->. They are the basis of how the things communicate with each other on the internet. I am not going to go into much detail here as many other people have went more in depth and explained it much better than I ever could.

At it's core, HTTP requests are a language to signify the intent of a given request. For example if I make a GET request to "/user" I am indicating I would like to simply fetch some user data without making any changes at all.

A POST request to that same /user route would indicate we are trying to create a new user.

A PUT request would indicate we are trying to update a user

A DELETE request would indicate we are trying to remove a user.

This is a very nice language to use to make an api, because we can listen for different request types on the same route and handle each individually with specific logic for each case rather than having one large block of code trying to handle all cases.

Now back to the snippet I showed you:

{% highlight javascript %}
app.get('/test', (req, res) => {
  // do something with the request
});
{% endhighlight %}

I have explained the what the {% ihighlight bash %}.get{% endihighlight %} request method is and what the route ('/test' in this case) is. The only thing left to cover is the arrow function passed in as a second argument.

## Handling the request

The arrow function is the code that is called when express detects that a request on that route has been made. So this is where you must put the code that will handle the request in whatever way you see fit.

Of course to handle the request we are going to need some information about the request and also need the ability to send replies back to the client. This is why express passes in two objects into the callback function. These objects contain data and methods for the request and response respectively (I named them req and res by convention).

### Hello world

So in the spirit of all programming learning experiences let's pad out the code to make the simple "Hello World" example.

For an API the Hello World would be to simply reply "Hello World" to the user when they make a request. To do this we can make use of the response object and specifically a method called "send" that allows us to send back data to the client that made the request.

{% highlight javascript %}
app.get('/test', (req, res) => {
  // do something with the request
  res.send('Hello World');
});
{% endhighlight %}

There is one more thing we now need to do for this express app to actually to something. That last thing is to tell express to listen to a port on the machine for incoming requests.

Again we will make use of the express app object and call a method "listen" to tell express to listen to a port for requests.

{% highlight javascript %}
app.listen(8080, () => {
  console.log('App is listening on port 8080');
});
{% endhighlight %}

Here we tell it to listen on port 8080 and pass a callback function that will be called whenever the app is successfully listening to that port. Inside the callback we simply log to the console that the app is now listening on port 8080.

**So here is our whole express app so far:**
{% highlight javascript %}
const express = require('express');
const app = express();

app.get('/test', (req, res) => {
  // do something with the request
  res.send('Hello World');
});

app.listen(8080, () => {
  console.log('App is listening on port 8080');
});
{% endhighlight %}

Nothing too scary right?

## Seeing some glorious results

Using the npm script we made earlier we can run {% ihighlight bash %}npm start{% endihighlight %} in a terminal window that is inside our project folder and we should see the following printed out to the terminal:

![Nodemon terminal output]({% asset_path nodemon-terminal %}){: class="aligncenter" width="800"}

and if we now check out the browser and go to http://localhost:8080/test (or whatever other route you defined) and you should get your hello world message like this:

![Hello World API output]({% asset_path hello-world-api-express %}){: class="aligncenter"}

### What if we go to a different route?

In your browser you can try to navigate to a different route that you haven't defined yet and you will see a "CANNOT GET" error message printed to the page. This is because we haven't told express what to do when it recieves a request to a route you haven't explicity defined. We will deal with handling unknown requests more elegantly shortly.

Example:

![Unknown request response]({% asset_path cannot-get-sdf-express %}){: class="aligncenter"}

## What about serving static files?

The [Angular Quiz App]({{site.baseurl}}/projects/1-build-angular-quiz-app-scratch){: target="_blank"}<!--_--> is static html and javascript. What if we want to serve those files via our express app aswell? Of course that is possible, and actually it is pretty simple too.

To do that we will introduce another method on the express app called {% ihighlight bash %}.use{% endihighlight %}. What app.use allows us to do is run a certain bit of code on every request (regardless of the type of request). Just like the specific type request listeners (get, post etc) we can specify a route to app.use, but you can also omit the route and it will just always run on every request to any route.

{% highlight javascript %}
app.use((req, res) => {
  // this code will run on every single request
});

app.use('/test', (req, res) => {
  // this code will run on every request to the test route
});
{% endhighlight %}

### I thought you were talking about static files

We can use app.use to serve static files by passing it a special express function {% ihighlight bash %}express.static(<location of static files>){% endihighlight %}

{% highlight javascript %}
app.use(express.static('../TurtleFactQuiz'));
{% endhighlight %}

Here my static files are in a directory called TurtleFactQuiz that is one directory up from my API code. [You can find the static code here](https://github.com/HungryTurtleCode/TurtleFactQuiz){: target="_blank"}<!--_-->

So what we have now is that express will listen to every single request that comes into the app and it will try to match that request against a static file in that directory.

For example if the request is for a route '/main.js' express.static will check the directory for a file called main.js and if it finds it, it will send the file back to the client.

Another thing to note is that express will assume a request to the base route '/' is looking for index.html and so if index.html exists when the request to '/' is made, it will send it back.

So what happens if we have another route that is supposed to handle the '/' route? Well express reads the file from top to bottom and it will reply to the user with whichever handler it finds first.

So if you have some code that looks like this:

{% highlight javascript %}
app.use(express.static('../TurtleFactQuiz'));

app.get('/', (req, res) => {
  res.send('Hello world');
});
{% endhighlight %}

A request for the '/' route will send back the index.html if it exists and then the request is considered fulfilled and express stops (therefore the app.get block never runs). If the index.html doesn't exist then the request is not fulfilling and so it will continue on and run the app.get block.

So if we run the above code (where the express.static is above the app.get) in the browser we get the index.html for the quiz app show to the screen:

![Express API Static files]({% asset_path express-api-static %}){: class="alignc" width="800"}

But if we change the order of the express.static and app.get like so:

{% highlight javascript %}
app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use(express.static('../TurtleFactQuiz'));
{% endhighlight %}

We now get this output:

![Express API Order Matters]({% asset_path api-express-order %}){: class="aligncenter"}

The order of the handlers in an express app really matters and you must be aware of that otherwise you may run into some bugs that seem very strange to you.

## What if you want both of them to run?

I can hear some of you asking what if you wanted to send back the index.html but also run some other code during the request (maybe to log the request against a certain user or to look something up before sending data back etc).

Well I alluded to it above. The key is in the fact that express will stop running through the code for a given request when it thinks the request is fulfilled. So when does express decide a request is fulfilled? 

Express decides a request is fulfilled when something has been sent back to the user. That can be the index.html (or any other file) or simply some data (a string, some json etc). So if we want to run some code in the app.get block before we trigger the express.static to send back the html we have to make sure we remove the res.send call that sends back the "hello world" string to the user.

But that is not all, we also have to tell express to move onto the next block. We do this using a third argument that express passes into the callback which is by convention called next. It is a function that we can call to tell express to move onto the next block.

{% highlight javascript %}
app.get('/', (req, res, next) => {
  // some code that doesn't send anything back to the user
  console.log('Made it here'); // so we know this code executed
  next();
});

app.use(express.static('../TurtleFactQuiz'));
{% endhighlight %}

By doing this, express will continue to cascade down the handlers that match the request, after it has executed the code in the app.get block.

If we run the above code we get the index.html displayed in the browser but if we also take a look at the terminal to see the output of the server we see our console.log.

![Express Next]({% asset_path made-it-here-express %}){: class="aligncenter" width="800"}

## We have stumbled upon a core idea

We have just discovered a core idea of Express JS. This is the idea of middleware in Express. Middleware is a way of breaking up functionality into smaller more self contained and singular blocks and then chaining them together to get more complex functionality. This idea is the underlying principal behind [unix pipelines](https://en.wikipedia.org/wiki/Pipeline_(Unix)){: target="_blank"}<!--_--> which has become extremely powerful, so express is following in some
big footsteps.

The beauty of this kind of middleware system is we don't need massive long blocks of code to handle complex requests. Instead we can break it up into small chunks that each to a very specific job and do it well. This is not only easier to reason about and easier to read but it is also much easier to write and maintian in a way that reduces bugs in the code.

## Back to our app

We have just been on a bit of a caveat about code order and middleware, which is important but let's get back to our actual app.

**This is the code we have so far:**
{% highlight javascript %}
const express = require('express');
const app = express();

app.use(express.static('../TurtleFactQuiz'));

app.get('/test', (req, res) => {
  // do something with the request
  res.send('Hello World');
});

app.listen(8080, () => {
  console.log('App is listening on port 8080');
});
{% endhighlight %}

If we now go to the base route at http://localhost:8080 we will be greated by some html for our quiz app. And http://localhost:8080/test will show us our Hello World message.

## We still have the CANNOT GET error

If we go to any other route that we have not defined like http://localhost:8080/subscribetohungryturtlecode we will be greeted by the CANNOT GET error. We want to handle this properly and show a custom error message.

Using the information I have given you about app.use and how express cascades down through the handlers and stops when a request is fulfilled can you think how we could create a handler that will catch all unknown requests?

We can achieve this by putting an app.use call after the last handler (just before the app.listen call). Like I said before, app.use will run on every single request that reaches the handler, but the only time the request will reach this new app.use is when none of the other handlers where able to fulfill the request. That means that it must be an unknown request. YAY!

So inside that app.use we can put some code to send back a 404 status code (Not Found) and a custom error message.

That leaves us with the following code:

{% highlight javascript %}
const express = require('express');
const app = express();

app.use(express.static('../TurtleFactQuiz'));

app.get('/test', (req, res) => {
  // do something with the request
  res.send('Hello World');
});

// This is the new code to handle the error
app.use((req, res) => {
  res.status(404).send('Unknown Request');
});

app.listen(8080, () => {
  console.log('App is listening on port 8080');
});
{% endhighlight %}

So now if we go back to the browser and try to hit an unknown route we get our beautiful error message instead of express' default message.

![Better 404 error message]({% asset_path express-better-unknown-request %}){: class="aligncenter"}

And there you have it, you have learnt the basics of how express works. Obviously there is a lot more you can do with express and I am sure I will cover some of it in coming tutorials.

[In the next tutorial]({{site.baseurl}}/projects/2-using-express-router) in this API series I will tackle how we can go about splitting our API code into different files so we don't end up with one massive index.js file.

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
