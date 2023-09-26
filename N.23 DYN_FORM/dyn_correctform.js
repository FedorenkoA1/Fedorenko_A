const formDef1 = [
    { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
    { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
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

const formDef2 = [
    { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
    { label: 'Имя:', kind: 'longtext', name: 'firstname' },
    { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
    { label: 'Возраст:', kind: 'number', name: 'age' },
    { caption: 'Зарегистрироваться', kind: 'submit' },
];

function createForm(arrForm) {
    const formDiv = document.createElement("div");
    formDiv.style.cssText = "margin-bottom: 60px";
    const body = document.querySelector("body");
    const form = document.createElement("form");
    form.setAttribute("action", "https://fe.it-academy.by/TestForm.php");
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
        switch (item.kind) {
            case "longtext":
                input.setAttribute("type", "text");
                break;

            case "number":
                input.setAttribute("type", "tel");
                break;

            case "shorttext":
                input.setAttribute("type", "email");
                break;

            case "combo":
                const select = document.createElement("select");
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
                for (let radioVariants of item.variants) {
                    const spans = document.createElement("span");
                    const inputRadio = document.createElement("input");
                    const textForRadio = document.createTextNode(radioVariants.text)
                    inputRadio.setAttribute("id", item.name + index);
                    inputRadio.setAttribute("type", "radio");
                    inputRadio.setAttribute("name", item.name);
                    div.append(spans);
                    spans.append(inputRadio, textForRadio);
                }
                break;

            case "check":
                input.setAttribute("type", "checkbox");
                break;

            case "memo":
                const textArea = document.createElement("textarea");
                textArea.setAttribute("id", item.name + index)
                const parag = document.createElement("p");
                parag.append(textArea);
                div.replaceChild(parag, input);
                break;

            case "submit":
                const button = document.createElement("button");
                button.setAttribute("type", "submit");
                button.textContent = item.caption;
                div.removeChild(label);
                div.replaceChild(button, input);
                break;
        }
    })
}

createForm(formDef1);
createForm(formDef2);



























