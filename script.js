
function register(){

let franchise={
name:name.value,
shop:shop.value,
phone:phone.value,
address:address.value,
pincode:pincode.value,
email:email.value,
password:password.value
}

localStorage.setItem(franchise.email,JSON.stringify(franchise))

alert("Registration Successful")

window.location="index.html"
}

function login(){

let data=JSON.parse(localStorage.getItem(email.value))

if(data && data.password===password.value){
localStorage.setItem("user",email.value)
window.location="dashboard.html"
}
else{
alert("Login Failed")
}
}

function agree(){
if(document.getElementById("agree").checked){
window.location="exam.html"
}
}

function submitExam(){

let ans=document.querySelector('input[name="q1"]:checked')

if(ans && ans.value==="1"){
alert("Exam Passed")
window.location="certificate.html"
}else{
alert("Exam Failed")
}
}

function generateCertificate(){

let canvas=document.getElementById("canvas")
let ctx=canvas.getContext("2d")

ctx.fillStyle="#ffffff"
ctx.fillRect(0,0,1000,600)

ctx.fillStyle="#003366"
ctx.font="40px Arial"
ctx.fillText("EI SOLUTIONS CERTIFICATE",250,100)

ctx.font="28px Arial"
ctx.fillText(cname.value,400,300)

ctx.font="20px Arial"
ctx.fillText("Certificate ID: "+cid.value,400,350)

ctx.font="18px Arial"
ctx.fillText("Signature: Sujith Thulasidharan",380,500)
}

function downloadCertificate(){
let canvas=document.getElementById("canvas")
let link=document.createElement("a")
link.download="certificate.png"
link.href=canvas.toDataURL()
link.click()
}

function adminLogin(){
if(adminuser.value==="admin" && adminpass.value==="12345"){
window.location="admin-dashboard.html"
}else{
alert("Invalid admin login")
}
}

function viewFranchise(){
let user=localStorage.getItem("user")
let data=JSON.parse(localStorage.getItem(user))

document.getElementById("data").innerHTML=JSON.stringify(data,null,2)
}
