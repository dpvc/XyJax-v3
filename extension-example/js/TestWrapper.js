import {CommonWrapper} from 'mathjax-full/js/output/common/Wrapper.js';
import {MmlTest} from './MmlTest.js';

//
// Load global values, if needed
//
import {example} from './example.js';

/*
 * The common mixin for the MmlTest wrappers
 *  (Include any code common to both CHTML and SVG output here,
 *   e.g., computing bounding boxes, etc.)
 */
export function CommonMmlTestMixin(Base) {
  
  return class extends Base {
    color = example.testColor;  // the color for the test string
  }

}
