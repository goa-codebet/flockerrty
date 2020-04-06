export const timeLabel = date =>
  `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`;
  
export const getDates = ({
  start = new Date(),
  end = new Date(Date.now() + (12 * 3600 * 1000)),
  diff = 60,
}) => {
  const coeff = 1000 * 60 * diff;
  let startTime = new Date(Math.round(start.getTime() / coeff) * coeff);

  let bookingTimes = [];

  while (startTime < end) {
    bookingTimes.push(startTime);
    startTime = new Date(startTime.getTime() + coeff);
  }

  return bookingTimes;
};

const getDateWithHour = hour => {
  const date = new Date();
  date.setMilliseconds(0);
  date.setSeconds(0);
  date.setMinutes(0);
  date.setHours(hour);

  return date;
};
