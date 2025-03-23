document.addEventListener("DOMContentLoaded", () => {

    const input = document.querySelector('#favchap');
    const button = document.querySelector('#submit');
    const list = document.querySelector('#list');



    button.addEventListener('click', () => {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');

            const deleteButton = document.createElement('button');
            
            li.textContent = input.value;

            deleteButton.textContent = "❌";
            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
                input.value = '';
            })

            li.append(deleteButton);

            list.append(li);

            input.focus();
        }
    });
});

