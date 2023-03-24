import Project from "./project";
import Item from "./item";

if(!JSON.parse(localStorage.getItem('selectedProjectId'))) {
    let selectedProjectId = 0;
    localStorage.setItem('selectedProjectId', JSON.stringify(selectedProjectId));
} else {
    let selectedProjectId = 0;
    localStorage.setItem('selectedProjectId', JSON.stringify(selectedProjectId));
}

export default function HandleProjects() {
    let projects = [];

    const setProjects = (project) => {
        projects = project;
    }

    const createProject = (name) => {
        const project = new Project(name);
        localStorage.setItem('id', +localStorage.getItem('id') + 1);
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const deleteProject = (id) => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id == id) {
                projects.splice(i, 1);
            }
        }

        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const getProjects = () => {
        return projects;
    }

    const getName = () => {
        return projects[JSON.parse(localStorage.getItem('selectedProjectId'))].name;
    }

    const selectProject = (id) => {
        localStorage.setItem('selectedProjectId', JSON.stringify(id));
    }

    const createItem = (title, description, dueDate, priority) => {
        const item = new Item(title, description, dueDate, priority);
        Item.id++;
        projects[JSON.parse(localStorage.getItem('selectedProjectId'))].items.push(item);
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const getItems = () => {
        return projects[JSON.parse(localStorage.getItem('selectedProjectId'))].items;
    }

    const deleteItem = (id) => {
        for (let i = 0; i < projects[JSON.parse(localStorage.getItem('selectedProjectId'))].items.length; i++) {
            if (projects[JSON.parse(localStorage.getItem('selectedProjectId'))].items[i].id === id) {
                projects[JSON.parse(localStorage.getItem('selectedProjectId'))].items.splice(i, 1);
            }
        }
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const changeCheckStatus = (id) => {
        const items = projects[JSON.parse(localStorage.getItem('selectedProjectId'))].getItems();

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].changeCheck();
            }
        }
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    return { 
        setProjects,
        createProject, 
        deleteProject, 
        getProjects, 
        getName,
        selectProject, 
        createItem,
        getItems,
        deleteItem,
        changeCheckStatus,
    }
}