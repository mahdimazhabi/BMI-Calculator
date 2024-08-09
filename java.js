const eleminputghad=document.querySelector(".weight")
const eleminputvazn=document.querySelector(".height")
const spanvalue=document.querySelector("#weight-val")
const span=document.querySelector("#height-val")
const result=document.querySelector("#result")
const category=document.querySelector("#category")


eleminputghad.addEventListener("change",value);
eleminputvazn.addEventListener("change",value);


function value(){
    let inputvalueghad=eleminputghad.value;
    let inputvaluevazn=eleminputvazn.value;

    let BMIvalue=(inputvalueghad/(Math.pow(inputvaluevazn/100,2))).toFixed(1);

   spanvalue.innerHTML= inputvalueghad+ " "+"kg";
   span.innerHTML= inputvaluevazn+ " "+"cm";

   result.innerHTML=BMIvalue;


   if(BMIvalue<18.5){
    category.innerHTML="Lightweight";
    category.style.color="#ffc44d";
   }else if(BMIvalue<18.5&&BMIvalue<=24.9){
    category.innerHTML="Mediumweight";
    category.style.color="#0be881";
   }else if(BMIvalue<24.9&&BMIvalue>=25){
category.innerHTML="OverWeight";
category.style.color="ff884d";
   }else{
category.innerHTML="Obese"
category.style.color="#ff5e4d";
   }
}

 


