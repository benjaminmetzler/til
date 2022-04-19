// var url = new String(location.href);
var re = new RegExp('(https?:\/\/)([a-zA-Z0-9.]+)((\/r\/.*\/)(comments.*))?');
var res = url.match(re);
// go to the root URL
root_url = res[1] + res[2];
// If we are in a subreddit, go to the subreddit

re = new RegExp('.*reddit.com');
if( res[2].match(re)) {
    if (typeof res[3] !== 'undefined' && typeof res[4] != 'undefined') {
        root_url = root_url + res[4];
    }
}
location.href=root_url;