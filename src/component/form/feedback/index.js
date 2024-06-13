import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

import './index.css';

export const feedback = ({
  text = 'Text'
} = {}) => {

  const feedback = node('div|class:form-feedback');

  if (text) {
    const feedbackText = complexNode({
      tag: 'p',
      text: text,
      attr: [{
        key: 'class',
        value: 'muted small'
      }]
    });

    feedback.appendChild(feedbackText);
  }

  return feedback;

};
