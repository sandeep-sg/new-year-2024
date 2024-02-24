let wish = document.querySelector("h1");
let name = prompt("Enter your name :");
if (name == true) {
  console.log("true");
}
while (name == null || name == "") {
  name = prompt("Enter your name :");
}

setInterval(() => {
  let currentTime = new Date();
  let newyear2024 = "1 jan 2025 12:00:00 AM";
  let endTime = new Date(newyear2024);
  let differenceTime = (endTime - currentTime) / 1000;
  let days = Math.floor(differenceTime / 60 / 60 / 24);
  let hours = Math.floor((differenceTime / 60 / 60) % 24);
  let minutes = Math.floor((differenceTime / 60) % 60);
  let seconds = Math.floor(differenceTime % 60);
  wish.innerHTML = `
    <span>${name}</span> </br> Happy New Year to you from me </br> ${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds ago`;
}, 1000);
