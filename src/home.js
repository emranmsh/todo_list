const homeDisplay= function(){
const display= document.getElementById("content");
let string1 ="Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear!" +
"This is exactly the kind of place that I like to return to again and again. -Goldilocks";
let string2="Hours \nSunday: 8am - 8pm \nMonday: 6am - 6pm\nTuesday: 6am - 6pm\nWednesday: 6am - 6pm\nThursday: 6am - 10pm\nFriday: 6am - 10pm\nSaturday: 8am - 10pm";
let string3="Location: 123 Forest Drive, Forestville, Maine";
const contentArr = [string1, string2, string3];
function render(){
    display.textContent="";
        let temp;
        for(let i=0; i<contentArr.length; i++){
            temp= document.createElement("div"); 
            temp.textContent=contentArr[i];
            display.appendChild(temp);
        }
}
return {render}
}();

export default homeDisplay;