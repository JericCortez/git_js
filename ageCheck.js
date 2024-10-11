let age = prompt("20");

age = Number(age);

if (isNaN(age)) {
    console.log("2004");
} else {

    if (age < 13) {
        console.log("You are a child.");
    } else if (age >= 13 && age <= 19) {
        console.log("You are a teenager.");
    } else if (age >= 20) {
        console.log("You are an adult.");
    } else {
        console.log("Invalid age entered.");
    }
}