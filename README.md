# Webpack Querify

[![Travis build status](http://img.shields.io/travis/Pitzcarraldo/webpack-querify.svg?style=flat)](https://travis-ci.org/pitzcarraldo/webpack-querify)
[![Code Climate](https://codeclimate.com/github/Pitzcarraldo/webpack-querify/badges/gpa.svg)](https://codeclimate.com/github/pitzcarraldo/webpack-querify)
[![Test Coverage](https://codeclimate.com/github/Pitzcarraldo/webpack-querify/badges/coverage.svg)](https://codeclimate.com/github/pitzcarraldo/webpack-querify)
[![Dependency Status](https://david-dm.org/Pitzcarraldo/webpack-querify.svg)](https://david-dm.org/pitzcarraldo/webpack-querify)
[![devDependency Status](https://david-dm.org/Pitzcarraldo/webpack-querify/dev-status.svg)](https://david-dm.org/pitzcarraldo/webpack-querify#info=devDependencies)

Querify the Webpack Loader Configurations

## This repository no more maintained. Please checkout [webpack-combine-loaders](https://github.com/jsdf/webpack-combine-loaders).

## Make Webpack Loader Configuration Clear

### Legacy Webpack Loader Configurations
```js
{ test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' }
```

### Querified Webpack Loader Configurations
```js
var $q = require('webpack-querify');
...

{
  test: /\.scss$/,
  loader : $q({
    style: {},
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

### There is `loaders`, why this?

Some Webpack plugins like `ExtractTextPlugin` only recieve loader configuration by string. Webpack Querify can be used in that case like below.
```js
ExtractTextPlugin.extract(
  'style',
  $q({
    css: {
      modules: true,
      importLoaders: 2,
      sourceMap: true
    },
    sass: {
      outputStyle: 'expanded',
      sourceMap: true,
      sourceMapContents: true
    },
    autoprefixer: {
      browsers: 'last 4 version'
    }
  })
)
```
