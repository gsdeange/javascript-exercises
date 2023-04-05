const findTheOldest = function(people) {
   let ages = people.map(person => {
      if(person.yearOfDeath){
         return {name: person.name, age: (person.yearOfDeath - person.yearOfBirth)};
      }
      let currentYear = new Date().getFullYear();
      return {person: person.name, age: (currentYear - person.yearOfBirth)};
   });

   let oldestAge = 0;
   let oldest = {};
   for(i = 0; i < ages.length; i++){
      if(ages[i].age > oldestAge){
         oldest = ages[i];
      }
   }
   return 
};

// Do not edit below this line
module.exports = findTheOldest;
