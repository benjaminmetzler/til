I like to keep my at rest data encrypted.  It's just safer.  I recently requested a USB restore from backblaze and they sent me a drive.  It came encrypted with WD Drive Unlocker.  I don't know how secure that is, but once I unlocked the drive I copied the contents to my server via my laptop (because Linux is apparently not supported for unlocking).  This left the data unencrypted on my server.    I decided to through it into an encrypted .tar.gz.  Below is the command I used.

```bash
tar -czf - * | openssl enc -e -aes256 -md sha512 -pbkdf2 -iter 100000 -out encrypted.tar.gz
```
| Switch                | Description                                                                          |
|-----------------------|--------------------------------------------------------------------------------------|
| enc                   | Run openssl with encryption/decryption                                               |
| -e                    | Encrypt                                                                              |
| -aes256               | Use the AES-256 Cipher                                                               |
| -md sha512            | Message digest which is used for key derivation                                      |
| -pbkdf2               | Uses PBKDF2 (Password-Based Key Derivation Function 2) algorithm                     |
| -iter 100000          | A large number to iterate with the password.  Larger = longer time for brute attacks |
| -out encrypted.tar.gz | Output file, e.g. encrypted.tar.gz                                                   |


If I had more space on my laptop I could have created an encrypted image there and then moved that to the server but I didn't have enough space.  One possibility I will need to explore is creating an encrypted image on the server and then mounting that there and then scp'ing the data into the image.

To decrypt:

```bash
openssl enc -d -aes256 -md sha512 -pbkdf2 -iter 100000 -in encrypted.tar.gz - | tar xvfz -
```

The `-d` flag instructs openssl to decrypt.



