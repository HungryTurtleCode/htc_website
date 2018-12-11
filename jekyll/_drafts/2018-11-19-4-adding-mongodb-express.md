---
title: Adding MongoDB to ExpressJS | Quiz API Tutorial
author: Adrian
layout: post-sidebar
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2Fplay%20the%20mongo.jpg?alt=media&token=63b22a89-1a03-48ea-90e7-8d0235ebbbaf
excerpt: The time has come to stop using hard coded data and add in a database to the project. We will be using MongoDB to store the data.

videoID:
repo: expressQuizApi
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
  - Databases
  - Mongodb
resources:
  - name: Code for Angular Turtle Quiz
    link: https://github.com/HungryTurtleCode/TurtleFactQuiz
  - name: Express Docs
    link: https://expressjs.com/en/4x/api.html
  - name: MongoDB docs
    link: https://docs.mongodb.com/
---
## MongoDB to the rescue

So we have our API routes and we have our data. Next step is to add in the database to actually store our data. In this tutorial we will be adding MongoDB to the project.

MongoDB is just one database we could choose from. There are many different types. Another Popular one is MySQL. In this case I have chosen Mongo purely because of the easy with which we can set it up and get going with it. Something like MySQL is actually a better choice in a lot of cases but it is notoriously hard to set up. For our little application, MongoDB is perfect. Just be aware that you should always choose the best tool for the job.

### Install mongo

At this point you will need MongoDB installed on your machine. I am not going to go into detail about how to do that. A quick google will let you know how to install it on your system.

![How to install MongoDB Google Search]({% asset_path how-to-install-mongo %}){: class="aligncenter" }

Now that we have Mongo installed we can use npm (or yarn) to install a library called Mongoose.

{% highlight bash %}
yarn add mongoose
{% endhighlight %}
OR
{% highlight bash %}
npm install mongoose
{% endhighlight %}

## What is Mongoose

Mongoose is an Object Model for MongoDB. But what on earth is an Object Model you might ask? Well, my young padawan, an object model is basically a way of mapping data in a database into objects that make coherent sense in the context of our application.

For example, we have turtle facts to store into the database. Facts are comprised of a few pieces of data like the type of fact, an image, a description, the actual fact data etc and all of these parts have types they should be. It wouldn't make much sense for the fact to be a single number, unless we are getting all psuedo-profound. Really it only makes sense for a fact to be a string or an object with keys that map to Strings.

So what we can notice here is the data our app wants is in a defined structure with certain rules about types etc

Eg:

A Fact is made up of:
  * Fact type: String
  * Fact image URL: String
  * Fact data: Object with strings as properties
  * Fact description: String
etc

An object model allows us to define that structure and those validation rules and it will be the mediator between your app and the database, always making sure that data pulled out the database is in the structure you want and data inserted into the database is of the correct structure and type etc

In simple terms, it's extremely useful. Without such a tool we would have to manually do all that validation ourselves and that can become very tiresome (although, as you will find out through your career, that is quite often necessary. But that's a topic for another time).

## Creating those Mongoose Object thingys

We have mongoose installed, time to actually use it to define the structure and types of our data. We will do that in the models files we created in [the previous part]({{site.baseurl}}/projects/3-adding-data-express-quiz){: target="_blank"}<!--_-->.

Starting with 
{% ihighlight bash %}{% raw %}
models/facts.js
{% endraw %}{% endihighlight %} we can add the following code at the top of the file:

{% highlight javascript linenos%}{% raw %}
const mongoose = require('mongoose');

const FactSchema = new mongoose.Schema({
  fact_type: String,
  fact_image_url: String,
  fact_data: Object,
  fact_description: String,
  updated_at: { type: Date, default: Date.now },
});

const Fact = mongoose.model('Fact', FactSchema);
{% endraw %}{% endhighlight %}

What we are doing here is requiring the mongoose library that we installed and using a part of it called 
{% ihighlight javascript %}{% raw %}
Schema
{% endraw %}{% endihighlight %} to define the structure and types of our fact data.

{% ihighlight javascript %}{% raw %}
fact_type
{% endraw %}{% endihighlight %} and other properties are simply defined as being a string, nothing crazy there.

{% ihighlight javascript %}{% raw %}
fact_data
{% endraw %}{% endihighlight %} is slightly more adventurous. It is defined as being an object, but we are not actually validating what kind of object, what properties that object has or what types those properties are. This is an anything goes kind of object. As long as it is an object, mongoose will not shout at us.

This can be a good thing - it does provide us with a lot of flexibility. We can put arbirary data into that object, which means it is suuuuuper flexible. However, it can also become a nightmare because anything goes. Users can insert any random junk they want into the database and as long as the whole thing is an object it will work just fine. This isn't always desirable.

Herein lies some of the issue with NoSQL databases like mongo. They do allow you to have a lot of flexibility and scalability. But those advantages do come at costs like this. So you will have to be mindful to weigh up the pros and cons of all solutions before you end up picking something just because it is the "cool" new technology around.

The other intersting part of the schema is the updated_at part. It is defined in a slightly different way. Instead of passing it a literal type like 
{% ihighlight javascript %}{% raw %}
String
{% endraw %}{% endihighlight %} it is given an object with a type property that is defined as being a javascript 
{% ihighlight javascript %}{% raw %}
Date
{% endraw %}{% endihighlight %} object. But using this method of defining the type allows us to give the property a default type. In this case we are setting the default type to the current time at the point that the data is created.

Using this default type means we don't need to manually set the updated_at property, instead mongoose will use the default value to automatically update the time every time the data is modified.

The final part of that code above is this line:
{% highlight javascript %}{% raw %}
const Fact = mongoose.model('Fact', FactSchema);
{% endraw %}{% endhighlight %}

The schema defined above just defines the structure of data, but it isn't actually links to the database in any way at all. So we need to create the database model using 
{% ihighlight javascript %}{% raw %}
mongoose.model('Model Name', Schema);
{% endraw %}{% endihighlight %} and pass it the schema we defined previously. This will ensure that the 'Fact' collection in the database will be validated against the FactSchema we created.

Final step is to export the mongoose model. The exports for the 
{% ihighlight bash %}{% raw %}
models/facts.js
{% endraw %}{% endihighlight %} now looks like this:

{% highlight javascript  linenos%}{% raw %}
// models/facts.js
module.exports = {
  Fact,
  getTurtleData,
}
{% endraw %}{% endhighlight %}

### Scheming the Question Schema

Before we add the data to the database let's quickly go through the same schema creation process for the Questions model in 
{% ihighlight bash %}{% raw %}
models/questions.js
{% endraw %}{% endihighlight %}.

{% highlight javascript linenos%}{% raw %}
  // models/questions.js
  const mongoose = require('mongoose');

  const QuestionSchema = new mongoose.Schema({
    question_type: String,
    question_text: String,
    question_possibilities: [{
      answer: String,
    }],
    correct_answer: String,
    updated_at: { type: Date, default: Date.now },
  });

  const Question = mongoose.model('Question', QuestionSchema);
{% endraw %}{% endhighlight %}

Most of this schema is familiar to you. You have seen how to define the String types and the update_at property with the default value. The interesting part of this schema is 
{% ihighlight javascript %}{% raw %}
question_possibilities
{% endraw %}{% endihighlight %} which is defined as:

{% highlight javascript linenos%}{% raw %}
question_possibilities: [{
  answer: String
}]
{% endraw %}{% endhighlight %}

This means it will be an array of objects and each object must contain an answer property that is a 
{% ihighlight javascript %}{% raw %}
String
{% endraw %}{% endihighlight %}. That is pretty complex structure validation with very little code from our perspective. That is the beauty of object model systems like Mongoose.

Just like we did in the facts model, we need to export the Question model from the file. This is the updated 
{% ihighlight bash %}{% raw %}
models/questions.js
{% endraw %}{% endihighlight %} file exports:

{% highlight javascript  linenos%}{% raw %}
// models/questions.js
module.exports = {
  Question,
  getCorrectAnswers,
  getQuizQuestions,
}
{% endraw %}{% endhighlight %}

## But wait, we haven't connected to the database yet!

At this point, things have been very exciting with creating the model schema. However, one big thing is yet to be done.

**We need to actually connect to the mongodb database**

Let's get to work on that by creating a new 
{% ihighlight bash %}{% raw %}
db.js
{% endraw %}{% endihighlight %} file in the top level of our app. This file will need access to mongoose (to actually connect to the mongo db database we will use) so let's start by requiring that into the db.js file:

{% highlight javascript %}{% raw %}
// db.js
const mongoose = require('mongoose');
{% endraw %}{% endhighlight %}

At this point you should have mongo db installed on your machine and it should be running. The default port mongo runs on is 
{% ihighlight bash %}{% raw %}
27017
{% endraw %}{% endihighlight %} so using mongoose we would connect to it with the following command:

{% highlight javascript %}{% raw %}
mongoose.connect('mongodb://localhost:27017/turtlequiz', {
  useNewUrlParser: true,
  keepAlive: 1
});
{% endraw %}{% endhighlight %}

So using mongoose.connect we can pass it the location of a mongodb instance. You may notice we passed it a '/turtlequiz' into the location. That is the name of the database we want to connect to. 

We haven't actually created that database so how can we connect to it? Well, mongoose is clever enough to create it if it does not exist. So we can connect to it and it will be created if it doesn't exist then connect to the newly created db.

You can also see the configuration object we passed as the second argument into the mongoose connect function. This is just a simple example, but you can check out the mongoose documentation to find out what else you can do in this configuration object.

## An idea

We could simply run the above connect line and connect to the database, but that isn't a very robust way of doing things. What if the connection failed? The rest of the app won't know about that. What if it disconnects at somepoint during it's lifecycle?

To handle all of that I like to create a 
{% ihighlight javascript %}{% raw %}
startDb
{% endraw %}{% endihighlight %} function that returns somethign that has asynchronous callback functionality that I can then use to asynchronously start the express app itself when the database connection is made by putting it into the callback once the database has successfully connected. Inside startDb I can also handle disconnects etc

{% highlight javascript linenos%}{% raw %}
// db.js
const mongoose = require('mongoose');

function startDb() {
  mongoose.connect('mongodb://localhost:27017/turtlequiz', {
    useNewUrlParser: true,
    keepAlive: 1,
  })
  .then() => console.log('MongoDB connection successful');

  // This is mongoose's async callback chain
  return mongoose.connection
    .on('error', console.log)
    .on('disconnected', startDb);
}
{% endraw %}{% endhighlight %}

This startDb function can now be exported from the db.js file:

{% highlight javascript linenos%}{% raw %}
module.exports = {
  startDb,
}
{% endraw %}{% endhighlight %}

That export can be imported into the main index.js file and used.

{% highlight javascript linenos%}{% raw %}
// index.js
const express = require('express');
const { startDb } = require('./db');

// all the rest of the code

startDb()
  .once('open', () => {
    app.listen(8080, () => {
      console.log('App listening on port 8080');
    });
  });
{% endraw %}{% endhighlight %}

You can see here that we require the 
{% ihighlight javascript %}{% raw %}
startDb 
{% endraw %}{% endihighlight %} function from 
{% ihighlight bash %}{% raw %}
db.js 
{% endraw %}{% endihighlight %} and call the function to make a connection to the database. The function returns the mongoose asynchronous callback interface that allows us to call
{% ihighlight javascript %}{% raw %}
.once('open', callbackFn)
{% endraw %}{% endihighlight %}. As the code may suggest, this is a callback that will be called just once when the connection to the database is opened.

Inside that callback we move the code that makes the express app listen on port 8080. This means that if the database connection fails, the app won't start properly, which is what we want. We don't want to end up in a situation where the app is listening but the database is dead. That creates an inconsistent state that can cause problems.

### closeDb() function would be useful too

We have just made the 
{% ihighlight javascript %}{% raw %}
startDb()
{% endraw %}{% endihighlight %} function to get the database started. It would also be useful to have a quick function that closed the database connection, in the event we ever need that (*spoiler, we will use it shortly*).

{% highlight javascript linenos%}{% raw %}
function closeDb() {
  mongoose.connection.close();
}
{% endraw %}{% endhighlight %}

Simple as that. Moving on.

## Fill it up with data

We have the schema for the database and we have the ability to connect to the database. Next logical step is to take the data we have in the 
{% ihighlight bash %}{% raw %}
data.js
{% endraw %}{% endihighlight %} file and put that into the database itself.

I will create a simple script to migrate the data from the 
{% ihighlight bash %}{% raw %}
data.js
{% endraw %}{% endihighlight %} file and into the database. I'll name the file 
{% ihighlight bash %}{% raw %}
migration.js
{% endraw %}{% endihighlight %} and this is the start to the code:

{% highlight javascript linenos%}{% raw %}
const { startDb, closeDb } = require('./db');
const { Question } = require('./models/questions');
const { Fact } = require('./models/facts');
const {
  getQuizQuestions,
  correctAnswers,
  turtlesData
} = require('./data');

aysnc function migrateQuestions() {
  // Looping through the questions from the data.js file
  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i];
    const correct = q.possibilities[correctAnswers[i]].answer;
    q.possibilities.splice(correctAnswers[i], 1);
    const data = {
      question_type: q.type,
      question_text: q.text,
      question_possibilities: q.possibilities,
      correct_answer: correct,
    }
    await Question.create(data);
  }
}
{% endraw %}{% endhighlight %}

Here we can see that we are requiring in all the stuff we need. Namely, the start and close database functions, the question and facts mongoose models and all the data from the 
{% ihighlight bash %}{% raw %}
data.js
{% endraw %}{% endihighlight %} file.

Then we create a funky async / await function. This is another peice of modern javascript that you should become familiar with. All async await is is an easier way to deal with promises by making them feel synchronous.

Instead of calling a function that returns a promise and use the 
{% ihighlight javascrip %}{% raw %}
.then()
{% endraw %}{% endihighlight %} method to get the data from the promise, async await allows us to use the 
{% ihighlight javascript %}{% raw %}
await
{% endraw %}{% endihighlight %} keyword and treat the thing as synchronous.

For example:

{% highlight javascript linenos%}{% raw %}
myFunction()
  .then(data => {
    // do something with data
  })
{% endraw %}{% endhighlight %}

and

{% highlight javascript linenos%}{% raw %}
const data = await myFunction();
{% endraw %}{% endhighlight %}

are exactly equivalent. 

**There is one caveat though**

You can't just throw 
{% ihighlight javascript %}{% raw %}
await
{% endraw %}{% endihighlight %} around everywhere. It can only be used in a function that is marked as asynchronous in this manner:

{% highlight javascript linenos%}{% raw %}
async function ...
{% endraw %}{% endhighlight %}

If you try to use 
{% ihighlight javascript %}{% raw %}
await
{% endraw %}{% endihighlight %} outside of one of these aysnc functions, javascript will throw an error. This is why it is called async / await and not just await.

### What is the function actually doing

Aside from the async await funkiness, what is the function actually doing. It is simply looping through all the questions in the quizQuestions variable from 
{% ihighlight bash %}{% raw %}
data.js
{% endraw %}{% endihighlight %} and forming it into an object that is the correct structure for the Question model we defined using mongoose. We also make use of the 
{% ihighlight javascript %}{% raw %}
correctAnswers
{% endraw %}{% endihighlight %} variable from 
{% ihighlight bash %}{% raw %}
data.js
{% endraw %}{% endihighlight %} to pull out the correct answer from the possibilities property. The resulting object is exactly what the mongoose model is looking for.

We then use the await keyword to wait for the promise to resolve from the 
{% ihighlight javascript %}{% raw %}
Question.create(data);
{% endraw %}{% endihighlight %} call. That is the way you create a new entry into the database using Mongoose. You simply call the create method on a Mongoose model and pass it an object that you want to put in. If the object passes the schema validation it will be placed into the database.

### Migrating the Facts

The next function in the
{% ihighlight bash %}{% raw %}
migration.js
{% endraw %}{% endihighlight %} file is the function to migrate the Facts.

{% highlight javascript linenos%}{% raw %}
async function migrateFacts() {
  // Looping through the facts data from the data.js file
  for (let i = 0; i < turtlesData.length; i++) {
    const data = turtlesData[i];
    const facts = {
      fact_type: data.type,
      fact_image_url: data.image_url,
      fact_data: {
        locations: data.locations,
        size: data.size,
        diet: data.diet,
        lifespan: data.lifespan,
      },
      fact_description: data.description,
    }
    await Fact.create(facts);
  }
}
{% endraw %}{% endhighlight %}

Same story here, we are just looping through the facts from 
{% ihighlight bash %}{% raw %}
data.js
{% endraw %}{% endihighlight %} and inserting it into the mongodb database using the 
{% ihighlight javascript %}{% raw %}
Fact
{% endraw %}{% endihighlight %} model we made with mongoose.

### Last migration function

The final function to write in the 
{% ihighlight bash %}{% raw %}
migration.js
{% endraw %}{% endihighlight %} file is going to bring the other two together. This script will be run independently of the actual app and so the database connection that is created in the app isn't useful to use here. You may also notice that we imported the 
{% ihighlight javascript %}{% raw %}
createDb
{% endraw %}{% endihighlight %} and
{% ihighlight javascript %}{% raw %}
closeDb
{% endraw %}{% endihighlight %} functions but we have yet to use them! That's a giveaway for what is coming. 

We need to actually create a connection to the database so the calls to the mongoose models actually work.

{% highlight javascript linenos%}{% raw %}
async function migrate() {
  startDb();
  await migrateFacts();
  await migrateQuestions();
  closeDb();
}
{% endraw %}{% endhighlight %}

Here we open the connection with startDb (but we have no need to use the .once or any other callback like we did in the main app). We again use async await to wait for the two migration scripts to run and then we close the db connection.

We need to close the db connection otherwise the script won't exit because the connection is still open. In that case we would have to kill the script manually every time we ran it. So instead we just created that simple function to close the connection that we can call when it's all done.

You may also be wondering how we can call the await keyword on the migration functions when they don't actually return anything, let along return a promise (await is all about promises right?). 

That is simply due to the nature of async await. When you mark a function as an async function you will automatically be able to treat it as if it returns a promise. So in this case we don't want to get a value from the functions, we simply want to wait for them to complete before we close the connection to the database.

### Async await is cleaner

Just think how you would write the 
{% ihighlight javascript %}{% raw %}
migrate()
{% endraw %}{% endihighlight %} function with normal promises and wait for both promises to resolve before you closed the database connection (you don't want to close the connection before the database is finished working, right).

Trying to do it with normal promises would involve you needing to create more lines of code that created another promises that resolves when the previous two resolve (probably using [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all){: target="_blank"}<!--_-->). As you can imagine that is not nearly as clean and elegant as the await syntax above.

Here is the completed 
{% ihighlight bash %}{% raw %}
migration.js
{% endraw %}{% endihighlight %}

{% highlight javascript linenos%}{% raw %}
const { startDb, closeDb } = require('./db');
const { Question } = require('./models/questions');
const { Fact } = require('./models/facts');
const { quizQuestions, correctAnswers, turtlesData } = require('./data');

async function migrateQuestions() {
  for (let i = 0; i < quizQuestions.length; i++) {
    const q = quizQuestions[i];
    const correct = q.possibilities[correctAnswers[i]].answer;
    q.possibilities.splice(correctAnswers[i], 1);
    const data = {
      question_type: q.type,
      question_text: q.text,
      question_possibilities: q.possibilities,
      correct_answer: correct,
    }
    await Question.create(data)
  }
}

async function migrateFacts() {
  for (let i = 0; i < turtlesData.length; i++) {
    const data = turtlesData[i];
    const facts = {
      fact_type: data.type,
      fact_image_url: data.image_url,
      fact_data: {
        locations: data.locations,
        size: data.size,
        diet: data.diet,
        lifespan: data.lifespan,
      },
      fact_description: data.description,
    }
    await Fact.create(facts)
  }
}

async function migrate() {
  startDb();
  await migrateFacts();
  await migrateQuestions();
  closeDb();
}
{% endraw %}{% endhighlight %}

## Using the Model to fetch data

We now have the mongoose models created for Facts and Questions, have a working connection to the database and have actual data in the database. The only thing left for us to do is to hook up the database into our existing functions that return data to the routes (
{% ihighlight javascript %}{% raw %}
getQuizQuestions
{% endraw %}{% endihighlight %},
{% ihighlight javascript %}{% raw %}
getCorrectAnswers
{% endraw %}{% endihighlight %} and
{% ihighlight javascript %}{% raw %}
getTurtleData
{% endraw %}{% endihighlight %} in the 
{% ihighlight bash %}{% raw %}
models/
{% endraw %}{% endihighlight %} directory)

Let's start with the 
{% ihighlight javascript %}{% raw %}
Fact
{% endraw %}{% endihighlight %} model that is returned from the 
{% ihighlight javascript %}{% raw %}
mongoose.model()
{% endraw %}{% endihighlight %} call. This model can be used to query against the database to find occurences of those structures (in this case, the Facts).

### Remember the model functions we made

If you remember we had model functions that we used to return the data before. In those functions we used promises that resolved immediately. They looked like this:

{% highlight javascript linenos%}{% raw %}
function getTurtleData() {
  return Promise.resolve(turtlesData);
}
{% endraw %}{% endhighlight %}

Now, we can replace that with a database call using the Mongoose models. Guess what? MONGOOSE MODELS USE PROMISES! YAY. It's almost as if we planned this...

{% highlight javascript linenos%}{% raw %}
function getTurtleData() {
  return Fact.find()
    .then(res => {
      return res;
    });
}
{% endraw %}{% endhighlight %}

The beauty now is that because we used promises before and are still using promises, the code that actually calls
{% ihighlight javascript %}{% raw %}
getTurtleData()
{% endraw %}{% endihighlight %} does not have to change at all. ***It will just work***.

We can test that out by going to 
{% ihighlight bash %}{% raw %}
http://localhost:8080/api/data
{% endraw %}{% endihighlight %} in the browser and you will see a dump of the facts data onto the screen. That data is coming straight from the database now. No need to make any changes to the route handlers at all! Can you tell this makes me really excited!?!?

### Question model functions

Just like for the facts we can use the 
{% ihighlight javascript %}{% raw %}
Question
{% endraw %}{% endihighlight %} model to find the data we need in the functions. The difference this time is that we will have to do a bit more work on the returned data than we did before.

With the Facts we simply returned the object that was returned from the database. This time however, the data returned to us has more information than we want to return. 

The Question model will return all the question information, including the question, possible answers, correct answers etc but we have a 
{% ihighlight javascript %}{% raw %}
getCorrectAnswers()
{% endraw %}{% endihighlight %} function that is only supposed to return the answers and a 
{% ihighlight javascript %}{% raw %}
getQuizQuestions()
{% endraw %}{% endihighlight %} function that is only supposed to return the questions and not the answers (but the correct answer must be mixed in with the possible answers).

Let's start with the 
{% ihighlight javascript %}{% raw %}
getQuizQuestions()
{% endraw %}{% endihighlight %} function.

What we want to do here is to get the returned data from the database, mix the correct answer in with the possible answers (shuffle them for good measure) and remove the key that indicates which answer is actually correct. Mongo also adds an id property to the possible answers so we will remove those because we don't need them for now.

{% highlight javascript linenos%}{% raw %}
function getQuizQuestions() {
  return Question.find()
    .then(res => {
      // res is the array of all questions in the database
      // .map loops through each one and performs some action on them.
      return res.map(q => {
        // converts from mongoose representation into a JS object
        const data = q.toObject();
        const answer = data.correct_answer;
        delete data.correct_answer;
        data.question_possibilities.push({ answer });
        data.question_possibilities = data.question_possibilities
          .map(d => ({ answer: d.answer }));

        shuffle(data.question_possibilities);
        return data;
      });
    });
}
{% endraw %}{% endhighlight %}

The above code is pretty complex and uses modern functional javascript, so don't be discouraged if you don't understand it straight away. I wanted to introduce code like this so you can begin to get a feel for the kind of code you should be getting comfortable with as your skills grow.

So let's talk through what is happening here:

* First of all we are using 
{% ihighlight javascript %}{% raw %}
.map()
{% endraw %}{% endihighlight %} to loop through all the questions returned by the database and create a new array from them which we return. For each item looped through we run a function which calculates the new item in the new array.

A simple example usage of map would be this:

{% highlight javascript linenos%}{% raw %}
let myArray = [1,2,3];

let myNewArray = myArray.map(value => {
  return value * 3;
});

// myArray has not changed.
// myArray = [1,2,3];

// myNewArray = [3,6,9];
{% endraw %}{% endhighlight %}

* On each item looped through in map we perform a function that does the following:

{% highlight javascript linenos %}{% raw %}
  const data = q.toObject();
  const answer = data.correct_answer;
  delete data.correct_answer;
{% endraw %}{% endhighlight %}

Here we convert the mongoose object into a normal javascript object, save the value of the correct answer and delete the correct_answer property from the object itself.

{% highlight javascript linenos%}{% raw %}
  data.question_possibilities.push({ answer });
  data.question_possibilities = data.question_possibilities
    .map(d => ({ answer: d.answer }));

  shuffle(data.question_possibilities);
  return data;
{% endraw %}{% endhighlight %}

Here we push the correct answer onto the possible answers array. Then loop through all the possible answers and make sure each is only an object with an answers property. This is done to remove the mongo id property and such. We do this because the returned data looks like this (notice the
{% ihighlight bash %}{% raw %}
_id
{% endraw %}{% endihighlight %} property in each question possibilities object):

![Unwanted Id property in the questions]({% asset_path unwanted-mongo-id-questions %}){: class="aligncenter" }

We want to clean that up so there is only an answer property on the 
{% ihighlight javascript %}{% raw %}
question_possibilities 
{% endraw %}{% endihighlight %} object.

The problem we have now is that because we pushed the correct answer to the end of the possible answers array. That means that the correct answer is always the last element in that array. Not good. So we should shuffle the array to make sure we can't predict which one is the correct answer.

We do that using a shuffle function, which you haven't seen yet. Here is the code that implements that shuffle function:

{% highlight javascript linenos%}{% raw %}
function shuffle(item) {
  for (let i = item.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [item[i], item[j]] = [item[j], item[i]];
  }
  return item;
}
{% endraw %}{% endhighlight %}

This is a modern ES6 implementation of the [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle){: target="_blank"}<!--_-->. I am not going to go into how the shuffle works or the ES6 magic of this function. It is a topic for another day, this tutorial is about mongodb.

Once the possible answers are shuffled, we return them from the function to be consumed by our route handlers and returned to the user.

### Getting the correct answers

{% highlight javascript linenos%}{% raw %}
function getCorrectAnswers() {
  return Question.find()
    .then(res => {
      return res.reduce((agg, q) => {
        agg[q._id] = q.correct_answer;
        return agg;
      }, {});
    });
}
{% endraw %}{% endhighlight %}

This is a shorter but no less difficult to wrap your head around peice of functional code. What we are doing here is again looping through all the questions returned from the database, but this time we are creating one object that maps the mongodb id of a question to the correct answer.

eg:

{% highlight javascript linenos%}{% raw %}
[
  {
    _id: 'someId',
    correct_answer: 'xx'
  }, 
  {
    _id: 'anotherId',
    correct_answer: 'yy'
  }
]
{% endraw %}{% endhighlight %}

becomes

{% highlight javascript linenos%}{% raw %}
{
  'someId': 'xx',
  'anotherId': 'yy'
}
{% endraw %}{% endhighlight %}

This object is then returned from the function to be consumed on by the API. The thing you may notice here is that in the original implementation of this, the 
{% ihighlight javascript %}{% raw %}
getCorrectAnswers()
{% endraw %}{% endihighlight %} function returned an array with the index of the correct answer. The issue with that is we are now shuffling the answers every time, so we don't necessarily know the index of the correct answer. So it is best to just use the id of the question, which never changes and give the correct answer for each id. 

The consumers of the API will then have to just do a little extra computation to map those to correct answers in their code. This is much more robust than simply using the index of the correct answer.

Here are the final model files:

**models/facts.js**
{% highlight javascript linenos%}{% raw %}
// models/facts.js
const mongoose = require('mongoose');

const FactSchema = new mongoose.Schema({
  fact_type: String,
  fact_image_url: String,
  fact_data: Object,
  fact_description: String,
  updated_at: { type: Date, default: Date.now  },
});

const Fact = mongoose.model('Fact', FactSchema);

module.exports = {
  Fact,
  getTurtleData,
}

function getTurtleData() {
  return Fact.find()
    .then(res => {
      return res || [];
    });
}

{% endraw %}{% endhighlight %}

**models/questions.js**
{% highlight javascript linenos%}{% raw %}
// models/questions.js
const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  question_type: String,
  question_text: String,
  question_possibilities: [{
    answer: String
  }],
  correct_answer: String,
  updated_at: { type: Date, default: Date.now  },
});

const Question = mongoose.model('Question', QuestionSchema);

module.exports = {
  Question,
  getCorrectAnswers,
  getQuizQuestions,
}

function getCorrectAnswers() {
  return Question.find()
    .then(res => {
      return res.reduce((agg, q) => {
        agg[q._id] = q.correct_answer;
        return agg;
      }, {});
    });
}

function getQuizQuestions() {
  return Question.find()
    .then(res => {
      return res.map(q => {
        const data = q.toObject();
        const answer = data.correct_answer;
        delete data.correct_answer;
        data.question_possibilities.push({answer})
        data.question_possibilities = data.question_possibilities
          .map(d => ({answer: d.answer}));
        shuffle(data.question_possibilities);
        return data;
      })
    });
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
{% endraw %}{% endhighlight %}

### We have a thing

At this point we actually have something. We are connecting to an actual database and because we didn't need to refactor the routes to use the new model functions we can actually go to the browser and hit 
{% ihighlight bash %}{% raw %}
http://localhost:8080
{% endraw %}{% endihighlight %} on routes 
{% ihighlight bash %}{% raw %}
/api/data
{% endraw %}{% endihighlight %},
{% ihighlight bash %}{% raw %}
/api/questions
{% endraw %}{% endihighlight %} or
{% ihighlight bash %}{% raw %}
/api/answers
{% endraw %}{% endihighlight %}
and we will actually be hitting the database and returning real data. 

So there you have it! A working API built with express and MongoDB. It really wasn't that hard was it? But it's super awesome if you ask me. I really hope you enjoyed this series. Let me know what other series you would like to see me make.

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
