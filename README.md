# Required apps:

+ Download and install Nodejs from the official Node.js website: https://nodejs.org/
+ Download docker desktop from https://docs.docker.com/desktop/install/windows-install/ 

# Required packages:

## Gut files
+ Install all Git files and place them in a main folder

## Python packages:
+ For python packages needed, in your main folder, run:
```bash
pip install Flask pymongo Flask-RESTful requests aiohttp flask schedule opencv-python torch ultralytics supervisely paho-mqtt numpy pandas torchvision detectron2
```

## Node.js packages:
+ For Node.js packages, in your main folder, run:
```bash
npm install express cors axios body-parser node-fetch@2.6.1 nodemailer xlsx socket.io
```

# How to run:

1. Download all files and put them in a folder
   + Download GitRepo_LargeFiles from [here](https://www.dropbox.com/scl/fo/xkffl87ia2yy5pp4ahwvg/h?rlkey=nb8zr8kwkz41wdny6tdgwtgec&dl=0) and add it in the same folder as the rest of the files
   
2. In externalDB folder open cmd and type
```bash
docker compose up --build
```
    
3. In edgeController folder open cmd and type
```bash
python run_scripts.py
```

4. In frontEnd-backEnd folder open cmd and tpye ~
```bash
node start-scripts.js
```
