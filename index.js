
const btn= document.getElementById("clicked");

btn.addEventListener("click",function(){
  const x = document.getElementById("containerPro");
    x.style.display="none";
  const y = document.getElementById("containerWho");
    y.style.display="block";
});