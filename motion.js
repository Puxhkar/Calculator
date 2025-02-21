let input= document.getElementById("inputbox");
let buttons= document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == "="){
            string = eval(string)
            input.value = string;   
        }

        else if(e.target.innerHTML == "CLEAR"){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == "DELETE"){
            string= string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})