FROM node:14

WORKDIR /usr/app
COPY . .

RUN npm ci1