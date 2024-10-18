import { add } from "date-fns";

const taskModule = function(){
const taskBoard= document.querySelector(".task-board");
var taskList=[];

render();
function addTask(){
    var newTask=prompt();
    taskList.push(newTask);
    render();
    console.log(taskList);
   
}

function deleteTask(){
    var index=taskList.indexOf(prompt());
    if(index>=0)
        taskList.splice(index, 1);
    render();
      
}

function render(){
    taskBoard.textContent="";
    taskList.forEach((text)=>{
        const folder=document.createElement("div");
        folder.textContent=text;
        taskBoard.appendChild(folder);});
     
}

return {addTask, deleteTask}}();

export {taskModule};