---
title: ESLint and Prettier with Husky Git Hooks
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2Feslint%20and%20prettier%20with%20husky%20git%20hooks.jpg?alt=media&token=498fb054-609d-493f-ac7b-8583706b5a45
excerpt: Using eslint and prettier have become standard best practices for javascript projects to maintain consitency in the code base. Enforcing eslint and prettier using husky git hooks is a great way to ensure that quality with minimal developer effort.

videoID: oLxuu7kBZWg
repo: adiman9/ParallaxProvider
fbimg:
twitterimg:
course-index: parallax-library
series: Parallax Library
repo: adiman9/ParallaxProvider

categories:
  - Projects
tags:
  - Javascript
  - Parallax Library
  - Tooling
  - Open Source
resources:
  - name: ESLint
    link: https://eslint.org/
  - name: Prettier
    link: https://prettier.io/
  - name: Husky
    link: https://github.com/typicode/husky
  - name: Lint Staged
    link: https://github.com/okonet/lint-staged
  - name: Git Hooks
    link: https://githooks.com/
---
*Please note that the video is a little out of date now - the lint-staged config used in it is wrong. This article has been updated to reflect the correct config*

## Javascript Tooling

If we are maintaining an open source project we have to think about the fact that there will likely be other people from all over the world who could contribute to the project and they all have different levels of ability and different coding preferences. That is absolutely fine, but we still want to strive for consistency in our code.

Last thing we want to see is parts of the code using one coding convention while another uses a totally different convention. One obvious example of this is tabs vs spaces, which we fixed by adding the .editorconfig [when we wrote the library code]({{site.baseurl}}/projects/parallax-library).

Unfortunately, there are many other examples of such conventions that can differ - semicolons, trailing commas, line breaks etc just to name a few.

So to fix this we will use two tools called eslint and prettier. eslint is a great tool where we define certain "rules" about coding convention and style and eslint will check to ensure the code conforms to those rules.

Prettier is a formatting tool that will format our code in a consistent way every time we run the tool. Things are no longer up to personal preference, we just decide on a convention, put it into a prettier config and let prettier handle it.

Using these two tools results in super consistent code style and formatting.

### ESLint

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
  '**/*.+(js|ts)': [
    'eslint --fix',
    'prettier --write',
    'jest --findRelatedTests',
  ],
};
{% endraw %}{% endhighlight %}

Here we are telling lint staged to look for any file that ends in any of the following
{% ihighlight bash %}{% raw %}
(js|ts)
{% endraw %}{% endihighlight %} and then run eslint, prettier and jest on them.

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

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
