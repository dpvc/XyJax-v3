import {MathJax, combineDefaults} from '../../node_modules/mathjax-full/js/components/global.js';

//
//  Make sure all output directories are available, even if one or more isn't loaded
//
combineDefaults(MathJax._, 'output', {
  common: {
    Wrapper: {}
  },
  chtml: {
    Wrapper: {},
    Wrappers_ts: {}
  },
  svg: {
    Wrapper: {},
    Wrappers_ts: {}
  }
});
