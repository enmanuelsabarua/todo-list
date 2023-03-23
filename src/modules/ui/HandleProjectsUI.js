import HandleProjects, { selectedProjectId }from '../HandleProjects';
import { HandleTaskUI, showTaskUI } from './HandleTaskUI';

const project = HandleProjects();

function HandleProjectUI() {
    project.createProject('Inbox');
    document.querySelector('#inbox').dataset.id = 0;


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
        
        const lastProject = [...project.getProjects()];
        project.selectProject(lastProject.length - 1);
        const projectName = lastProject[lastProject.length - 1].name;
        
        showProjectUI();
        HandleChangeProject();
        deleteProject();
        showTaskUI(project, projectName);
        

        // Remove the selected-project class from the other projects
        console.log(project.getProjects());
        if (selectedProjectId !== 0) {
            const lastProjectElement = document.querySelector(`[data-id="${lastProject[lastProject.length - 2].id}"]`);
            lastProjectElement.classList.remove('selected-project');
        } 

        const projectsDOM = document.querySelectorAll('.project');                
        projectsDOM.forEach(p => p.classList.remove('selected-project'));
        
        console.log(selectedProjectId);
        const lastProjectElement = document.querySelector(`[data-id="${lastProject[lastProject.length - 1].id}"]`);
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

            project.selectProject(0);
            showTaskUI(project, 'Inbox');

            project.deleteProject(id);
            projectDiv.remove();

            console.log(project.getProjects());

            e.stopPropagation();
        });
    })
}

function showProjectUI() {

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
            e.preventDefault();
            
            projectsDOM.forEach(p => p.classList.remove('selected-project'));
            
            projectTab.classList.add('selected-project');
            const id = +projectTab.dataset.id;
            project.selectProject(id);

            const projectsArr = project.getProjects();
            
            for (let i = 0; i < projectsArr.length; i++) {
                if (projectsArr[i].id === selectedProjectId) {
                    project.selectProject(i);
                    showTaskUI(project, projectsArr[i].name);
                }
            }

        });
        
    });
}


export {
    HandleProjectUI,
    HandleTaskUI,
    project,
}
