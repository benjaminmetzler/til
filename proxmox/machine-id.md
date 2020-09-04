I have spun up a [Proxmox](https://www.proxmox.com/en/) VM server to allow me to quickly tinker with new technologies.  I created a Ubuntu 20.04 LTS template as a base for a lot of the things I am doing.  I quickly realized that every clone of the template was getting the same IP address from my DHCP server.  I verified that each VM was getting a unique MAC, so it was something else.  This lead me to the `/etc/machine-id` .  This file was not being updated on the clone.  On newer versions of Ubuntu, the `/etc/machine-id` [contents are used to request a DHCP address](https://wiki.debian.org/MachineId).  As a result, when the template is cloned, the existing `/etc/machine-id` is used causing the IP address issues.

There are three ways to resolve this issue.

1. In the template or the clone, clear out the `/etc/machine-id` with the command `sudo "echo -n > /etc/machine-id"`.  The next time the VM comes up, the contents will be regenerated.
1. In the template, adjust the `/etc/netplan/xxxxxx.yaml` to use the mac address instead of `/etc/machine-id` contents like this:
    ```yaml
       network:
         ethernets:
           ens18:
            dhcp4: true
            dhcp-identifier: mac <---Add this line
         version: 2
    ```
1. Manually regenerate the `/etc/machine-id` on cloned VMs with the command `rm -f /etc/machine-id; dbus-uuidgen --ensure=/etc/machine-id`.

Of these, the first is the most robust solution but if you have a bunch of VMs already cloned, I like the last one over adjusting the netplan file.  There is a reason Debian decided to use the machine-id instead of the mac, plus it is potentially used elsewhere.
