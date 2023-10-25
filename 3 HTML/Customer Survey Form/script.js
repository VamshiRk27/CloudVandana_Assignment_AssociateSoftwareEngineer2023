// const first_name=;
// const last_name=document.getElementById("lastName").value;
// const date_of_birth=;
// const country=;
// const profession=;
// const email=;
// const mobile=;
const submit=document.querySelectorAll("input[type=submit]")[0];
const country_code=document.getElementById("country_code");
// country_code.textContent=country_codes[0];

country.addEventListener("change",()=>{
    country_code.innerHTML=country_codes["country"];
})
const country_codes={
    "INDIA":"+91",
    "USA":"+1",
    "AUSTRALIA":"+61",
    "SRI LANKA":"+94",
    "BANGLADESH":"880"
}
const details=`
                First Name: ${document.getElementById("firstName").value}
                Last Name: ${document.getElementById("lastName").value}
                Date of Birth: ${document.getElementById("dob").value}
                Country: ${document.getElementById("country").value}
                Profession: ${document.getElementById("profession").value}
                Email: ${document.getElementById("email").value}
                Mobile: ${document.getElementById("mobile").value}`;

submit.addEventListener("click",()=>{
    console.log(details);
    alert("Customer Details: "+details);
})
