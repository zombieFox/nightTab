import { icon } from '../icon';
import { form } from '../form';

import { node } from '../../utility/node';

const link = {};

link.render = ({
  text = 'Link',
  href = '#',
  iconName = false,
  iconPosition = 'right',
  image = false,
  linkButton = false,
  style = [],
  title = false,
  openNew = false,
  classList = [],
  func = false
} = {}) => {

  const linkElement = node('a|tabindex:1');

  if (linkButton) {
    linkElement.classList.add('button');

    if (style.length > 0) {
      style.forEach((item, i) => {
        switch (item) {
          case 'link':
            linkElement.classList.add('button-link');
            break;

          case 'line':
            linkElement.classList.add('button-line');
            break;

          case 'ring':
            linkElement.classList.add('button-ring');
            break;
        };
      });
    };
  };

  if (image) {
    const linkImage = node('img|src:' + image + ',class:mr-2');

    linkElement.appendChild(linkImage);
  };

  if (text) {
    const linkText = node('span:' + text);

    if (linkButton) {
      linkText.classList.add('button-text');
    };
    linkElement.appendChild(linkText);
  };

  if (iconName) {
    switch (iconPosition) {
      case 'left':
        linkElement.prepend(icon.render(iconName));
        break;

      case 'right':
        linkElement.append(icon.render(iconName));
        break;
    };
  };

  if (href) {
    linkElement.setAttribute('href', href);
  };

  if (openNew) {
    linkElement.setAttribute('target', '_blank');
  };

  if (title) {
    linkElement.setAttribute('title', title);
  };

  if (classList.length > 0) {
    classList.forEach((item, i) => {
      linkElement.classList.add(item);
    });
  };

  if (func) {
    linkElement.addEventListener('click', (event) => {
      func();
    });
  };

  return linkElement;

};

export { link };
