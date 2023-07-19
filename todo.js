//유저가 값을 입력한다
//enter를 치면 할일이 추가된다
//complet를 누르면 완료하고 밑줄
//active 
//

let todoInput = document.getElementById("todo-input");
let addButton = document.getElementById("complete");
let todoList = []
addButton.addEventListener("click",addTask);

function addTask(){
    
    let task = {
        todoContent : todoInput.value,
        isComplete:false
    }
    todoList.push(task)
    console.log(todoList);
    render()
}

function render(){
    let resultHTML = ''
    for(let i=0; i<todoList.length; i++){
        resultHTML += `<div id="text-box">
        <ul class="todo-list">
        
           <div class="text">
               <div>${todoList[i].todoContent}</div>
               
                <div>
                    <button>completed</button>
                    <button>no</button>
                </div>
            </div>
           </ul>

       </div>`
       
    }

    
    document.getElementById("text-box").innerHTML=resultHTML
    
}
