import { makePath } from './makePath.js';

export const get = ({
  object = null,
  path = null
} = {}) => {

  const address = makePath(path);

  const getValue = () => {

    while (address.length > 1) {

      // shift off and store the first key
      let currentKey = address.shift();

      // if the key is not found make a new object
      if (!(currentKey in object)) {
        // make an empty object in the current object level
        if (isNaN(currentKey)) {
          object[currentKey] = {};
        } else {
          object[currentKey] = [];
        }
      }

      // drill down the object with the first key
      object = object[currentKey];

    }

    let finalKey = address.shift();

    if (!Object.prototype.hasOwnProperty.call(object, finalKey)) {
      return '';
    } else {
      return object[finalKey];
    }

  };

  if (object != null && path != null) {
    return getValue();
  } else {
    return false;
  }

};
