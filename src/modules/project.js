import Inbox from "./inbox";

export default class Project extends Inbox {
    static id = 0;

    constructor(name) {
        super();
        this.id = Project.id;
        this.name = name;
    }
}