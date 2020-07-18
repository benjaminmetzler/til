I like to keep my at rest data encrypted.  It's just safer.  I recently requested a USB restore from backblaze and they sent me a drive.  It came encrypted with WD Drive Unlocker.  I don't know how secure that is, but once I unlocked the drive I copied the contents to my server via my laptop (because Linux is apparently not supported for unlocking).  This left the data unencrypted on my server.    I decided to through it into an encrypted .tar.gz.  Below is the command I used.

```bash
tar -czf - * | openssl enc -e -aes256 -md sha512 -pbkdf2 -iter 100000 -out encrypted.tar.gz
```

If I had more space on my laptop I could have created an encrypted image there and then moved that to the server but I didn't have enough space.  One possibility I will need to explore is creating an encrypted image on the server and then mounting that there and then scp'ing the data into the image.