const btn = document.querySelector('button');
const input = document.querySelector('input');
const taskList = document.querySelector(".list");

const inputHandler = function addList(){
   
    // If input value is empty then dont add
    if(input.value == "")return;


    const newTask = createElement(input.value);

    taskList.append(newTask)

    // After this empty the input area
    input.value = "";

    // ############ DELETE BUTTON ##############################
    const deleteBtn = newTask.children[1];

    deleteBtn.addEventListener('click',function(){
        newTask.remove();
    })


    // ************* UPDATE BUTTON *****************************
    const updateBtn = newTask.children[2];

    updateBtn.addEventListener('click',function(){
        const updateTask = prompt("Update your task");

        newTask.children[0].innerText = updateTask;
    })
}

function createElement(newTask){
    const div = document.createElement('div');
    const li = document.createElement('li');
    const btn = document.createElement('button');
    const update = document.createElement('button');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';

    const done = document.createTextNode("Done");


    btn.innerText = "Delete";
    update.innerText = "Update";
    li.innerText = newTask;
   
    div.appendChild(li);
    div.appendChild(btn);
    div.appendChild(update);
    div.appendChild(checkBox);
    div.appendChild(checkBox);
    div.appendChild(done);

    return div;
}

btn.addEventListener('click',inputHandler);



