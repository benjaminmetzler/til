![RadioSHARK](https://raw.githubusercontent.com/benjaminmetzler/til/main/misc/RadioSHARK-01.jpg "RadioSHARK")

Back before radio stations streamed everything over the Internet you had to listen to them on, well, a radio.  And forget podcasts where you could download shows on-demand.  You had to listen to what was available in your local radio market, generally when it was broadcast.  If you wanted to listen to [someone talk like they were Thomas Jefferson](https://jeffersonhour.com/), you hoped enough other people were also interested and your local NPR station would decided to broadcast it.

Then starting around 2004 companies realized there might be a market for listening and recording radio on your computer.  A couple started producing low-cost radio receivers you could connect to your computer.  One of these was the now discontinued [Griffin RadioSHARK](https://en.wikipedia.org/wiki/Radio_SHARK).  It offered a slick (at the time) looking USB receiver and software package that allowed you to schedule recording.  It was neat.  [I even wrote a review of the device](https://www.osnews.com/story/8599/a-radioshark-review/).  I also created a php script to automatically generate podcasts feeds for the shows I recorded.  It was fun and I used it for a couple of years.  Then podcasts and streaming services took over the audio world and I shoved my RadioSHARK into a closet and forgot about it.

Earlier this week I was looking for a network cable when I came across the slightly yellowed RadioSHARK.  I had played with it off an on the last couple of years but janky first and third-party software gave me mixed results.  As I mentioned abovem podcasts and streaming services have made devices like the RadioSHARK obsolete.  But I have been playing around with a Raspberry Pi and had one acting as my VPN, so I wondered if I could hook up my RadioSHARK and stream radio over my network.  Turns out it's pretty easy.

## Build shark.c
The RadioSHARK shows up as both a USB serial port and a USB audio device.  The former is used to control the RadioSHARK, while the latter plays the audio.  Any application that can write to the USB serial port can control the RadioSHARK (with the right protocol).  [shark.c](https://raw.githubusercontent.com/benjaminmetzler/til/main/misc/archive/shark.c) (and [shark2.c](https://raw.githubusercontent.com/benjaminmetzler/til/main/misc/archive/shark2.c)) is a utility for sending commands to the RadioSHARK.  It is over 13 years old, so getting it to build on a modern Linux system is a bit of an adventure.

### Install old version of libhid
First you need to install libhid.  Newer versions of libhid don't seem to play nicely with shark.c so an older version is needed.  I used this [this webpage](https://github.com/packetgeek/radioshark-v1-rpi) to build and install version 0.2.16 of libhid.  

1. Download and untar/zip the libhid code.  
  `wget http://sources.openelec.tv/mirror/libhid/libhid-0.2.16.tar.gz`
2. Modify the `configure` file to throw an error when a warning is seen by deleting `-Werror` from lines 22288 and 22289.  Normally it's good to treat warnings as errors and to fix the warning, but in this case we'll live with them.
3. Run `configure` to verify your development environment and create the necessary files.
4. Assuming no errors, build the libraries
  ```shell
  make
  sudo make install
  ```
5. Update the system link and cache entries
  ```shell
  ldconfig
  ```

### compile shark.c
```shell
gcc -g -o ./shark -lhid shark.c
mv 
```

You should be able to control the RadioSHARK with the shark binary.  Try this out by running:
`sudo ./shark.bin  -blue 0; sudo ./shark.bin -red 1`
This will turn off the blue LED (on by default) and then turn on the red.  If this returns without an error, congratulations you can control your RadioSHARK.

## Streaming the RadioSHARK
Next you need to set up some sort of streaming interface.  As mentioned above, the RadioSHARK shows up as a USB audio device on Linux.  As a result, any software that can "receive" from an audio source should be able to play what ever the RadioSHARK is sending.  Following the instructions [here](https://maker.pro/raspberry-pi/projects/how-to-build-an-internet-radio-station-with-raspberry-pi-darkice-and-icecast) you can set up an IceCast server that will stream the RadioSHARK audio via DarkIce.

### install DarkIce
Darkice takes the audio coming from an audio device and streams it through Icecast
```shell
sudo apt install libmp3lame0 libtwolame0 darkice
```

### install IceCast
```shell
sudo apt install icecast2
```
I accepted the defaults for the wizard, including the passwords. 

### Creat Create a darkice configuration file 
```shell
[general]
duration        = 0      # duration in s, 0 forever
bufferSecs      = 1      # buffer, in seconds
reconnect       = yes    # reconnect if disconnected
 
[input]
device          = plughw:1,0 # Soundcard device for the audio input
sampleRate      = 44100   # sample rate 11025, 22050 or 44100
bitsPerSample   = 16      # bits
channel         = 2       # 2 = stereo
 
[icecast2-0]
bitrateMode     = cbr       # constant bit rate ('cbr' constant, 'abr' average)
format          = mp3       # format. Choose 'vorbis' for OGG Vorbis
bitrate         = 320       # bitrate
server          = localhost # or IP
port            = 8000      # port for IceCast2 access
password        = hackme    # source password for the IceCast2 server
mountPoint      = rapi.mp3  # mount point on the IceCast2 server .mp3 or .ogg
name            = Raspberry Pi
```

### start the icecast2 server
```shell
sudo service icecast2 start
```

### start darkcast 
```shell
sudo /usr/bin/darkice -c /home/pi/darkice.cfg
```


## Streaming and Tuning
At this point the icecast webserver should be running at `http://<RASPBERRY_IP>:8000`.  If you play the M3U file, it should connect to Raspberry Pi and start streaming from the RadioSHACK.  You can connect directly to the stream at `http://<RASPBERRY_IP>:8000/rapi.mp3`. You can't tune the RadioSHARK through the interface but you can ssh into the pi and tune your favorite station by running `sudo shark -fm 91.5` (assuming you have a 91.5 station).  It can take a couple of seconds before the stream is updated.

Of course you probably don't have a RadioSHARK sitting in a closet someplace.  Your best bet is the used market like eBay, [where I see them come up from time-to-time.](https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=radioshark+usb&_sacat=0&LH_TitleDesc=0&_osacat=0&_odkw=radioshark).  