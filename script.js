const headRow = document.getElementById('headrow');
const sno = document.getElementById('sno')
const bodyy = document.getElementById('bodyy')
const plate= document.getElementById('plate')


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
        cell.id = `${String.fromCharCode(j+64)}${i}`
        rows.appendChild(cell)
        cell.addEventListener("focus", onfucuse)
      
        
        cell.addEventListener("keyup", (e) => {
            // e.preventDefault();
            let nextcell = document.getElementById(`${String.fromCharCode(j+64)}${i+1}`) 
            let currentCell = document.getElementById(`${String.fromCharCode(j+64)}${i}`) ;
            let content = cell.innerText             
            try {
                if (e.code === "Enter" || e.code == "NumpadEnter" && selectedCell) {
                    if (content.trim() == "") {
                        selectedCell.innerText = "";
                        nextcell.focus()
                        return;
                    } 
                     else {
                        let value = content.trim();
                        let result = eval(value)
                        if (!result && result !== 0) {
                            nextcell.focus()
                            return
                        }
                        selectedCell.innerText = result
                        nextcell.focus()
                    }
                    
                   
                }
            } catch (error) {
                return
            }
           
        })

        cell.addEventListener('input', (e) => onChange(e));
        

     
    }

    bodyy.appendChild(rows)
    
}

plate.addEventListener('click' , selectallcell)




