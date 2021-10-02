import { APP_NAME } from '../../../constants';

import * as form from '../../form';

import { Link } from '../../link';


import { node } from '../../../utility/node';
import { complexNode } from '../../../utility/complexNode';

const coffeeSetting = {};

coffeeSetting.coffee = (parent) => {

  parent.appendChild(
    node('div', [
      complexNode({
        tag: 'p',
        text: APP_NAME + ' is free, appreciation is welcome in the form of coffee!'
      }),
      form.wrap({
        children: [(new Link({
          text: 'Buy me a coffee',
          href: 'https://www.buymeacoffee.com/zombieFox',
          iconName: 'coffee',
          iconPosition: 'left',
          linkButton: true,
          openNew: true,
          style: ['line'],
          classList: ['button-line', 'button-extra-large']
        })).link()]
      })
    ])
  );

};

export { coffeeSetting };
