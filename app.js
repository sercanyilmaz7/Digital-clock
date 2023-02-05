const hour = document.querySelector(".hr");
const minutes = document.querySelector(".mn");
const second = document.querySelector(".sc");
//
const hourindicator = document.querySelector(".indicatorHR"); 
const minuteindicator = document.querySelector(".indicatorMN"); 
const secondindicator = document.querySelector(".indicatorSC");
//
const hourindicatorBC = document.querySelector(".bcindicatorHR");
const minuteindicatorBC = document.querySelector(".bcindicatorMN");
const secondindicatorBC = document.querySelector(".bcindicatorSC");
//
let hr, mn, sc;

clock()

setInterval(clock, 1000);
function clock() {
  let dt = new Date();
  hr = dt.getHours();
  mn = dt.getMinutes();
  sc = dt.getSeconds();
  console.log(hr, mn, sc);
  //
indicator(hr,mn,sc)
  //
  hr < 10 ? (hr = "0" + hr) : hr
  mn < 10 ? (mn = "0" + mn) : mn
  sc < 10 ? (sc = "0" + sc) : sc
  //
  hour.innerHTML = hr;
  minutes.innerHTML = mn;
  second.innerHTML = sc;
}


function indicator(hr,mn,sc){
  // hour = 24 180/24 7.5
// minute = 60 180/60 = 3
// second = 60 180 / 60 = 3
let hours, minutes, seconds;
hours = hr* 7.5;
minutes = mn * 3;
seconds = sc * 3;

hourindicator.style.background = `conic-gradient(var(--color) ${hours}deg, #000 0deg)`;
minuteindicator.style.background = `conic-gradient(var(--color) ${minutes}deg, #000 0deg)`;
secondindicator.style.background = `conic-gradient(var(--color) ${seconds}deg, #000 0deg)`;
//
hourindicatorBC.style.transform =`rotate(${hours}deg)`
minuteindicatorBC.style.transform =`rotate(${minutes}deg)`
secondindicatorBC.style.transform =`rotate(${seconds}deg)`



}
