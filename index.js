
const btn= document.getElementById("clicked");

btn.addEventListener("click",function(){
  const x = document.getElementById("containerPro");
    x.style.display="none";
  const y = document.getElementById("containerWho");
    y.style.display="block";
});


const dep = document.getElementById("depositAdd");
dep.addEventListener("click",function(){
  const depositInput= getInputNum("depVal");

   hisabkitab("deph1",depositInput);  
   hisabkitab("deph3",depositInput);

    document.getElementById("depVal").value="";
});

function hisabkitab(id,depositWithdraw){
  const Balance = document.getElementById(id).innerText; 
  const MainBalance = parseFloat(Balance);
  const mainBal=MainBalance+depositWithdraw;
  document.getElementById(id).innerText=mainBal;

}
function getInputNum(id){
  const xxx= document.getElementById(id).value;
  const yyy= parseFloat(xxx);
  return yyy;

}

const wdb = document.getElementById("WithdrawBtn");
wdb.addEventListener("click",function(){

  const withdraw= getInputNum("withVal");

  hisabkitab("deph2",withdraw);

  hisabkitab("deph3", -1*withdraw);

  document.getElementById("withVal").value="";
});

