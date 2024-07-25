# unifi-network
Unifi Network Application w/ podman and systemd

Simple containerized setup for the Unifi Network Application and its accompanying Mongo database, suitable for running in Fedora Server (tested on v40) and possibly any other distros which use systemd.

## Prerequisites

- [podman-compose](https://docs.podman.io/en/latest/markdown/podman-compose.1.html)
- Enable user account lingering[[1](https://www.freedesktop.org/software/systemd/man/latest/loginctl.html)]: `loginctl enable-linger [USER]` since we are creating a user-level service but we still want it to run on boot without an interactive login session.
