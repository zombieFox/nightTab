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

export const Control_helperText = function({
  text = [],
  complexText= false
} = {}) {

  this.para = [];

  text.forEach((item, i) => {
    this.para.push(form.helper({
      tag: 'p',
      text: item,
      complexText: complexText
    }));
  });

  this.wrap = () => {
    const formWrap = form.wrap();

    this.para.forEach((item, i) => {
      formWrap.appendChild(item);
    });

    return formWrap;
  };

  this.disable = () => {
    this.para.forEach((item, i) => {
      item.classList.add('disabled');
    });
  };

  this.enable = () => {
    this.para.forEach((item, i) => {
      item.classList.remove('disabled');
    });
  };

};
