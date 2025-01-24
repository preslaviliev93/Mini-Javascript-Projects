document.addEventListener("DOMContentLoaded", function(){
    const todoInput = document.getElementById("todo-input");
    const addTask = document.getElementById("add-task-btn");
    const taskList = document.getElementById("todo-list");


    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

    tasks.forEach(element => {
        renderTask(element);
    });

    addTask.addEventListener('click', function(){
        let taskText = todoInput.value.trim()
        if (taskText === "") return;
        
        
        // Creating properties for the tasks
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }

        tasks.push(newTask)
        saveTasks()

        // Auto add
        renderTask(newTask)


        todoInput.value = ""  // Clearing the input field after successful add
        console.log(tasks)
    });


    function renderTask(task){
        // console.log(task);
        const li = document.createElement('li')
        if(task.completed){
            li.classList.add('completed')
        }
        li.setAttribute('data-id', task.id)
        li.innerHTML = `
        <span>${task.text}</span>
        <button>Delete</button>
        `
        li.addEventListener('click',function(event){
            if(event.target.tagName === "BUTTON"){
                return;
            }
            task.completed = !task.completed
            li.classList.toggle('complete')
            saveTasks();
        })

        li.querySelector('button').addEventListener('click', function(event){
            event.stopPropagation; //prevent toggle from firing
            tasks = tasks.filter(t => t.id !== t.id)
            li.remove();
            saveTasks();
        })
        taskList.appendChild(li)
    }


    // Add tasks to the local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
})