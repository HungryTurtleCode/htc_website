---
title: How To Deploy a Library to NPM Using Travis CI
image:
excerpt: This is the template excerpt

videoID:
repo: adiman9/ParallaxProvider
fbimg:
twitterimg:
course-index: parallax-library
series: Parallax Library

categories:
  - Projects
tags:
  - Javascript
  - Parallax Library
  - Deploying
  - Open Source
  - Continuous Integration
resources:
  - name: Library on NPM
    link: https://www.npmjs.com/package/parallax-provider
---
## Deploying our Library to NPM

We finally made it! We are going to deploy the library to NPM. In this part we will set up the project with some best practices for open source javascript projects including eslint, prettier, git pre commit hooks with husky and lint-staged, travis continuous integration and automated deploy of the library to NPM on git tags. 

That is a lot to get through to let's get to it.

### Tooling
If we are maintaining an open source project we have to think about the fact that there will likely be other people from all over the world who could contribute to the project and they all have different levels of ability and different coding preferences. That is absolutely fine, but we still want to strive for consistency in our code.

Last thing we want to see is parts of the code using one coding convention while another uses a totally different convention. One obvious example of this is tabs vs spaces, which we fixed by adding the .editorconfig [when we wrote the library code]({{site.baseurl}}/projects/parallax-library).

Unfortunately, there are many other examples of such conventions that can differ - semicolons, trailing commas, line breaks etc just to name a few.

So to fix this we will use two tools called eslint and prettier. eslint is a great tool where we define certain "rules" about coding convention and style and eslint will check to ensure the code conforms to those rules.

Prettier is a formatting tool that will format our code in a consistent way every time we run the tool. Things are no longer up to personal preference, we just decide on a convention, put it into a prettier config and let prettier handle it.

Using these two tools results in super consistent code style and formatting.

### eslint

First we will install eslint and the airbnb (yes the company you book a house to stay in) base configuration for eslint. We use this base config because it has a lot of good defaults to start with and saves us from having to configure everything manually.

We will also install a plugin that will work well with prettier (specifically it will stop eslint from shouting at us for things prettier will fix for us). 

{% highlight bash linenos%}{% raw %}
yarn add --dev eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-jest
{% endraw %}{% endhighlight %}

Then we will need to create an 
{% ihighlight bash %}{% raw %}
.eslintrc
{% endraw %}{% endihighlight %} configuration file. Put the following into it:

{% highlight json linenos%}{% raw %}
{
 "extends": ["airbnb-base", "prettier"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
  },
  "plugins": [],
  "rules": {
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "none"
      }
    ],
    "no-plusplus": "off",
    "no-underscore-dangle": "off",
  }
}
{% endraw %}{% endhighlight %}

Here we tell it to use the airbnb configuration and the prettier configuration defaults and supply it will a few extra rules in the "rules" property. These are just a few that I like to use. You can see a whole list of [rules for eslint here](https://eslint.org/docs/rules/).

It will also install the eslint plugin for jest that will allow eslint to be aware of jest syntax (when we use jest: true in the env of our .eslintrc). If we don't install that plugin eslint will shout at us that the jest global functions like 
{% ihighlight javascript %}{% raw %}
expect()
{% endraw %}{% endihighlight %} and 
{% ihighlight javascript %}{% raw %}
test()
{% endraw %}{% endihighlight %} don't exist. So it's a pretty good idea to add it.

You can also create an 
{% ihighlight bash %}{% raw %}
.eslintignore
{% endraw %}{% endihighlight %} to tell eslint to ignore certain files, this can be really useful.

### Prettier

Prettier is a simple one to install. 

{% highlight bash linenos%}{% raw %}
yarn add --dev prettier
{% endraw %}{% endhighlight %}

Just like eslint we also need a config for prettier - this time it is 
{% ihighlight bash %}{% raw %}
.prettierrc
{% endraw %}{% endihighlight %}. This is the one I use:

{% highlight bash linenos%}{% raw %}
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": false,
  "jsxBracketSameLine": false,
  "proseWrap": "always"
}
{% endraw %}{% endhighlight %}

Again, you can also create an
{% ihighlight bash %}{% raw %}
.prettierignore
{% endraw %}{% endihighlight %} to ignore files from being prettified. These are the files / folders I ignore:

{% highlight bash linenos%}{% raw %}
dist
node_modules
coverage
build
{% endraw %}{% endhighlight %}

And that's all we need to do to get prettier into our project.

## But how do you enforce these tools?
A valid thing to say at this point is, 

*"it's all well and good having eslint and prettier to enforce code style but how to you ensure everyone who contributes runs the tools?".*

Enter git hooks using husky and a beautify tool called lint-staged.

Git hooks are an amazing tool that are all too often over looked. They are built into git and allow you to trigger scripts when during certain events in the git lifecycle. For our use case we will be using a git hook called "pre-commit". This will trigger a script every time we try to commit code and if the script fails it won't allow us to commit the code.

Setting up git hooks manually can be a pain and it's difficult to distribute them through source control. Husky is a tool that allows us specify certain scripts to run as git hooks in our package.json file. Husky takes care of actually setting up the hooks and running our scripts, we just tell it when to run and what to run. Wonderful.

Lint-staged is a tool that allows us to run linters and other such tools against only the files that are currently staged on git (ie the files we have "git added").

We will use lint-staged to run eslint, prettier and run our jest tests against the files that have been staged. Lint staged will be triggered to run by husky as a pre commit hook.

So the workflow looks like this:
* Make changes to the code
* git add the changed files
* git commit the changed files
* Before the code is actually committed husky will trigger lint-staged
* Lint staged will run eslint, prettier and jest against all the staged files
* If anything fails the commit won't go through, if everything passes ok then the code is committed.

This is a no pain way to ensure that all the linters, formatters and tests are happy with the code before it ever makes it's way into the repo. Great for open source projects to maintain consistency. 

First step to get this going is to install lint-staged and husky

{% highlight bash linenos%}{% raw %}
yarn add --dev lint-staged husky
{% endraw %}{% endhighlight %}

Then create a 
{% ihighlight bash %}{% raw %}
lint-staged.config.js
{% endraw %}{% endihighlight %} and populate it will the following:

{% highlight javascript linenos%}{% raw %}
module.exports = {
  linters: {
    '**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)': [
      'eslint --fix',
      'prettier --write',
      'jest --findRelatedTests',
      'git add',
    ],
  },
};
{% endraw %}{% endhighlight %}

Here we are telling lint staged to look for any file that ends in any of the following
{% ihighlight bash %}{% raw %}
(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)
{% endraw %}{% endihighlight %} and then run eslint, prettier and jest on them. Finally it runs git add on each file too to make sure that the most up to date file gets readded to the git stage in the likely event that prettier or eslint modified the files.

The final step is to actually get husky to run this on precommit. Open up your package.json and add the following.

{% highlight javascript linenos%}{% raw %}
{
  // Rest of package.json
  "scripts": {
    // rest of scripts
    "precommit": "lint-staged",
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn precommit"
    }
  }
}
{% endraw %}{% endhighlight %}

We create a script called "precommit" (you can call this whatever you want) that runs lint-staged and we create a section called husky that calls 
{% ihighlight bash %}{% raw %}
yarn precommit
{% endraw %}{% endihighlight %} during the "pre-commit" git hook.

### Other npm scripts

While we are at it, we might as well add in a bunch of other npm scripts in case we manually want to run eslint or prettier etc

Here is all the npm scripts I have so far:

{% highlight json linenos%}{% raw %}
"scripts": {
  "build": "rollup -c",
  "dev": "rollup -c -w",
  "lint": "eslint src",
  "test": "jest",
  "test:watch": "jest src --watch --notify",
  "cover": "jest --coverage",
  "clean": "rimraf dist",
  "precommit": "lint-staged",
  "format": "prettier --write \"src/**/*.+(js|md|ts|css|sass|less|graphql|yml|yaml|scss|json|vue)\"",
},
{% endraw %}{% endhighlight %}{: *}

One last file to add to the repo is 
{% ihighlight bash %}{% raw %}
.npmrc
{% endraw %}{% endihighlight %} which we put this into:

{% highlight bash linenos%}{% raw %}
registry=http://registry.npmjs.org/
{% endraw %}{% endhighlight %}

It just tells npm we want to use the npm registry.

## Setup done, let's GOOOOO

We are going to set up continuous integration using Travis CI. Continuous integration is just a way of running your linting, test and build process on a fresh system automatically on every push to github. This will also run against pull requests to the repository so we will always know if the tests are passing and the library is building properly.

You may have seen this on github pull requests before:

**INSERT IMAGE HERE**

That is travis integrated with github.

So go to [travis-ci.org](https://travis-ci.org) and sign up with your github account.

**INSERT IMAGE HERE**

Once you are logged in, you will be greated by a list of all the public repositories you have on your github account. Search for the one you want and click it, you will be greeted by this page:

**INSERT IMAGE HERE**

Activate the repository.

GitHub will now inform Travis every time there is a commit or pull request to the repository. But nothing will happen yet because we haven't told travis what to do. This is where we create a 
{% ihighlight bash %}{% raw %}
.travis.yml
{% endraw %}{% endihighlight %} file to tell travis what to do.

Here is a basic travis config that will install all dependencies and run the lint, test and build scripts automatically. Travis will then report back if these scripts passed or failed.

{% highlight yaml linenos%}{% raw %}
language: node_js
node_js:
  - '8'
cache: yarn
install:
  - yarn install
script:
  - yarn lint
  - yarn test
  - yarn build
{% endraw %}{% endhighlight %}

If we add the above config into the repo and push it to github travis github will tell travis that there is a new commit and travis will run according to what is in that config.

Here is what the travis dashboard for the repo will look like:

**INSERT IMAGE HERE**

## CI DONE, time to deploy!

At this point we have all our tools set up for best practices and we have a continuous integration flow working. The next thing to do is to automatically deploy the library to NPM via the travis pipeline.

Firstly, if you haven't got one already, set up an account at [npmjs.com](https://www.npmjs.com/)

Once you have an account you will need to create an API token that will allow travis to publish to your account.

On the main page on npmjs.com click the account dropdown at the top and select "tokens":

**INSERT IMAGE HERE(dropdown on npmjs)**

You will be brought to the tokens page of your account. Click the "Create new token" button.

**INSERT IMAGE HERE(create new token)**

You want to create a "Read and publish" token so that travis can publish on your behalf. Soon as you hit create you will be presented with a success message and the token itself. Be super careful with this token, if anyone get's hold of it they will be able to publish to your npm account, which is really not what you want!

**INSERT IMAGE HERE (npm token)**

### Add the key to travis

Now that you have that key, you want to add it to your travis account as an environment variable for your builds.

Navigate to the travis dashboard and click on the project in question. In this case I will click on "ParallaxProvider" and getting taken to the project dashboard.

Hit the "More options" button on the top right and go to "settings".

**INSERT IMAGE HERE (more options)**

Scroll down to the "Environment Variables" section and create two environment variables as follows:

* NPM Email
  * **Name**: NPM_EMAIL
  * **Value**: the email you use for your npm account

* NPM API Key
  * **Name**: NPM_TOKEN
  * **Value**: the api key you just created on npmjs.com

Make sure that when you add then the toggle for "display value in build logs" is not toggled on. You do not want these values to be visible anywhere (well no the api key anyway).

### Final steps
We don't want to deploy to NPM on every single commit. Instead we will use the git tag system and only deploy when we tag a commit as a new version. That leaves us free to push as many commits as we want and travis will run the CI against every one of them to make sure that the repo builds and the tests pass. However it will only trigger a deployment to NPM if a new tag is present on the commit and the continuous integration passes.

To get this working we will need to update our travis yaml config file:

{% highlight yaml linenos%}{% raw %}
language: node_js
node_js:
  - '8'
cache: yarn
install:
  - yarn install
jobs:
  include:
    - stage: Build and test
      script:
        - yarn lint
        - yarn test
        - yarn build
    - stage: npm release
      script: yarn build
      deploy:
        provider: npm
        email: '$NPM_EMAIL'
        api_key: '$NPM_TOKEN'
        skip_cleanup: true
        on:
          tags: true
branches:
  only:
    - master
    - /^v[0-9]+.*$/
{% endraw %}{% endhighlight %}{: *}

So there is definitely more going on in this config file, so let's go through it.

The first thing you will notice is that there is a new "jobs" key and the "script" key has been indented into one of the jobs. We have also added a "branches" key. Let's talk about what all of this means.

Before we just had the "scripts" section that told travis to run those scripts. That is the simplest case where there is no conditions required to run any of them and there isn't any desired grouping for the scripts to run.

If we want something a little more complex we can use the stages feature within travis. This allows us to to have different groupings of scripts call "jobs". Above you can see we have defined two different jobs. One called "Build and test" and the other called "npm release".

The build and test job is exactly what we had in the basic travis config before, we have just put it into a job instead.

The interesting part is the npm release job. We initailly give it a script "yarn build" to run just to ensure that the project is built correctly then we trigger a travis deploy pipeline. Travis is aware of how to deploy to many different providers, one of which is the npm registry. So we tell travis we want to use the provider "npm" in the deploy script.

Then we need to tell travis to use the email and npm api key that we put into travis earlier. This will allow npm to authorise travis to actually deploy to our account.

There are two more options provided:
* skip_cleanup: true - Tells travis not to clean up the artifacts from the build stage. This is 100% necessary otherwise there will be no files to deploy because travis will clean them up after the build.{: _}
* on: tags: true - This tells travis to only run this deploy job when there is a tag present on the commit this job is being run against.

Finally we have 

{% highlight yaml linenos%}{% raw %}
branches:
  only:
    - master
    - /^v[0-9]+.*$/
{% endraw %}{% endhighlight %}{: *}

This is just telling travis to only trigger jobs on the master branch or on a tag that starts with v and a number (eg v0.0.1). We can put as many words or regex expressions in this list and they will match against branches and tags in our repo. Any time there is a new commit that matches on of those, it will trigger the travis jobs.

## Tagging and npm version

With our new travis config we are able to trigger travis to run our tests and build on every commit and also trigger travis to deploy to npm when there is a new tag present. But how do we tag a commit?

Well there are two ways: The manual way and using npm version.

### The manual way
The manual way is to run 
{% ihighlight bash %}{% raw %}
git tag <tag name>
{% endraw %}{% endihighlight %}. So to tag a commit with v0.0.1 we would run this:

{% highlight bash linenos%}{% raw %}
git tag v0.0.1
{% endraw %}{% endhighlight %}

At this point we would have a git tag but the "version" key in the package.json won't be in sync with the git tags. This would have to be updated manually. 

### NPM Version
To save the hastle of the manual tagging process npm has a built it command called
{% ihighlight bash %}{% raw %}
npm version <version_type>
{% endraw %}{% endihighlight %} that conforms to the SemVer spec and where version_type is one of the following:

* patch: a small bug fix.
* minor: a new feature with no breaking changes to the code.
* major: a new feature with breaking changes to the code.

Running this command will add a new git tag and update the package.json for us.

For example, if we are on v0.0.5 and we run 
{% ihighlight bash %}{% raw %}
npm version patch
{% endraw %}{% endihighlight %} our new version would be v0.0.6. Running
{% ihighlight bash %}{% raw %}
npm version minor
{% endraw %}{% endihighlight %} would result in the new version being v0.1.0 etc

### Pushing your tags to git
Regardless of which method you choose to tag your commits you will need to push the tags to github for travis to see them. You do that with the following command:

{% highlight bash linenos%}{% raw %}
git push --tags
{% endraw %}{% endhighlight %}

Once you have pushed the tags to github you should see them under "release":

**INSERT IMAGE HERE**
**INSERT IMAGE HERE**

## Everything working
With our new tag added to git and pushed to github, travis will get to work running our jobs. It will detect that there is a new tag and therefore the deployment to npm will run.

**INSERT IMAGE HERE (travis detecting tag)**
**INSERT IMAGE HERE (travis running)**
**INSERT IMAGE HERE (travis completed)**

If the travis jobs all passed successfully we should be able to go to your npm account and see a new package has been added:

**INSERT IMAGE HERE (package on npm)**

And there you go! Well done! You now have your very own open source package published on NPM.

If you follow along with this tutorial and publish your own package to NPM please do let me know, I would love to see. I am also happily accepting pull requests on my ParallaxProvider library if there is any feature you want to have a go at implementing.

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
