
function cover(){
const row = document.querySelector("tr")
// console.log(row.children)
let emptyIndex = null
for (let i = 0; i < row.children.length; i++){
    if(row.children[i].children[0].value == ""){
        console.log(i)
        emptyIndex = i
        break

    }
}
const rows = document.querySelectorAll("tr")
for (let i=0; i<rows.length; i++){
    //iteracja po wierszach
    // console.log(rows[i])
    for (let j = 0; j < emptyIndex-1; j++){
         rows[i].children[j].children[0].classList.add("white")
        // console.log(rows[i].children[j].children[0])
        //iteracja po kolumnach od lewej do prawej


    }
}
}
document.querySelector("#button1").addEventListener("click", cover)

function clearTable(){
    const result = window.confirm("Czy na pewno chcesz wszystko skasować?")
    if(result == true){

    for(let i=0; i<inputs.length; i++){
        inputs[i].value = ""
        inputs[i].classList.remove("white")
    }
}

}
const button2 = document.querySelector("#button2");
button2.addEventListener("click", clearTable)
const button1 = document.querySelector("#button1")
function setButtonPosition(){
    if(this.parentNode.previousElementSibling != null){
        const buttonPoint = this.parentNode.previousElementSibling.getBoundingClientRect().left+"px"
        button1.style.left = buttonPoint
    }
    else{
        const buttonPoint = this.parentNode.getBoundingClientRect().left+"px"
        button1.style.left = buttonPoint
    }
    
    
}
const inputs = document.querySelectorAll("input")
for (let i=0; i<inputs.length; i++){
    inputs[i].addEventListener("click", setButtonPosition)
    
      
}
const button3 = document.querySelector("#button3")
button3.addEventListener("click", showModal)
function showModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "block"

}
const redcross = document.querySelector(".redcross")
redcross.addEventListener("click", hideModal )
function hideModal(){
    const modal = document.querySelector(".modal")
    modal.style.display = "none"
}
const checkbutton = document.querySelector(".checkbutton")
checkbutton.addEventListener("click", checkAnswers)
function checkAnswers(){
    const firstRow = document.querySelector("tr")
    let emptyIndex = null
    for (let i = 0; i < firstRow.children.length; i++){
        if(firstRow.children[i].children[0].value == ""){
            emptyIndex = i
            break
    
        }
        
    }
    const indexToCheck = emptyIndex - 1
    const indexToBeChecked = emptyIndex - 3
    const allRows = document.querySelectorAll("tr")
    for (let i = 0; i < allRows.length; i++){
        if(allRows[i].children[indexToCheck].children[0].value != "" && allRows[i].children[indexToBeChecked].children[0].value != ""){
            if(allRows[i].children[indexToCheck].children[0].value == allRows[i].children[indexToBeChecked].children[0].value ){
                allRows[i].children[indexToBeChecked].children[0].classList.add("correct")
                allRows[i].children[indexToCheck].children[0].classList.add("correct")
            }
            else{
                allRows[i].children[indexToBeChecked].children[0].classList.add("incorrect")
                allRows[i].children[indexToCheck].children[0].classList.add("incorrect")
                
    
            }

        }
        
        console.log(allRows[i].children[indexToCheck])
        console.log(allRows[i].children[indexToBeChecked].children[0].value)
    }


}












