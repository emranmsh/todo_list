import { format, add } from "date-fns";
function TaskObject(title, description, dueDate, priority, notes){
    this.title=title;
    this.description=description; 
    this.date=format(new Date(dueDate), "dd/MM/yy");
    this.priority=priority;
    this.notes=notes;
   //alert(new Date(dueDate));
  
}

function render(object, index){
    const job=document.createElement("div");

    const heading= document.createElement("h3");
    heading.textContent=(index+1)+". Title: "+object.title;

    const desc=document.createElement("p");
    desc.textContent="Description: "+object.description;

    const due=document.createElement("p");
    due.textContent="Due Date: "+object.date;
    const importance= document.createElement("p");
    importance.textContent="Priority: "+object.priority;

    const note=document.createElement("input");
    note.value=object.notes;

 
    
    job.appendChild(heading);
    job.appendChild(desc);
    job.appendChild(due);
    job.appendChild(importance);
    job.appendChild(note); 
    return job;
}
export {TaskObject, render};