# Download cookie'd videos

Some sites require that you log in before you can download the video files, and then it's a long process of right-click -> save on the videos, assuming the site allows downloads. Fortunately, yt-dlp can use the browser cookies to access these videos with the below command.

`yt-dlp --cookies-from-browser firefox|chrome|etc URL`
