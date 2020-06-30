FROM node:12.16.3 as app

ARG API_URL

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN REACT_APP_API_URL=${API_URL} npm run build 

FROM nginx

RUN rm -rf /etc/nginx/conf.d/default.conf

COPY ./conf /etc/nginx/conf.d

WORKDIR /usr/share/nginx/html

COPY  --from=app /app/build  .

EXPOSE 80

