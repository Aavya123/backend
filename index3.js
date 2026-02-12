let time = 5;

const timer = setInterval(() => {
  console.log(time);
  time--;

  if (time < 0) {
    console.log("💥 BOOM!");
    clearInterval(timer);
  }
}, 1000);
