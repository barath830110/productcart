let Total=0;
let waffleprice=0;
let cremeprice=0;
let macaronprice=0;
let tiramisuprice=0;
let baklavaprice=0;
let pieprice=0;
let cakeprice=0;
let brownieprice=0;
let cottaprice=0;
const sum=document.getElementById("sum");
const countelement=document.getElementById("size");
const quantaty=document.getElementById("quan");
const removeproduct1=document.getElementById('remove');
const waffle=document.getElementById('waffle');
function incre(){
   let count =Number(countelement.textContent);
   count=count+1;
   countelement.textContent=count;
   quataty(count);
   waffle.style.display ='block';
}
function decre(){
   let count=Number(countelement.textContent);
   count=count-1;
   if (isNaN==0||count<1){
      count=0;
   }
   countelement.textContent=count;
   quataty(count);
   Total+=waffleprice;
}
function quataty(count){
   quantaty.textContent=count+"x";
   waffleprice =count*6.50;
   const add=document.getElementById("add");
   add.textContent="$"+waffleprice;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
removeproduct1.addEventListener("click",() =>{
   waffle.style.display ='none';
   waffleprice=0;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
   });  
        // Prodcut2 declaration //
const sizeofcreme=document.getElementById("size1");
function incre1(){
   let count1=Number(sizeofcreme.textContent);
   count1=count1+1;
   sizeofcreme.textContent=count1;
   quataty1(count1);
   creme.style.display ='block';
}
function decre1(){
   let count1=Number(sizeofcreme.textContent);
   count1=count1-1;
   if (isNaN==0||count1<1){
      count1=0;
   }
   sizeofcreme.textContent=count1;
   quataty1(count1);
}
function quataty1(count1){
   const cremequantaty=document.getElementById("quan1");
   cremequantaty.textContent=count1+"x";
   cremeprice =count1*7.00;
   const add1=document.getElementById("add1");
   add1.textContent="$"+cremeprice;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
const creme=document.getElementById("creme");
const removecreme=document.getElementById("remove1");
removecreme.addEventListener("click",() =>{
   creme.style.display ='none';
   cremeprice=0;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
});

//product3 declaration//

const sizeofmacaron=document.getElementById("size2");
function incre2(){
   let count1=Number(sizeofmacaron.textContent);
   count1=count1+1;
   sizeofmacaron.textContent=count1;
   quataty2(count1);
   macaron.style.display ='block';
}
function decre2(){
   let count1=Number(sizeofmacaron.textContent);
   count1=count1-1;
   if (isNaN==0||count1<1){
      count1=0;
   }
   sizeofmacaron.textContent=count1;
   quataty2(count1);
}
function quataty2(count1){
   const macaronquantaty=document.getElementById("quan2");
   macaronquantaty.textContent=count1+"x";
   macaronprice=count1*8.00;
   const add2=document.getElementById("add2");
   add2.textContent="$"+macaronprice;   
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
const macaron=document.getElementById("macaron");
const removemacaron=document.getElementById("remove2");
removemacaron.addEventListener("click",() =>{
   macaron.style.display ='none';
   macaronprice=0;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
});
     //Product4 declaration//

const sizeoftiramisu=document.getElementById("size3");
const tiramisu=document.getElementById("tiramisu");
function incre3(){
   let count1=Number(sizeoftiramisu.textContent);
   count1=count1+1;
   sizeoftiramisu.textContent=count1;
   quataty3(count1);
   tiramisu.style.display ='block';
}
function decre3(){
   let count1=Number(sizeoftiramisu.textContent);
   count1=count1-1;
   if (isNaN==0||count1<1){
      count1=0;
   }
   sizeoftiramisu.textContent=count1;
   quataty3(count1);
}
function quataty3(count1){
   const tiramisuquantaty=document.getElementById("quan3");
   tiramisuquantaty.textContent=count1+"x";
   tiramisuprice=count1*8.00;
   const add3=document.getElementById("add3");
   add3.textContent="$"+tiramisuprice;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
const removetiramisu=document.getElementById("remove3");
removetiramisu.addEventListener("click",() =>{
   tiramisu.style.display ='none';
   tiramisuprice=0;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
});

          // Product5 declaration//
const sizeofbaklava=document.getElementById("size4");
const baklava=document.getElementById("baklava");
function incre4(){
   let count1=Number(sizeofbaklava.textContent);
   count1=count1+1;
   sizeofbaklava.textContent=count1;
   quataty4(count1);
   baklava.style.display ='block';
}
function decre4(){
   let count1=Number(sizeofbaklava.textContent);
   count1=count1-1;
   if (isNaN==0||count1<1){
      count1=0;
   }
   baklava.textContent=count1;
   quataty4(count1);
}

function quataty4(count1){
   const baklavaquantaty=document.getElementById("quan4");
   baklavaquantaty.textContent=count1+"x";
   baklavaprice=count1*4.00;
   const add4=document.getElementById("add4");
   add4.textContent="$"+baklavaprice;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
const removebaklava=document.getElementById("remove4");
removebaklava.addEventListener("click",() =>{
   baklava.style.display ='none';
   baklavaprice=0;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
});
 //product 6 declaration//     
const sizeofpie=document.getElementById("size5");
const pie=document.getElementById("pie");
function incre5(){
   let count1=Number(sizeofpie.textContent);
   count1=count1+1;
   sizeofpie.textContent=count1;
   quataty5(count1);
   pie.style.display ='block';
}
function decre5(){
   let count1=Number(sizeofpie.textContent);
   count1=count1-1;
   if (isNaN==0||count1<1){
      count1=0;
   }
   sizeofpie.textContent=count1;
   quataty5(count1);
}
function quataty5(count1){
   const piequantaty=document.getElementById("quan5");
   piequantaty.textContent=count1+"x";
   pieprice=count1*5.00;
   const add5=document.getElementById("add5");
   add5.textContent="$"+pieprice;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
const removepie=document.getElementById("remove5");
removepie.addEventListener("click",() =>{
   pie.style.display ='none';
   pieprice=0;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
});
     //Product 7 Declaration//
const sizeofcake=document.getElementById("size6");
const cake=document.getElementById("cake");
function incre6(){
   let count1=Number(sizeofcake.textContent);
   count1=count1+1;
   sizeofcake.textContent=count1;
   quataty6(count1);
   cake.style.display ='block';
}
function decre6(){
   let count1=Number(sizeofcake.textContent);
   count1=count1-1;
   if (isNaN==0||count1<1){
      count1=0;
   }
   sizeofcake.textContent=count1;
   quataty6(count1);
}
function quataty6(count1){
   const cakequantaty=document.getElementById("quan6");
   cakequantaty.textContent=count1+"x";
   cakeprice=count1*4.50;
   const add6=document.getElementById("add6");
   add6.textContent="$"+cakeprice;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
const removecake=document.getElementById("remove6");
removecake.addEventListener("click",() =>{
   cake.style.display ='none';
   cakeprice=0;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
});
    //Product 8 Declaration//
const sizeofbrownie=document.getElementById("size7");
const brownie=document.getElementById("brownie");
function incre7(){
   let count1=Number(sizeofbrownie.textContent);
   count1=count1+1;
   sizeofbrownie.textContent=count1;
   quataty7(count1);
   brownie.style.display ='block';
}
function decre7(){
   let count1=Number(sizeofbrownie.textContent);
   count1=count1-1;
   if (isNaN==0||count1<1){
      count1=0;
   }
   sizeofbrownie.textContent=count1;
   quataty7(count1);
}
function quataty7(count1){
   const browniequantaty=document.getElementById("quan7");
   browniequantaty.textContent=count1+"x";
   brownieprice=count1*5.50;
   const add7=document.getElementById("add7");
   add7.textContent="$"+brownieprice;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
const removebrownie=document.getElementById("remove7");
removebrownie.addEventListener("click",() =>{
   brownie.style.display ='none';
   brownieprice=0;
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
});
//Product 9 Declaration//
const sizeofcotta=document.getElementById("size8");
const cotta=document.getElementById("cotta");
const removecotta=document.getElementById("remove8");

function incre8(){
   let count1=Number(sizeofcotta.textContent);
   count1=count1+1;
   sizeofcotta.textContent=count1;
   quataty8(count1);
   cotta.style.display ='block';
}
function decre8(){
   let count1=Number(sizeofcotta.textContent);
   count1=count1-1;
   if (isNaN==0||count1<1){
      count1=0;
   }
   sizeofcotta.textContent=count1;
   quataty8(count1);
}
function quataty8(count1){
   const cottaquantaty=document.getElementById("quan8");
   cottaquantaty.textContent=count1+"x";
   cottaprice=count1*6.50;
   const add8=document.getElementById("add8");
   add8.textContent="$"+cottaprice;
   removecotta.addEventListener("click",() =>{
      cotta.style.display ='none';
      cottaprice=0;
      total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
});
   total(waffleprice+cremeprice+macaronprice+tiramisuprice+baklavaprice+pieprice+cakeprice+brownieprice+cottaprice);
}
function total(...Total){
sum.textContent=Total;
}
function placeorder(){
   alert('Order confirmed');
   sum.textContent=Total;
   waffle.style.display ='none';
   creme.style.display ='none';
   macaron.style.display ='none';
   tiramisu.style.display ='none';
   baklava.style.display ='none';
   pie.style.display ='none';
   cake.style.display ='none';
   brownie.style.display ='none';
   cotta.style.display ='none';
}







