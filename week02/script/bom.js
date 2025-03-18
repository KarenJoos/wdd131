const input = document.querySelector('favchap');
const button = document.querySelector('button');
const list = document.querySelector('bom.html');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = "❌";

li.append(deleteButton);

list.append(li)

button.addEventListener('click', function () {
    if (input.value.trim() !== '') { }
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        input.value = '';

        deleteButton.textContent = "❌";
    
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);

        list.append(li)
});


