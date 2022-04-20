# Introduction
One of the most useful bookmarks I have is "Goto Root".  It takes the current URL from the browser and strips out everything except the root domain.  I use this daily since there isn't a standard place for putting a link to a websites root URL.  So if I go to an article on someones blog, I can get to their root with just one click in a standard location.

I started with one that I found on the Internet a few years back, but I created one that when on reddit, will go to the current subreddit first.  If you click the GoToRoot bookmarklet from a subreddit page, it will go to the main reddit page.

<a href="javascript:var%20url%20%3D%20new%20String(location.href)%3B%0Avar%20re%20%3D%20new%20RegExp('(https%3F%3A%5C%2F%5C%2F)(%5Ba-zA-Z0-9.%5D%2B)((%5C%2Fr%5C%2F.*%5C%2F)(comments.*))%3F')%3B%0Avar%20res%20%3D%20url.match(re)%3B%0A%2F%2F%20go%20to%20the%20root%20URL%0Aroot_url%20%3D%20res%5B1%5D%20%2B%20res%5B2%5D%3B%0A%2F%2F%20If%20we%20are%20in%20a%20subreddit%2C%20go%20to%20the%20subreddit%0A%0Are%20%3D%20new%20RegExp('.*reddit.com')%3B%0Aif(%20res%5B2%5D.match(re))%20%7B%0A%20%20%20%20if%20(typeof%20res%5B3%5D%20!%3D%3D%20'undefined'%20%26%26%20typeof%20res%5B4%5D%20!%3D%20'undefined')%20%7B%0A%20%20%20%20%20%20%20%20root_url%20%3D%20root_url%20%2B%20res%5B4%5D%3B%0A%20%20%20%20%7D%0A%7D%0Alocation.href%3Droot_url%3B%0A">GoToRoot</a>

Just drag the bookmarklet up to your toolbar and it should just work.

The above is an encoded string so it can be added to a bookmark, but the unencoded form can be found below.

```
var url = new String(location.href);
var re = new RegExp('(https?:\/\/)([a-zA-Z0-9.]+)((\/r\/.*\/)(comments.*))?');
var res = url.match(re);
// go to the root URL
root_url = res[1] + res[2];

// If we are in a subreddit posts comments, go to the subreddit
re = new RegExp('.*reddit.com');
if( res[2].match(re)) {
    if (typeof res[3] !== 'undefined' && typeof res[4] != 'undefined') {
        root_url = root_url + res[4];
    }
}
location.href=root_url;
```



