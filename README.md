# Kevin and Katy
Wedding website built with [wintersmith](http://wintersmith.io/)

## Set up environment

```bash
$ npm install -g wintersmith postcss-cli autoprefixer
$ git clone git@github.com:eventhough/kevinandkaty.com.git
$ cd kevinandkaty.com
$ npm install
```

## Run Project

```bash
$ npm start
```

## Build

Set baseUrl in `config.json` if hosting site from a relative URL (i.e. not root /)

```bash
$ npm run build
```

## Deploy to gh-pages

```bash
$ git subtree push --prefix build origin gh-pages
```

For information on setting up a CNAME record go [here](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/).
