import {SVGWrapper} from 'mathjax-full/js/output/svg/Wrapper.js';
import {SVGWrappers} from 'mathjax-full/js/output/svg/Wrappers.js';
import {MmlTest} from './MmlTest.js';
import {CommonMmlTestMixin} from './TestWrapper.js';

//
// Load global values, if needed
//
import {example} from './example.js';

//
//  A function to createing the SVG Wrapper
//
export function CreateSVGWrapper(wrapper, wrappers) {

  /*
   * Define a a new SVGWrapper subclass
   */
  class SVGTestWrapper extends CommonMmlTestMixin(wrapper) {
    static kind = MmlTest.prototype.kind;
    toSVG(parent) {
      super.toSVG(parent);
      this.adaptor.setAttribute(this.element, 'fill', this.color);
      this.adaptor.setAttribute(this.element, 'stroke', this.color);
    }
  }

  //
  // Add the new class to the list of known wrappers
  //
  wrappers[SVGTestWrapper.kind] = SVGTestWrapper;

}

//
//  Only make the subclass if the SVGWrapper class has been loaded
//    (the webpacked component relies on this being defined by the SVG component,
//     but if that isn't loaded, this will be undefined).
//
//  If the SVG compnent is loaded later, we can call the funciton above
//    to create the wrapper at that point.  (The component file sets that up.)
//
if (SVGWrapper !== undefined) {
  CreateSVGWrapper(SVGWrapper, SVGWrappers);
}
