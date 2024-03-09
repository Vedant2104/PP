let taskadder = document.getElementById("addtask");
let taskinput = document.getElementById("ht");
let box = document.getElementById("box");

function createtask(){
    let newtask=taskinput.cloneNode(true);
    newtask.setAttribute("class","task");

    box.insertBefore(newtask,taskadder);
}
function rem_task(elem){
    var element = elem.parentNode;
    //this.parentNode.parentNode.removeChild(this.parentNode);
    element.remove();
}

taskadder.addEventListener("click",()=>{
    createtask();
})