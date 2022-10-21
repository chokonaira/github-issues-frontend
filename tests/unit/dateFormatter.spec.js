import dateFormatter from '@/helpers/dateFormatter';

describe('dateFormatter.js', () => {
  it('Formats date string to the right format in Jun', () => {
    const dateString = '2021-06-05T16:39:15Z';
    const formatter = dateFormatter(dateString);

    expect(formatter).toEqual('Jun 5');
  });

  it('Formats date string to the right format in November', () => {
    const dateString = '2021-11-09T16:39:15Z';
    const formatter = dateFormatter(dateString);

    expect(formatter).toEqual('Nov 9');
  });
});
