import { makePath } from './makePath.js';

export const set = ({
  object = null,
  path = null,
  value = null
} = {}) => {

  const address = makePath(path);

  const setValue = () => {

    while (address.length > 1) {

      // shift off and store the first
      let currentKey = address.shift();

      // if the key is not found make a new object
      if (!(currentKey in object)) {
        // make an empty object in the current object level
        if (isNaN(currentKey)) {
          object[currentKey] = {};
        } else {
          object[currentKey] = [];
        };
      };

      // drill down the object with the first key
      object = object[currentKey];

    };

    let finalKey = address.shift();

    object[finalKey] = value;

  };

  if (object != null && path != null && value != null) {
    setValue();
  } else {
    return false;
  };

};
