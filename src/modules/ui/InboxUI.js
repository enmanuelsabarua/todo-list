import HandleInbox from '../HandleInbox';
import { HandleTaskUI, showTaskUI } from './HandleTaskUI';


//  inbox.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4);
//  inbox.createItem(2, "Barrer", "Hacer la tarea", "04/01/2023", 4, "notas", false);
//  inbox.getItems();
//  inbox.changeCheckStatus(1);

// const projects = HandleProjects();
// projects.createProject("Programming");
// projects.createProject("Goals");
// projects.selectProject(0);
// projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
// projects.selectProject(1);
// projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
// projects.createItem("Tarea", "Hacer la tarea", "04/01/2023", 4, "notas", false);
// projects.getProjects();
const inbox = HandleInbox();

export {
    inbox,
    HandleTaskUI,
    showTaskUI,
}