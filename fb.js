$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailaddress:{
                required:true,
                email:true,
                number:true
            },
            password:{
                minlength:6,
                maxlength:8
            },
            day:{
                required:true,
            },
            gender:{
                required:true,
            }
        },
        messages:{
            fname:{
            required:"Enter first name",
            minlength:"Enter atleast 4 characters",
            } 
        }
        
    })
})