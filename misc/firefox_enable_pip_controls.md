Firefox introduced a picture-in-picture option to web based video streams.  It pops out the video to a floating window.  I find this very useful when going over turtorials.  By default you can only play and pause the video via the play/pause button.  But Firefox recently added keyboard control functionality.  Open up `about:config` and search for `media.videocontrols.picture-in-picture.keyboard-controls.enabled` and then toggle it to `true`.  Now you should have keyboard control of the pip window.  

The keys allowed are:

|         Key         |         Action          |
| ------------------- | ----------------------- |
| Accel + Down Arrow  | Mute                    |
| Accel + Left Arrow  | Seek back 10%           |
| Accel + Right Arrow | Seek forward 10%        |
| Accel + Up Arrow    | Unmute                  |
| Down Arrow          | Volume Decrease         |
| End                 | Seek to end             |
| Home                | Seek to beginning       |
| Left Arrow          | Seek back 15 seconds    |
| Right Arrow         | Seek forward 15 seconds |
| Space               | Toggle Play/Pause       |
| Up Arrow            | Volume Increase         |

Accel is Ctrl Key on Windows and Linux or the Command Key on macOS


