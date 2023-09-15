const textField = document.querySelector(".block3")
const buttonTextH = document.querySelector(".buttonTextH");
const buttonTextP = document.querySelector(".buttonTextP");
const buttonForList = document.querySelector(".button_for_list")
buttonTextH.addEventListener("click", () => {
    const input1 = document.querySelector(".input_h").value;
    const newH1 = document.createElement("h1");
    console.log(input1)
    newH1.textContent = input1;
    textField.append(newH1)
});

buttonTextP.addEventListener("click", () => {
    const input2 = document.querySelector(".input_p").value;
    const newP = document.createElement("p");
    newP.textContent = input2;
    textField.append(newP);

});

buttonForList.addEventListener("click", () => {
    const li1 = document.querySelector(".li_1").value;
    const li2 = document.querySelector(".li_2").value;
    const li3 = document.querySelector(".li_3").value;
    const newUl = document.createElement("ul");
    newUl.innerHTML = `<li>${li1}</li><li>${li2}</li><li>${li3}</li>`
    textField.append(newUl)
})