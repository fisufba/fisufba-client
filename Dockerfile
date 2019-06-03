FROM node:10.15.3

RUN npm install -g npm@latest
RUN npm install -g @angular/cli@1.7.1

WORKDIR /app
RUN mkdir -p /app/dist/www

COPY package.json /app/
RUN npm install
COPY . /app/

CMD ng build --prod --output-path=/app/dist/www
