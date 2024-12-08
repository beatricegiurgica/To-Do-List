const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const itemstotal = document.getElementById("items-total");


function addTask(){
    if(inputBox.value.trim() === ''){
        alert("You must write something!");
    }
    else{
        let li = createListItem(inputBox.value)
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
        updateCounter();
    }
}

function createListItem(text){
    let li = document.createElement("li");
    li.textContent = text;
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    return li;
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
        updateCounter();
    }
});

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function deleteAllTasks(){
    listContainer.innerHTML = "";
    saveData();
    updateCounter();
}

function updateCounter(){
    itemstotal.textContent = listContainer.children.length;
}

function displayTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    updateCounter();
}

displayTask();