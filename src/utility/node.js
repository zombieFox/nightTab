export const node = (string, node) => {

  // set element
  let tag;

  if (string.indexOf('|') > 0) {
    tag = string.slice(0, string.indexOf('|'));
  } else {
    tag = string;
  }

  let text = false;

  if (tag.indexOf(':') > 0) {
    // regex
    // find all : and split
    // ignore all \:
    let pair = tag.split(/:(?!.*:\\)/);
    tag = pair[0];
    // replace \: with :
    text = pair[1].replace('\\', ':');
  }

  let element = document.createElement(tag);

  if (text && text != '') {
    element.innerHTML = text;
  }

  let attributes = string.slice(string.indexOf('|') + 1, string.length).split(',');

  // set attributes
  if (string.indexOf('|') > 0 && string.indexOf('|') < string.length - 1) {

    attributes.forEach((item, i) => {
      if (item.indexOf(':') > 0) {
        // if key and value
        var pair = item.substring(0, item.indexOf(':')) + ',' + item.substring(item.indexOf(':') + 1, item.length);
        pair = pair.split(',');
        attributes[i] = {
          key: pair[0],
          value: pair[1]
        };
      } else {
        // if key only
        attributes[i] = {
          key: item,
          value: undefined
        };
      }
    });

    attributes.forEach((item, i) => {
      if ('key' in item && item.key != undefined && 'value' in item && item.value != undefined) {
        element.setAttribute(item.key, item.value);
      } else if ('key' in item && item.key != undefined) {
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

          } else {

            let div = document.createElement('div');

            div.innerHTML = item;

            element.appendChild(div.firstChild);

          }

        });

      } else {

        if (node instanceof HTMLElement) {

          element.appendChild(node);

        } else {

          let div = document.createElement('div');

          div.innerHTML = node;

          element.appendChild(div.firstChild);

        }

      }

    }

  }

  return element;
};
