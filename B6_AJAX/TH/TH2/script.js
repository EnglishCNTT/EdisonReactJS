let todos = [];
const ulElement = document.querySelector("ul");
const backBtn = document.querySelector("#back");
const nextBtn = document.querySelector("#next");
const form = document.querySelector("form");
const save = document.getElementById("save");

let limit = 50;
let page = 1;
let globalIndex = null;
function getTodo(params) {
  axios
    .get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
    )
    .then(function (res) {
      todos = res.data;
      console.log(todos);
      render();
    });
}

getTodo({
  limit: limit,
  page: page,
});
backBtn.addEventListener("click", function () {
  handleBack();
});
nextBtn.addEventListener("click", function () {
  handleNext();
});

function handleBack() {
  if (page == 1) return;
  page = page - 1;
  getTodo({
    limit: limit,
    page: page,
  });

}

function handleNext() {
  if (page == 4) return;
  page = page + 1;

  getTodo({
    limit: limit,
    page: page,
  });
  console.log(page);
}

function addTodo(todo) {
  {
  }
  axios
    .post("https://jsonplaceholder.typicode.com/todos", todo)
    .then(function (res) {
      if (res.data) {
        getTodo();
      }
    });
}

function render() {
  const liElement = todos.map(function (todo) {
    return `
            <li>${todo.title}</li>
            <button id="edit">Edit</button>
            <button id="delete">Delete</button>
        `;
  });
  ulElement.innerHTML = liElement.join("");
  const deleteButtons = document.querySelectorAll("#delete");
  for (let index = 0; index < deleteButtons.length; index++) {
    const deleteButton = deleteButtons[index];
    deleteButton.addEventListener("click", function () {
      handleDelete(index);
    });
  }

  const editButtons = document.querySelectorAll("#edit");
  for (let index = 0; index < editButtons.length; index++) {
    const editButton = editButtons[index];
    editButton.addEventListener("click", function () {
      handleEdit(index);
      console.log("index", index);
      save.innerHTML = "Save";
    });
  }
}

function handleDelete(index) {
  axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${index}`)
    .then((res) => {
      if (res.data) getTodo();
    });
}

function handleEdit(index) {
  const input = document.querySelector("input");
  input.value = todos[index].title;
  globalIndex = index;
  render();
}

function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector("input");
  const value = input.value.trim();
  console.log("global index", globalIndex);
  if (globalIndex != null) {
    axios.put(
      `https://jsonplaceholder.typicode.com/todos/${globalIndex + 1}`,
      {
        completed: false,
        id: globalIndex + 1,
        title: value,
        userId: 1
      }
    ).then((res) => {
      if (res.data) getTodo();
    });
    input.value = "";
    save.innerHTML = "Add";
    globalIndex = null;
  } else {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todo)
      .then(function (res) {
        if (res.data) {
          getTodo();
        }
        input.value = "";
      });
  }
  getTodo()
  addTodo({
    userId: 1,
    title: value,
    completed: false,
  });
}

form.addEventListener("submit", handleSubmit);

getTodo();