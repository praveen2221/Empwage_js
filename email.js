    var EmailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    let email = "Praveenap2221@gmail.com";
    console.log("Email:" + email);
    let result =EmailPattern.test(email); 
    if (EmailPattern.test(email)) {
        console.log("successfull");
    }else{
        console.log("unsuccessfull")
    }
    console.log(result);


