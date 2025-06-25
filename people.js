const myNames = require("./names");
const myHobbies = require("./hobbies");

const nameInfo = myNames("Matteo", "Cirillo");
const myHobby = myHobbies("Music", "Gaming", "Sports");

function myPersonInfo() {
    const thisPerson = {
        fullName: fullName.firstName + fullName.lastName,
        hobby: myHobby
    }

    return thisPerson;
}

console.log(myPersonInfo());