You can use regex in the ssh config by using the ‘Match’ key word with exec like below:

`Match exec "echo %h | grep -q '<REGEX>'"`

it will echo the hostname to grep, which will return a success or failure, which ssh will use to determine whether to use that confige group or not.