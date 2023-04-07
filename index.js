
const btn= document.getElementById("clicked");

btn.addEventListener("click",function(){
  const x = document.getElementById("containerPro");
    x.style.display="none";
  const y = document.getElementById("containerWho");
    y.style.display="block";
});


const dep = document.getElementById("depositAdd");
dep.addEventListener("click",function(){
   const inVal= document.getElementById("depVal").value;
   const depositInput= parseFloat(inVal);

   const showVal = document.getElementById("deph1").innerText;
   const currentDeposit=parseFloat(showVal);
    
     const sum=currentDeposit+depositInput;

     const Balance = document.getElementById("deph3").innerText; 

     const MainBalance = parseFloat(Balance);
     // console.log(preValueDep3);

     const mainBal=MainBalance+depositInput;

   //console.log(sum);
    document.getElementById("deph1").innerText=sum;
    document.getElementById("deph3").innerText=mainBal;


    document.getElementById("depVal").value="";
});

const wdb = document.getElementById("WithdrawBtn");
wdb.addEventListener("click",function(){
   
  const withInp = document.getElementById("withVal").value;
  const withdraw = parseFloat(withInp);

  const withdr= document.getElementById("deph2").innerText;
  const CurrentMoney = parseFloat(withdr);

  const totalWithDraw = CurrentMoney+withdraw;

  document.getElementById("deph2").innerText=totalWithDraw;
  
  const remain = document.getElementById("deph3").innerText;
 // console.log(remain);

  const remainbal = remain-withInp;
  document.getElementById("deph3").innerText=remainbal;
  document.getElementById("withVal").value="";
}) 