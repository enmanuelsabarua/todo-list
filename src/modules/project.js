export default class Project {
  
    constructor(name) {
        if (!localStorage.getItem('id')) {
            this.id = 0;
            localStorage.setItem('id', 0);
        } else {
            this.id = localStorage.getItem('id');
        }
        this.name = name;
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    deleteItem(itemId) {
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].id === itemId) {
                this.items.splice(i, 1);
            }
        }
    }

    getItems() {
        return this.items;
    }

    getItem(id) {
        for (let i = 0; i < this.items.length; i++) {
            if(this.items[i].id === id) {
                return this.items[i];
            }
        }
    }
    
}