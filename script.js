let who = prompt("Who be there? Hint - It be your first name in lowercase")

if (who === "ewa") {
    let login = prompt("Password Hint Fill in the blank - chest ___ are awesome - please write full sentence ");

    if (login === "chest hair are awesome") {
    alert("INDEED THEY ARE, CURLY AND FLUFFY")


 } else if (login === null) {
    alert("canceled")

 } else {
    alert("wrong password")

}

 } else if (who === null) {
    alert("canceled");

 } else {
    alert ("i dont know you")
 }