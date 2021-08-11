import { state } from '../../state';
import { data } from '../../data';
import { bookmark } from '../../bookmark';

import * as form from '../../form';

import { Button } from '../../button';
import { Collapse } from '../../collapse';

import { node } from '../../../utility/node';
import { get } from '../../../utility/get';
import { set } from '../../../utility/set';
import { convertColor } from '../../../utility/convertColor';
import { isValidString } from '../../../utility/isValidString';
import { clearChildNode } from '../../../utility/clearChildNode';

export const Control_groupText = function({
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
    };
  };

  this.wrap = () => {
    return form.wrap({
      children: [
        this.groupText
      ]
    })
  };

  this.disable = () => {
    this.groupText.classList.add('disabled');
  };

  this.enable = () => {
    this.groupText.classList.remove('disabled');
  };

};
