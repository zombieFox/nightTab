import { node } from '../../../utility/node';

import './index.css';

export const grid = ({
  children = false
} = {}) => {

  return node('div|class:form-grid', children);

};
