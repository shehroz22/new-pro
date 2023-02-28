// const validation=()=>{

//     const firstName=document.getElementById("first-Name").value
//     const lastName=document.getElementById("last-Name").value
//     const email=document.getElementById("email").value
//     const password=document.getElementById("pass-word").value
//     const password2=document.getElementById("password2").value
//     const letter = /[a-zA-Z]/;
//     const number = /[0-9]/;
//     var emfilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// //firstname
//    if(firstName==""){
    
//     document.getElementById("first").innerHTML="**enter valid name"
//     return false
//    }

//    if((firstName.length<=2)||(firstName.length>20)){
    
//     document.getElementById("first").innerHTML="length must be between 2 and 20"
//     return false
//    }
//    if(!isNaN(firstName)){
    
//     document.getElementById("first").innerHTML="Number not allowed"
//     return false
//    }
//    else{
//     document.getElementById("first").innerHTML=""
//    }

//    //lastName
//    if(lastName==""){
    
//     document.getElementById("second").innerHTML="**enter lastName"
//     return false
//    }
//    else{
//     document.getElementById("second").innerHTML=""

//    }
// //email



//   if (!emfilter.test(email)) {
//     document.getElementById("third").innerHTML="**enter valid Email"
//    return false
     
// }
// else{
//     document.getElementById("third").innerHTML=""
// }

//    //password

//    if(password==""){
    
//     document.getElementById("fourth").innerHTML="**enter password "
//     return false
//    }
//    if (!letter.test(password)) {
//      document.getElementById("fourth").innerHTML=" UpperCase and LowerCase character required"
//     return false
    
// }
// if (!number.test(password)) {
   
//     document.getElementById("fourth").innerHTML="Password Includes a Digit"
//     return false
    
// }

//    if((password.length<=5)||(password.length>12)){
    
//     document.getElementById("fourth").innerHTML="length must be between 5 and 12"
//     return false
//    }
//    else{
//     document.getElementById("fourth").innerHTML=""
// }

//    //confirm password
//    if(password!=password2){
//     document.getElementById("fifth").innerHTML="password doesnot match"
//     return false
//    }

// }
