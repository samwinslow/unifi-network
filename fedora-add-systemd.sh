sudo podman-compose systemd -a create-unit
sudo podman-compose -f unifi.yaml systemd -a register
sudo systemctl --user enable --now podman-compose@unifi
