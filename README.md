# Bus Stop Monitoring

**A real-time IoT system that detects crowd congestion in buses and at bus stops, built around the FIWARE ecosystem.**

Cameras at stops and on buses count passengers with computer vision (YOLOv8), the data flows through FIWARE and MQTT to a backend, and a website shows live and historical crowd levels for each station. When a bus gets too crowded, its driver is alerted on Telegram; illegal parking at a stop triggers an e-mail to the authorities.

Team project (2 people) for the IoT course at the University of Patras, 2023–2024.

▶ **[Watch the demo video](https://1drv.ms/v/s!Au7ctQFlF0NSr0Km3QzTG6YtSQll?e=BMoj2E)** · Presentations: [part 1](Bus%20Stop%20Monitoring%201.pdf), [part 2](Bus%20Stop%20Monitoring%202.pdf), [part 3](Bus%20Stop%20Monitoring%203.pdf)

## What it does

- **Passenger detection:** YOLOv8 person detection on camera frames, correlating passengers getting on and off to estimate station and bus occupancy.
- **Real-time data pipeline:** edge devices publish occupancy data to a FIWARE context broker and over MQTT; the backend receives it and pushes it to the website with low latency.
- **Website:** live crowd levels and historical data per station, with personalised station selection based on the user's location, plus an admin page.
- **Alerts:** Telegram notifications to bus drivers when their bus is congested, and e-mail (SMTP) notifications to the authorities for illegal parking at stations.
- **Storage:** history kept in a database service run with Docker.

## Architecture

| Folder | Role | Tech |
|---|---|---|
| `edgeController/` | Edge devices and controller: YOLOv8 detection (`busai.py`), simulated stops and buses, FIWARE + MQTT publishing, Telegram driver alerts | Python, Ultralytics YOLOv8, OpenCV, paho-mqtt |
| `externalDB/` | Data service storing the history | Python (Flask), MongoDB, Docker Compose |
| `frontEnd-backEnd/` | Backend API and website (public + admin), e-mail alerts | Node.js (Express), HTML/CSS/JavaScript, Nodemailer |

## My contribution

I built the computer vision component (YOLO-based passenger detection and occupancy estimation), the front-end website with live and historical visualisation, the MQTT connection delivering real-time data from the backend to the front end, and the Telegram and SMTP alert integrations.

---

## Setup

### Required apps:

+ Download and install Nodejs from the official Node.js website: https://nodejs.org/
+ Download docker desktop from https://docs.docker.com/desktop/install/windows-install/ 

### Required packages:

#### Repository files
+ Install all files and place them in a main folder
+ Download GitRepo_LargeFiles from [here](https://www.dropbox.com/scl/fo/xkffl87ia2yy5pp4ahwvg/h?rlkey=nb8zr8kwkz41wdny6tdgwtgec&dl=0) and place it in the same folder as the rest of the files

#### Python packages:
+ For python packages needed, in your main folder, run:
```bash
pip install Flask pymongo Flask-RESTful requests aiohttp flask[async] schedule opencv-python torch ultralytics supervision==0.2.0 paho-mqtt numpy pandas torchvision detectron2 IPython openpyxl
```
+ If detectron2 fails to install, use this command instead:
```bash
python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'
```

#### Node.js packages:
+ For Node.js packages, in frontEnd-backEnd folder, run:
```bash
npm install express cors axios body-parser node-fetch@2.6.1 nodemailer xlsx socket.io
```

### How to run:

1. Open Docker Desktop

2. Double click run_commands.dat
> *Or in main folder open cmd and type:*
```bash
run_commands.dat
```

### Local ports used:
| File | Port |
| --------------- | --------------- |
| backend.js   | 3000    |
| busai.py    | 5000    |
| busStopFaker.py    | 5001    |
| edgeController.py   | 5002    |
| mainApp.py   | 5003    |
| edgeControllerSyncSupport.py   | 5004    |
| notifyDriver.py   | 5005    |
| bckend22.js   | 8080    |

### DEMO Link
Watch a demo at https://1drv.ms/v/s!Au7ctQFlF0NSr0Km3QzTG6YtSQll?e=BMoj2E