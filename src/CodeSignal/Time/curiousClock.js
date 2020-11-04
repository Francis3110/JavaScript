/**
 * someTime là mốc thời gian mà đồng hồ bắt đầu quay ngược, hỏi vào mốc thời
 * gian là leavingTime thì đồng hồ hiện thị mốc thời gian là gì?
 * Input: "YYYY-MM-DD HH:MM"
 * Constraints: 1970-01-01 00:00 ≤ someTime < leavingTime ≤ 2035-12-31 23:59
 * @param {string} someTime
 * @param {string} leavingTime
 */

function curiousClock(someTime, leavingTime) {
  const parserTime = (time) => {
    const [ymd, hm] = time.split(' ');
    return [...ymd.split('-'), ...hm.split(':')];
  };

  const getTimeValueInMiliSeconds = (time) => {
    const [y, mon, d, h, min] = parserTime(time);
    return new Date(y, mon - 1, d, h, min).getTime();
  };

  const valueSomeTime = getTimeValueInMiliSeconds(someTime);
  const valueLeavingTime = getTimeValueInMiliSeconds(leavingTime);
  const valueClockTime = valueSomeTime - (valueLeavingTime - valueSomeTime);

  const clockTime = new Date(valueClockTime);
  const [h, min] = clockTime.toTimeString().split(' ')[0].split(':');
  const [mon, d, y] = clockTime.toLocaleDateString().split('/');

  return `${y}-${mon < 10 ? 0 + mon : mon}-${d < 10 ? 0 + d : d} ${h}:${min}`;
}

// "2016-08-24 11:20"
console.log(curiousClock('2016-08-26 22:40', '2016-08-29 12:19'));

function curiousClock2(someTime, leavingTime) {
  const valueSomeTime = Date.parse(someTime);
  const valueLeavingTime = Date.parse(leavingTime);
  const valueClockTime = 2 * valueSomeTime - valueLeavingTime;
  return new Date(valueClockTime).toISOString().slice(0, 16).replace('T', ' ');
}

// "2016-08-24 11:20"
console.log(curiousClock2('2016-08-26 22:40', '2016-08-29 12:19'));
