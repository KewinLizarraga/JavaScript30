const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
  const date = new Date();

  const secondDegrees = date.getSeconds() * 6;
  const minsDegrees = date.getMinutes() * 6 + date.getSeconds() / 10;
  const hoursDegrees = date.getHours() * 30 + date.getMinutes() / 2;

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);

setDate();
