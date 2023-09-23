const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Adds the cross icon in the span tag
        li.appendChild(span); // Displays the cross icon
    }
    inputBox.value = "";
    saveData(); // Saves new changes
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") { // checks where the user has clicked
        e.target.classList.toggle("checked"); // If they clicked on LI, it adds the checked 
        //classname or remove it ifalready there
        saveData(); // Saves new changes
    }
    else if(e.target.tagName === "SPAN") { // If span, it will remove the parent element
        // and delete the task
        e.target.parentElement.remove();
        saveData(); //Save new changes after deleting task
    }
}, false);

// Save data in the website
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Save data whenver you close and open the website/app
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();



