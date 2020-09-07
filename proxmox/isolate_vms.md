I wanted to isolate my lab network from my home network for a more secure environment for when I expose it to the Internet for https access.  

First I needed to configure my USG so that the LAN2/VoIP port was on it's own network and isolated from my production network.
1. UniFi->Settings->Networks->Create New Local Network.  
1. Add a new network by clicking the "Create New Local Network" and configuring it on the LAN2 port.
1. Isolate LAN 2 from LAN 
	1. TBD

At this point, I was able to ssh from LAN to LAN 2 but couldn't ping or ssh from LAN 2 to LAN.

Next I needed to configure ProxMox to use the second NIC in the server.
1. Under the ProxMox node, open up System->Network.  
1. Create a new Linux Bridge.
1. Set the `IPv4/CIDR` address to the UniFi LAN 2 network (e.g. 10.0.0.50/24).  ProxMox recommends static IP, so choose something outside of the DHCP range for LAN 2
1. Set the `Gateway (IPv4)` to the USG LAN 2 interface, e.g. 10.0.0.1.  If you get an error about the gateway is already set for the main ProxMox network, open ip that network bridge and delete the gateway.  For this configuration, ProxMox will use the LAN 2 interface for accessing the Internet.
1. Set the `Bridge ports` to the secondary NIC connected to the USG.  In my case it was eno1.
1. Click `OK` and then reboot the ProxMox node.

At this point, ProxMox will have two interfaces, one on my home network and one on my lab network.  When I create a VM, I use the virtual network (vmbrX) that is connected to the lab network. 

 
