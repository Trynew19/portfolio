
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}


var aboutebtn = document.querySelector('#aboute');
var contactbtn = document.querySelector('#contact');
var socialbtn = document.querySelector('#social');

var aboutesec = document.querySelector('.aboute-section');
var contactsec = document.querySelector('.contact-section');
var socialsec = document.querySelector('.social-section');

aboutebtn.addEventListener("click",function(){
  aboutesec.style.display = "initial"
})
contactbtn.addEventListener("click",function(){
  contactsec.style.display = "initial"
})
socialbtn.addEventListener("click",function(){
  socialsec.style.display = "initial"
})

//mobile ke liye
var aboutemob = document.querySelector('.aboutemob');
var contactmob = document.querySelector('.contactmob');
var socialemob = document.querySelector('.socialmob');


aboutemob.addEventListener("click",function(){
  aboutesec.style.display = "initial"
})
contactmob.addEventListener("click",function(){
  contactsec.style.display = "initial"
})
socialemob.addEventListener("click",function(){
  socialsec.style.display = "initial"
})