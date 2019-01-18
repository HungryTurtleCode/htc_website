---
title: Build your own Link Shortener with Netlify
image: https://firebasestorage.googleapis.com/v0/b/hungry-turtle-code.appspot.com/o/article_images%2FCreate%20Your%20Own%20Custom%20Shortlinks.jpg?alt=media&token=42e5fe67-d74b-4565-a5d4-da38d6d95ad6
excerpt: Learn to build your own link shortener using git and netlify. Sending out long links to people can be annoying and you will never remember them. Using your own custom short links is a great way around the problem.

videoID: SX-C6Dk_-UI
repo: adiman9/shortlinks-example
fbimg: 
twitterimg: 

categories:
  - Tutorials
tags:
  - Hosting
  - Git / Github
  - DNS
  - Domains
resources:
  - name: Netlify
    link: https://www.netlify.com/
  - name: Namecheap
    link: https://www.namecheap.com/
---
## Custom short links using Netlify

Often there are links you send people to all the time - things like you youtube channel, twitter profile, your blog etc. Sending full URLs can be pretty unwieldy and impossible to remember if you tell someone about it in conversation. This is where custom shortlinks can come to the rescue.

Obviously, you can use an existing link shortening service but it just looks a little more sleek and professional if you have a custom short link.

For example, I have custom short links for things related to Hungry Turtle Code:

* [trtl.cc](https://trtl.cc){: target="_blank" _} - Takes you to the main website
* [trtl.cc/patreon](https://trtl.cc/patreon){: target="_blank" _}- Takes you to my Patreon.
* [trtl.cc/youtube](https://trtl.cc/youtube){: target="_blank" _}- Takes you to the Hungry Turtle Code YouTube channel.
* [trtl.cc/js](https://trtl.cc/js){: target="_blank" _} - Takes you to the page with all articles tagged with "Javascript".

You get the picture.

It is much easier to give out those short links than it is to give out the full URLs.

## How did I do it?

This tutorial is entirely inspired by a video I saw a few weeks ago by [Kent C Dodds](https://www.youtube.com/watch?v=HL6paXyx6hM){: target="_blank" _}. I thought the idea was really cool so I thought I would recreate it and give him the credit while I tried to spread the cool idea. If you don't already know who he is, definitely go give him some love - he does some awesome things for the Javascript community.

Here is a high level run down of what we will be doing:
* Purchase a domain to use as your short link domain
* Set up a git repo that will contain configuration to map short links to full URLs
* Connect that git repo to Netlify so Netlify can create the correct redirects
* Point the previously purchased domain to Netlify.

### Purchasing the domain
First things first you need to get hold of a domain to use as your shortlink domain. I tend to get my domains from NameCheap but you can use whatever provider you are used to (Netlify also allows you to purchase domains directly through them).

I will use Namecheap in this tutorial. If you go to namecheap you will be met with the following page that will allow you to search for domains to see if they are available for purchase (ie someone doesn't already own it).

![Search box on namecheap]({% asset_path namecheap-search %}){: class="aligncenter" width="800"}


I searched for "htcode.club" to use for this tutorial and luckily it was available. If the domain you search for is available it will tell you the price of it and give you an "add to cart" button.

![namecheap add to card]({% asset_path namecheap-add-cart %}){: class="aligncenter"}

Follow the instructions through checkout and complete the purchase of the domain.

## Git Repository

Now we have the domain we can set it to the side for a second while we get everything else set up.  

Go to [GitHub](https://github.com) and create a new repository.

![create new repo button on github]({% asset_path github-new-repo %}){: class="aligncenter"}

I called mine "shortlinks-example".

![create new repo form]({% asset_path create-repo %}){: class="aligncenter"}

Then click create the repository.

At this point, I would usually go to the terminal on my machine and create a new git repo there and link it to the newly created repo on github. But in this case I am actually going to create a new file directly through github, just for convenience.

![create a file on github]({% asset_path create-file-git %}){: class="aligncenter"}

I will call it 
{% ihighlight bash %}{% raw %}
_redirects
{% endraw %}{% endihighlight %}{: _}. **This name is important**. It is the file that Netlify will look for to create redirects when we link this repo to Netlify.

Inside this new 
{% ihighlight bash %}{% raw %}
_redirects
{% endraw %}{% endihighlight %}{: _} file I will add the following:

{% highlight bash %}{% raw %}
/* https://www.youtube.com/channel/UC7Vxnf06GP6w42Lg3TQLXSw
{% endraw %}{% endhighlight %}{: *}

This will map all routes to the url of my youtube channel. I will discuss more about this file later in the article but for now know that we simply map a route to a url. In this case we map the wildcard route
{% ihighlight bash %}{% raw %}
/*
{% endraw %}{% endihighlight %}{: *} to the url of my youtube channel.

### On To Netlify
The next thing to set up is an account on Netlify. Head over to [Netlify](https://www.netlify.com) and set up an account.

![netlify home page]({% asset_path netlify-home %}){: class="aligncenter"}

I signed in using GitHub.

Click "New site from Git" in the top right hand side:

![netlify create new site from git]({% asset_path netlify-new-site %}){: class="aligncenter"}

Then link it with GitHub. This will allow you to authorise Netlify against any or all of your github repos. I selected to authorise only selected repos and chose the shortlinks-example repo we just created.

![netlify select git repo]({% asset_path netlify-select-repo %}){: class="aligncenter"}

With that done you can now click on the repo within Netlify and you will be met with this page:

![deploy new site]({% asset_path netlify-deploy-site %}){: class="aligncenter"}

You do not need to worry about build settings or anything (Netlify is capable of some pretty cool things, so maybe an idea for another tutorial?), so just click "Deploy site".


## Your redirects are deployed - kinda
Netlify will immediately create a deployment based on what is in the git repo. That means our redirects will be live - just not using the domain we want yet.

### Pointing your domain at Netlify
Click the "Domain settings" button on the project dashboard on Netlify:

![domain settings]({% asset_path domain-settings %}){: class="aligncenter"}

Then click on the "Check DNS configuration" button:

![check dns configuration]({% asset_path check-dns-config %}){: class="aligncenter"}

You will be met with different options for pointing your domain at Netlify. Namely:
* Creating an ANAME entry to point at the netlify domain
* Creating an A record to point at the IP netlify gave you

Namecheap doesn't support ANAME as far as I am aware so I will be going down the A record route. Copy the IP that is presented to you and head over to namecheap.

On the namecheap dashboard click on "Manage" next to the domain you just purchased. Then click on "Advanced DNS".

Here we can add a new DNS record:

![Adding new A Record]({% asset_path add-new-record %}){: class="aligncenter"}

Select "A Record" as the type. Enter the "@" symbol for "Host" and paste in the IP from Netlify into the Value field.

Click the little check mark on the right when you are done:

![Finish adding record]({% asset_path namecheap-dns-checkmark %}){: class="aligncenter"}

At this point I also deleted the other DNS records that NameCheap placed on the domain by default.

## Tick Tock

At this point it is just a waiting game for the DNS to propagate. It usually doesn't take that long.

After a while if we enter htcode.club into the browser address bar we will promptly be taken to my youtube channel. Now the DNS has propagated and our domain is pointing to Netlify and Netlify is using the info from the 
{% ihighlight bash %}{% raw %}
_redirects
{% endraw %}{% endihighlight %}{: _} file to redirect us accordingly. Wonderful!

## Adding more redirects

At this point we have the infrastructure set up to create as many short link redirects as we want.

I will clone the github repo to my local machine and we can add some more redirects to the file. Head over to github and grab the repo url:

![Git clone URL]({% asset_path github-clone-url %}){: class="aligncenter"}

Then in the terminal:

{% highlight bash %}{% raw %}
git clone <repo url>
{% endraw %}{% endhighlight %}

Then 
{% ihighlight bash %}{% raw %}
cd
{% endraw %}{% endihighlight %} into the newly created directory and open up the 
{% ihighlight bash %}{% raw %}
_redirects
{% endraw %}{% endihighlight %}{: _} file in your favourite text editor.

This file is parsed by Netlify from top to bottom and the first matching entry is what is served as the redirect, meaning we want the wildcard entry we already have in there to be at the bottom of the file ie all other redirects should be defined above it.

Let's add a few more entries into the file:

{% highlight bash linenos%}{% raw %}
/site     https://hungryturtlecode.com/
/patreon  https://www.patreon.com/hungryturtlecode
/*        https://www.youtube.com/channel/UC7Vxnf06GP6w42Lg3TQLXSw
{% endraw %}{% endhighlight %}{: *}

Save the file and commit the changes:

{% highlight bash %}{% raw %}
git add . && git commit -m "added some shortlinks"
{% endraw %}{% endhighlight %}

Push those changes back to github:

{% highlight bash %}{% raw %}
git push origin master
{% endraw %}{% endhighlight %}

This will notify Netlify of the changes and Netlify will in turn create the new redirects. In my experience, Netlify deploys the updates FAST!

So now we can hit htcode.club/patreon or htcode.club/site and be redirected accordingly!

So there you have it, you have your very own short link service! Well done!

At this point the world is your oyster. The workflow to deploy new short links is so clean. The possibilities are endless. For example I am thinking of creating a tool that will automatically create an entry in the redirects file and push the repo every time I write a new article on this site. There are many similar ideas you could dig into now too!

So go forth and conquer the short link world!

Stay hungry, and keep coding.

Adrian

&nbsp;

Please give this post a share if you enjoyed it. _Everyone_ needs that **awesome friend** to send them amazing stuff.
