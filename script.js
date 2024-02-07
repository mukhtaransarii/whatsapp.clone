//DATA INPUT THROUGH JAVASCRIPT 
var arr = [ 
  { dp : "bbsdp.jpg",name : "Mukhtar Alam" ,msg : "I'm web designer" , time : "07:45pm"},
  { dp : "sajiddp.jpg",name : "Sajid Bro" ,msg : "youtube pe bhi video dal" , time : "07:45pm"},
  { dp : "feadp.jpg",name: "FEA new session 8" ,msg : "snigdha: lesson 21/family(vocabulary: cousin..." , time : "07:30pm"},
  { dp : "fea2.jpg",name: "FEA Unofficial" ,msg : "8287****** : aaj ka QOD kya h be?" , time : "07:30pm"},
  { dp : "adildp.jpg",name: "Adil bro" ,msg : "thik h, me btata hu" , time : "05:43pm"},
  { dp : "aziz2dp.jpg",name: "Aziz ❤️" ,msg : "aziz chutiye" , time : "04:50pm"},
   { dp : "jbkp.jpg",name: "JB KNOWLEDGE PARK  BCA-2nd SEM " ,msg : "syed : Mukhtar ja rha h na kal?" , time : "Yesterday"},
  { dp : "addp.jpg",name: "Aszad Bro ❤️" ,msg : "Good morning" , time : "Yesterday"},
  { dp : "sarfrazdp.jpg",name: "Sarfraj khan" ,msg : "kal jayega college?" , time : "Yesterday"},
  { dp : "azizdp.jpg",name: "Aziz 2" ,msg : "thik h koi ni" , time : "Yesterday"},
  { dp : "u1.jpg",name: "J" ,msg : "sent a photo" , time : "Yesterday"},
  { dp : "u2.jpg",name: "Nikki" ,msg : "idnt knw" , time : "Yesterday"},
  { dp : "u1.jpg",name: "Alina ✨" ,msg : "So ja bye" , time : "Yesterday"},
  { dp : "u3.jpg",name: "Sujata" ,msg : "Good 👍🏻" , time : "Yesterday"},
  { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
    { dp : "u1.jpg",name: "Add User" ,msg : " add with JavaScript" , time : "Yesterday"},
  
          ]




var clutter = ""
arr.forEach(function(elem,idx){
	   clutter += `<li> <img id="${idx}" src="${elem.dp}">
	              <div class="chatName">
	              <h3>${elem.name}</h3>
	              <span id="msg">${elem.msg}</span></div>  
	              <span id= "chattime">${elem.time}</span>   
	             </li>`
})

document.querySelector(".chatScreen ul").innerHTML = clutter

document.querySelector(".chatScreen ul").addEventListener("click",function(dets){
   document.querySelector(".popup").style.display = "block"
   document.querySelector(".popupimg").style.backgroundImage = `url(${arr[dets.target.id].dp})`
   document.querySelector(".namebg h2").innerHTML = arr[dets.target.id].name
  
})



let chatBtn = document.querySelector(".fa-message")
let storyBtn = document.querySelector(".fa-circle-plus")
let callBtn = document.querySelector(".fa-phone")

chatBtn.addEventListener("click", function(){
  document.querySelector(".chatScreen").style.display = "block" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "none" 
  
})

storyBtn.addEventListener("click", function(){
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "block" 
  document.querySelector(".callScreen").style.display = "none" 
})
callBtn.addEventListener("click", function(){
  document.querySelector(".chatScreen").style.display = "none" 
  document.querySelector(".storyScreen").style.display = "none" 
  document.querySelector(".callScreen").style.display = "block" 
})


let dptap = document.querySelector(".chatScreen ul li img")
let popup = document.querySelector(".popup")
let body = document.querySelector(".chatScreen")
let navbar = document.querySelector(".navButtons")

// dptap.addEventListener("click", function(){
//   popupdp.style.display = "block"
// })

popup.addEventListener("click", function(){
  popup.style.display = "none"
})



