
const student = {
    name: "Ana Perez",
    semester: "2",
    admission: 2018
}

/*
    For this exercice we've to show in console all the object properties
    We could use a for in statement
*/

for (let prop in student){
    console.log(student[prop]) // This show the value
    console.log(prop) // This show the key

    let result = prop + ": " + student[prop]
    console.log(result) // This will show the same structure than the object
}