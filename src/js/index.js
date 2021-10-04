const loginContainerLogin = document.querySelector(".login_container--login")
const loginContainerIDK = document.querySelector(".login_container--idk")
const loginContainerRUGre = document.querySelector(".login_container--rugre")
const loginContainerHiGre = document.querySelector(".login_container--hi_gre")
let login = document.login
const user = login.user.value
const password = login.password.value

function loginValidation() {
  if (login.user.value =="greasada" && login.password.value == 123){
    login.onsubmit = ()=>{return true}
  } else {
    login.onsubmit = ()=>{return false}
    alert(`diga la contraseña`)
  }
}