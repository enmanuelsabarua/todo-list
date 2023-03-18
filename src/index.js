import Inbox from "./modules/inbox";
import Item from "./modules/item";
import Project from "./modules/project";

import './style.css';

function HandleInbox() {
    const inbox = new Inbox();

    const createItem = (title, description, dueDate, priority, notes, checkList) => {
        const item = new Item(title, description, dueDate, priority, notes, checkList);
        inbox.addItem(item);
    }

    const getItems = () => {
        console.log(inbox.getItems());
        return inbox.getItems();
    }

    const deleteItem = (id) => {
        inbox.deleteItem(id);
    }

    const changeCheckStatus = (id) => {
        const items = inbox.getItems();

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].changeCheck();
            }
        }
    }

    return { createItem, getItems, deleteItem, changeCheckStatus }
}


const inbox = HandleInbox();
// inbox.createItem(1, "Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
// inbox.createItem(2, "Barrer", "Hacer la tarea", "04/01/2023", 4, "notas", false);
// inbox.getItems();
// inbox.changeCheckStatus(1);


function HandleProjects() {
    const projects = [];
    let selectedProjectId = 0;

    const createProject = (name) => {
        const project = new Project(name)
        Project.id++;
        projects.push(project);
    }

    const deleteProject = (id) => {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].id === id) {
                projects.splice(i, 1);
            }
        }
    }

    const getProjects = () => {
        console.log(projects);
        return projects;
    }

    const selectProject = (id) => {
        selectedProjectId = id;
    }

    const createItem = (title, description, dueDate, priority, notes, checkList) => {
        const item = new Item(title, description, dueDate, priority, notes, checkList);
        Item.id++;
        projects[selectedProjectId].addItem(item);
    }

    const getItems = () => {
        console.log(projects[selectedProjectId].getItems());
        return projects[selectedProjectId].getItems();
    }

    const deleteItem = (id) => {
        projects[selectedProjectId].deleteItem(id);
    }

    const changeCheckStatus = (id) => {
        const items = projects[selectedProjectId].getItems();

        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                items[i].changeCheck();
            }
        }
    }

    return { 
        createProject, 
        deleteProject, 
        getProjects, 
        selectProject, 
        createItem,
        getItems,
        deleteItem,
        changeCheckStatus,
    }
}

const projects = HandleProjects();
projects.createProject("Programming");
projects.createProject("Goals");
projects.selectProject(0);
projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
projects.selectProject(1);
projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
projects.getProjects();

export {
    HandleInbox,
    HandleProjects
};