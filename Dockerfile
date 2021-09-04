FROM node:16-bullseye

COPY extract-trash-dates.js fetch-trash-calendar.js ical.js package.json package-lock.json server.js /app/
WORKDIR /app

RUN npm ci
RUN echo 80 > port.json

EXPOSE 80

CMD npm start
