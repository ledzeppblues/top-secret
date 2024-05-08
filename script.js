let who = prompt("Who be there? Hint - It be your first name in lowercase")

if (who === "tushar") {
    let login = prompt("Password! Hint - Again same as username");

    if (login === "tushar") {
    alert("You're gay")


 } else if (login === null) {
    alert("canceled")

 } else {
    alert("wrong password")

}

 } else if (who === null) {
    alert("canceled");

 } else {
    alert ("who is it?")
 }