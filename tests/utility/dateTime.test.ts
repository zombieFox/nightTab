import { dateTime } from '../../src/utility/dateTime';
import jsDate from '../mocks/jsDate';

test('Describe your test', () => {
  jsDate.mock();

  expect(dateTime())
    .toStrictEqual({
      'date': 22,
      'day': 1,
      'hours': 8,
      'milliseconds': 0,
      'minutes': 0,
      'month': 5,
      'monthString': 'Jun',
      'seconds': 0,
      'year': 1998,
    });

  jsDate.cleanUp();
});