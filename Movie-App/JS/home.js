let apiKey="d691080c";
let currentPages="";
let searchPages="";

function toggleDarkMode(){
    document.body.classList.toggle("dark")
    localStorage.setItem('darkMode',document.body.classList.contains('dark')? 'enable':'disable')
}

window.onload=()=>{
    if(localStorage.getItem('darkmode'==='enabled')){
        document.body.classList.add('dark')
    }
}
