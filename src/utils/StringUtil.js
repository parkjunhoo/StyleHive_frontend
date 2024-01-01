function intToWon(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원";
}

function simpleDateFormat(date) {
  const newDate = new Date(date);
  const year = newDate.getUTCFullYear().toString().slice(-2);
  let month = (newDate.getUTCMonth()+1).toString();
  month = month.length > 1 ? month : '0' + month;
  let day = newDate.getUTCDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return `${year}/${month}/${day}`;
}

export { intToWon, simpleDateFormat};