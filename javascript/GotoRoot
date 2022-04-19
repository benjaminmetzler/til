# Introduction
One of the most useful bookmarks I have is "Goto Root".  It takes the current URL from the browser and strips out everything except the root domain.  I use this daily since there isn't a standard place for putting a link to a websites root URL.  So if I go to an article on someones blog, I can get to their root with just one click in a standard location.

I started with one that I found on the Internet a few years back, but I created one that, on reddit, will go to the subreddit first.  If you click the GoToRoot bookmarklet from a subreddit, it will go to the main reddit page.

[Goto Root]('javascript'ar%20url%20%3D%20new%20String(location.href)%3B%0Avar%20re%20%3D%20new%20RegExp('(https%3F%3A%5C%2F%5C%2F)(%5Ba-zA-Z0-9.%5D%2B)((%5C%2Fr%5C%2F.*%5C%2F)(comments.*))%3F')%3B%0Avar%20res%20%3D%20url.match(re)%3B%0A%2F%2F%20go%20to%20the%20root%20URL%0Aroot_url%20%3D%20res%5B1%5D%20%2B%20res%5B2%5D%3B%0A%2F%2F%20If%20we%20are%20in%20a%20subreddit%2C%20go%20to%20the%20subreddit%0A%0Are%20%3D%20new%20RegExp('.*reddit.com')%3B%0Aif(%20res%5B2%5D.match(re))%20%7B%0A%20%20%20%20if%20(typeof%20res%5B3%5D%20!%3D%3D%20'undefined'%20%26%26%20typeof%20res%5B4%5D%20!%3D%20'undefined')%20%7B%0A%20%20%20%20%20%20%20%20root_url%20%3D%20root_url%20%2B%20res%5B4%5D%3B%0A%20%20%20%20%7D%0A%7D%0Alocation.href%3Droot_url%3B%0A).  

The above is encoded so it can be added to a bookmark, but the unencoded form can be found [here](gotoroot.js).

Just drag the bookmarklet up to your toolbar and it should just work.