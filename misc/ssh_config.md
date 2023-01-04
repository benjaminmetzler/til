# Construction Regex SSH Config Entries

You can use regex in the `.ssh/config` file instead of hard-coding server names.

``` shell
# All dev VMs
Match exec "echo %h | sh -c 'tr [:upper:] [:lower:]' | grep -q '<REGEX>'"
    StrictHostKeyChecking no
    UserKnownHostsFile=/dev/null
    PasswordAuthentication no

# Linux dev VMs
Match exec "echo %h | sh -c 'tr [:upper:] [:lower:]' | grep -q '<LINUX_REGEX>"
    User user1

# Windows dev VMs
Match exec "echo %h | sh -c 'tr [:upper:] [:lower:]' | grep -q '^WINDOWS_<REGEX>"
    User user2
    KexAlgorithms +diffie-hellman-group14-sha1
```