#1.Building Stage ===========

# Create the image based on the official Node 10.13.0 image from Dockerhub
FROM node:10.13 as node

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /ng-event-server

# Change directory so that our commands run inside this new directory
WORKDIR /ng-event-server

# Copy dependency definitions
COPY package.json /ng-event-server

# Install dependencies using npm
RUN npm install

# Install Angular CLI using npm
RUN npm install -g @angular/cli@7.2.1

# Get all the code needed to run the app
COPY . /ng-event-server

# Expose the port the app runs in
EXPOSE 8083

# start app
CMD npm run server
