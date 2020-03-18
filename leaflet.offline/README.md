# leaflet.offline version 2.x

[![npm version](https://badge.fury.io/js/leaflet.offline.svg)](https://badge.fury.io/js/leaflet.offline)
[![Build Status](https://travis-ci.org/allartk/leaflet.offline.png?branch=master)](https://travis-ci.org/allartk/leaflet.offline)

Just a modern and slim library to store tiles offline.

- [example](http://allartk.github.io/leaflet.offline/)
- [api docs](docs/api.md)

Warning: The api of version 2 is different from version 1. 2 is still in development.

## (Planned) features in version 2

- Add geojson layer to show stored tiles on map (done)
- Split storage methods to seperate module. (done)
- Switch from localforage to idb (mostly done)

## Dependencies

- [Leafletjs](http://leafletjs.com/)
- [idb](https://www.npmjs.com/package/idb) To store the tiles with promises

## Install

### Manual or Clone

Just use one of github's download methods (look under the releasestab ) and add dist/leaflet.offline.min.js in a script tag
to your page (after leaflet and localforage)

### With npm

The package and it's dependencies can also be downloaded into
your existing project with [npm](http://npmjs.com):

```
npm install leaflet.offline@next
```

In your script add:

```
import 'leaflet.offline'
```

### Development

For running the example locally, you'll need to clone the project and run:

```
npm install
npm start
```

Visit http://localhost:3000/ and watch the page reload when you change.

You can test your code with `npm test`. Please configure eslint in your editor if you wish to contribute.

**pull requests welcome**

## Api

Generate docs with

```
npm run-script docs
```
