import { message } from '../../message';

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
        text: message.get('menuContentCoffeePara')
      }),
      form.wrap({
        children: [(new Link({
          text: message.get('menuContentCoffeeButton'),
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
