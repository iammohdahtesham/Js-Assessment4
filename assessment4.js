// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 3
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const animals = [ 
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' } 
  ]; 

function printAnimals(i) { //PASSING THE INDEX
this.print = function() { 
console.log('#' + i + ' ' + this.species + ': ' + this.name); 
} 
this.print(); 
}
for(let value in animals){  //USING FOR IN LOOP TO ITERATE AND CALL THE FUNCTION AGAIN 
  printAnimals.call(animals[value],value)  
}
 //OUTPUT = #0 Lion: King
//          #1 Whale: Queen 


 //Explanation - 
// We used the call() explicitly to get the objects of the variable  animals which are in the array then for in loop help us to iterate over the elements of the animals which get the values of the animals that passed into the function and print lion king and whale queen with the index of the elements


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// QUESTION 8
// Create an object `calculator` with three methods: - `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively. - `sum()` returns the sum of saved values. - `mul()` multiplies saved values and returns the result.
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let calculation = {
     a : prompt("write first value : "),//USIND THE PROMPT TO TAKE THE FROM THE USERS 
     b : prompt("write second value: "),
    read(){
        return(this.a +this.b)
    },
    sum(){
        return(parseInt(this.a)+parseInt(this.b)) // CHANGING THE VALUE USING PARSEINT CAUSE THE PROMPT ALWAYS RETURN THE STRING VALUES
    },
    mult(){
        return(parseInt(this.a*this.b)) 
    }
}
console.log(calculation.read())  
console.log(calculation.sum())
console.log(calculation.mult()) // EXECUTION THE OBJECT
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//QUESTION 11
//Write a JavaScript program to create a clock.
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<!DOCTYPE html>    <!--IMPLEMENTING THE HTML -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>clock</title>
    <style></style>
</head>
<body>

    <h1>Digital clock using js</h1>
    <div id = "clock" onload="currentTime()"></div>
</body>
<script>function currentTime() {  // USING THE JS FOR LOGIC
    let date = new Date();  // INBUILD FUNCTION OF DATE
    let hour = date.getHours();   // GETTING HOURS
    let minute = date.getMinutes(); // GETTING TIME 
    let second = date.getSeconds(); // GETTING SECOND
    let session = "AM";  
  
    if(hour === 0){   //  
        hour = 12;
    }
    if(hour > 12){  // 
        hour = hour - 12;
        session = "PM";
     }
  
     hour = (hour < 10) ? "0" + hour : hour;   // IF THE HOUR IS SINGLE NUMBER THEN ADD THE 0 IN STARTING 
     minute = (minute < 10) ? "0" + minute : minute;  // IF THE MINUTE  IS SINGLE NUMBER THEN ADD THE 0 IN STARTING 
     second = (second < 10) ? "0" + second : second;  // IF THE SECOND  IS SINGLE NUMBER THEN ADD THE 0 IN STARTING 
      
     let time = hour + ":" + minute + ":" + second + " " + session;  
  
    document.getElementById("clock").innerText = time;  // PASSING THE TIME INTO THE HTML
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  currentTime();</script>
</html>
</html>

// Link working of code
// https://replit.com/@MohdAhtesham/clock#clock1.jpg

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//QUESTION 12
// Make the following code work
//[1, 2, 3, 4, 5, 6].shuffle();
//---------------------------------------------------------------------------------------------------------------------------------------------
Array.prototype.shuffle = function() {  //
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));  // Using math.random to get the random value and Math.floor to change into the nearest interger 
      [this[i], this[j]] = [this[j], this[i]];  // shuffling the numbers 
    }
  console.log(this);
  };
  

  [1, 2, 3, 4, 5, 6].shuffle();
// OUTPUT = [3,2,4,6,1,5]


// Explanation  -  We add a function into the array prototype name as shuffle where we passed the function into and using as the inbuild function first we iterate the element using this to get the length of the array as the this is pointing towards the object which here is the object 
