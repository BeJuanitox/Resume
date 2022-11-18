let angular = document.getElementById('angular');
let html = document.getElementById('html');
let css = document.getElementById('css');
let js = document.getElementById('js');
let c = document.getElementById('c');
let java = document.getElementById('java');
let counterang = 0, counterhtml = 0, countercss = 0, counterjs = 0, counterc = 0, counterjava = 0;

setInterval(() => {
  if(counterang === 5){
    clearInterval;
  } else {
    counterang++;
    angular.innerHTML = `${counterang}%`;
  }
  
}, 100)

setInterval(() => {
  if(counterhtml === 30){
    clearInterval;
  } else {
    counterhtml++;
    html.innerHTML = `${counterhtml}%`;
  }
  
}, 65)

setInterval(() => {
  if(countercss === 30){
    clearInterval;
  } else {
    countercss++;
    css.innerHTML = `${countercss}%`;
  }
  
}, 65)

setInterval(() => {
  if(counterjs === 10){
    clearInterval;
  } else {
    counterjs++;
    js.innerHTML = `${counterjs}%`;
  }
  
}, 180)

setInterval(() => {
  if(counterc === 50){
    clearInterval;
  } else {
    counterc++;
    c.innerHTML = `${counterc}%`;
  }
  
}, 40)

setInterval(() => {
  if(counterjava === 25){
    clearInterval;
  } else {
    counterjava++;
    java.innerHTML = `${counterjava}%`;
  }
  
}, 80)
