export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
  if(input.validity.valid){
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = ""
  }else{
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input)
  }
}
const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "Este campo nombre y apellido no puede estar vacio"
  },
  email:{
    valueMissing: "Este campo email no puede estar vacio",
    typeMismatch: "El email no es valido"
  },
  asunto:{
    valueMissing: "Este campo asunto no puede estar vacio",
  },
  elmensaje:{
    valueMissing: "Este campo mensaje no puede estar vacio prueba",
  }
}

const validadores = "";

function mostrarMensajeError(tipoDeInput, input){
  let mensaje= ""
  tipoDeErrores.forEach(error => {
    if(input.validity[error]){
      console.log(tipoDeInput, error);
      console.log(input.validity [error]);
      console.log(mensajesDeError[tipoDeInput] [error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  }
    )
  return mensaje
}

export function validados(textarea) {
  const tipoDeArea = textarea.dataset.tipo;
  if (validadoresdos[tipoDeArea]) {
    validadoresdos[tipoDeArea](textarea);
  }
  if(textarea.validity.valid){
      textarea.parentElement.classList.remove("textarea-container--invalid");
      textarea.parentElement.querySelector(".textarea-message-error").innerHTML = ""
  }else{
    textarea.parentElement.classList.add("textarea-container--invalid");
    textarea.parentElement.querySelector(".textarea-message-error").innerHTML = mostrarMensajeErrordos(tipoDeArea, textarea)
  }
}
const tipoDeErroresdos = [
  "valueMissing",
  "typeMismatch",
];

const mensajesDeErrordos = {
  
  elmensaje:{
    valueMissing: "Este campo mensaje no puede estar vacio noooooo",
  }
}

const validadoresdos = "";

function mostrarMensajeErrordos(tipoDeArea, textarea){
  let mensajedos= ""
  tipoDeErroresdos.forEach(error => {
    if(textarea.validity[error]){
      console.log(tipoDeArea, error);
      console.log(textarea.validity [error]);
      console.log(mensajesDeErrordos[tipoDeArea] [error]);
      mensajedos = mensajesDeErrordos[tipoDeArea][error];
    }
  }
    )
  return mensajedos
}
