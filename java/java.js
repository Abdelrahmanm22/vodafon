let accept=document.getElementById('join');

let btn=document.getElementById('btn');
btn.onclick=function(){
    if(accept.value=='01145062539'){
        window.open('https://web.vodafone.com.eg/en/home?gclid=CjwKCAjwtfqKBhBoEiwAZuesiJGeIgsiQNyCbq7hH731J5totnID8jbNjR01dOLgF3qNlCBaTeAYfBoCmC8QAvD_BwE', '_blank');
    }else{
        swal('Oops...Wrong Password',  'Enter Your Password Again',  'warning')
    }
}
$(document).ready(function(){
    $('.carousel').carousel();
});

document.getElementById('serv').onclick=function(){
    window.open('https://web.vodafone.com.eg/en/services1', '_blank');
}
// $('serv').click(function(){
//     window.open('https://web.vodafone.com.eg/en/services1', '_blank');
// })
