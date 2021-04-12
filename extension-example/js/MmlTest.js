import {AbstractMmlNode} from 'mathjax-full/js/core/MmlTree/MmlNode.js';
import {MML} from 'mathjax-full/js/core/MmlTree/MML.js';

/*
 * Define a new MmlNode subclass
 */
export class MmlTest extends AbstractMmlNode {
  get kind() {
    return 'test';  // the name of this node type
  }

  // Your implementation here
}

//
// Add the node to the list of known MathML node types
//
MML[MmlTest.prototype.kind] = MmlTest;
