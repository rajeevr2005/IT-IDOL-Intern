function validateForm() {
    let isValid = true;

    $("p").text("");

    let name = $("#name").val();
    let roll = $("#roll").val();
    let dob = $("#dob").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let repassword = $("#rePassword").val();

    // Name validation
    if (name === "") {
        $("#nameError").text("Name is required");
        isValid = false;
    }

    // Roll No validation
    if (roll === "") {
        $("#RollError").text("Roll number is required");
        isValid = false;
    }

    // DOB validation
    if (dob === "") {
        $("#DOBError").text("Date of birth is required");
        isValid = false;
    }

    // Email validation
    if (email === "") {
        $("#emailError").text("Email is required");
        isValid = false;
    } else if (!email.includes("@")) {
        $("#emailError").text("Invalid email format");
        isValid = false;
    }

    // Password validation
    if (password === "") {
        $("#passwordError").text("Password is required");
        isValid = false;
    } else if (password.length < 6) {
        $("#passwordError").text("Password must be at least 6 characters");
        isValid = false;
    }

    // Re-password validation
    if (repassword === "") {
        $("#rePassError").text("Please re-enter password");
        isValid = false;
    
    } else if (password !== repassword) {
        $("#rePassError").text("Passwords do not match");
        isValid = false;
    }

    $("#name").on("input",function(){
        if($(this).val() !=""){
            $("#nameError").text("");
        }
    });

    $("#roll").on("input",function(){
        if($(this).val() !=""){
            $("#RollError").text("");
        }
    });

    $("#dob").on("input",function(){
        if($(this).val() !=""){
            $("#DOBError").text("");
        }
    });

    $("#email").on("input",function(){
        if($(this).val() !=""){
            $("#emailError").text("");
        }
    });

    $("#password").on("input",function(){
        if($(this).val() !=""){
            $("#passwordError").text("");
        }
    });

    $("#rePassword").on("input",function(){
        if($(this).val() !=""){
            $("#rePassword").text("");
        }
    });
    

    if (isValid) {
        alert("Form Submitted Successfully 🎉");
         $("#name").val("");
        $("#roll").val("");
        $("#dob").val("");
        $("#email").val("");
        $("#password").val("");
        $("#rePassword").val("");
    }


}
