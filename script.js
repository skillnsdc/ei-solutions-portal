function viewFranchise(){

let data = JSON.parse(localStorage.getItem("franchise"))

if(data){

document.getElementById("data").innerHTML = `
Name: ${data.name} <br>
Shop: ${data.shop} <br>
Phone: ${data.phone} <br>
Address: ${data.address} <br>
Pincode: ${data.pincode} <br>
Email: ${data.email} <br>
Status: ${data.approved ? "Approved" : "Pending"}
`

}else{

document.getElementById("data").innerHTML="No Franchise Registered"

}

}


function approveFranchise(){

let data = JSON.parse(localStorage.getItem("franchise"))

if(data){

data.approved = true

localStorage.setItem("franchise", JSON.stringify(data))

document.getElementById("status").innerHTML="Franchise Approved Successfully"

viewFranchise()

}else{

alert("No Franchise Found")

}

}
