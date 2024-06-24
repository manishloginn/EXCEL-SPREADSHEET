

const activeCellElement = document.querySelector('.selected-cell')
const EvaluateBox = document.getElementById('EvaluateBox')
const form = document.getElementById('optionform')
const activeCell = document.querySelector('.active-cell')
let selectedCell = null

function onfucuse(e) {
    // const nextfocus = (`${String.fromCharCode(j+64)}${i+1}`)
    if (selectedCell) {
        selectedCell.classList.remove('active-cell')
    }
    selectedCell = e.target;
    EvaluateBox.value = e.target.innerText;
    activeCellElement.innerText = e.target.id;
    selectedCell.classList.add('active-cell')
}




const applyStyle = (styles) => {
    selectedCell.style.fontSize = styles.fontSize+'px';
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
        let value = EvaluateBox.value;
        let result = eval(value)
        selectedCell.innerText = result
        console.log("result")
    }
})


function selectallcell(e) {
    
    console.log(children)
}

