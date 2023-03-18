export default class Item {
    static id = 0;

    constructor(title, description, dueDate, priority, notes, checkList) {
        this.id = Item.id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checkList = checkList;
    }

    changeCheck() {
        this.checkList = this.checkList ? false : true;
    }
}