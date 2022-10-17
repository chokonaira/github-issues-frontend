// A helper function that formats a string with accompanying html attributes
// returns the string with format that can be translated by v-html.

export default (issueBodyText) => {
  const linebreak = /(\r\n-|\n-|\r)/g;
  const bold = /\*\*(.*?)\*\*/gm;
  const italics = /\*(.*?)\*/gm;
  const checked = /\[\x\]/g;

  return issueBodyText
    .replace(linebreak, '<br />')
    .replace(bold, '<b>$1</b>')
    .replace(italics, '<i>$1</i>')
    .replace(checked, '<input checked type="checkbox">');
};
