const containerLogin = document.getElementById('login')
const containerIDK = document.getElementById("idkForm")
const containerRUGre = document.getElementById("rugre")
const containerHiGre = document.getElementById("higre")

let login = document.login

function loginValidation() {
  let user = login.user.value
  let password = login.password.value
  if (user =="greasada" && password == 123){
    login.onsubmit = ()=>{return true}
  } else {
    login.onsubmit = ()=>{return false}
    alert(`mmm que pasa crack, se le olvidaron sus datos?`)
  }
}

function nose(){
  containerLogin.classList.remove('login_container')
  containerLogin.classList.add('hide')
  containerIDK.classList.remove('hide')
  containerIDK.classList.add('login_container')
}

function nameValidation(){
  let idkForm = document.idk
  let name = idkForm.name.value
  idkForm.onsubmit = ()=>{return false}
  if (name =='Grecia'){
    containerIDK.classList.add('hide')
    containerIDK.classList.remove('login_container')
    containerRUGre.classList.add('login_container')
  } else {
    alert(`No se quien sos pa`)
    idkForm.onsubmit = ()=>{return false}
  }
}

function imGre(){
  containerRUGre.classList.add('hide')
  containerRUGre.classList.remove('login_container')
  containerHiGre.classList.add('login_container')
}

function imNotGre(){
  alert(`Su facha no es suficiente para jugar al FachaGame, proceda a echarse a dormir :D`)
}