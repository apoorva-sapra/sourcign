document.getElementById('signin_form').addEventListener('submit', (e) => {
    e.preventDefault();
    var email = document.getElementById('signin_email').value;
    var password = document.getElementById('signin_password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            window.location.href = "../feature.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
})

//Register
document.getElementById('signup_form').addEventListener('submit', (e) => {

    e.preventDefault();

    var name = document.getElementById('signup_name').value;
    var email = document.getElementById('signup_email').value;
    var company = document.getElementById('company').value;
    if (name && email && company) {
        const emailRef = firebase.database().ref('users').orderByChild('email').equalTo(email);
        emailRef.once('value', function (snapshot) {
            if (snapshot.exists()) {
                alert('Email address already exists in the database');
            } else {
                // Send the data to Firebase
                try {
                    firebase.database().ref('users').push({
                        name,
                        email,
                        company
                    });
                    alert("Registered Successfully! We'll reach out to you soon");
                    document.getElementById('signup_form').reset();
                    document.getElementById("errorMsg").innerHTML= "";
                } catch (error) {
                    alert(error.message);
                }
            }
        });
    }
    else {
        alert("Please fill all the fields with * marked.")
    }
});

// //Signup
// document.getElementById('signup_form').addEventListener('submit', (e) => {

//     e.preventDefault();

//     var name = document.getElementById('signup_name').value;
//     var email = document.getElementById('signup_email').value;
//     var company = document.getElementById('company').value;
//     // var password = document.getElementById('signup_password').value;
//     if (name && email && company){

//         // if (password.length < 8) {
//         //     document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
//         //     return false;
//         // }

//         auth.createUserWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//             const dt = new Date();
//             const user = userCredential.user;
//             firebase.database().ref('users/' + user.uid).set({
//                 name: name,
//                 email: email,
//               });
//               alert("Successfully Signed Up!");
//               console.log("data sent");
//               document.getElementById('signup_form').reset();
//               document.getElementById("errorMsg").innerHTML= "";
//         })                                                                                                                            
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             alert(errorMessage);

//         });
//     }
//     else{
//         alert("Please fill all the fields with * marked.")
//     }

// });

function getId(id) {
    return document.getElementById(id).value;
}
