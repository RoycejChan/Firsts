    const addTask = () => {
let task = document.getElementById("input").value;
let text = document.createTextNode(task);
let h = document.createElement("li");

    if (task.length == 0) {
        alert("You must enter a tusk. Dumbass");
    }   
    
    h.appendChild(text);
    document.getElementById("list").appendChild(h);

    h.addEventListener('click', function(){
        let list = document.getElementById("list");
        list.removeChild(list.childNodes[0]);
    });
document.getElementById("input").value = "";    
}   
