// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterButtons = document.querySelectorAll('.filter-btn');

// Load tasks or initialize
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleTodoClick);
filterButtons.forEach(btn => btn.addEventListener('click', e => renderTasksFiltered(e.target.dataset.filter)));

// Initial render
renderTasksFiltered('all');

// --- Functions ---

// Add a new task
function addTodo(e) {
    e.preventDefault();
    const text = todoInput.value.trim();
    if (!text) return;

    tasks.push({
        id: Math.random().toString(36).substr(2, 9),
        text,
        completed: false,
        deleted: false
    });

    saveAndRender();
    todoInput.value = '';
}

// Handle complete and delete buttons
function handleTodoClick(e) {
    const button = e.target.closest('button');
    if (!button) return;

    const li = button.closest('li');
    const task = tasks.find(t => t.id === li.dataset.id);

    if (button.classList.contains('complete-btn')) task.completed = !task.completed;
    if (button.classList.contains('trash-btn')) task.deleted = true;

    saveAndRender();
}

// Render tasks with optional filter
function renderTasksFiltered(filter) {
    todoList.innerHTML = '';

    const filtered = tasks.filter(t => {
        if (filter === 'completed') return t.completed && !t.deleted;
        if (filter === 'undone') return !t.completed && !t.deleted;
        if (filter === 'deleted') return t.deleted;
        return !t.deleted; // 'all' default
    });

    filtered.forEach(task => {
        todoList.appendChild(createTodoElement(task));
    });
}

// Create single todo DOM element
function createTodoElement(task) {
    const li = document.createElement('li');
    li.className = 'todo' + (task.completed ? ' completed' : '');
    li.dataset.id = task.id;

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = task.text;
    li.appendChild(span);

    const div = document.createElement('div');
    div.className = 'todo-buttons';
    div.innerHTML = `
        <button class="complete-btn"><img src="check.png" alt="check"></button>
        <button class="trash-btn"><img src="trash.png" alt="trash"></button>
    `;
    li.appendChild(div);

    return li;
}

// Save to localStorage and render
function saveAndRender() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasksFiltered('all');
}
