export const makePath = (string) => {

  if (string) {

    let array;

    if (string.indexOf('[') != -1 && string.indexOf(']') != -1) {

      array = string.split('.').join(',').split('[').join(',').split(']').join(',').split(',');

      for (var i = 0; i < array.length; i++) {
        if (array[i] == '') {
          array.splice(i, 1);
        };
        if (!isNaN(parseInt(array[i], 10))) {
          array[i] = parseInt(array[i], 10);
        };
      };

    } else {

      array = string.split('.');

    };

    return array;

  } else {

    return false;

  };

};
