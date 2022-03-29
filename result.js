var regex = require('./app.js');
// let Regex2 = require('../javascript/app').EmailPattern;
// let Regex3 = require('../javascript/app').PhoneNumberPattern;

// let Name = "Praveen2221";
// let email = "Praveenap2221@gmail.com";
// let PhoneNumber = "6369678358";
console.log(regex);

let Nameresult =regex.NamePattern.test("Praveen2221");
console.log("NameReult:" + Nameresult);
// let Emailresult =Regex2.test("Praveenap2221@gmail.com");
// console.log("Emailresult:"+Emailresult);
// let PhoneNOresult =Regex3.test("6369678358");
// console.log("PhoneNumber:"+PhoneNOresult);

// if(Regex.test(Name)){
//     console.log("successfull");
// }else if(Regex2.test(email)){
//     console.log("successfull");
// }else if(Regex3.test(PhoneNumber)){
//     console.log("successfull");
// }else{
//     console.log("Type correct format");
// }
