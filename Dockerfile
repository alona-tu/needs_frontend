#FROM node:16.3 AS builder
#WORKDIR /var/www/html
#COPY . .
#RUN npm install
#RUN npm run build

FROM nginx:latest
WORKDIR /var/www/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build /usr/share/nginx/html

