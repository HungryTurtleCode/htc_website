---
title: Using ExpressJS Router | Quiz API Tutorial
author: Adrian
layout: post-sidebar
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FHow%20to%20use%20Express%20Router%20-%20post.png.jpg?alt=media&token=8508946b-bb04-43f7-b262-d1324533c0eb 
excerpt: Express Router allows us to split up the handling of requests into multiple files to keep our code more modular and clean.

videoID: paNikhYqdz0
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
resources:
  - name: Code for Angular Turtle Quiz
    link: https://github.com/HungryTurtleCode/TurtleFactQuiz
  - name: Express Docs
    link: https://expressjs.com/en/4x/api.html
---
## I don't want one long file

Some of you may be thinking that things may get pretty messy if we have to put all of the app.get and other request handler code into a single file. What if we have an api with 1000s of routes? That is going to get real messy real quick.

Fortunately, the wonderful people that develop express understand this and gave us something called Express Router. In a nutshell express router allows us to create self contained sections of code that deal with request handling for certain routes and then mount that self contained chunk of code into the app in whatever way we see fit.

In practice that allows us to split our routing logic into as many files as makes sense for our use case. Then we simply {% ihighlight javascript %}require(){% endihighlight %} each router chunk and mount it somewhere in our app using app.use.

### Let's make more files

So let's create the structure we will use for our routes. The way I like to do it is to create a {% ihighlight bash %}routes/{% endihighlight %} directory that I put all the files to do with route handling into. Inside that I put an {% ihighlight bash %}index.js{% endihighlight %} which will be the "entry point" for our routers.

Into that index.js file we can instantiate the express router. This process is similar to the process of instantiating the express app but instead we call express.Router():

{% highlight javascript %}
  const express = require('express');
  const router = express.Router();

  module.exports router;
{% endhighlight %}

The router object functions almost exactly the same as the app object we have been working with before. You still have all of the request methods like get, post and use etc. They just come in a package that allows us to mount the router anywhere by requiring the exported router and passing it into a use method. This will become clearer when we actually do that further down the page.

Just like the test route we had before we can recreate that route in the router file like so:
{% highlight javascript %}
router.get('/test', (req, res) => {
  res.send('Test route');
});
{% endhighlight %}

This is the same sort of code as we had before. But it isn't actually attached into the app yet. This is because we need to import the router object that we exported using module.exports from above into the main app file.

We can pull that router into the app using app.use in the top level index.js for our whole app:

{% highlight javascript %}
app.use(require('./routes'));
{% endhighlight %}

In node, when we require a whole directory like we have done above, what it will do is look for an index.js file. It will find the routes/index.js file we created above that contains the router and import that into our app.

Now that we have the router we can remove the other request handlers (except the error handler) from the main app file.

**This is the main app file as it is now**
{% highlight javascript %}
  // index.js
  const express = require('express');
  const app = express();

  app.use(express.static('../TurtleFactQuiz'));

  app.use(require('./routes'));

  app.use((req, res) => {
    res.status(404)
      .send('Unknown Request');
  });

  app.listen(8080, (req, res) => {
    console.log('App is listening on port 8080');
  });
{% endhighlight %}

This has now defered all the logic for handling routes into the router file. At this point we still only have one file handling the routes, but the beautiful thing is we can instantiate an express Router in any file and import it into another router file and use {% ihighlight bash %}router.use(require('<new file location>')){% endihighlight %} just like we used app.use.

This now allows us infinite scaling of files to handling any number of routes in a clean manner.

## We have the mechanics. How about we use them

I have layed down the groundwork for how express router can allow us to break the routing up into multiple files. So let's actually do that.

The way that I like to structure things is by using the router index.js file as a funnel for traffic but it doesn't actually fulfill any requests. Instead it just directs the traffic into other files that handle the requests for different things.

We can do that using the following code in the routes index.js

{% highlight javascript %}
  // routes/index.js
  const express = require('express');
  const router = express.Router();

  router.use('/api', require('./api.v0.js'));

  module.exports = router;
{% endhighlight %}

Here we are requiring in a new file (which we will create shortly) called "api.v0.js" and mounting that on the /api route.

To start with I like to call it <filename>.<api version>.js to make things easy when the API changes over time. In real apps it is common to have two versions of the API live at the same time while you are migrating across to the new version. Using this convention allows for easy reference to which files are responsible for while parts of the API.

Using app.use and passing it the '/api' route means that the required router object from the api.v0.js file will be responsible for handling the routing for all requests that come into the '/api' route.

Concretely, the router in api.v0.js will handle requests to /api, /api/data, /api/user/2 etc etc for all routes contained under /api

### api.v0.js

We have required in api.v0.js, so now we need to create it and put a router object into it. Creating the router object inside of the file is exactly the same as how we did it inside the routes index file.

{% highlight javascript %}
  // routes/api.v0.js
  const express = require('express');
  const router = express.Router();

  module.exports = router;
{% endhighlight %}

Now we have the router object again to do what we please with (you can feel how wonderfully recursive this is).

### Adding a route handler

If we want to add a route handler into api.v0.js we can do the following.
{% highlight javascript %}
router.get('/', (req, res) => {
  res.send('API route');
});
{% endhighlight %}

Huh? Why are we using the '/' route? This is because each instance of a router is self contained. It is always referencing routes relative to itself. So we can mount the router anywhere in the app and it will still work.

For example, in previous code that required api.v0.js we mounted the code into the '/api' route. The code looked something like this:
{% highlight javascript %}
router.use('/api', require('./api.v0.js'));
{% endhighlight %}

So the router is mounted into the '/api' route, so inside the router when we call {% ihighlight bash %}router.get('/', ...){% endihighlight %} on the '/' route, it is actually refering to '/' after it's mount point which would be '/api'. So {% ihighlight bash %}router.get('/morecomplex', ...){% endihighlight %} inside the same router would map to '/api/morecomplex' in the absolute url. All because the router is self contained and always refers to a path relative to where it was
mounted.

The advantage of that is we can move the router around to different mount points and we wno't have to touch the router code at all. It's wonderfully extensible. Changing 
{% highlight javascript %}
router.use('/api', require('./api.v0.js'));
{% endhighlight %}
to
{% highlight javascript %}
router.use('/newpath', require('./api.v0.js'));
{% endhighlight %}

instantly maps all the urls correctly. '/api/morecomplex' becomes '/newpath/morecomplex' without touching the router code at all.

With this you now have all the knowledge you need to break your api into as many files as you want. You can create as many different router objects as you want, all in different files, then you can just require them in and mount them using app.use or router.use. A router can mount other routers which can mount other routers etc all till your heart is content (or until your code makes sense :P).

[In the next part]({{site.baseurl}}/projects/3-adding-data-express-quiz) I will be adding in the data from the quiz app front end to the API and serving it back to the client via routes in the API.

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
