One of the most useful tools I have in my toolbar is a bookmarket that will go to the root of the website.  It's not much but it allows me to jump into a subpage and then go to the root page.  Works really well for blogs that I am reading an entry and want to check out the main site.  Most sites do have a way to go to the root, but it varies location from site to site.  This provides me with a standard spot to click.

```javascript
javascript:var%20url%20=%20new%20String(location.href);var%20re%20=%20new%20RegExp('https?://([A-Za-z0-9.-]+)');var%20res%20=%20url.match(re);location.href=res[0];
```

To install, create a bookmark, then edit it.  Replace the location in the bookmark with the above javascript.
