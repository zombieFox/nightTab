import { icon } from '../icon';

import { node } from '../../utility/node';
import { complexNode } from '../../utility/complexNode';

export const Link = function ({
  text = 'Link',
  href = '#',
  iconName = false,
  iconPosition = 'right',
  linkButton = false,
  style = [],
  title = false,
  openNew = false,
  classList = [],
  action = false
} = {}) {

  this.element = {
    link: complexNode({
      tag: 'a',
      attr: [{ key: 'href', value: href }]
    })
  };

  this.assemble = () => {

    if (linkButton) {

      this.element.link.classList.add('button');

      if (style.length > 0) {
        style.forEach((item) => {

          switch (item) {

            case 'link':
              this.element.link.classList.add('button-link');
              break;

            case 'line':
              this.element.link.classList.add('button-line');
              break;

            case 'ring':
              this.element.link.classList.add('button-ring');
              break;

          }
        });

      }

    }

    const linkText = node('span:' + text);

    if (linkButton) {
      linkText.classList.add('button-text');
    }

    this.element.link.appendChild(linkText);

    if (iconName) {

      switch (iconPosition) {

        case 'left':
          this.element.link.prepend(icon.render(iconName));
          break;

        case 'right':
          this.element.link.append(icon.render(iconName));
          break;

      }

    }

    if (openNew) {
      this.element.link.setAttribute('target', '_blank');
    }

    if (title) {
      this.element.link.setAttribute('title', title);
    }

    if (classList.length > 0) {
      classList.forEach((item) => {
        this.element.link.classList.add(item);
      });
    }

  };

  this.bind = () => {

    if (action) {
      this.element.link.addEventListener('click', () => {
        action();
      });
    }

  };

  this.link = () => {
    return this.element.link;
  };

  this.assemble();

  this.bind();

};
