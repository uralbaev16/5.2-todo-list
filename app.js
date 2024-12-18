const collectionEl = document.querySelector(".collection")
const inputEl = document.querySelector(".text")
const formEl = document.querySelector(".form")

const TODOS = JSON.parse(localStorage.getItem("todos")) || []

function createTodo(data){
    while( collectionEl.firstChild){
        collectionEl.firstChild.remove()
    }
    data.forEach(item => {
        const liEl = document.createElement("li")
        liEl.className = "list"
        liEl.innerHTML = `
        <input ${item.status ? "checked" : ""} type="checkbox">
        <span>${item.title}</span>
        `
        collectionEl.appendChild(liEl)
    });
}

window.addEventListener("load", ()=>{
    createTodo(TODOS)
})

formEl.addEventListener("submit", e =>{
    e.preventDefault()
    let newTodo = {
        id: new Date().getTime(),
        title: inputEl.value,
        status: false
    }
    TODOS.push(newTodo)
    localStorage.setItem("todos", JSON.stringify(TODOS))
    createTodo(TODOS)
    textInputEl.value = ""
})