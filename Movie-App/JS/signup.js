
let form=document.getElementById("signupForm");
let fName=document.getElementById("name");
let email=document.getElementById("mail");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirm-password");

let fError=document.getElementById("nError");
let mError=document.getElementById("mError");
let pError=document.getElementById("pError");
let cpError=document.getElementById("cpError");


form.addEventListener('submit',(e)=>{
    let valid=true;
     fError.innerText="";
      mError.innerText="";
      pError.innerText="";
      cpError.innerText="";

   e.preventDefault();

   let firstName = fName.value.trim();
   if(!firstName)
   {
        fError.innerText="First name is required";
        valid=false;
   }
  else if(firstName.length < 3)
   {
        fError.innerText="First name must be at least 3 characters";
        valid=false;
   }
   else if(firstName.length > 15)
   {
        fError.innerText="First name should not exceed 15 characters";
        valid=false;
   }


   let passwordValue = password.value.trim();
    if(!passwordValue)
    {
          pError.innerText="Password is required";
          valid=false;
    }
    else if(passwordValue.length < 6)
    {
          pError.innerText="Password must be at least 6 characters";
          valid=false;
    }
    else if(passwordValue.length > 20)
    {
          pError.innerText="Password should not exceed 20 characters";
          valid=false;
    }

    let confirmPasswordValue = confirmPassword.value.trim();
    if(!confirmPasswordValue)
    {
          cpError.innerText="Confirm password is required";
          valid=false;
    }
    else if(confirmPasswordValue !== passwordValue)
    {
          cpError.innerText="Passwords do not match";
          valid=false;
    }
    
      let mailValue=email.value.trim();   
      if(!mailValue)
      {
              mError.innerText="Email is required";
              valid=false;
      }
      else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailValue))
      {
              mError.innerText="Invalid email format";
              valid=false;
      }
      if(valid)
      {
           let signupData={
            firstName: firstName,
            email: mailValue,
            password: passwordValue,
           };
    localStorage.setItem("signupData",JSON.stringify(signupData));
      alert("Signup successful!");
    window.location.href = "login.html";
}})
