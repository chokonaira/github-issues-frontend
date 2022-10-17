// A helper function that takes in a date string and
// extracts characters between indices 0 - 10, and returns the substring.

export default (dateString) => {
  const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const date = new Date(dateString);

  const monthName = month[date.getMonth()];
  const day = date.getDate();

  return `${monthName} ${day}`;
};
