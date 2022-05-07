var arr1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
"R","S","T","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",1,2,3,4,5,
6,7,8,9,0,"@","#","$","^","&","*","/","_","-"]

var firstInput = document.getElementById("input-1")
var secondInput = document.getElementById("input-2")
var ThirdInput = document.getElementById("input-3")
var forthInput = document.getElementById("input-4")
console.log(arr1[Math.floor(Math.random()*arr1.length)])
function generatePassword(){
    
var password1 ="";
var password2 ="";
var password3 ="";
var password4 ="";

    for(var i=0; i<15;i++){
      password1+=  arr1[Math.floor(Math.random()*arr1.length)]
      password2+=  arr1[Math.floor(Math.random()*arr1.length)]
      password3+=  arr1[Math.floor(Math.random()*arr1.length)]
      password4+=  arr1[Math.floor(Math.random()*arr1.length)]



    }

   
    firstInput.value = password1
    secondInput.value = password2
    ThirdInput.value = password3
    forthInput.value = password4
    
     
    firstInput.style.color ="#55F991";
    secondInput.style.color ="#55F991";
    ThirdInput.style.color ="#55F991";
    forthInput.style.color ="#55F991";
} 