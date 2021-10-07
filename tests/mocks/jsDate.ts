/* eslint-disable no-global-assign, constructor-super */

const currentDate = new Date('1998-06-22T12:00:00.000Z');
const realDate = Date;

function mock() {
  //@ts-ignore
  Date = class extends Date {
    constructor(date: Date) {
      if (date) {
        //@ts-ignore
        return super(date);
      }

      return currentDate;
    }
  };
}

function cleanUp() {
  Date = realDate;
}

export default {
  mock, cleanUp
};