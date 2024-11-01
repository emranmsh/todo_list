import { TaskObject, render } from "./tasks";
//import {*} from "date-fns";

function ProjectObject(name){
    const taskBoard= document.querySelector(".task-board");
    const taskList =[];
    this.name=name; 
    this.addTask=function(title, description, dueDate, priority, notes){
        //modal popup
        let tempTask= new TaskObject(title, description, dueDate, priority, notes);
        taskList.push(tempTask);
        this.render();
    };

    this.render=function(){ 
        taskBoard.textContent="";
        taskList.forEach((taskObject, index)=>{
            taskBoard.appendChild(render(taskObject, index));
             
        });
    };
 
    this.deleteTask=function(position){
        if(position!=undefined){
        taskList.splice(position, 1);
        this.render();
    }
    alert(taskList.length);
    }

    this.order=function(){
        //order in terms of deadline
    }

    this.taskForm=function(){

    }
}

function test(){
    //console.log("test");
}

export {ProjectObject, test};
