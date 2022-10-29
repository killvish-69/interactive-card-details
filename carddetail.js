const detailform=document.querySelector('.logindetails');
const thankyouform=document.querySelector('.thankyou');
const input1=document.getElementById('1');
const input2=document.getElementById('2');
const input3=document.getElementById('3');
const input4=document.getElementById('4');
const input5=document.getElementById('5');
const button=document.querySelector('.btn');
const numoncard=document.getElementById('text1');   
const nameoncard=document.getElementById('text2');
const expdatemonth=document.getElementById('text3');
const expdateyear=document.getElementById('text5');
const cvcinput=document.getElementById('text4');
const carddetails=document.getElementById('carddetails');
nameoncard.innerHTML=input1.placeholder;
numoncard.innerHTML=input2.placeholder;
function inputname(){

nameoncard.innerHTML=input1.value;
if(input1.value===""){
    nameoncard.innerHTML=input1.placeholder.slice(5)
}
}

function inputnum(){
    let cardnumberinput=input2.value;

    let formattedcardnumber=cardnumberinput.replace(/[^\d]/g, "");
  formattedcardnumber=formattedcardnumber.substring(0,16);

let cardnumbersections=formattedcardnumber.match(/\d{1,4}/g);
if(cardnumbersections !== null){
    formattedcardnumber=cardnumbersections.join(" ");

    if(cardnumberinput !==formattedcardnumber){
        input2.value=formattedcardnumber;
    }
    
    numoncard.innerHTML=input2.value;
}
}
function inputmm(){
      let months=input3.value;
      let formattedmonth=months.replace(/[^\d]/g, "");
      expdatemonth.innerHTML=formattedmonth;
      if(months===""){
        expdatemonth.innerHTML="00";
      }
      }
      function inputyy(){
        let years=input4.value;
        let formattedyear=years.replace(/[^\d]/g, "");
        expdateyear.innerHTML=formattedyear;
        if(years===""){
            expdateyear.innerHTML="00";
      }
    }

 function inputcvc(){
    let cvc=input5.value;
    let formattedcvc=cvc.replace(/[^\d]/g, "");
    cvcinput.innerHTML=formattedcvc;
    if(cvc===""){
        cvcinput.innerHTML="000";
 }   
}
 
function massvalidate(){
function validatename(){
  let nameexp=/^[A-Z a-z]+$/;
  let errorname=document.querySelector('.errorname');
  if(input1.value.match(nameexp)){
    errorname.innerHTML="";
    input1.style.border="1px solid gray";
  }
  else if(input1.value===""){
    errorname.innerHTML="Can't be blank";
    input1.style.border="1px solid hsl(0, 100%, 66%)";
  }
  else{
    errorname.innerHTML="Please enter a valid cardholdername";
    input1.style.border="1px solid hsl(0, 100%, 66%)";
  }
}

function validatenum(){
  let errornum=document.querySelector('.errornum');
  let cardnumber=input2.value;
  if(cardnumber.toString().length <19){
    errornum.innerHTML="Wrong format!"
    input2.style.border="1px solid hsl(0, 100%, 66%)";
  }
  else if(input2.value===""){
    errornum.innerHTML="Can't be blank";
    input2.style.border="1px solid hsl(0, 100%, 66%)";
  }
  else{
    errornum.innerHTML="";
    input2.style.border="1px solid gray";
  }
}
function validatemonth(){
  let errormonth=document.querySelector('.mm');
  if(input3.value>12){
    errormonth.innerHTML="Wrong format!";
    input3.style.border="1px solid hsl(0, 100%, 66%)";
  }
  else if(input3.value===""){
    errormonth.innerHTML="Can't be blank";
    input3.style.border="1px solid hsl(0, 100%, 66%)";
  }
  else{
    errormonth.innerHTML="";
    input3.style.border="1px solid gray";
  }
}
function validateyear(){
  let erroryear=document.querySelector('.yy');
  if(input4.value===""){
    erroryear.innerHTML="Can't be blank";
    input4.style.border="1px solid hsl(0, 100%, 66%)";
  }
  else{
    erroryear.innerHTML="";
    input4.style.border="1px solid gray";
  }
}


if(input3.value==="" && input4.value==""){
  let errormm=document.getElementById('errormm');
  errormm.style.display="none";
}


function validatecvc(){
  let errorcvc=document.querySelector('.errorcvc');
  if(input5.value===""){
    errorcvc.innerHTML="Can't be blank";
    input5.style.borderColor="hsl(0, 100%, 66%)";
  }
  else{
    errorcvc.innerHTML="";
    input5.style.border="1px solid gray";
  }
}

validatename();
validatenum();
validatemonth();
validateyear();
validatecvc();
if(
  input1.style.bordercolor=="gray"||
  input2.style.bordercolor=="gray"||
  input3.style.bordercolor=="gray"||
  input4.style.bordercolor=="gray"||
  input5.style.bordercolor=="gray"
){
  return false;
}
else{
  return true;
}
}
button.addEventListener('click',()=>{
  
massvalidate();
if(massvalidate() == false){
  event.preventDefault();
}
else{
  event.preventDefault();
carddetails.style.display="none";
document.getElementById('hidden').style.display="block";
}
});

const continuebutton=document.getElementById('button1');

continuebutton.addEventListener('click',()=>{
  carddetails.style.display="block";
document.getElementById('hidden').style.display="none";
input1.value="";
input2.value="";
input3.value="";
input4.value="";
input5.value="";
})