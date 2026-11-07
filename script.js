document.getElementById("myForm").addEventListener("submit", function(e) {

    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var password = document.getElementById("password").value;

    var result = document.getElementById("result");

    if (name == "" || email == "" || age == "" ||
        course == "" || password == "") {

        result.style.color = "red";
        result.innerHTML = "Please fill all the fields!";
    }

    else if (!email.includes("@") || !email.includes(".")) {

        result.style.color = "red";
        result.innerHTML = "Please enter a valid email!";
    }

    else if (age <= 0) {

        result.style.color = "red";
        result.innerHTML = "Please enter a valid age!";
    }

    else if (password.length < 6) {

        result.style.color = "red";
        result.innerHTML = "Password must be at least 6 characters!";
    }
      
    else {

        result.style.color = "green";
        result.innerHTML = "Registration Successful!";

        document.getElementById("myForm").reset();
    }

});
