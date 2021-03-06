const newse = document.querySelector('#news');

// create element & render cafe
function newsR(doc){
    let li = document.createElement('li');
    let title = document.createElement('span');
    let name = document.createElement('span');
    let email = document.createElement('span');
    let post = document.createElement('span');
  
    li.setAttribute('data-id', doc.id);
    title.textContent = doc.data().Type + ": " + doc.data().Title;
    name.textContent = "Name: " + doc.data().Name;
    email.textContent = "Email: " + doc.data().Email;
    post.textContent = doc.data().Post;
  let btn = document.createElement("button");
btn.innerHTML = "Comments";
btn.name = "Com";
btn.id = "Com";
btn.class = "Com";
  btn.onclick = function goCom(){
    localStorage.setItem('TITLE', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    localStorage.setItem('UEM', doc.data().Email)
    document.location.href="inpo.html"
}
    let delbtn = document.createElement("button");
delbtn.innerHTML = "Delete Post";
delbtn.name = "Del";
delbtn.id = "Del";
delbtn.class = "Del";
  delbtn.onclick = function goDel(){    
    localStorage.setItem('DEL', doc.data().Name + ":" + doc.data().Type + ":" + doc.data().tmnow);
    var uem = doc.data().Email
    var DEL = localStorage.getItem('DEL')
    if (confirm('Are you sure you want to delete '+uem + "'s Post "+ DEL +"?")){
      db.collection('posts').doc(DEL).delete()
      console.log("1/2 Deleted")
      db.collection('users').doc(uem).collection('posts').doc(DEL).delete()
      console.log("2/2 Deleted")
    localStorage.removeItem('DEL'), location.reload();
    }else{
      alert("Ok!");
    }}

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
      console.log("Data saved 1/4")
      document.location.href=('anon.html')
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
      console.log("Data saved 2/4")
      document.location.href=('anon.html')
    }).catch((error) => {
      console.log(error)
    })

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
      console.log("Data saved 3/4")
      document.location.href=('anon.html')
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
      console.log("Data saved 4/4")
      document.location.href=('anon.html')
    }).catch((error) => {
      console.log(error)
    })
  
db.collection('posts').doc(PRV).delete()
      db.collection('users').doc(Email).collection('posts').doc(PRV).delete()
    localStorage.removeItem('PRV'), location.reload();
    }else{
      alert("Ok!");
    }}

    li.appendChild(title);
    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(post);
    li.appendChild(btn);
    li.appendChild(delbtn);
    li.appendChild(prvbtn)
  

    newse.appendChild(li);
}

// getting data
db.collection('posts').orderBy("Time", "desc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});