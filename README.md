# RPi_garage_opener
Blynk javascript for opening a garage port
- Install rapbian jessie image
- Setup time zone / auto-login with prompt / wait for network connection /expand file size using sudo raspi-config
- Update SW:
  sudo apt-get update && sudo apt-get upgrade
- Install node:
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
  nvm install v6.3.1
  nvm alias default v6.3.1
  sudo ln -s /home/pi/.nvm/versions/node/v6.3.1/bin/node /usr/bin/node
  sudo ln -s /home/pi/.nvm/versions/node/v6.3.1/bin/npm /usr/bin/npm
- sudo apt-get install build-essential
- sudo npm install -g npm
- sudo npm install -g onoff
- sudo npm install -g blynk-library
- Install git:
  sudo apt-get install git-core
- export NODE_PATH=/home/pi/.nvm/versions/node/v6.3.1/lib/node_modules
- Install own SW:
  git clone https://github.com/badsberg/RPi_garage_opener.git
Install wifi:
- Add 
network={
    ssid="The_ESSID_from_earlier"
    psk="Your_wifi_password"
}
to
/etc/wpa_supplicant/wpa_supplicant.conf

- Add to /etc/rc.local:
export NODE_PATH=/home/pi/.nvm/versions/node/v6.3.1/lib/node_modules
cd /home/pi/RPi_garage_opener
node my_blynk.js  <Auth>
