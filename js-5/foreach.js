 const coding = ['JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'PHP', 'Swift', 'Go', 'Kotlin'];

 coding.forEach(function (lang) {
      console.log(lang);
 })

 coding.forEach((item)=>{
  console.log(item);
 })

//  foreach is used to iterate over the array and it is used to execute the same code for each element of the array

//  callback function is used to execute the same code for each element of the array after a specified interval of time or when an event

// we can access the objects inside an array using the foreach loop

const myCoding = [
     {name: "John", language: "JS"},
     {name: "Jane", language: "Python"},
     {name: "Peter", language: "Java"},
]
myCoding.forEach((itr)=>{
     console.log(itr.name + " knows " + itr.language);
})