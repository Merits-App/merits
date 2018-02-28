#Create an image
FROM node:8


RUN mkdir -p usr/src/app
WORKDIR /usr/src/app

COPY package.json  /usr/src/app
RUN npm install
EXPOSE 4200 45153

CMD ["npm" "start"]

