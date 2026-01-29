// Select form box
let formBox = document.getElementById("formBox");


function formDetail() {
    formBox.style.display = "block";    //form display
}

// Initialize DataTable
let table = $('#userTable').DataTable();


function addUser() {
    let name = document.getElementById("name").value.trim();
     let number = document.getElementById("number").value.trim();
     let address = document.getElementById("address").value.trim();
    let dob = document.getElementById("dob").value;

    let gender = "";
    let genders = document.getElementsByName("gender");
    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
        }
    }

    // ----------------- VALIDATIONS -----------------
    if (name === "") {
        alert("Name is required");
        return;
    }
    if (name.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }

    if (number === "") {
        alert("Number is required");
        return;
    }
    if (isNaN(number)) {
        alert("Number must contain only digits");
        return;
    }
    if (number.length !== 10) {
        alert("Number must be 10 digits");
        return;
    }

    if (address === "") {
        alert("Address is required");
        return;
    }
    if (address.length < 5) {
        alert("Address must be at least 5 characters");
        return;
    }

    if (dob === "") {
        alert("Please select Date of Birth");
        return;
    }

    if (gender === "") {
        alert("Please select gender");
        return;
    }

    //formBox Hide

    formBox.style.display = "none";

    // ----------------- ADD ROW TO TABLE -----------------
    let rowNode = table.row.add([
        name,
        number,
        address,
        dob,
        gender,
        '<button class="btn btn-danger btn-sm deleteBtn">Delete</button>'
    ]).draw(false).node(); 


    $(rowNode).find('.deleteBtn').on('click', function() {
        table.row($(this).parents('tr')).remove().draw();
    });

    // Reset form
    document.querySelector("form").reset();
}
