const projectModule = function(){
const projectBoard= document.querySelector(".project-board");
var projectList=["Default"];

render();
function addProject(){
    var newProject=prompt();
    projectList.push(newProject);
    render();
    console.log(projectList);
   
}

function deleteProject(){
    var index=projectList.indexOf(prompt());
    if(index>0)
        projectList.splice(index, 1);
    render();
      
}

function render(){
    projectBoard.textContent="";
    projectList.forEach((text)=>{
        const folder=document.createElement("div");
        folder.textContent=text;
        projectBoard.appendChild(folder);});
     
}

return {addProject, deleteProject}}();

export {projectModule};