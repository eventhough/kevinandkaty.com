# Kevin and Katy
Wedding website built with [wintersmith](http://wintersmith.io/)

## Set up environment

```bash
$ npm install -g wintersmith
$ git clone git@github.com:eventhough/kevinandkaty.com.git
$ cd kevinandkaty.com
$ npm install
```

## Run Project

```bash
$ npm start
```

## Build

Set baseUrl in `config-prod.json`

```bash
$ npm run build
```

## Deploy to gh-pages

```bash
$ git subtree push --prefix build origin gh-pages
```
