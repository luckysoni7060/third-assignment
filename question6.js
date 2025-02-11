function validateUserInfo(name,email,age){

    if(typeof name !== 'string'){
        console.log("name should be string");   
    }

    if(typeof email !== 'string'){
        console.log("email should be string");
    }

    if(typeof age !== 'number'){
        console.log("age should be number");
    }
}

let userName = "mithun";
let userEmail = "mithun.s@gmail.com";
let userAge = 21;

validateUserInfo(userName,userEmail,userAge);

