I like the one-line option of git log:

```git log --pretty=oneline```

The only problem is that I keep forgetting if it's `--pretty=oneline` or `--oneline` or some other variation.  This is where `git alias` comes in.

```git config --global alias.logline "log --pretty=oneline```

With the above call I can now type `git logline` and out pops the one-line format.  If I want additional information I can just type `git log <HASH>`

Much easier
