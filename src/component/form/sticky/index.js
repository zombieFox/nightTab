import { node } from '../../../utility/node';

import './index.css';

export const sticky = function({
  children = false
} = {}) {

  return node('div|class:form-sticky', children);

};