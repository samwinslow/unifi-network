sudo firewall-cmd --add-port=8443/tcp
sudo firewall-cmd --add-port=3478/udp
sudo firewall-cmd --add-port=10001/udp
sudo firewall-cmd --add-port=8080/tcp
sudo firewall-cmd --add-port=1900/udp
sudo firewall-cmd --add-port=8843/tcp
sudo firewall-cmd --add-port=8880/tcp
sudo firewall-cmd --add-port=6789/tcp
sudo firewall-cmd --add-port=5514/udp
sudo firewall-cmd --zone=public --add-masquerade
sudo firewall-cmd --runtime-to-permanent
