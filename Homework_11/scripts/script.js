// 1.Создать в html форму с тремя инпутами (имя, фамилия, возраст). Написать скрипт, который при отправке формы выводит собранные данные в консоль.

// const form = document.getElementById("form");

// form.addEventListener("submit", function (event){
    // event.preventDefault();

    // const name = document.getElementById("name").value;
    // const surname = document.getElementById("surname").value;
    // const age = document.getElementById("age").value

    // console.log({name, surname, age});
    // document.getElementById("name").value = "";
    // document.getElementById("surname").value = "";
    // document.getElementById("age").value = "";
// });

//2.Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// const form = document.getElementById("form");

// const users =[];

// form.addEventListener("submit", function (event){
    // event.preventDefault();

    // const name = document.getElementById("name").value;
    // const surname = document.getElementById("surname").value;
   // const age = document.getElementById("age").value

    // users.push({name, surname, age});
    // console.log({users});

    // document.getElementById("name").value = "";
    // document.getElementById("surname").value = "";
    // document.getElementById("age").value = "";
// });

//3.Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. Настроить rerender при добавлении нового пользователя.

// const form = document.getElementById("form");

// function rerender({name, surname, age}) {
    // const info = document.createElement("p")
    // info.textContent = `${name}, ${surname}, ${age}`;
    // container.append(info);
// }

// const users =[];

// form.addEventListener("submit", function (event){
    // event.preventDefault();

    // const name = document.getElementById("name").value;
    // const surname = document.getElementById("surname").value;
    // const age = document.getElementById("age").value

    // users.push({name, surname, age});
    // console.log({users});

    // document.getElementById("name").value = "";
    // document.getElementById("surname").value = "";
    // document.getElementById("age").value = "";
// });

//4.Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.

const form = document.getElementById("form");

function rerender({name, surname, age}) {
    const info = document.createElement("p")
    info.textContent = `${name}, ${surname}, ${age}`;
    container.append(info);
}

const users =[];


form.addEventListener("submit", function (event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const age = document.getElementById("age").value;

   
    users.push({name, surname, age});
    console.log({users});


    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
})


function removeUser(id) {
    users.splice(users.findIndex(user => user.id === id), 1);
    render ()
}

function render() {
    const cardsContainer = document.getElementById(`cards`);
    cardsContainer.innerHTML = ``


users.forEach(user => {
    const card = document.createElement(`div`);
    card.innerText = `ID: ${user.id}, Name: ${user.name}, Surname: ${surname}, Age: ${age}`;
    card.addEventListener(`dblclick`, () => removeUser(user.id));
    cardsContainer.appendChild(card);

});
};
render();
