import * as form from '../form';

import { node } from '../../utility/node';
import { state } from '../state';

import './index.css';

export const ShadeBar = function() {

  this.element = {
    shadeBar: node('div|class:shade-bar')
  };

  this.assemble = () => {

    const formGroup = form.group({
      block: true,
      border: true
    });

    const shadeCount = state.get.current().theme.color.shades;

    for (var i = 1; i <= shadeCount; i++) {
      let count = i;

      if (count < 10) { count = '0' + count; }

      formGroup.appendChild(
        node('div|class:form-group-text form-group-text-borderless', [
          node('div|class:shade-bar-shade shade-bar-shade-' + count + '')
        ])
      );
    }

    this.element.shadeBar.appendChild(formGroup);

  };

  this.wrap = () => {

    return form.wrap({
      children: [
        this.element.shadeBar
      ]
    })

  };

  this.shadeBar = () => {
    return this.element.shadeBar;
  };

  this.assemble();

};