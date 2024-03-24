# Handling Glob Patterns in `zsh` with noglob

In Z shell (zsh), characters such as **?**, **\***, **(**, and **)** are interpreted as part of its globbing mechanism, which is used for pattern matching. However, this automatic interpretation can cause issues when using commands like `wget`, which may utilize these characters in their operational syntax. For instance, these characters might be part of a URL or a command option, where they are expected to be treated as literal characters rather than as part of a glob pattern.

There are two primary strategies for addressing this:

1. Enclose the argument containing special characters in quotes to prevent zsh from interpreting them as glob patterns. For example: `wget "https://example.com?part1"`.

1. Use the noglob prefix with commands that are followed by potentially problematic arguments. This approach tells zsh to treat the following command's arguments as literal strings without attempting to expand them as glob patterns. An example of this usage would be: `noglob scp server:~/*.csv`.

I forget to do either, so to streamline the process and I created a function that generates aliases for a list of specified commands. This function, `noglob_wrapper`, automatically prepends `noglob` to each command, effectively disabling glob interpretation for them. Here's how to define and use the noglob_wrapper function:

``` shell
noglob_wrapper() {
  for cmd in "$@"; do
    alias $cmd="noglob $cmd"
  done
}

noglob_wrapper yt-dlp wget scp curl
```

By employing the noglob_wrapper function, you can easily apply the noglob prefix to any number of commands, ensuring that glob patterns are not inadvertently expanded and that the commands work as expected without the need for manual quoting or prefixing each time.
