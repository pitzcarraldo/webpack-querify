# Webpack Querify

[![Travis build status](http://img.shields.io/travis/pitzcarraldo/webpack-querify.svg?style=flat)](https://travis-ci.org/pitzcarraldo/webpack-querify)
[![Code Climate](https://codeclimate.com/github/pitzcarraldo/webpack-querify/badges/gpa.svg)](https://codeclimate.com/github/pitzcarraldo/webpack-querify)
[![Test Coverage](https://codeclimate.com/github/pitzcarraldo/webpack-querify/badges/coverage.svg)](https://codeclimate.com/github/pitzcarraldo/webpack-querify)
[![Dependency Status](https://david-dm.org/pitzcarraldo/webpack-querify.svg)](https://david-dm.org/pitzcarraldo/webpack-querify)
[![devDependency Status](https://david-dm.org/pitzcarraldo/webpack-querify/dev-status.svg)](https://david-dm.org/pitzcarraldo/webpack-querify#info=devDependencies)

Querify the Webpack Loader Configurations

## Make Webpack Loader Configuration Clear

### Legacy Webpack Loader Configurations
```js
{ test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' }
```

### Queryfied Webpack Loader Configurations
```js
var $q = require('webpack-querify');
...

{
  test: /\.scss$/,
  loader : $q({
    style: '',
    css: {
      modules: true,
      sourceMap: true,
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]'
    },
    autoprefixer: {
      browsers: 'last 2 version'
    },
    sass: {
      sourceMap: true,
      outputStyle: 'expanded'
    }
  })
}
...
```
