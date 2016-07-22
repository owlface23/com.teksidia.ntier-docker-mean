# README #

This is an example 3-Tier app, built as a good example of a Docker deployment.

* Web client - written in HTML/Angular
* API - written in node.js
* Database - mongo

It uses gulp to automate local development tasks, and karma for unit testing.

### What is this repository for? ###

To use as a base example of an n-tier app that can be deployed to Docker, using a container for each layer.

### Pre-Requisites ###

Make sure you have the following installed (I've developed this on Windows, but it could potentially run cross-platform).

* Docker Toolbox
* Node

#### Running on Docker ####

1) Open the Docker Quickstart Terminal that came with the Toolbox

2) Traverse to the project root

3) Run docker-compose build & up

* docker-compose build
* docker-compose up

----------
IF PROXY ISSUES - try
eval $(docker-machine env [MACHINE-NAME])
----------

4) Go to http://192.168.99.100:8080/

#### Developing locally ####

1) Install dependencies

* npm install

2) Run tests (console can be kept open to continually run tests)

* npm test

3) Run application (you'll need the Mongo part running on Docker)

* gulp