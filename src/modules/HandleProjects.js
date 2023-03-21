import Project from "./project";
import Item from "./item";

let selectedProjectId = -1;
export default function HandleProjects() {
    const projects = [];

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

    const createItem = (title, description, dueDate, priority) => {
        const item = new Item(title, description, dueDate, priority);
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
        selectedProjectId,
        createItem,
        getItems,
        deleteItem,
        changeCheckStatus,
    }
}

export { selectedProjectId };