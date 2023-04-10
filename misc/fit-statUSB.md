# FIT-StatUSB

One of my favorite toys is the [Fit-statUSB](https://fit-iot.com/web/product/fit-statusb/).  It's a simple little USB multi-colored LED that can be addressed via the serial port.  I use it to send me visual notifications, such as an upcoming meeting.  On Windows I echoed to the serial port.  Now that I am using macOS, I wanted the same, but macOS obfuscates addressing the serial ports.  So instead of:

`echo \"B#FF0000-1000#00FF00-500\">/tty/dev.usbmodem14101`

you run:

`echo "B#FF0000-1000#00FF00-500" >  /dev/cu.usbmodem14101`.  

 Now I just need to find out if there's a reminder and write to the port.

More Information on programming the Fit-StatUSB [here](https://www.fit-pc.com/wiki/index.php?title=Fit-statUSB).
