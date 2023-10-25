let form=document.getElementById("survey").addEventListener("submit",(e)=>{
    e.preventDefault();
    const details=`
                First Name: ${ document.querySelector(".firstName").value}
                Last Name: ${ document.getElementById("lastName").value}
                Date of Birth: ${ document.getElementById("dob").value}
                Country: ${ document.getElementById("country").value}
                Profession: ${ document.getElementById("profession").value}
                Email: ${ document.getElementById("email").value}
                Mobile: ${ document.getElementById("mobile").value}`;
    alert("Customer Details: "+details);
    location.reload();
})
