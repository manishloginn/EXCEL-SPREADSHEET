const headRow = document.getElementById('headrow');
const sno = document.getElementById('sno')
const bodyy = document.getElementById('bodyy')


const rows = 100, colums = 26;


for (let i = 1; i < colums+1; i++) {
    const headcell = document.createElement('div');
    if (i >= 1) {
        headcell.innerText = String.fromCharCode(i+64);
        headcell.className = "col-head"
    }
    headRow.appendChild(headcell);
}

for (let i = 0; i < rows; i++) {
    const snoCell = document.createElement("div");
    snoCell.innerText = i+1
    snoCell.className = "sno-cell"
    sno.appendChild(snoCell);
    
}

for (let i = 1; i <=rows; i++) {
    const rows = document.createElement("div")
    rows.className = "row"
    for (let j = 1; j <= colums; j++) {
        const cell = document.createElement("div")
        cell.className = "cell"
        cell.contentEditable=true;
        rows.appendChild(cell)
    }

    bodyy.appendChild(rows)
    
}




