# Karlsruhe Trash Calendar

A server that parses official Karlsruhe trash collection dates and serves them in iCalendar format.

## Setup

```
$ git clone https://github.com/Nebukadneza/ka-trash-calendar.git
$ cd ka-trash-calendar
$ echo 4711 > port.json
$ npm i && npm start
```

## Deploy

You can use the docker images provided on [docker hub][docker hub]


## Usage

Send a `GET` request to `http://HOST/LOCATION-ID/HOUSE-NUMBER` where `LOCATION-ID` is a valid value for the search parameter `strasse` of the [city's offical trash calendar web site][city trash site], and your house-number as a 2nd path part. For example

```
curl http://localhost:4711/ABRAHAM-LINCOLN-ALLEE/1
```

[city trash site]: https://web6.karlsruhe.de/service/abfall/akal/akal.php
[docker hub]: https://hub.docker.com/r/nebukadneza/ka-trash-calendar
