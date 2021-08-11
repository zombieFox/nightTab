export const trimString = (value) => {

  if (typeof value == 'string') {
    return value.trim().replace(/\s\s+/g, ' ');
  } else {
    return value;
  };

};
