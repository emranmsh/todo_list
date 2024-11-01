import "./style.css"; 
import { projectModule, test} from "./project";
//import { ProjectObject } from "./projectObject";

const projAdd =document.querySelector(".add-p");
const projDel =document.querySelector(".del-p");


projAdd.addEventListener("click", ()=>projectModule.addProject());
projDel.addEventListener("click", ()=>projectModule.deleteProject());


test();