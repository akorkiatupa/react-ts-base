FROM akorkiatupa/nodejs_10_ubuntu_16_04:latest

RUN mkdir -p /application
WORKDIR /application

ENV PATH /application/node_modules/.bin:$PATH
COPY pagacke*.json ./

RUN npm install --silent