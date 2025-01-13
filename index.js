function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;

    const completeButton = document.createElement('button');
    completeButton.textContent = '✔';
    completeButton.className = 'complete';
    completeButton.onclick = () => {
        li.classList.toggle('completed');
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.className = 'delete';
    deleteButton.onclick = () => {
        taskList.removeChild(li);
    };

    li.appendChild(textSpan);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}