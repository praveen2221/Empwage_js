let Name = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/ ;
let result =Name.test("Praveen@2221");
if (Name.test("Praveen@2221")) {
      console.log("successful");
}else{
    console.log("unsuccessfull");
}
console.log(result);

