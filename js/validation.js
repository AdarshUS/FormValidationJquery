$(function() { 
var $form = $("#myform");
if ($form.length) {

var value = $("#newpassword").val();

$.validator.addMethod("checklower", function(value) {
  return /[a-z]/.test(value);
});
$.validator.addMethod("checkupper", function(value) {
  return /[A-Z]/.test(value);
});
$.validator.addMethod("checkdigit", function(value) {
  return /[0-9]/.test(value);
});


$form.validate({
rules: {
Name: {
required: true
},
phone: {
required: true,
minlength: 10,
maxlength: 10
},
newpassword: {
required: true,
minlength: 6,
maxlength: 30,
checklower: true,
checkupper: true,
checkdigit: true
},
confirmpassword: {
equalTo: "#newpassword"
}
},
messages: {  
Name: {
required: 'Username is mandatory!'
},
phone: {
required: 'Enter a valid Phone Number'
},
newpassword: {
required: 'Password cannot be empty',
checklower: 'Need at least 1 lowercase alphabet',
checkupper: 'Need at least 1 uppercase alphabet',
checkdigit: 'Need at least 1 digit'
}
}
});
}
});