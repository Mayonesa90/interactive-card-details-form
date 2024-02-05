const name = document.querySelector("#name");
const number = document.querySelector("#number");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const cvc = document.querySelector("#cvc");
const cardName = document.querySelector("#cardImgName");
const cardNumber = document.querySelector("#cardImgNum");
const cardMonth = document.querySelector("#cardImgMonth");
const cardYear = document.querySelector("#cardImgYear");
const cardCvc = document.querySelector("#cardImgCVC");
const btn = document.querySelector("#button");
const parents = document.querySelectorAll(".form_section");
const dateParents = document.querySelector(".form_section-date");
const nameParent = parents[0];
const numberParent = parents[1];
// const monthParent = subParents[0];
// const yearParent = subParents[1];
const cvcParent = parents[3];

console.log(cvcParent)

let errorMsgEmpty = document.createElement("p");
errorMsgEmpty.innerHTML = "Can't be blank";
errorMsgEmpty.classList.add("error_msg")

function editText(input, output) {
    output.innerHTML = input.value;
}

name.addEventListener("input", () => editText(name, cardName));

number.addEventListener("input", () => editText(number, cardNumber));

month.addEventListener("input", () => editText(month, cardMonth))

year.addEventListener("input", () => editText(year, cardYear))

cvc.addEventListener("input", () => editText(cvc, cardCvc))

function checkIfEmpty(input, parent) {

    parents.forEach(()=> {
        if (input.value == "" || input.value == null) {
            parent.appendChild(errorMsgEmpty)
        }
    })


}

btn.addEventListener("click", () => {
    checkIfEmpty(name, nameParent);
    checkIfEmpty(number, numberParent);
    checkIfEmpty(month, dateParents);
    checkIfEmpty(year, dateParents);
    checkIfEmpty(cvc, cvcParent);
})

