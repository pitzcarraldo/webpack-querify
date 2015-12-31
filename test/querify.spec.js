import expect from 'expect';
import $q from '../src/index';

describe('querify', () => {
  it(`should querify webpack loader configs`, () => {
    const config = {
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
    };
    expect($q(config)).toBe('css?{"modules":true,"importLoaders":2,"sourceMap":true}!sass?{"outputStyle":"expanded","sourceMap":true,"sourceMapContents":true}!autoprefixer?{"browsers":"last 4 version"}');
  });
});
