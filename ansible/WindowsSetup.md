
## Windows Client Setup

#### Enable WinRM for Ansible

```powershell
$url = "https://raw.githubusercontent.com/ansible/ansible/devel/examples/scripts/ConfigureRemotingForAnsible.ps1"
$file = "$env:temp\ConfigureRemotingForAnsible.ps1"

(New-Object -TypeName System.Net.WebClient).DownloadFile($url, $file)

powershell.exe -ExecutionPolicy ByPass -File $file
```

This will generate something like this:
```powershell
Self-signed SSL certificate generated; thumbprint: 7B0DDADA6E49EB3F9B73AE1E4E70B768EBED10D7


wxf                 : http://schemas.xmlsoap.org/ws/2004/09/transfer
a                   : http://schemas.xmlsoap.org/ws/2004/08/addressing
w                   : http://schemas.dmtf.org/wbem/wsman/1/wsman.xsd
lang                : en-US
Address             : http://schemas.xmlsoap.org/ws/2004/08/addressing/role/anonymous
ReferenceParameters : ReferenceParameters

Ok.
```

Note the thumbprint for use in the next step.


#### Set up WinRM Listener
```powershell
$selector_set = @{
    Address = "*"
    Transport = "HTTPS"
}
$value_set = @{
    CertificateThumbprint = "7B0DDADA6E49EB3F9B73AE1E4E70B768EBED10D7"
}

New-WSManInstance -ResourceURI "winrm/config/Listener" -SelectorSet $selector_set -ValueSet $value_set
```

#### Verify WinRM is running
```powershell
winrm get winrm/config/Service
winrm get winrm/config/Winrs
```

This will result in something like the below:
```powershell
PS C:\Windows\system32> winrm get winrm/config/Service
Service
    RootSDDL = O:NSG:BAD:P(A;;GA;;;BA)(A;;GR;;;IU)S:P(AU;FA;GA;;;WD)(AU;SA;GXGW;;;WD)
    MaxConcurrentOperations = 4294967295
    MaxConcurrentOperationsPerUser = 1500
    EnumerationTimeoutms = 240000
    MaxConnections = 300
    MaxPacketRetrievalTimeSeconds = 120
    AllowUnencrypted = false
    Auth
        Basic = true
        Kerberos = true
        Negotiate = true
        Certificate = false
        CredSSP = false
        CbtHardeningLevel = Relaxed
    DefaultPorts
        HTTP = 5985
        HTTPS = 5986
    IPv4Filter = *
    IPv6Filter = *
    EnableCompatibilityHttpListener = false
    EnableCompatibilityHttpsListener = false
    CertificateThumbprint
    AllowRemoteAccess = true

PS C:\Windows\system32> winrm get winrm/config/Winrs
Winrs
    AllowRemoteShellAccess = true
    IdleTimeout = 7200000
    MaxConcurrentUsers = 2147483647
    MaxShellRunTime = 2147483647
    MaxProcessesPerShell = 2147483647
    MaxMemoryPerShellMB = 2147483647
    MaxShellsPerUser = 2147483647
```

## Connecting to a Windows Client

> **_NOTE:_**  Ansible on a macos server gives an error about not finding pywinrm.  This is still under investigation.  The below was tested on an Ubuntu 20.04 ansible server.

#### Install PyWinRM (if not installed)
```bash
pip install "pywinrm>=0.3.0"
```

#### Create a host file
For Linux systems, you can use the ansible-playbook `-i` option with an IP address, but for Windows clients this gives an ssh error (still looking into why).  To get around this, pass in a hosts file with either the IP address or the hostname.

./windows_hosts
```yaml
[windows]
<WINDOWS_HOSTNAME_OR_IP>
```

#### Kick off ansible-playbook

```bash
ansible-playbook -i windows_hosts configure_windows.yaml
```

The contents of the playbook can contain the variables (see configure_windows.yaml) but ideally these would be abstracted into a group_vars file for Windows.




