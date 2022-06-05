let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

function keys(keyCode) {
    let listItemsEl = document.createElement("li");
    listItemsEl.textContent = keyCode;
    keyCodeListEl.appendChild(listItemsEl);
}

function onkeydown(event) {
    keys(event.keyCode);

}

userInputEl.addEventListener("keydown", onkeydown);