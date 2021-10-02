export const complexNode = ({
  tag = 'div',
  text = false,
  complexText = false,
  attr = [],
  node = []
} = {}) => {

  const element = document.createElement(tag);

  if (text) {

    if (complexText) {

      element.innerHTML = text;

    } else {

      let textNode = document.createTextNode(text);

      element.appendChild(textNode);

    }

  }

  if (attr.length > 0) {
    attr.forEach((item, i) => {

      if ('key' in item && 'value' in item) {
        element.setAttribute(item.key, item.value);
      } else if ('key' in item) {
        element.setAttribute(item.key, '');
      }

    });
  }

  if (node) {
    if (typeof node != 'string') {
      if (node.length > 0) {

        node.forEach((item, i) => {
          if (item instanceof HTMLElement) {
            element.appendChild(item);
          }
        });

      } else {

        if (node instanceof HTMLElement) {
          element.appendChild(node);
        }

      }
    }
  }

  return element;

};
