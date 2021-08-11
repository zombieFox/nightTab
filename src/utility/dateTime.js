export const dateTime = () => {

  const date = new Date();

  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return {
    // string: date.constructor(),
    // time: date.getTime(),
    date: date.getDate(),
    day: date.getDay(),
    year: date.getFullYear(),
    hours: date.getHours(),
    milliseconds: date.getMilliseconds(),
    minutes: date.getMinutes(),
    month: date.getMonth(),
    monthString: month[date.getMonth()],
    seconds: date.getSeconds()
  };

};
