

const activeCellElement = document.querySelector('.selected-cell')
const EvaluateBox = document.getElementById('EvaluateBox')
const form = document.getElementById('optionform')
const activeCell = document.querySelector('.active-cell')
let selectedCell = null
let value = ''

function onfucuse(e) {
    if (selectedCell) {
        selectedCell.classList.remove('active-cell')
    }
    selectedCell = e.target;
    activeCellElement.innerText = e.target.id;
    selectedCell.classList.add('active-cell')
    EvaluateBox.value = selectedCell.innerText;
}

function onChange(e) {
    value = e.target.innerText;
    EvaluateBox.value = value;
    if (e.target.id === activeCellElement) {
        console.log("true")
        EvaluateBox.value = e.target.innerText;
    }
}




const applyStyle = (styles) => {
    selectedCell.style.fontSize = styles.fontSize + 'px';
    selectedCell.style.fontFamily = styles.fontFamily;
    selectedCell.style.fontWeight = styles.isBold ? "bold" : "400"
    selectedCell.style.fontStyle = styles.isItalic ? "italic" : "normal";
    selectedCell.style.textDecoration = styles.isUnderline ? "underline" : "none";
    selectedCell.style.textAlign = styles.align;
    selectedCell.style.color = styles.textColor;
    selectedCell.style.backgroundColor = styles.backgroundColor;
}

form.addEventListener('change', function () {
    if (!selectedCell) {
        alert('Please select')
        formData.reset()
        return;
    }

    const formData = {
        fontFamily: form["fontFamily"].value,
        fontSize: form["fontSize"].value,
        isBold: form["isBold"].checked,
        isItalic: form["isItalic"].checked,
        isUnderline: form["isUnderline"].checked,
        align: form["align"].value,
        textColor: form["textColor"].value,
        backgroundColor: form["backgroungColor"].value
    }

    applyStyle(formData)

})


EvaluateBox.addEventListener("keyup", (e) => {
    if (e.code === "Enter" || e.code == "NumpadEnter" && selectedCell) {

        if (typeof EvaluateBox == Number) {
            let value = EvaluateBox.value;
            let result = eval(value)
            selectedCell.innerText = result
        } else {
            selectedCell.focus()
        }
    }
})

EvaluateBox.addEventListener('input', (e) => {
    if (selectedCell) {
        selectedCell.innerText = e.target.value
    } else {
        alert('Please select')
        return;
    }
})

function selectallcell(e) {

    console.log(children)
}

