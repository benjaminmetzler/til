# Get ssh fingerprints from ssh-agent

If you want to generate a set of pub keys for the ssh keys stored in ssh-agent, run the below.  It will parse out the public keys and dump them to a .pub file.
`ssh-add -L | gawk ' { print $2 > $3 ".pub" } ‘`