# Activate Screen Save Via Hotkey

macOS has a feature where it shuts off the external video signal 5 seconds after the screen is locked.  When I step away from my computer, I lock it for privacy.  My monitor being, ahem, inexpensive goes to sleep when it does not sense a video signal.  This state change triggers macOS to partially come up and starts sending a signal which causes the monitor to try to come back up.  After 5 seconds macOS, not sensing any keyboard activity, stops the video signal again, causing the monitor to sleep.  Triggering a state change...Repeat indefinity.  My monitor is also connected to my speakers which pop/crack when the monitor comes alive.  

To get around this I did the following:

1. Created an Automator Quick Action action to load /System/Library/CoreServices/ScreenSaveEngine into the `Open Finder Items`.  I called it `Launch Screen Saver`
1. I remapped the "Lock Screen" keyboard shortcut to `ctrl-alt-shift-cmd-Q`.  This allows the mapping in the next step.
1. I created a keyboard shortcut with cmd-ctrl-q to launch the Automator action.

Yes, I could use a hot corner to activate the mouse, but I do most of my interaction with a computer via a keyboard, so when I step away from my laptop I just hit a keyboard combination.  By remapping Lock Screen to an alternate hotkey, I can use it on Macs without the automator action.