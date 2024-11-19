import { ProjectObject, test} from "./projectObject";

const projectModule = function(){
const projectBoard= document.querySelector(".project-board");
const taskAdd =document.querySelector(".add-t");
const taskDel =document.querySelector(".del-t");
let projPosition=0;
let projectList=[];
projectList.push(new ProjectObject("Default"));
render();
projectBoard.childNodes[projPosition].classList.add("selected");


taskAdd.addEventListener("click", addBtnHandler);

function addBtnHandler(){
    const popup= document.querySelector("dialog");
    const submitBtn=document.querySelector(".submit");
    const closeBtn=document.querySelector(".close");
    popup.showModal();
    submitBtn.addEventListener("click", submitData);
    closeBtn.addEventListener("click",closeForm);
    

    function submitData(){
        const name=document.getElementById("title");
        const desc=document.getElementById("description");
        const due=document.getElementById("due-date");
        const importance=document.getElementById("priority");
        const note=document.getElementById("note-c");
        if(name.value!="" && desc.value!="" && due.value!=""){
            projectList[projPosition].addTask(name.value,desc.value,due.value,importance.value,note.value);
            closeForm();
        }
    }

    function closeForm(){
        const form=document.querySelector("form");
        popup.close();
        form.reset();
        submitBtn.removeEventListener("click", submitData);
        closeBtn.removeEventListener("click", closeForm);
       
    }
}





taskDel.addEventListener("click",()=>{
    projectList[projPosition].deleteTask(prompt("Enter task number to delete")-1);
    /*ProjectObject.deleteTask()*/});



function addProject(){
    let newProject=prompt();
    if(newProject!=""){
        projectList.push(new ProjectObject(newProject));
        render();
        projectBoard.childNodes[projectList.length-1].classList.add("selected");
        projPosition=projectList.length-1;
    }
}

function deleteProject(){
    let index=projPosition;
    if(index>0)
        projectList.splice(index, 1);
    projPosition=projectList.length-1;
    render();
    projectBoard.childNodes[projPosition].classList.add("selected"); 
      
}

function render(){
    projectBoard.textContent="";
    projectList.forEach((projObject)=>{
        const folder=document.createElement("div");
        folder.textContent=projObject.name;
        projectBoard.appendChild(folder);
        folder.addEventListener("click", projectPosition);
        projObject.render();});
        
}
 
function projectPosition(e){
    render();
    let newClick=e.target.innerHTML;
    let index=projPosition;
    index=-1;
    for(let i=0; i<projectList.length; i++){
        if(projectList[i].name==newClick){
            index=i;
            break;
        }
    }
    projectBoard.childNodes[index].classList.add("selected"); 
    projPosition=index;
    projectList[projPosition].render();
}

return {addProject, deleteProject}}();

export {projectModule, test};