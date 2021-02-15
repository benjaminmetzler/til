I use [FastMail](https://www.fastmail.com) as my email provider.  I like it and it works well.  I recently had the need to send emails automatically via the command line in Linux.  I used [ssmtp](https://linux.die.net/man/8/ssmtp) to connect the messages.  To get it working I used the below settings:

```
root=postmaster
rewriteDomain=<YOUR_DOMAIN>
AuthUser=<FASTMAIL_USER_NAME>
AuthPass=<FASTMAIL_APP_PASSWORD>
FromLineOverride=YES
mailhub=smtp.fastmail.com:465
UseSTARTTLS=NO
UseTLS=YES
AuthMethod=PLAIN
```