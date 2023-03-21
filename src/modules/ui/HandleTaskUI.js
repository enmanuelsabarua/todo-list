function HandleTaskUI(instance) {
    // createItem, getItems, deleteItem, changeCheckStatus

    const addTaskButton = document.querySelector('#add-task');
    const form = document.querySelector('.form');

    // Show form
    addTaskButton.addEventListener('click', e => {
        e.preventDefault();

        form.classList.remove('hide');
        addTaskButton.classList.add('hide');
    });
    
    // Form buttons
    const cancelBtn = document.querySelector('.cancel-btn');
    const addBtn = document.querySelector('.add-btn');

    cancelBtn.addEventListener('click', e => {
        e.preventDefault();
        
        form.classList.add('hide');
        addTaskButton.classList.remove('hide');

        addBtn.disabled = true;
        addBtn.classList.add('disabled'); 
    });

    const name = document.querySelector('#task-name');

    addBtn.disabled = true;
    addBtn.classList.add('disabled');    

    name.addEventListener('input', e => {
        if(name.value !== '') {
            addBtn.disabled = false;
            addBtn.classList.remove('disabled');
        } else {
            addBtn.disabled = true;
            addBtn.classList.add('disabled');    
        }
        
    });

    addBtn.addEventListener('click', e => {
        e.preventDefault();        

        const description = document.querySelector('#description');

        const dueDate = document.querySelector('#due-date');
        const priority = document.querySelector('#priority');
        
        instance.createItem(name.value, description.value, dueDate.value, priority.value, false);
        showTaskUI(instance);
        deleteTask(instance);
        checkTask(instance);

        form.classList.add('hide');
        addTaskButton.classList.remove('hide');

        name.value = '';
        description.value = '';
        dueDate.value = '';
        priority.value = '0';

        addBtn.disabled = true;
        addBtn.classList.add('disabled');    

    });
}


function deleteTask(instance) {
    const deleteBtns = document.querySelectorAll('.delete');

    
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => { eraseTask(e, instance)} );
    });

}

function eraseTask(e, instance) {
    const task = e.target.parentNode.parentNode.parentNode;
    const id = +task.dataset.id;

    console.log(task);

    instance.deleteItem(id);
    task.remove();
}

function checkTask(instance) {
    const checkBoxes = document.querySelectorAll('.check');

    checkBoxes.forEach(checkBox => {
        checkBox.addEventListener('change', (e) => { changeStatus(e, instance)});
    });
}

function changeStatus(e, instance) {
    setTimeout(() => {
        const task = e.target.parentNode.parentNode;
        const id = +task.dataset.id;

        instance.deleteItem(id);
        task.remove();
        instance.changeCheckStatus(id);
    }, 500)
}



function showTaskUI(instance, title) {
    const mainTitle = document.querySelector('.main-title');
    mainTitle.textContent = title;

    const items = instance.getItems();
    console.log(items);

    const tasks = document.querySelector('.tasks');
    let i = items.length === 0 ? 0 : items.length - 1;

    for (; i < items.length; i++) {
    
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');
        taskDiv.dataset.id = items[i].id;
    
        const inputDiv = document.createElement('div');
    
        const check = document.createElement('input');
        check.type = 'checkbox';
        check.name = 'check';
        check.classList.add('check');
    
        inputDiv.appendChild(check);

    
        const taskInfo = document.createElement('div');
        taskInfo.classList.add('task-info');
    
        const title = document.createElement('p');
        title.classList.add('task-title');
        title.textContent = items[i].title;
        
        const description = document.createElement('p');
        description.classList.add('task-description');
        description.textContent = items[i].description;
        
        const date = document.createElement('p');
        date.classList.add('date');
        date.textContent = items[i].dueDate;
        
        const priority = document.createElement('p');
        priority.classList.add('priority');
        if (items[i].priority !== '0') {
            priority.textContent = `Priority ${items[i].priority}`;
        }

        switch (items[i].priority) {
            case '1':
                priority.classList.add('task-priority1');
                break;
            case '2':
                priority.classList.add('task-priority2');
                break;
            case '3':
                priority.classList.add('task-priority3');
                break;
            case '4':
                priority.classList.add('task-priority4');
                break;
        
            default:
                break;
        }
    
        taskInfo.appendChild(title);
        taskInfo.appendChild(description);
        taskInfo.appendChild(date);
        taskInfo.appendChild(priority);


        const closeDiv = document.createElement('div');
        closeDiv.classList.add('close');

        const pIcon = document.createElement('p');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid');
        icon.classList.add('fa-xmark');
        pIcon.classList.add('delete');
        pIcon.appendChild(icon);

        closeDiv.appendChild(pIcon);
    
        taskDiv.appendChild(inputDiv);
        taskDiv.appendChild(taskInfo);
        taskDiv.appendChild(closeDiv);
    
        tasks.appendChild(taskDiv);        
    }

}

// HandleTaskUI(inbox);
// showTaskUI(inbox);

export {
    HandleTaskUI,
    showTaskUI
};