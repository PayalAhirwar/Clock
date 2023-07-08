setInterval(function() {
  let a = new Date();
  let hour = a.getHours();
  document.querySelector("#h").textContent = hour;
}, 1000);

setInterval(function() {
  let a = new Date();
  let minute = a.getMinutes();
  document.querySelector("#m").textContent = minute;
}, 1000);

setInterval(function() {
  let a = new Date();
  let second = a.getSeconds();
  document.querySelector("#s").textContent = second;
}, 1000);

setInterval(function() {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  document.querySelector("#date").innerText = currentDate.toDateString();
}, 1000);
