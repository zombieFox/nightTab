import { get } from './get';

export const sortArrayOfObject = (array, key) => {

  array.sort((a, b) => {

    let textA = get({
      object: a,
      path: key
    });

    if (typeof textA == 'string') {
      textA = textA.toLowerCase();
    };

    let textB = get({
      object: b,
      path: key
    });

    if (typeof textB == 'string') {
      textB = textB.toLowerCase();
    };

    if (textA < textB) {
      return -1;
    } else if (textA > textB) {
      return 1;
    } else {
      return 0;
    };

  });

  return array;

};
