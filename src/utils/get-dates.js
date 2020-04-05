export default ({
  start = new Date(),
  end = getDateWithHour(22),
  diff = 30,
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
