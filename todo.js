let todoList = document.querySelector("#todoList");
let input  = document.querySelector("#todoType");
let addBtn = document.querySelector("#addbtn");


addBtn.addEventListener('click', function(){  
    let todo = input.value;  
    if(todo === " "){
        alert("Please enter a valid todo");
        return;
    }
    let li = document.createElement('li');
    li.innerHTML = `${todo} <button onclick="deleteTodo(this)" id="delbtn">Delete</button> <button onclick="modTodo(this)" id="modbtn">Modify</button>`;
    todoList.append(li);
    todoList.style.display = "block";
    input.value = " ";
})

function deleteTodo(btn){
    let li = btn.parentElement;
    li.remove();
    if(todoList.childElementCount == 0){
        todoList.style.display = "none";
    }
}

// function modTodo(btn){
//     let li = btn.parentElement;
//     let p = li.querySelector('p')

//     let newTodo = prompt("enter new todo:",p.innerText);
//     if(newTodo!==null&&newTodo.trim()!==""){
//         p.innerText = newTodo;
//     }
// }