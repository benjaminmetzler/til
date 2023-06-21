# Downconvert an audio file

`ffmpeg -i <INPUT_FILE> -ab 96k -map_metadata 0 -c:v copy <OUTPUT_FILE>`

`ffmpeg`: This is the command that invokes the FFmpeg utility.

`-i <INPUT_FILE>`: This specifies the input file.

`-ab 96k`: Sets the audio bitrate to 96 kilobits per second (kbit/s). It specifies the desired quality of the audio stream in the output file.

`-map_metadata 0`: Instructs FFmpeg to copy the metadata from the input file to the output file. Metadata includes information like title, artist, album, and so on.

`-c:v copy`: Specifies the video codec to be used in the output file. In this case, "copy" indicates that the video codec from the input file should be copied directly without any transcoding. This ensures that the video stream remains unchanged.

`<OUTPUT_FILE`: The output file name