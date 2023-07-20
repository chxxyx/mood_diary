// cal

let nowMonth = new Date();
let today = new Date();

// 달력 생성 메서드.
function buildCalendar() {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months[nowMonth.getMonth()];
    console.log(month);

    // 이번 달의 1일
    let firstDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth(), 1);
    // console.log(`firstDate : ${firstDate}`);
    // console.log(nowMonth.getMonth());
    // -> 오늘 날짜 기준 년도, 월의 1일 !

    // 이번 달의 마지막일 (0)
    let lastDate = new Date(nowMonth.getFullYear(), nowMonth.getMonth()+1, 0);
    // console.log(`LastDate : ${lastDate}`);

    let tbody = document.querySelector("tbody");
    document.getElementById("cal-year").innerText = nowMonth.getFullYear();
    // document.getElementById("cal-month").innerText = month;
    document.getElementById("cal-month").textContent = month;
    console.log(month)
    
    // nowMonth.getMonth()+1;
    // ex) 다음 달로 넘어갔을 경우, 이전 출력 결과가 남아있을 수 있으니 초기화 한다.
    while (tbody.rows.length > 0) {  
        tbody.deleteRow(tbody.rows.length - 1);
    }

    // 첫번 째 행 추가
    let nowRow = tbody.insertRow();

    // 1일 시작 전까지 빈 열 추가
    for(let j = 0; j < firstDate.getDay(); j++) {
        let nowColumn = nowRow.insertCell();
    }

    // day는 날짜를 저장하는 변수, 이번달 마지막날까지 증가시키며 반복 
    // Ex) .setDate(13) : 객체를 13일로 변경 
    // nowDay.setDate(nowDay.getDate()+1) : ex) nowDay가 1일일 경우 1일의 다음날인 2일로 
    for(let nowDay = firstDate; nowDay <= lastDate; nowDay.setDate(nowDay.getDate()+1)) {
        let nowColumn = nowRow.insertCell(); // 새로운 열 추가
        nowColumn.innerHTML = nowDay.getDate();
        nowColumn.innerHTML = "<div class='date'>"+nowDay.getDate()+"</div>";

       // 일요일 : 빨간색, 토요일 : 파란색
       if(nowDay.getDay() == 0){
        nowColumn.style.color = "tomato";
       } else if(nowDay.getDay() == 6) {
        nowColumn.style.color = "royalblue";
        nowRow = tbody.insertRow(); // 토요일일 경우 다음으로 넘어가야 하므로 다시 열 추가
       }
    
    }

}

buildCalendar();



// cal




const todoInputElem = document.querySelector('.todo-input');
const todoListElem = document.querySelector('.todo-list');

let todos = [];
let id = 0;

const setTodos = (newTodos) => {
    todos = newTodos;
}

const getAllTodos = () => {
    return todos;
}

const appendTodos = (text) => {
    const newId = id++;
    const newTodos = getAllTodos().concat({id: newId, isCompleted: false, content: text })
    // const newTodos = [...getAllTodos(), {id: newId, isCompleted: false, content: text }]
    setTodos(newTodos)
    paintTodos();
}

const deleteTodo = (todoId) => {
    const newTodos = getAllTodos().filter(todo => todo.id !== todoId );
    setTodos(newTodos);
    paintTodos()
}

const completeTodo = (todoId) => {
    const newTodos = getAllTodos().map(todo => todo.id === todoId ? {...todo,  isCompleted: !todo.isCompleted} : todo )
    setTodos(newTodos);
    paintTodos();
}

const updateTodo = (text, todoId) => {
    const currentTodos = getAllTodos();
    const newTodos = currentTodos.map(todo => todo.id === todoId ? ({...todo, content: text}) : todo);
    setTodos(newTodos);
    paintTodos();
}

const onDbclickTodo = (e, todoId) => {
    const todoElem = e.target;
    const inputText = e.target.innerText;
    const todoItemElem = todoElem.parentNode;
    const inputElem = document.createElement('input');
    inputElem.value = inputText;
    inputElem.classList.add('edit-input');
    inputElem.addEventListener('keypress', (e)=>{
        if(e.key === 'Enter') {
            updateTodo(e.target.value, todoId);
            document.body.removeEventListener('click', onClickBody );
        }
    })

    const onClickBody = (e) => {
        if(e.target !== inputElem)  {
            todoItemElem.removeChild(inputElem);
            document.body.removeEventListener('click', onClickBody );
        }
    }
    
    document.body.addEventListener('click', onClickBody)
    todoItemElem.appendChild(inputElem);
}

const paintTodos = () => {
    todoListElem.innerHTML = ''; //todoListElem 요소 안의 HTML 초기화
	const allTodos = getAllTodos() // todos 배열 가져오기

    allTodos.forEach(todo => { 
        const todoItemElem = document.createElement('li');
        todoItemElem.classList.add('todo-item');

        todoItemElem.setAttribute('data-id', todo.id );

        const checkboxElem = document.createElement('div');
        checkboxElem.classList.add('checkbox');
        checkboxElem.addEventListener('click', () => completeTodo(todo.id))
    
        const todoElem = document.createElement('div');
        todoElem.classList.add('todo');
        todoElem.addEventListener('dblclick', (event) => onDbclickTodo(event, todo.id))
        todoElem.innerText = todo.content;
    
        const delBtnElem = document.createElement('button');
        delBtnElem.classList.add('delBtn');
        delBtnElem.addEventListener('click', () =>  deleteTodo(todo.id))
        delBtnElem.innerHTML = 'X';

        if(todo.isCompleted) {
            todoItemElem.classList.add('checked');
            checkboxElem.innerText = '✔️';
        }

        todoItemElem.appendChild(checkboxElem);
        todoItemElem.appendChild(todoElem);
        todoItemElem.appendChild(delBtnElem);
        todoListElem.appendChild(todoItemElem);
    })
}

const init = () => {
    todoInputElem.addEventListener('keypress', (e) =>{
        if( e.key === 'Enter' ){
            appendTodos(e.target.value); todoInputElem.value ='';
        }
    })
}

    $('.filterList .todos').click(function(){
        items.addClass("d-none")
        $(".enjoy").removeClass("d-none")
    })


// function filter(event){
//     console.log("filter")
// }
// for(let i=1; i<todos.length;i++){
//     todos[i].addEventListener("click",function(event){filter(event)})

// }

// if(button=="all"){
//     for(i=0;i<todos.length;i++){
//         filter()
//     }
// }


init()

//all active complete 나누기
//td를 누르면 class active배열length를 let count에 임티랑 넣기 
//let count를 달력에 넣기 
