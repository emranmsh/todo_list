import "./style.css";
import menuDisplay from "./menu";
import homeDisplay from "./home";
import contactDisplay from "./contact";

const homeNav= document.getElementById("home");
const menuNav= document.getElementById("menu");
const contactNav= document.getElementById("contact");

homeNav.addEventListener("click", ()=>{homeDisplay.render()});
menuNav.addEventListener("click", ()=>{menuDisplay.render()});
contactNav.addEventListener("click", ()=>{contactDisplay.render()});
 
