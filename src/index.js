// import HandleInbox from './modules/HandleInbox';
import HandleProjects, { selectedProjectId }from './modules/HandleProjects';
import { inbox, HandleTaskUI, showTaskUI } from './modules/ui/InboxUI';

import './style.css';

const project = HandleProjects();

function HandleProjectUI() {
    const createProjectBtn = document.querySelector('.create-project');
    const projectForm = document.querySelector('.form-div');

    createProjectBtn.addEventListener('click', e => {
        e.preventDefault();

        projectForm.classList.add('pop-up');

        e.stopPropagation();        
    });

    // Form buttons
    const cancelBtn = document.querySelector('.cancel-project-btn');
    const addBtn = document.querySelector('.add-project-btn');    

    cancelBtn.addEventListener('click', e => {
        projectForm.classList.remove('pop-up');

        e.stopPropagation();        
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

        const lastProject = project.getProjects().slice(-1);
        project.selectProject(lastProject[0].id);
        
        showProjectUI();
        HandleChangeProject();
        deleteProject();
        showTaskUI(project, lastProject[0].name);
        

        // Remove the selected-project class from the other projects
        if (selectedProjectId !== 0) {
            const lastProjectElement = document.querySelector(`[data-id="${project.getProjects().slice(-2)[0].id}"]`);
            lastProjectElement.classList.remove('selected-project');
        } 

        const projectsDOM = document.querySelectorAll('.project');                
        projectsDOM.forEach(p => p.classList.remove('selected-project'));
        

        const lastProjectElement = document.querySelector(`[data-id="${selectedProjectId}"]`);
        lastProjectElement.classList.add('selected-project');
        


        addBtn.disabled = true;
        addBtn.classList.add('disabled');  

        projectForm.classList.remove('pop-up');
        name.value = '';

        e.stopPropagation();   

          
    });

}

function deleteProject() {
    const deleteBtns = document.querySelectorAll('.delete-project');

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            const projectDiv = e.target.parentNode.parentNode;
            const id = +projectDiv.dataset.id;

            showTaskUI(inbox, 'Inbox');
            project.selectProject(0);

            project.deleteProject(id);
            projectDiv.remove();

            e.stopPropagation();
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

function HandleChangeProject() {
    const projectsDOM = document.querySelectorAll('.project');

    projectsDOM.forEach(projectTab => {
        
        projectTab.addEventListener('click', e => {
            
            projectsDOM.forEach(p => p.classList.remove('selected-project'));
            
            projectTab.classList.add('selected-project');
            const id = +projectTab.dataset.id;
            project.selectProject(id);

            const projectsArr = project.getProjects();
            
            for (let i = 0; i < projectsArr.length; i++) {
                if (projectsArr[i].id === selectedProjectId) {
                    showTaskUI(project, projectsArr[i].name);
                    // HandleTaskUI(project, projectsArr[i].name);
                }
            }

        });
        
    });
}


HandleProjectUI();
HandleTaskUI(project);

// HandleTaskUI(inbox, 'Inbox');
// showTaskUI(inbox, 'Inbox');

// const inboxBtn = document.querySelector('#inbox');
// inboxBtn.addEventListener('click', e => {
//     e.preventDefault();

//     HandleTaskUI(inbox, 'Inbox');
//     showTaskUI(inbox, 'Inbox');
// });