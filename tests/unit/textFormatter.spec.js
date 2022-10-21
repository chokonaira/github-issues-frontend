import textFormatter from '@/helpers/textFormatter';

describe('textFormatter.js', () => {
  it('Formats text string with line breaks to html markdown of double line texts', () => {
    const textString = '\r\n\r\nHello \r\n\r\nworld';
    const formatter = textFormatter(textString);

    expect(formatter).toEqual(`<br />
<br />
Hello <br />
<br />
world`);
  });

  it('Formats text string with double astericks to html markdown of bold text', () => {
    const textString = '**Hello, world**';
    const formatter = textFormatter(textString);

    expect(formatter).toEqual('<b>Hello, world</b>');
  });

  it('Formats text string with single astericks to html markdown of italic text', () => {
    const textString = '*Hello, world*';
    const formatter = textFormatter(textString);

    expect(formatter).toEqual('<i>Hello, world</i>');
  });

  it('Formats text string with array brakets with x to html markdown of checked checkbox input', () => {
    const textString = '[x]';
    const formatter = textFormatter(textString);

    expect(formatter).toEqual('<input checked type="checkbox">');
  });
});
