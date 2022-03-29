var NumberPattern = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/; 
let PhoneNumber = "6369678358"; 
console.log("PhoneNumber:"+ PhoneNumber);
let result =NumberPattern.test(PhoneNumber); 
if (NumberPattern.test(PhoneNumber)) {
    console.log("successfull");
}else{
    console.log("unsuccessfull")
}
console.log(result);