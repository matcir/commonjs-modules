const myNames = require("./names");
const myHobbies = require("./hobbies");

const nameInfo = myNames("Matteo", "Cirillo");

function myPersonInfo() {
    const thisPerson = {
        fullName: nameInfo.firstName + " " + nameInfo.lastName,
        hobby: myHobbies("Music", "Gaming", "Sports")
    }

    return thisPerson;
}

console.log(myPersonInfo());