const menuDisplay= function(){
    const display= document.getElementById("content");
    const contentArr=["Honey Tea\nA warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!\n$2",
        "Beary Tea\nA comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.\n$3",
        "Toast and Jam\nA slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.\n$1",
        "Fresh Fruit\nA small bowl of fresh fruit, whatever we find at the market for the day.\n$3",
        "Pancakes\nA stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.\n$4",
        "French Toast\nTwo slices of the best french toast you will ever eat, served with our locally sourced maple syrup.\n$5",
        "Beary Veggie Sandwich\nDo you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.\n$8",
        "BLT\nInterested in the Beary Veggie Sandwich but also love bacon? Say no more.\n$6",
        "Bagel and Lox\nOur house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.\n$8",
        "Honeycomb\nAre you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.\n$6",
        "Beary Bowl\nGet a big ole bowl of our berries! Side of honey is $1 extra.\n$7",
        "The Beary Best Porridge\nMade by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.\n$5"
    ];
    function render(){
    //add image
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
    
    export default menuDisplay;