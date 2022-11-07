// importing connection
const {username,password,namePat, emailPat} = require("../Models/models");

try {
    username
} catch (error) {
console.log(error.message);
console.log(error.status);   
}


try {
    password
} catch (error) {
console.log(error.message);
console.log(error.status);   
}

try {
    namePat
} catch (error) {
console.log(error.message);
console.log(error.status);   
}

try {
    emailPat
} catch (error) {
console.log(error.message);
console.log(error.status);   
}