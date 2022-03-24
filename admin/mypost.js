const newse = document.querySelector('#news');

// create element & render cafe
function newsR(doc){
    let li = document.createElement('li');
    let title = document.createElement('span');
    let name = document.createElement('span');
    let type = document.createElement('span');
    let PoLo = document.createElement('span');
    let post = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    title.textContent = doc.data().Title;
    name.textContent = "Name: " + doc.data().Name;
    type.textContent = "Type of Post: " + doc.data().Type;
    PoLo.textContent = "How Was Post Submitted: " + doc.data().PoLo;
    post.textContent = doc.data().Post;
  let delbtn = document.createElement("button");
delbtn.innerHTML = "Delete Post";
delbtn.name = "Del";
delbtn.id = "Del";
delbtn.class = "Del";
  delbtn.onclick = function goDel(){    
    localStorage.setItem('DEL', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    var Email = localStorage.getItem('EMAIL');
    var DEL = localStorage.getItem('DEL')
    if (confirm('Are you sure you want to delete '+ DEL +"?")){
      db.collection('posts').doc(DEL).delete()
      db.collection('users').doc(Email).collection('posts').doc(DEL).delete()
     db.collection('anopost').doc(DEL).delete()
    alert("Document "+DEL+" has been successfully deleted!");
    localStorage.removeItem('DEL'), location.reload();
    }else{
      alert("Ok!");
    }}
    let btn = document.createElement("button");
btn.innerHTML = "Comments";
btn.name = "Com";
btn.id = "Com";
btn.class = "Com";
  btn.onclick = function goCom(){
    localStorage.setItem('TITLE', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    document.location.href="inpo.html"
}
    let prvbtn = document.createElement("button");
prvbtn.innerHTML = "Private Post";
prvbtn.name = "Prv";
prvbtn.id = "Prv";
prvbtn.class = "Prv";
  prvbtn.onclick = function goPrv(){ 
    localStorage.setItem('Prv', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    var Email = doc.data().Email
    var PRV = localStorage.getItem('Prv')
    if (confirm('Are you sure you want to private '+Email + "'s Post "+ PRV +"?")){
  var firestore = firebase.firestore()
  const adb = firestore.collection("anopost")
  const udb = firestore.collection("users")

let name = doc.data().Name
let type = doc.data().Type
let title = doc.data().Title
let post = doc.data().Post
let tmnow = doc.data().tmnow
let indid = doc.data().Time
let Email = doc.data().Email

    //Save Form Data To Firebase
    adb.doc(name + ":" + type + ":" + tmnow).set({
      Title: title,
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      Time: indid,
      tmnow: tmnow
    }).then( () => {
      console.log("Data saved")
      document.location.href=('myposts.html')
    }).catch((error) => {
      console.log(error)
    })


    adb.doc(name + ":" + type + ":" + tmnow).collection("comments").add({
      Title: "Original Post",
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      Time: indid,
      tmnow: tmnow
    }).then( () => {
      console.log("Data saved")
      document.location.href=('myposts.html')
    }).catch((error) => {
      console.log(error)
    })
db.collection('posts').doc(PRV).delete()
      db.collection('users').doc(Email).collection('posts').doc(PRV).delete()
  udb.doc(Email).collection("posts").doc(name + ":" + type + ":" +   tmnow).set({
      Title: title,
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      PoLo: "Anonymous",
      Time: indid,
      tmnow: tmnow
    }).then( () => {
      console.log("Data saved")
      document.location.href=('myposts.html')
    }).catch((error) => {
      console.log(error)
    })
  udb.doc(Email).collection("posts").doc(name + ":" + type + ":" +   tmnow).collection("comments").add({
      Title: title,
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      PoLo: "Anonymous",
      Time: indid,
      tmnow: tmnow
    }).then( () => {
      console.log("Data saved")
      document.location.href=('myposts.html')
    }).catch((error) => {
      console.log(error)
    })
  
    alert("Document "+PRV+" has been successfully privated!");
    localStorage.removeItem('PRV'), location.reload();
    }else{
      alert("Ok!");
    }}

  let pubbtn = document.createElement("button");
pubbtn.innerHTML = "Publicize Post";
pubbtn.name = "Pub";
pubbtn.id = "Pub";
pubbtn.class = "Pub";
  pubbtn.onclick = function goPub(){ 
    localStorage.setItem('Pub', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    var Email = doc.data().Email
    var PUB = localStorage.getItem('Pub')
    if (confirm('Are you sure you want to private '+Email + "'s Post "+ PUB +"?")){
  var firestore = firebase.firestore()
  const adb = firestore.collection("anopost")
  const udb = firestore.collection("users")

let name = doc.data().Name
let type = doc.data().Type
let title = doc.data().Title
let post = doc.data().Post
let tmnow = doc.data().tmnow
let indid = doc.data().Time
let Email = doc.data().Email

    //Save Form Data To Firebase
    adb.doc(name + ":" + type + ":" + tmnow).set({
      Title: title,
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      Time: indid,
      tmnow: tmnow
    }).then( () => {
      console.log("Data saved")
      document.location.href=('myposts.html')
    }).catch((error) => {
      console.log(error)
    })


    adb.doc(name + ":" + type + ":" + tmnow).collection("comments").add({
      Title: "Original Post",
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      Time: indid,
      tmnow: tmnow
    }).then( () => {
      console.log("Data saved")
      document.location.href=('myposts.html')
    }).catch((error) => {
      console.log(error)
    })
db.collection('posts').doc(PUB).delete()
      db.collection('users').doc(Email).collection('posts').doc(PRV).delete()
  udb.doc(Email).collection("posts").doc(name + ":" + type + ":" +   tmnow).set({
      Title: title,
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      PoLo: "Anonymous",
      Time: indid,
      tmnow: tmnow
    }).then( () => {
      console.log("Data saved")
      document.location.href=('myposts.html')
    }).catch((error) => {
      console.log(error)
    })
  udb.doc(Email).collection("posts").doc(name + ":" + type + ":" +   tmnow).collection("comments").add({
      Title: title,
      Name: name,
      Email: Email,
      Type: type,
      Post: post,
      PoLo: "Anonymous",
      Time: indid,
      tmnow: tmnow
    }).then( () => {
      console.log("Data saved")
      document.location.href=('myposts.html')
    }).catch((error) => {
      console.log(error)
    })
  
    alert("Document "+PRV+" has been successfully privated!");
    localStorage.removeItem('PRV'), location.reload();
    }else{
      alert("Ok!");
    }}


    li.appendChild(title);
    li.appendChild(name);
    li.appendChild(type);
    li.appendChild(PoLo);
    li.appendChild(post);
    li.appendChild(delbtn);
    li.appendChild(btn);
    li.appendChild(prvbtn);
  

    newse.appendChild(li);
}


let Email = localStorage.getItem('EMAIL');
// getting data
db.collection('users').doc(Email).collection('posts').orderBy("Time", "desc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});