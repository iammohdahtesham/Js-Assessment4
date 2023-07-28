const animals = [ 
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' } 
  ]; 

function printAnimals(i) { 
this.print = function() { 
console.log('#' + i + ' ' + this.species + ': ' + this.name); 
} 
this.print(); 
}
for(let i in animals){
  printAnimals.call(animals[i],i)
}
