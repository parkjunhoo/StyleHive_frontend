function intToWon(num) {
  if(num === "-" || num === 0) return "구매 입찰";
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

function simpleDateFormat2(date) {
  const newDate = new Date(date);
  const year = newDate.getUTCFullYear().toString();
  let month = (newDate.getUTCMonth()+1).toString();
  month = month.length > 1 ? month : '0' + month;
  let day = newDate.getUTCDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return `${year}년 ${month}월 ${day}일`;
}

function getImageApi(url) {
  return `http://localhost:8080/api/get-image/${url}`;
}

export { intToWon, simpleDateFormat, simpleDateFormat2, getImageApi};