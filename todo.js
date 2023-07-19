let input = document.getElementById("pw");
input.addEventListener("keyup", (e)=>{
    if(e.key == "Enter") {
        alert("로그인")
    }
})

let toDo = [];
let id = 0;


const init = () => {
    toDoInputElem.addEventListener('keypress', (e) =>{
        if( e.key === 'Enter' ){
            appendtoDo(e.target.value); toDoInputElem.value ='';
        }
    })
}

init()