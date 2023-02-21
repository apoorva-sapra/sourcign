// const firebaseConfig = {
//     apiKey: "AIzaSyBoni0BSgzE8iAo2mhKVOiRt4LWS7cPbaQ",
//     authDomain: "sourcign-2a97a.firebaseapp.com",
//     databaseURL: "https://sourcign-2a97a-default-rtdb.firebaseio.com",
//     projectId: "sourcign-2a97a",
//     storageBucket: "sourcign-2a97a.appspot.com",
//     messagingSenderId: "829422727128",
//     appId: "1:829422727128:web:537e95c6000459234b0cad",
//     measurementId: "G-4NRHX5X53Q"
//   };
const firebaseConfig = {
    apiKey: "AIzaSyA53-KjzQDeHp-apBrJcZtuh8nDG4z2SSk",
    authDomain: "sourcign-database.firebaseapp.com",
    databaseURL: "https://sourcign-database-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sourcign-database",
    storageBucket: "sourcign-database.appspot.com",
    messagingSenderId: "146749507764",
    appId: "1:146749507764:web:7410d5e1c7d6d88376efe1",
    measurementId: "G-YK2N3NVXV6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
var datab = firebase.database().ref('data');
function UserRegister() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {

    }).catch(function (error) {
        var errorcode = error.code;
        var errormsg = error.message;
    });
}
const auth = firebase.auth();
function SignIn() {
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.msg));
    window.open("https://www.google.com", "_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email: getId('eemail'),
        password: getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
});
function getId(id) {
    return document.getElementById(id).value;
}
