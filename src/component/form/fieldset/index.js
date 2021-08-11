import { node } from '../../../utility/node';

import './index.css';

export const fieldset = function({
  children = false
} = {}) {

  return node('fieldset|class:form-fieldset', children);

};