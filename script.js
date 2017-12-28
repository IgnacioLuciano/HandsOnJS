
function idCard() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var DOB = document.getElementById('DOB').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var address1 = document.getElementById('address').value;
    var address2 = document.getElementById('address2').value;


    document.getElementsById('postFullName').innerHTML = firstName + ' ' + lastName;
    document.getElementsById("postDOB").innerHTML = DOB;
    document.getElementsById("postPhoneNumber").innerHTML = phoneNumber;
    document.getElementsById("postAddress1").innerHTML = address1;
    document.getElementsById("postAddress2").innerHTML = address2;

}


// var postFirstName ="Ignacio";

// var postLastName = lastName => lastName;

// var postDOB = DOB => DOB;

// var postPhoneNumber = phoneNumber => phoneNumber;

// var postAddress1 = address1 => address1;

// var postAddress1 = address2 => address2;

// function postFirstName() {
//     document.getElementById("postFirstName").value = "Ignacio";
// }

// function postFirstName(firstName) {
//     return firstName;
// }
// function postLastName(lastName) {

//     return lastName;
// }
// function postDOB(DOB) {
//     return DOB;
// }

// function postPhoneNumber(phoneNumber) {
//     return phoneNumber;
// }

// function postAddress1(address1) {
//     return address1;
// }

// function postAdddress2(address2) {
//     return address2;   
// }