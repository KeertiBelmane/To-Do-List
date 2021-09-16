//selectors

const input=document.querySelector(".toDo_input");
const button=document.querySelector('.toDo_button');
const list=document.querySelector('.tasks');
const whatFilter=document.querySelector('.filter');

//listeners

button.addEventListener('click',addToDo);
list.addEventListener('click',deleteTask);
whatFilter.addEventListener('click',filterIt);

//functions

function addToDo(event){
    event.preventDefault();

    if(!input.value){
        alert("Enter what you want to add to your ToDo list!");
    }
    else{
        const todoDiv=document.createElement("div");
        todoDiv.classList.add("todo");

        const newtodo=document.createElement("li");
        newtodo.innerText=input.value;
        newtodo.classList.add("task");
        todoDiv.appendChild(newtodo);

        const doneButton=document.createElement("button");
        doneButton.innerHTML='<i class="fas fa-check"></i>';
        doneButton.classList.add('done_button');
        todoDiv.appendChild(doneButton);

        const trashButton=document.createElement("button");
        trashButton.innerHTML='<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash_button');
        todoDiv.appendChild(trashButton);
        
        list.appendChild(todoDiv);

        input.value="";
    }

}

function deleteTask(e){
    const item=e.target;

    if(item.classList[0]==="trash_button"){
        item.parentElement.remove();
    }

    if(item.classList[0]==="done_button"){
        item.parentElement.classList.toggle('completed');
    }
}

function filterIt(e){
    const todo=list.childNodes;
    
    todo.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display='flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display='flex';
                }
                else{
                    todo.style.display="none";
                }
                break;
            case "uncompleted":
                if(todo.classList.contains('completed')){
                    todo.style.display='none';
                }
                else{
                    todo.style.display="flex";
                }
                break;    
        }

    });
}