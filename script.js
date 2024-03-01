const textArea = document.querySelector(".input__textArea");
const message = document.querySelector(".output__textArea");
const search = document.querySelector(".output__initialMessage");

let matrizCode = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

function btnEncript() {
  const encriptedText = encript(textArea.value);
  message.value = encriptedText;
  textArea.value = "";
  if (message.value != "") {
    search.style.display = "none";
  }
}

function encript(encriptedString) {
  encriptedString = encriptedString.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (encriptedString.includes(matrizCode[i][0])) {
      encriptedString = encriptedString.replaceAll(
        matrizCode[i][0],
        matrizCode[i][1]
      );
    }
  }

  return encriptedString;
}

function btnDecript() {
  const decripedText = decript(textArea.value);
  message.value = decripedText;
  textArea.value = "";
  if (message.value != "") {
    search.style.display = "none";
  }
}

function decript(decriptedString) {
  decriptedString = decriptedString.toLowerCase();

  for (let i = 0; i < matrizCode.length; i++) {
    if (decriptedString.includes(matrizCode[i][1])) {
      decriptedString = decriptedString.replaceAll(
        matrizCode[i][1],
        matrizCode[i][0]
      );
    }
  }

  return decriptedString;
}

function btnClear() {
  textArea.value = "";
  message.value = "";
  search.style.display = "";
}

function btnCopy() {
  if (message.value != "") {
    message.select();
    message.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(message.value);
    alert("Copiado!");
    btnClear();
  }
}
