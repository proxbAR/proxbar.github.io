
let hamMenu = document.querySelector(".smallScreenHamMenu");
let mainSection = document.querySelector("#main-content");
let hamMenuDD = document.querySelector(".hamMenu");

let i = 0;

let hamMenuFunc = (event) => {
  if(i==0){
    hamMenu.style.display = "inline";
    mainSection.style.display = "none";
  }
  else{
    hamMenu.style.display = "none";
    mainSection.style.display = "inline";
  }
  i++;
  if(i>1){
    i=0;
  }
}


hamMenuDD.addEventListener("click",hamMenuFunc);