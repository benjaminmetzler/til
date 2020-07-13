I use a non-zero number of [GUIDs](https://en.wikipedia.org/wiki/Universally_unique_identifier) when I am doing various things.  I had a GUID generator in AHK but since I'm doing a lot more work on a Mac, I wanted the same functionality on that OS.  A quick google and I found that using `uuidgen` would give me what I wanted.  The below command will generate an all lower-case GUID with dashes.

```bash
uuidgen | tr -d '\n' | tr '[:upper:]' '[:lower:]'  | pbcopy && pbpaste && echo
```

I created a [workflow](./GenerateGUID.alfredworkflow) that adds the above to alfred.app.  
