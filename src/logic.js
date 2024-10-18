import "./style.css"; 
import { projectModule } from "./project";
import { taskModule } from "./tasks";

const projAdd =document.querySelector(".add-p");
const projDel =document.querySelector(".del-p");
const taskAdd =document.querySelector(".add-t");
const taskDel =document.querySelector(".del-t");

projAdd.addEventListener("click", ()=>projectModule.addProject());
projDel.addEventListener("click", ()=>projectModule.deleteProject());

taskAdd.addEventListener("click", ()=>taskModule.addTask());
taskDel.addEventListener("click",()=>taskModule.deleteTask());