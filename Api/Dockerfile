FROM node:wheezy

# If you are behind a proxy ...
#ENV HTTP_PROXY "http://10.0.2.2:3128"
#ENV HTTPS_PROXY "http://10.0.2.2:3128"
#ENV NO_PROXY "192.168.99.*"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8888
CMD [ "npm", "start" ]
