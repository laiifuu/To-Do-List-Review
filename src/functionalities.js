import updateStatus from './status.js';

export default class Tasks {
  constructor() {
    this.tasksList = [];
  }

  removeTask(index) {
    this.tasksList.splice(index, 1);
    this.tasksList.forEach((task, i) => {
      task.index = i;
    });
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
    this.updateDisplay();
  }

  createTaskElement(taskObj) {
    const item = document.createElement('li');
    item.classList.add('list-item');
    item.setAttribute('data-index', taskObj.index);
    item.innerHTML = `<button><i></i></button>
    <input type="text" value="${taskObj.description}" class="task-input">
    <i class="fa-solid fa-ellipsis-vertical trash-can"></i>`;
    const checkbox = item.querySelector('button>i');

    if (taskObj.completed === false) {
      checkbox.classList.add('fa-regular');
      checkbox.classList.add('fa-square');
      checkbox.classList.add('checkbox');

      const taskInput = item.querySelector('.task-input');
      const trashCan = item.querySelector('.trash-can');

      taskInput.addEventListener('focus', () => {
        item.style.backgroundColor = 'rgb(205, 187, 205)';
        trashCan.classList.remove('fa-solid');
        trashCan.classList.remove('fa-ellipsis-vertical');
        trashCan.classList.add('fa-regular');
        trashCan.classList.add('fa-trash-can');
        trashCan.style.cursor = 'pointer';
        trashCan.addEventListener('click', () => {
          const index = parseInt(trashCan.parentElement.getAttribute('data-index'), 10);
          this.removeTask(index);
          trashCan.parentElement.remove();
        });
      });

      taskInput.addEventListener('focusout', () => {
        item.style.backgroundColor = 'white';
        trashCan.classList.add('fa-solid');
        trashCan.classList.add('fa-ellipsis-vertical');
        trashCan.classList.remove('fa-regular');
        trashCan.classList.remove('fa-trash-can');
        trashCan.style.cursor = 'move';
      });

      taskInput.addEventListener('keypress', (e) => {
        if (!e) e = window.event;
        const keyCode = e.code || e.key;
        if (keyCode === 'Enter') {
          e.preventDefault();
          const index = taskInput.parentElement.getAttribute('data-index');
          this.tasksList[index].description = taskInput.value;
          localStorage.setItem('tasks', JSON.stringify(this.tasksList));
        }
      });

      taskInput.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          e.target.blur();
        }
      });
    } else {
      checkbox.classList.add('fa-regular');
      checkbox.classList.add('fa-square-check');
      checkbox.classList.add('checkbox');
      checkbox.classList.add('checkbox-ticked');

      const span = document.createElement('span');
      span.innerHTML = `${taskObj.description}`;
      span.classList.add('task-span');
      const input = item.querySelector('input');
      item.replaceChild(span, input);
    }

    const index = parseInt(item.getAttribute('data-index'), 10);
    checkbox.addEventListener('click', () => {
      updateStatus(index, this.tasksList);
      this.updateDisplay();
    });

    return item;
  }

  addTask(description) {
    const taskObj = {
      description,
      completed: false,
      index: this.tasksList.length,
    };
    this.tasksList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
  }

  editTask(newDesc, index) {
    this.tasksList[index].description = newDesc;
    localStorage.setItem('tasks', JSON.stringify(this.tasksList));
  }

  updateDisplay() {
    const tasks = document.querySelector('ul');
    tasks.innerHTML = '';
    for (let i = 0; i < this.tasksList.length; i += 1) {
      tasks.append(this.createTaskElement(this.tasksList[i]));
    }
    this.updateClearButton();
  }

  updateClearButton() {
    const clearBtn = document.querySelector('.clear-btn>button');
    let itemsCompleted = false;
    this.tasksList.forEach((item) => {
      if (item.completed === true) {
        itemsCompleted = true;
      }
    });

    clearBtn.disabled = !itemsCompleted;
  }
}