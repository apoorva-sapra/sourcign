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

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
var database = firebase.database();
firebase.analytics();