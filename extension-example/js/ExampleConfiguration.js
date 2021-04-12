import './MmlTest.js';
import './CHTMLTestWrapper.js';
import './SVGTestWrapper.js';

import {example} from './example.js';

import {CommandMap} from 'mathjax-full/js/input/tex/SymbolMap.js';
import {Configuration} from 'mathjax-full/js/input/tex/Configuration.js';

//
//  Define a macro that uses our new MmlTest node ('test')
//
new CommandMap('test', {
  test:   ['Test'],
}, {
  Test(parser, name) {
    const text = parser.create('token', 'mi', {}, example.testString);
    parser.Push(parser.create('node', 'test', [text]));
  }
});

//
//  Define the package for our new environment
//
Configuration.create('test', {
  handler: {
    macro: ['test']
  },
  preprocessors: [
    ({math, document, data}) => {
      // Called before math is processed.
      //   math is the MathItem
      //   document is the MathDocument
      //   data is the ParseOptions (the TeX parser)
      // Do any per-equation setup here
    }
  ]
});
