#1.Building Stage ===========

# Create the image based on the official Node 10.13.0 image from Dockerhub
FROM node:10.13 as node

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /ng-substation-server

# Change directory so that our commands run inside this new directory
WORKDIR /ng-substation-server

# Copy dependency definitions
COPY package.json /ng-substation-server

# Install dependencies using npm
RUN npm install

# Install Angular CLI using npm
RUN npm install -g @angular/cli

# Additioanl Install dependencies for ng2-tree
COPY environment/lib/tree.js /ng-substation-app/node_modules/ng2-tree/src

# Get all the code needed to run the app
COPY . /ng-substation-server

# Expose the port the app runs in
EXPOSE 8081

# start app
CMD npm run server
