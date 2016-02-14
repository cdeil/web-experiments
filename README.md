# Web Experiments

## Prerequisites

* Node.js version 0.10.0 or newer
* Install jspm, eslint, gulp globally

```
npm install -g jspm
npm install -g eslint
npm install -g gulp

```
## Directory Structure

```
├─── app/
│    ├─── components/
│    │    ├─── response/
│    │    └───
│    ├─── App.js
│    ├─── index.js
│    └───
├─── build/
├─── fit_dump.py
├─── Gulpfile.babel.js
├─── index.html
└─── README.md

```

## Installation

To run locally for development.

1. run `npm install`
2. run `jspm install`

## Running

1. If you want to run the app locally and debug or test it. It is advisable to serve the index.html found in the root of your project.
2. The build directory is a compressed and uglified version of the app to be used for production deployment of the app for fast network performances.
3. Serve the app by running a local server, e.g. `python -m SimpleHTTPServer`
4. Incase you want auto reload install live-server  `npm install -g live-server` and run `live-server ./`


## Deploying

To bundle the web app

1. run `gulp bundle`, to bundle the app into build folder
2. Either serve `build` folder locally.
3. Or deploy it to gh-pages by running `gulp deploy`.
