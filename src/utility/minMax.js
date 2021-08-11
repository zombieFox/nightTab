export const minMax = ({
  min = 0,
  max = 0,
  value = 0
} = {}) => {

  if (value > max) {

    return max;

  } else if (value < min) {

    return min;

  } else if (isNaN(value)) {

    return min;

  } else {

    return value;

  };

};
