$().ready(function () {

    $("#contactForm").validate({
      rules: {
        name:{
          required: true,
          minlength:4
        },
        email:{
          required: true,
          minlength:10
          // type:email
        },
        subject:{
          required: true,
  
        },
        message:{
          required: true,
          rangelength:[10,250],
        },
        },
      message:{
        name:{
          required:"Enter the Name",
          minlength:"Enter atleast 4 characters"
        },
        email:{
          required:"Enter the Email Address",
          email:"Enter a valid email address",
        },
        subject:{
          required:"Enter the Subject",
        },
        message:{
          required:"Enter the Message",
          rangelength:"Enter a message between 10 and 250 characters",
  
      },
    }
  
    });
  });