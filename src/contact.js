const contactDisplay= function(){
    const display= document.getElementById("content");
    const string1="Mama Bear\nChef\n555-555-5554\ntotallyRealEmail@notFake.com";
    const string2="Papa Bear\nManager\n555-555-5555\nperfectlyRealEmail@notFake.com";
    const string3="Baby Bear\nWaiter\n555-555-5556\ntotallyRealEmail@notFake.com";
    const contentArr=[string1, string2, string3];
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
    
    export default contactDisplay;