// import HandleInbox from './modules/HandleInbox';
import HandleProjects from './modules/HandleProjects';
import { inbox, HandleTaskUI, showTaskUI } from './modules/ui/InboxUI';

import './style.css';

const project = HandleProjects();

function HandleProjectUI() {
    const createProjectBtn = document.querySelector('.create-project');
    const projectForm = document.querySelector('.form-div');

    createProjectBtn.addEventListener('click', e => {
        e.preventDefault();

        projectForm.classList.add('pop-up');
        
    });

    // Form buttons
    const cancelBtn = document.querySelector('.cancel-project-btn');
    const addBtn = document.querySelector('.add-project-btn');

    cancelBtn.addEventListener('click', e => {
        projectForm.classList.remove('pop-up');
    });

    const name = document.querySelector('#project-name');

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

        project.createProject(name.value);
        showProjectUI();
        deleteProject();

        projectForm.classList.remove('pop-up');
        name.value = '';
    });

}

function deleteProject() {
    const deleteBtns = document.querySelectorAll('.delete-project');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const projectDiv = e.target.parentNode.parentNode;
            const id = +projectDiv.dataset.id;

            console.log(projectDiv);

            project.deleteProject(id);
            projectDiv.remove();
        });
    })
}

function showProjectUI() {
    // <div class="project">
    //     <h4>Project 1 <i class="fa-solid fa-xmark"></i></h4>
    // </div>

    const projects = project.getProjects();

    const projectsDiv = document.querySelector('.project-list');
    let i = projects.length === 0 ? 0 : projects.length - 1;

    for (; i < projects.length; i++) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');        
        projectDiv.dataset.id = projects[i].id;
    
        const projectTitle = document.createElement('h4');
    
        projectTitle.textContent = projects[i].name;
    
        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fa-solid');
        deleteIcon.classList.add('fa-xmark');
        deleteIcon.classList.add('delete-project');       
        
        projectTitle.appendChild(deleteIcon);
        projectDiv.appendChild(projectTitle);
        projectsDiv.appendChild(projectDiv);
    }
    
    
}

HandleProjectUI();

HandleTaskUI(inbox);
showTaskUI(inbox, 'Inbox');