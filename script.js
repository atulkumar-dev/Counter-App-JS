
let paragraph = document.getElementById("paragraph")

let count = 0;

function Increment(){
count = count +1;
paragraph.innerHTML = count;

}
function Decrement(){
count = count - 1;
paragraph.innerHTML = count;

}

function Save(){
  localStorage.setItem("savedCount", count)

}

function Reset(){
  count = 0;
  localStorage.setItem("savedCount", count)
  paragraph.innerHTML=count;
}

function getData(){
  let savedCount = localStorage.getItem("savedCount")
  paragraph.innerHTML=savedCount;

}

getData();


