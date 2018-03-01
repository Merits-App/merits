#Create image based on the official Node 6 image from dockerhub
FROM node:8

# Create a directory where our app will be place
RUN mkdir -p usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json  /usr/src/app

# Install dependencies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the ports the app runs in
EXPOSE 4200 49153

# Serve the app
CMD ["npm", "start"]

