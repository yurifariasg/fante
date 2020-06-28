function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getFormattedDate(date = new Date()) {
  const dayOfMonth = date.getDate();
  const monthOfYear = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${dayOfMonth}.${monthOfYear}.${year}`;
}

module.exports = { shuffle, getFormattedDate };
