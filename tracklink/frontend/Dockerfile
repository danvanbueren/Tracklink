FROM node:18-alpine

LABEL authors="danvanbueren"

WORKDIR /app

COPY package.json ./

RUN npm install

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=$REACT_APP_API_URL

COPY . .

CMD ["npm", "run", "dev"]


## TODO: For production deployment
## Build React app with injected env variables
#FROM node:16-alpine as build
#WORKDIR /app
#COPY package*.json ./
#RUN npm install
## Pass the build argument for the API URL
#ARG REACT_APP_API_URL
#ENV REACT_APP_API_URL=$REACT_APP_API_URL
#COPY . .
#RUN npm run build
## Serve React app
#FROM nginx:alpine
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]