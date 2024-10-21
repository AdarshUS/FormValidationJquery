$(function() { 
  var $form = $("#myform");
  if ($form.length) {
      $form.validate({
         rules: {
           Name: {
              required: true
                  },
            phone:{
                required: true,
                 pattern:"[0-9]+",minlength:10, maxlength:10
                 },
             newpassword:{
                required: true,
                 }
                },
            messages: {  
              Name: {
required: 'Username is mandatory!'
                    },
             phone:{
                required:'Enter a valid Phone Number'
                 },
               newpassword:{
                   required:'Password cannot be empty'
                  }
                       }
                 });
                   }
                    });

 