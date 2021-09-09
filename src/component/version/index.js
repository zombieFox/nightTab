export const version = {};

version.number = '7.1.0';

version.name = 'Delightful Komodo Dragon';

version.compare = (a, b) => {

  let pa = a.split('.');

  let pb = b.split('.');

  for (let i = 0; i < 3; i++) {

    let na = Number(pa[i]);

    let nb = Number(pb[i]);

    if (na > nb) {
      return 1;
    };

    if (nb > na) {
      return -1;
    };

    if (!isNaN(na) && isNaN(nb)) {
      return 1;
    };

    if (isNaN(na) && !isNaN(nb)) {
      return -1;
    };

  };

  return 0;
};
