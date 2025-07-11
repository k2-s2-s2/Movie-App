
let loginForm=document.getElementById('loginForm');
console.log(loginForm);


let mail=document.getElementById('mail');
let pass=document.getElementById('password');

let mError=document.getElementById('mError');
let pError=document.getElementById('pError');


loginForm.addEventListener("submit",(e)=>{

  e.preventDefault();
   let valid=true;

    mError.innerText="";
    pError.innerText="";

      let mailVal=mail.value.trim();   
      if(!mailVal)
      {
              mError.innerText="Email is required";
              valid=false;
      }
      else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mailVal))
      {
              mError.innerText="Invalid email format";
              valid=false;
      }
    let passValue=pass.value.trim();
    if(!passValue)
    {
        pError.innerText="Password is required";
        valid=false;
    }
    else if(passValue.length < 6)
    {
        pError.innerText="Password must be at least 6 characters";
        valid=false;
    }
    else if(passValue.length > 20)
    {
        pError.innerText="Password should not exceed 20 characters";
        valid=false;
    }

     if (valid) {
    const user = JSON.parse(localStorage.getItem("signupData"));
    if (!user) return alert("No user found. Please sign up.");
    if (mailVal === user.email && passValue === user.password) {
      alert("Login successful!");
      window.location.href = "Home.html";
    } else {
      alert("Invalid username or password.");
    }
  }
});

