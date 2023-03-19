import Inbox from "./inbox";
import Item from "./item";

export default function HandleInbox() {
    const inbox = new Inbox();

    const createItem = (title, description, dueDate, priority) => {
        const item = new Item(title, description, dueDate, priority);
        inbox.addItem(item);
        Item.id++;
    }

    const getItems = () => {
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