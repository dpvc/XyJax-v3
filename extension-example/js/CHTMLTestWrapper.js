import {CHTMLWrapper} from 'mathjax-full/js/output/chtml/Wrapper.js';
import {CHTMLWrappers} from 'mathjax-full/js/output/chtml/Wrappers.js';
import {MmlTest} from './MmlTest.js';
import {CommonMmlTestMixin} from './TestWrapper.js';

//
// Load global values, if needed
//
import {example} from './example.js';

//
//  A function to createing the CHTML Wrapper
//
export function CreateCHTMLWrapper(wrapper, wrappers) {

  /*
   * Define a a new CHTMLWrapper subclass
   */
  class CHTMLTestWrapper extends CommonMmlTestMixin(wrapper) {
    static kind = MmlTest.prototype.kind;
    toCHTML(parent) {
      super.toCHTML(parent);
      this.adaptor.setStyle(this.chtml, 'color', this.color);
    }
  }

  //
  // Add the new class to the list of known wrappers
  //
  wrappers[CHTMLTestWrapper.kind] = CHTMLTestWrapper;

}

//
//  Only make the subclass if the CHTMLWrapper class has been loaded
//    (the webpacked component relies on this being defined by the CHTML component,
//     but if that isn't loaded, this will be undefined).
//
//  If the CHTML compnent is loaded later, we can call the funciton above
//    to create the wrapper at that point.  (The component file sets that up.)
//
if (CHTMLWrapper !== undefined) {
  CreateCHTMLWrapper(CHTMLWrapper, CHTMLWrappers);
}
