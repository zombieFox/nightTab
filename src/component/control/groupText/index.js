
import * as form from '../../form';


import { isValidString } from '../../../utility/isValidString';
import { clearChildNode } from '../../../utility/clearChildNode';

export const Control_groupText = function ({
  text = false,
  classList = []
} = {}) {

  this.groupText = form.groupText({
    text: text,
    classList: classList
  });

  this.update = (content) => {

    clearChildNode(this.groupText);

    if (typeof content === 'string' && isValidString(content)) {
      this.groupText.textContent = content;
    } else if (content && content != '') {
      this.groupText.appendChild(content);
    }
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.groupText
      ]
    });
  };

  this.disable = () => {
    this.groupText.classList.add('disabled');
  };

  this.enable = () => {
    this.groupText.classList.remove('disabled');
  };

};
