
function validatePhoneNumber(phone) {
     const phonePattern = /^\d{10}$/; 
     return phonePattern.test(phone);
    }    

    console.log(validatePhoneNumber(          ));