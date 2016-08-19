# Build and test steps:
# docker build -t AdventureTimeRoShamBo .
# docker run -p 8080:8080 -d AdventureTimeRoShamBo
# docker exec -it <containerId> bash
# curl -vk http://localhost:8080
#

FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
RUN npm run build
CMD [ "npm", "start" ]

