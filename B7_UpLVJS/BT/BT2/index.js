class ToDo {
    constructor(date){
        this.date = date;
        this.works = []
    }
    addWork(work){
        this.works.push(work);
    }
}

class ToDoList {
    constructor() {
        this.todos = [];
    }

    addToDo(todo) {
        if(this.todos.some(t => t.date === todo.date)){
            console.log("Có todo bị trùng ngày");
            return;
        }
        
        this.todos.push(todo)
    }
}


const todo1 = new ToDo("2023-03-20");
todo1.addWork("Study");
todo1.addWork("Play football");


const todo2 = new ToDo("2023-03-21");
todo2.addWork("Swimming");
todo2.addWork("Play video game");

const todo3 = new ToDo("2023-03-20");
todo3.addWork("Sing");
todo3.addWork("Walking");

const todoList = new ToDoList();
todoList.addToDo(todo1);
todoList.addToDo(todo2);
todoList.addToDo(todo3);

console.log("Tổng hợp các todos");
console.log(todoList);
console.log("Chi tiết từng todo");
for (const todo of todoList.todos) {
    console.log(todo.date);
    console.log(todo.works);
}