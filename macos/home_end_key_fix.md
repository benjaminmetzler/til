# Fix how Home and End keys work in MacOS

To "fix" the Home and End keys in MacOS, create a file in `~/Library/KeyBindings` called `DefaultKeyBinding.dict`, add the below to it, and then reboot.

``` dict
{
  "\UF729"  = moveToBeginningOfParagraph:;                      // home
  "\UF72B"  = moveToEndOfParagraph:;                            // end
  "$\UF729" = moveToBeginningOfParagraphAndModifySelection:;    // shift-home
  "$\UF72B" = moveToEndOfParagraphAndModifySelection:;          // shift-end
  "^\UF729" = moveToBeginningOfDocument:;                       // ctrl-home
  "^\UF72B" = moveToEndOfDocument:;                             // ctrl-end
  "^$\UF729" = moveToBeginningOfDocumentAndModifySelection:;    // ctrl-shift-home
  "^$\UF72B" = moveToEndOfDocumentAndModifySelection:;          // ctrl-shift-end
}
```
