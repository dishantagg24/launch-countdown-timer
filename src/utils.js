/** @format */

const getTimeRemaining = () => {
  let total =
    Date.parse('Tue Sep 15 2024 00:00:00 GMT+0530 (India Standard Time)') -
    Date.parse(new Date());
  if (total <= 0) {
    total = 0;
  }
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
};

export default getTimeRemaining;
