const form=document.getElementById('form');
const fname=document.getElementById('input_fname');
const lname=document.getElementById('input_lname');
const mobile=document.getElementById('input_mobile');
const nic=document.getElementById('input_nic');
const province=document.getElementById('SelectProvince');
const District=document.getElementById('SelectDistrict');
const City=document.getElementById('Selectcity');
const moh=document.getElementById('SelectMoh');
const password1=document.getElementById('input_password');
const password2=document.getElementById('input_con_password');

class FormInputValidation {
    
    mobileValidation(mobile, fieldName) {
        const regExp = /[a-zA-Z]/g;
        let isValida = true;
        if (mobile.length !== 10) {
            this.setErrorMessageForField("invalid mobile number", fieldName, 0)
            isValida = false;
        }
        if (mobile.length === 10) {
            this.setErrorMessageForField("valid mobile number", fieldName, 1)
            isValida = true;
        }
        if (!mobile.startsWith("0")) {
            this.setErrorMessageForField("mobile number must start with 0", fieldName, 0)
            isValida = false;
        }

        if (regExp.test(mobile) || mobile.includes(" ")) {
            this.setErrorMessageForField("characters or space cannot be used", fieldName, 0)
            isValida = false;
        }
        if (mobile === "") {
            this.setErrorMessageForField("required*", fieldName, 0)
            isValida = false;
        }
        if (!mobile) {
            this.setErrorMessageForField("required*", fieldName, 0)
            isValida = false;
        }
        return isValida;
    
    }
    nameValidation(name, fieldName) {
        
        let isValida = true;
        if (name === "") {
            this.setErrorMessageForField("required*", fieldName, 0)
            isValida = false;
        }
        if(name.length>0){
            this.setErrorMessageForField(" ", fieldName, 0)
            isValida = true;
        }

        if (!name) {
            this.setErrorMessageForField("required*", fieldName, 0)
            isValida = false;
        }
        return isValida;
    
    }

    nicValidation(name, fieldName) {
        let NICNo=name.value;
        let isValida = true;
        var dayText = 0;
                var year = "";
                var month = "";
                var day = "";
                var gender = "";
        if (NICNo.length != 10 && NICNo.length != 12) {
            // console.log("if")
            isValida = false;
            this.setErrorMessageForField("Invalid NIC NO", fieldName, 0)
        } else if (NICNo.length == 10 && !$.isNumeric(NICNo.substr(0, 9))) {
            // console.log("else if")
            this.setErrorMessageForField("Invalid NIC NO", fieldName, 0)
            isValida = false;
        }
        else {
            this.setErrorMessageForField("", fieldName, 0)
            isValida = true;
                    // Year
                    if (NICNo.length == 10) {
                        year = "19" + NICNo.substr(0, 2);
                        dayText = parseInt(NICNo.substr(2, 3));
                    } else {
                        year = NICNo.substr(0, 4);
                        dayText = parseInt(NICNo.substr(4, 3));
                    }

                    // Gender
                    if (dayText > 500) {
                        gender = "Female";
                        dayText = dayText - 500;
                    } else {
                        gender = "Male";
                    }

                    // Day Digit Validation
                    if (dayText < 1 && dayText > 366) {
                        $("#error").html("Invalid NIC NO");
                    } else {

                        //Month
                        if (dayText > 335) {
                            day = dayText - 335;
                            month = "December";
                        }
                        else if (dayText > 305) {
                            day = dayText - 305;
                            month = "November";
                        }
                        else if (dayText > 274) {
                            day = dayText - 274;
                            month = "October";
                        }
                        else if (dayText > 244) {
                            day = dayText - 244;
                            month = "September";
                        }
                        else if (dayText > 213) {
                            day = dayText - 213;
                            month = "Auguest";
                        }
                        else if (dayText > 182) {
                            day = dayText - 182;
                            month = "July";
                        }
                        else if (dayText > 152) {
                            day = dayText - 152;
                            month = "June";
                        }
                        else if (dayText > 121) {
                            day = dayText - 121;
                            month = "May";
                        }
                        else if (dayText > 91) {
                            day = dayText - 91;
                            month = "April";
                        }
                        else if (dayText > 60) {
                            day = dayText - 60;
                            month = "March";
                        }
                        else if (dayText < 32) {
                            month = "January";
                            day = dayText;
                        }
                        else if (dayText > 31) {
                            day = dayText - 31;
                            month = "Febuary";
                        }

                        // Show Details
                        // console.log("Gender : " + gender)
                        // console.log("Year : " + year)
                        // console.log("Month : " + month)
                        // console.log("Day :" + day)
                    }
        }
        return isValida;
    }

    selectValidation(select_feild) {
        let isValida = true;
        if(select_feild.value==1){
            select_feild.style.border="1px solid rgb(219, 23, 23)"
            isValida = false;
        }
        else {
            select_feild.style.border="none"
            isValida = true;
        }
        return isValida;
    }
    
    CheckConformPassword(pass1,pass2,fieldName){
        let isValida = true;
        this.setErrorMessageForField("", fieldName, 0)
        // console.log("password/"+pass1.value+"/")
        if(pass1.value!=pass2.value){
            // console.log("error password not match")
            this.setErrorMessageForField("passwords are not match", fieldName, 0)
            pass1.value="";
            pass2.value="";
            pass1.style.border= "1px solid rgb(219, 23, 23)";
            pass2.style.border= "1px solid rgb(219, 23, 23)";
            isValida = false;
        }
        else if(!pass1.value || !pass2.value){
            this.setErrorMessageForField("required*", fieldName, 0)
            isValida = false;
        }
        else{
            // console.log("password mathch")
            pass1.style.border= "none";
            pass2.style.border= "none";
            isValida = true;
        }
        return isValida;
    }


    CheckPassword(){
        let isValida = true;
        // console.log("check password work")
        var myInput = document.getElementById("input_password");
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var length = document.getElementById("length");
        document.getElementById("message").style.display = "block";
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
        // When the user clicks outside of the password field, hide the message box
        myInput.onblur = function() {
            // console.log("blure work")
          document.getElementById("message").style.display = "none";
        }
        
        // When the user starts to type something inside the password field
        myInput.onkeyup = function() {
          // Validate lowercase letters
        //   console.log("on key up in p text")
          
          if(myInput.value.match(lowerCaseLetters)) {  
            letter.classList.remove("invalid");
            letter.classList.add("valid");
          } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
          }
          
          // Validate capital letters
          
          if(myInput.value.match(upperCaseLetters)) {  
            capital.classList.remove("invalid");
            capital.classList.add("valid");
          } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
          }
        
          // Validate numbers
         
          if(myInput.value.match(numbers)) {  
            number.classList.remove("invalid");
            number.classList.add("valid");
          } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
          }
          
          // Validate length
          if(myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
          } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
          }
        }
        if(myInput.value.match(lowerCaseLetters) &&
        myInput.value.match(upperCaseLetters) &&
        myInput.value.match(numbers) &&
        (myInput.value.length >= 8)
        ) {
            isValida = true;
        }
        else{
            isValida = false;
        }
        return isValida;
    }



    

    // calculateAge(nic, fieldName){
    //     // console.log("nic befor bluer")
    //     let isValida = true;
    //     document.getElementById(fieldName).innerHTML = "";
    //     nic.onblur = function() {
    //         var NICNo=nic.value;
    //         // console.log("nic after bluer")
    //         var dayText = 0;
    //             var year = "";
    //             var month = "";
    //             var day = "";
    //             var gender = "";
    //             if (NICNo.length != 10 && NICNo.length != 12) {
    //                 // document.getElementById(fieldName).innerHTML = "Invalid NIC NO";
    //                 isValida = false;
    //                 this.setErrorMessageForField("Invalid NIC NO", fieldName, 0)
    //             } else if (NICNo.length == 10 && !$.isNumeric(NICNo.substr(0, 9))) {
    //                 // document.getElementById(fieldName).innerHTML = "Invalid NIC NO";
    //                 this.setErrorMessageForField("Invalid NIC NO", fieldName, 0)
    //                 isValida = false;
    //             }
    //             else {
    //                 isValida = true;
    //                 // Year
    //                 if (NICNo.length == 10) {
    //                     year = "19" + NICNo.substr(0, 2);
    //                     dayText = parseInt(NICNo.substr(2, 3));
    //                 } else {
    //                     year = NICNo.substr(0, 4);
    //                     dayText = parseInt(NICNo.substr(4, 3));
    //                 }

    //                 // Gender
    //                 if (dayText > 500) {
    //                     gender = "Female";
    //                     dayText = dayText - 500;
    //                 } else {
    //                     gender = "Male";
    //                 }

    //                 // Day Digit Validation
    //                 if (dayText < 1 && dayText > 366) {
    //                     $("#error").html("Invalid NIC NO");
    //                 } else {

    //                     //Month
    //                     if (dayText > 335) {
    //                         day = dayText - 335;
    //                         month = "December";
    //                     }
    //                     else if (dayText > 305) {
    //                         day = dayText - 305;
    //                         month = "November";
    //                     }
    //                     else if (dayText > 274) {
    //                         day = dayText - 274;
    //                         month = "October";
    //                     }
    //                     else if (dayText > 244) {
    //                         day = dayText - 244;
    //                         month = "September";
    //                     }
    //                     else if (dayText > 213) {
    //                         day = dayText - 213;
    //                         month = "Auguest";
    //                     }
    //                     else if (dayText > 182) {
    //                         day = dayText - 182;
    //                         month = "July";
    //                     }
    //                     else if (dayText > 152) {
    //                         day = dayText - 152;
    //                         month = "June";
    //                     }
    //                     else if (dayText > 121) {
    //                         day = dayText - 121;
    //                         month = "May";
    //                     }
    //                     else if (dayText > 91) {
    //                         day = dayText - 91;
    //                         month = "April";
    //                     }
    //                     else if (dayText > 60) {
    //                         day = dayText - 60;
    //                         month = "March";
    //                     }
    //                     else if (dayText < 32) {
    //                         month = "January";
    //                         day = dayText;
    //                     }
    //                     else if (dayText > 31) {
    //                         day = dayText - 31;
    //                         month = "Febuary";
    //                     }

    //                     // Show Details
    //                     // console.log("Gender : " + gender)
    //                     // console.log("Year : " + year)
    //                     // console.log("Month : " + month)
    //                     // console.log("Day :" + day)
    //                 }
    //             }
    //     }
    //     return isValida;
                
    // }
    setErrorMessageForField(error, field, status) {
        document.getElementById(field).innerHTML = error;
        if(status){
            document.getElementById(field).classList.add("form-field-success");
            document.getElementById(field).classList.remove("form-field-error");
        }else{
            document.getElementById(field).classList.remove("form-field-success");
            document.getElementById(field).classList.add("form-field-error");
        }
    }
}