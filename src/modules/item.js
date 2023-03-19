export default class Item {
    static id = 0;

    constructor(title, description, dueDate, priority) {
        this.id = Item.id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checkList = false;
    }

    changeCheck() {
        this.checkList = this.checkList ? false : true;
    }
}