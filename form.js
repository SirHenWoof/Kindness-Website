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
  //Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore()
  
  //Variable to access database collection
  const db = firestore.collection("posts")
  //Get Submit Form
  let submitButton = document.getElementById('submit')
  
  //Create Event Listener To Allow Form Submission
  submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()

    //Get Form Values
let name = document.getElementById('name').value
let type = document.getElementById('type').value
let post = document.getElementById('post').value
let tmnow = Date.now()
let indid = firebase.firestore.FieldValue.serverTimestamp()
let Email = localStorage.getItem('EMAIL');

    //Save Form Data To Firebase
    db.doc(name + ":" + type + ":" + tmnow).set({
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      Time: indid
    }).then( () => {
      console.log("Data saved")
      document.location.href=('feed.html')
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Your Form Has Been Submitted Successfully")
})

  //Variable to access database collection
  const adb = firestore.collection("anopost")
  let anosubmitButton = document.getElementById('ansubmit')

  anosubmitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()

    //Get Form Values
let name = document.getElementById('name').value
let type = document.getElementById('type').value
let post = document.getElementById('post').value
let tmnow = Date.now()
let indid = firebase.firestore.FieldValue.serverTimestamp()
let Email = localStorage.getItem('EMAIL');

    //Save Form Data To Firebase
    adb.doc(name + ":" + type + ":" + tmnow).set({
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      Time: indid
    }).then( () => {
      console.log("Data saved")
      document.location.href=('feed.html')
    }).catch((error) => {
      console.log(error)
    })
  
    //alert
    alert("Your Private Form Has Been Submitted Successfully")})


