"use strict";

import * as datas from "./storage.js";
/*************VARIABLES  ***********/
const form = document.querySelector("#task-form");
const table = "todolist";
let data = {
    LVL: document.querySelector("#lvl"),
    NAME: document.querySelector("#name"),
    DESC: document.querySelector("#description"),
};
const DISPLAY = document.querySelector("#todo");
const ASIDE = {
    container: document.querySelector("#task-details"),
    h3: document.querySelector("#task-details h3"),
    p: document.querySelector("#task-details p"),
    a: document.querySelector("#task-details a"),
};
// let nameJSON = JSON.stringify(name);
// console.log(nameJSON);


/**************FONCTIONS *************/
// J'ajoute le formulaire au click du "+"
function addForm(){
    form.classList.remove("hide");
    form.dataset.mode = "add";
    form.reset();
}

function save(e){
    e.preventDefault();
    const list = datas.load(table);
    const task = {
        lvl: data.LVL.value,
        name: data.NAME.value,
        desc: data.DESC.value,
    };
    if (form.dataset.mode === "add"){
    list.push(task);
    } else {
        const index = ASIDE.a.dataset.index;
        list[index] = task;
    }
    //Ajouter le tableau dans le localstorage
    localStorage.setItem(table, JSON.stringify(list));
    //fermer le formulaire
    form.classList.add("hide");
    //afficher la liste des taches
    displayTasks();
}

function displayTasks(){
    const list = datas.load(table);
    DISPLAY.innerHTML = "";
    const UL = document.createElement("ul");
    list.forEach((task, index) => {
        const LI = document.createElement("li");
        LI.textContent = task.name + " - " + task.lvl + "%"
        LI.dataset.index = index;
        LI.addEventListener("click", showDetails);
        UL.appendChild(LI);
    });
    DISPLAY.appendChild(UL);
    }

function showDetails(){
    form.classList.add("hide");
        const list = datas.load(table);
        const index = this.dataset.index;
        const task = list[index];

        ASIDE.h3.textContent = task.name + " - " + task.lvl + "%";
        ASIDE.p.textContent = task.desc;
        ASIDE.a.dataset.index = index;
        ASIDE.container.classList.remove("hide");
    }

function editTask(e){
    e.preventDefault();
    const list = datas.load(table);
    const index = this.dataset.index;
    const task = list[index];
    
    data.LVL.value = task.lvl;
    data.NAME.value = task.name;
    data.DESC.value = task.desc;
    form.classList.remove("hide");
    form.dataset.mode ="edit";
    ASIDE.container.classList.add("hide");

    }
function removeAll(){
    localStorage.setItem(table, JSON.stringify([]));
    displayTasks();
}



/***********CODE PRINCIPAL **********/
displayTasks();
document.querySelector("#add-task").addEventListener("click", addForm);
form.addEventListener("submit", save);
ASIDE.a.addEventListener("click", editTask);
document.querySelector("#clear-todo").addEventListener("click", removeAll);


