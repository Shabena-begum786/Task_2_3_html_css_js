const submitBtn = document.getElementById("submitBtn");
const closeBtn=document.getElementById("closeBtn");
const form=document.getElementById("gateForm");

submitBtn.addEventListener("click", () => {

const name = document.querySelector('input[placeholder="Name"]').value;
const email = document.querySelector('input[placeholder="Email"]').value;
const password = document.querySelector('input[placeholder="Password"]').value;
const phone = document.querySelector('input[placeholder="phone number"]').value;
const address = document.querySelector('input[placeholder="address"]').value;
const gender = document.querySelector('input[name="gender"]:checked');



if (!name || !email || !password || !phone || !address || !gender) {
    alert("Please fill all fields");
    return;
  }

  
alert("Form successfully submitted!");

console.log("Name:", name);
console.log("Email:", email);
console.log("Password:", password);
console.log("Phone:", phone);
console.log("Address:", address);
console.log("Gender:", gender ? gender.value : "Not selected");

    form.reset();});


closeBtn.addEventListener("click", () => {
  form.reset();
  alert("Form closed");
});









