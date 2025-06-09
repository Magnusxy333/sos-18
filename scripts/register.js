function clean() {
  document.querySelector(".js-input-name").value = "";
  document.querySelector(".js-input-name2").value = "";
  document.querySelector(".js-input-name3").value = "";
  document.querySelector(".js-input-name4").value = "";
  document.querySelector(".js-input-name5").value = "";
  document.querySelector(".js-input-name6").value = "";
  document.querySelector(".js-input-name7").value = "";
  document.querySelector(".js-input-name8").value = "";
}

function send() {
  const A = document.querySelector(".js-input-name").value;
  document.querySelector(".js-input-name2").value;
  document.querySelector(".js-input-name3").value;
  document.querySelector(".js-input-name4").value;
  document.querySelector(".js-input-name5").value;
  document.querySelector(".js-input-name6").value;
  document.querySelector(".js-input-name7").value;
  document.querySelector(".js-input-name8").value;

  if ((A = "")) {
    alert("You have to put something here");
  } else {
    alert("Well done!");
  }

  /*

  if (
    (A === "Fernando" && B === "1234") || 
    (A === "Gustavo" && B === "abcd") || 
    (A === "Maria" && B === "teste123")
  ) {
      alert("Logado");
  } else {
      alert("Usuário ou senha erradas");
  }

*/
}
