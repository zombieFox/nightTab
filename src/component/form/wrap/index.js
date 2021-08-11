import { node } from '../../../utility/node';

import './index.css';

export const wrap = ({
  children = false
} = {}) => {

  return node('div|class:form-wrap', children);

};
