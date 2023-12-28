function intToWon(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원";
}

function simpleDateFormat(date) {
  const newDate = new Date(date);
  const year = newDate.getFullYear().toString().slice(-2);
  const month = (newDate.getMonth()+1).toString();
  let day = newDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return `${year}/${month}/${day}`;
}

export { intToWon, simpleDateFormat};