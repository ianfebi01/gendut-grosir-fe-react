FROM node:18.15-alpine3.16 as build

WORKDIR /usr/app

COPY . /usr/app

RUN yarn install 
#RUN npm install react-scripts@5.0.1 -g --silent

#COPY . .
#CMD ["npm", "start"]

RUN yarn build

FROM nginx:1.23.1-alpine
EXPOSE 80
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/app/dist /usr/share/nginx/html