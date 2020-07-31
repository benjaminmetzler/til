I recently picked up a Ubiquiti Security Gateway (USG) to act as my main home router.  I configured it with a and it worked great.  I set up a NUC running the Unifi Network Controller (UNC) and adopted the USG into it.  

I wanted to ssh into the USG because, well, I could.  The default username and password for Ubiquiti HW is `ubnt\ubnt`, which is horribly insecure, but it didn't work.  The UNC updates the password during adoption.  To find it you need to connect to the UNC and navigate to `Settings` -> `Network Settings` -> `Device Authentication` to see the assigned username and password.  

<img width=50% src="https://github.com/benjaminmetzler/til/raw/main/ubiquiti/ssh_authentication.png" alt="Finding the Ubiquiti username and password">