function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}

// ф-ция добавления 
function add() {
    var task = document.getElementById('task').value;
 
    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
    reset();
 
    return false;

}

 
// show вона ж як render
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>'
                                  +'<button class="edit" id="' + i  + '">edit</button></li>'
                                  +'<button class="done" id="' + i  + '">Done</button></li>';
    };

    html += '</ul>';
    
    document.getElementById('todos').innerHTML = html;

    // функционал ф-ції удаления
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
    // функционал ф-ції edit
    var buttons = document.getElementsByClassName('edit');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', edit);
    };
    // функціонал ф-ції Done
    var buttons = document.getElementsByClassName('done');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', done);
    };
}
 
document.getElementById('add').addEventListener('click', add);
show();


// ф-ция удаления
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}


// ф-ция редактирования задач 
function edit() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1, "спроба змінити текст");
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
}

/* ф-ция закреслення. я розумію, що працюючи з масивом
 закреслень не буде, тут потрібно event використувавати 
 */
function done() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1, "закреслення");
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
}

// ф-ция обновить страницу
function reset() { 
    location.reload();

}

// ф-ция сортировки тасков в порядке А-Я
function sort() {
    var todos = get_todos();
    todos.sort();
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
}

// ф-ция сортировки тасков в обратном порядке Я-А
function reverse() {
    var todos = get_todos();
    todos.reverse();
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
}
