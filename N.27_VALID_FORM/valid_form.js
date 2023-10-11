const formDef1 = [
    { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
    { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
    { label: 'Дата запуска сайта:', kind: 'date', name: 'date' },
    { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
    { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
    {
        label: 'Рубрика каталога:', kind: 'combo', name: 'division',
        variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
    },
    {
        label: 'Размещение:', kind: 'radio', name: 'payment',
        variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
    },
    { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
    { label: 'Описание сайта:', kind: 'memo', name: 'description' },
    { caption: 'Опубликовать', kind: 'submit' },
];

function createForm(arrForm) {
    let resultForLongText = false;
    let resultForShortText = false;
    let resultForNumber = false;
    let resultForCheck = false;
    let resultForMemo = false;
    let resultForRadio = false;
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const formDiv = document.createElement("div");
    formDiv.style.cssText = "margin-bottom: 60px";
    const body = document.querySelector("body");
    const form = document.createElement("form");
    form.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
    form.classList.add("form_valid");
    formDiv.append(form);
    body.append(formDiv);

    arrForm.forEach((item, index) => {
        const div = document.createElement("div");
        const label = document.createElement("label");
        const input = document.createElement("input");
        label.textContent = item.label;
        label.style.cssText = "width: 150px; display: inline-block";
        label.setAttribute("for", item.name + index);
        input.setAttribute("id", item.name + index);
        input.setAttribute("name", item.name);
        form.append(div);
        div.append(label);
        div.append(input);
        const createError = (input, text) => {

            const parentElem = input.closest("div");
            parentElem.classList.add("input_error");
            const labelForError = document.createElement("label");
            labelForError.classList.add("label_for_error");
            labelForError.textContent = text;
            labelForError.classList.add("label_for_error");
            labelForError.textContent = text;
            parentElem.append(labelForError);
        }
        const deleteError = (input) => {
            const parentElem = input.closest("div");

            if (parentElem.classList.contains("input_error")) {
                parentElem.querySelector(".label_for_error").remove();
                parentElem.classList.remove("input_error");
            }
        }
        input.addEventListener("blur", () => {
            if (!(input.value)) {
                deleteError(input);
                createError(input, "Поле не должно быть пустое!");
                resultForLongText = false;
            } else {
                deleteError(input)
                if (input.value.length > 15) {
                    deleteError(input);
                    createError(input, "Превышено количество введенных символов: 15!")
                    resultForLongText = false;
                } else {
                    deleteError(input);
                    resultForLongText = true;
                }
            }
        })
        switch (item.kind) {
            case "longtext":
                input.setAttribute("type", "text");
                input.classList.add("form_field");
                break;

            case "number":
                input.setAttribute("type", "tel");
                input.classList.add("form_field");
                result = false;
                input.addEventListener("blur", () => {

                    if (input.value) {
                        if (input.value.length < 10) {
                            deleteError(input)
                            let inputsArr = input.value.split("");
                            let res;
                            // let letterArr = letter.join("")
                            for (let i of inputsArr) {
                                //console.log((numbers.includes(i)))
                                if ((numbers.includes(i))) {
                                    res = true
                                } else {
                                    res = false;
                                    break;
                                }
                            }
                            if (!(res)) {
                                deleteError(input)
                                createError(input, "Поле не должно содержать строковых символов!");
                                resultForNumber = false;
                            } else {
                                deleteError(input);
                                resultForNumber = true;
                            }
                        } else {
                            deleteError(input)
                            createError(input, "Превышено количество введенных символов: 10!");
                            resultForNumber = false;
                            input.focus();
                        }
                    } else {
                        deleteError(input)
                        createError(input, "Поле не должно быть пустое!");
                        resultForNumber = false;
                    }
                })

                break;
            case "date":
                input.setAttribute("type", "date");
                input.classList.add("form_field");
                break;

            case "shorttext":
                input.setAttribute("type", "email");
                input.classList.add("form_field");
                result = false;
                input.addEventListener("blur", () => {
                    if (input.value) {
                        if (input.value.length < 30) {
                            deleteError(input);
                            if (!(input.value.includes("@"))) {
                                deleteError(input);
                                createError(input, "Данное поле должно содержать символ '@'!");
                                resultForShortText = false;
                            } else {
                                deleteError(input);
                                resultForShortText = true;
                            }
                        } else {
                            deleteError(input);
                            createError(input, "Превышено количество символов: 30!");
                            resultForShortText = false;
                        }
                    } else {
                        deleteError(input);
                        createError(input, "Поле не должно быть пустое!");
                        resultForShortText = false;
                    }
                })
                break;

            case "combo":
                const select = document.createElement("select");
                input.classList.add("form_field");
                select.setAttribute("name", item.name);
                select.setAttribute("id", item.name + index);
                div.replaceChild(select, input);
                for (let variants of item.variants) {
                    const option = document.createElement("option");
                    option.textContent = variants.text;
                    option.setAttribute("value", variants.value);
                    select.append(option);
                }
                break;

            case "radio":
                div.removeChild(input);
                div.setAttribute("type", "radio")
                for (let radioVariants of item.variants) {
                    const spans = document.createElement("span");
                    const inputRadio = document.createElement("input");
                    const textForRadio = document.createTextNode(radioVariants.text)
                    inputRadio.setAttribute("id", item.name + index);
                    inputRadio.setAttribute("type", "radio");
                    div.classList.add("form_field");
                    inputRadio.setAttribute("name", item.name);
                    div.append(spans);
                    spans.append(inputRadio, textForRadio);


                }
                break;

            case "check":
                input.setAttribute("type", "checkbox");
                input.classList.add("form_field");
                input.addEventListener("blur", () => {
                    if (!input.checked) {
                        deleteError(input);
                        createError(input, "Должна быть выбрана опция!");
                        resultForCheck = false;
                    } else {
                        deleteError(input);
                        resultForCheck = true;
                    }
                })
                break;

            case "memo":
                const textArea = document.createElement("textarea");
                textArea.setAttribute("id", item.name + index);
                textArea.classList.add("form_field");
                const parag = document.createElement("p");
                parag.append(textArea);
                div.replaceChild(parag, input);
                result = false;
                textArea.addEventListener("blur", () => {
                    if (!(textArea.value)) {
                        deleteError(textArea);
                        createError(textArea, "Поле не должно быть пустым!");
                        resultForMemo = false;
                    } else {
                        deleteError(textArea);
                        resultForMemo = true;
                    }
                })

                break;

            case "submit":
                const button = document.createElement("button");
                button.setAttribute("type", "submit");
                button.textContent = item.caption;
                div.removeChild(label);
                div.replaceChild(button, input);
                //console.log(resultForLongText + " resssssssssssss")

                form.addEventListener("submit", (event) => {
                    const checkbox = form.querySelector("[type = 'checkbox']");
                    const radio = form.querySelectorAll("[type = 'radio']");
                    for (let radioBut of radio) {
                        if (radioBut.checked) {
                            resultForRadio = true;
                            deleteError(radioBut);

                            break;

                        } else {
                            deleteError(radioBut);
                            createError(radioBut, "Значение в этом поле должно быть выбрано!");
                            resultForRadio = false;
                            continue
                        }
                    }
                    console.log(resultForRadio + " radio");
                    // console.log(resultForShortText + " short");
                    // console.log(resultForLongText + " long")
                    // console.log(resultForCheck + " check")
                    // console.log(resultForNumber + " number")
                    // console.log(resultForMemo + " memo")

                    if (!checkbox.checked) {
                        deleteError(checkbox)
                        createError(checkbox, "Выберите опцию!")
                        resultForCheck = false;
                    } else {
                        deleteError(checkbox)
                        resultForCheck = true;
                    }


                    if (!resultForLongText || !resultForShortText || !resultForNumber || !resultForCheck || !resultForMemo || !resultForRadio) {
                        event.preventDefault();
                        const fields = form.querySelectorAll(".form_field");
                        for (let fieldOfForm of fields) {
                            console.log(fieldOfForm)
                            const parentOfField = fieldOfForm.parentNode;
                            const parentDiv = fieldOfForm.closest("div")
                            if (!parentOfField.classList.contains("input_error")) {
                                if (!parentDiv.hasAttribute("type")) {
                                    if (!(fieldOfForm.value)) {
                                        deleteError(fieldOfForm)
                                        createError(fieldOfForm, "Поле не должно быть пустым!");
                                        fieldOfForm.focus();
                                    } else {
                                        deleteError(fieldOfForm)

                                    }
                                } else {
                                    if (resultForRadio) {
                                        deleteError(fieldOfForm);
                                    } else {
                                        deleteError(fieldOfForm);
                                        createError(fieldOfForm, "Значение в этом поле должно быть выбрано!");
                                        fieldOfForm.focus();
                                    }
                                }


                            }



                        }


                    }
                })
        }
    })
}




createForm(formDef1);
