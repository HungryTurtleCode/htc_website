---
title: What are Javascript promises?
head-title: What are Javascript promises?
image: 
excerpt: Javascript promises are often given a mystical description, but what are javascript promises, really? In this article we will go into what promises are by comparing it to something you are already familiar with... ordering food.

videoID: -LrRz3_yTIk 
fbimg: 
twitterimg: 

categories:
  - Tutorials
tags:
  - Javascript
  - Asynchronous Programming
  - Promises
resources:
  - name: MDN Promises
    link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
---
## Promises are just fast food.

Imagine you are walking into your favourite fast food chain. You specify what you want and are given a receipt with a number on it. That is your number. You wait patiently until the number is called, letting you know your food is ready. You now know you can walk up to the counter and collect your food. Believe it or not - you have just been involved in a promise.

But seriously though. What has this got to do with promises in Javascript? More than you may think initially.

When you make the order you are asking work to be done that takes some time. To make it easy for them to tell you when it's ready they give you a receipt with a number on it. This receipt is a promise. A promise to deliver food to you in the future.

After some time the food is ready and the restaurant can make good on their promise and deliver your food. They call your number which let's you know you can execute the next steps - walking over the the counter and collecting your food.

The real power here is that the restaurant can continue taking orders and doing other work while you wait and you can also continue to [read twitter](https://twitter.com/hungrytrtl){: target="_blank"}<!--_--> or any other array of things while they make your food. This is what is meant by asynchronous. You both agreed on some work but you can go about your lives in the meantime and reconvene in the future when that work is done. You don't have to stand around doing nothing while they make your food.

## You know about functions, right?

You are probably familiar with functions that return values. These values can be anything like a number, a string, an array etc etc A promise is just another type of thing that you can return from a function. When you call a function that returns a promise you get back that promise in exactly the same way as you would get back any other returned value.

{% highlight javascript%}{% raw %}
const myPromise = functionThatReturnsPromise();
{% endraw %}{% endhighlight %}

This promise object you get back is just like any other javascript object you have already seen - like the `Date` object. If you create a new date object with `const now = new Date()` you have various methods available to you on the object like `now.getTime()` to fetch the unix timestamp.

The promise object you get back has a few methods on it. The two most common are `.then` and `.catch`. The `.then` method is used to tell the promise what code you want to run if everything goes well and the `.catch` method is how you tell the promise what to run when something goes wrong. If the task that created the promise returns any data - the promise will pass it in to your function as an argument so you can use it in your computations.

{% highlight javascript linenos%}{% raw %}
functionToHandleSuccess(data) {
  // do something with data
}

functionToHandleFailure(error) {
  // handle error
}

const myPromise = functionThatReturnsPromise();

myPromise.then(functionToHandleSuccess);

myPromise.catch(functionToHandleFailure);

// Any code down here doesn't have to wait
// for the promise, it will just run immediately
{% endraw %}{% endhighlight %}

Because you have been given a promise and you have told JS what to do on success and failure using the `.then` and `.catch` methods there is no need for JS to wait around, it is free to continue doing other work. Much like the cashier at the fast food place we were at earlier - once they have given you the receipt they don't have to stand and wait for your food to be ready, they can move on and serve the next customer. This is why it is known as asynchronous programming.

In some languages everything has to run synchronously - so when a task has to wait for some asynchronous event like waiting for a web request to return the code will just hang on that line waiting. Javascript isn't like that - it will just keep going and do as much as it can while the web request is happening. Then when it returns javascript will go back and resolve the promise by calling one of your functions depending on if things where successful. Into those functions javascript will pass whatever the result of the web request was - either the data into the `.then` or an error into `.catch`

## The Chain

A beautiful thing about promises is you can chain them together. This avoids something known as callback hell which cropped up when we had to use callbacks to handle these kinds of async tasks.

Here is some code written using the old callback style. You can see there are lots of levels of indentation - the code becomes unmanageable very quickly.

{% highlight javascript linenos%}{% raw %}
function renderProtectedData() {
  isUserLoggedIn(function(error, isLoggedIn) {
    if (error) {
      handleError(error);
    }
    if (isLoggedIn) {
      fetchPageData('myawesomepage', function(error, data) {
        if (error) {
          handleError(error);
        }

        if (data) {
          renderPage(data, function() {
            // do something now it is rendered
          })
        }
      })
    } else {
      // redirect. Not allowed
    }
  })
}

renderProtectedData()
{% endraw %}{% endhighlight %}

Refactoring this code into promises makes life a lot easier. The code is easier to manage and much easier to read.


{% highlight javascript linenos%}{% raw %}
function renderProtectedDataPromise() {
  isUserLoggedIn()
    .then(isLoggedIn => {
      if (isLoggedIn) {
        return fetchPageData('myawesomepage');
      } else {
        // redirect. Not allowed
      }
    })
    .then(data => renderPage(data))
    .then(() => {
      // do something now it is rendered
    })
    .catch(handleError)
}
{% endraw %}{% endhighlight %}

Whatever you return from one `.then` function will be passed in as the argument to the next `.then` call in the chain. If you return a promise from a `.then` it will wait for that promise to also resolve before calling the next .then in the chain.

If anything goes wrong anywhere in the promise or chain of `.then` calls then code execution will jump to whatever you defined in the `.catch` method.

## Creating our own Promises!
We can create our own promises as well. Just like we created a date object earlier using the `new` keyword - we can also create promises with the `new` keyword. 

{% highlight javascript %}{% raw %}
const promise = new Promise()
{% endraw %}{% endhighlight %}

Into that we pass in a function that will be given two arguments - resolve and reject. These are both functions and you should call them whenever your asynchronous code is complete - resolve for success and reject for failure.

{% highlight javascript linenos %}{% raw %}
const promise = new Promise((resolve, reject) => {
  // do some work
  resolve('I am done');
});

promise.then(data => {
  console.log(data); // 'I am done'
});
{% endraw %}{% endhighlight %}

We can do whatever asynchronous work we want inside that promise block but the code inside the then or catch will not run until we call `.resolve` or `.reject`.

## A little about Async/Await

You may have also heard of async/await but it's really nothing more than a different way to write promises. Whenever we have a promise and we want the return value of the async operation we define a function inside a `.then` that is given that value - in async/await we just use the await keyword and it effectively turns it into a synchronous line of code. Whenever the promise resolves it will continue execution.

{% highlight javascript linenos %}{% raw %}
orderFood()
  .then(food => {
    // eat the food
  })
{% endraw %}{% endhighlight %}

{% highlight javascript linenos %}{% raw %}
async function() {
  const food = await orderFood();

  // eat the food
}
{% endraw %}{% endhighlight %}

While the happy path may look nicer with async await you may notice we have lost our `.catch` and the only way to get that back is to wrap things in a try/catch which immediately breaks how pretty the code is. That plus the fact that you are hiding the complexity inherent to asynchronous programming means async/await should be used sparingly in my opinion. I think it encourages bad code and hard to debug problems. But that is probably a topic for another article.

{% highlight javascript linenos %}{% raw %}
// Whoops, doesn't look so good any more
async function() {
  try {
    const food = await orderFood();

    // eat the food
  } catch(error) {
    // Handle the error
  }
}
{% endraw %}{% endhighlight %}

I hope that all made sense to you and you know understand javascript promises a little better than you did before.

If you enjoy what I'm doing consider following me [on twitter @hungrytrtl](https://twitter.com/hungrytrtl){: target="_blank"}<!--_-->

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
