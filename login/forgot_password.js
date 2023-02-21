
auth.useDeviceLanguage();

document.getElementById('forgot-password-form').addEventListener('submit', (e) => {
    var email = document.getElementById('email').value;
    auth.sendPasswordResetEmail(email).then(()=>{
            alert("Password reset mail sent, please check your inbox!");
            window.location.href="login_page.html";
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        })
});