const newse = document.querySelector('#news');

// create element & render cafe
function newsR(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let type = document.createElement('span');
    let post = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().Name;
    type.textContent = doc.data().Type;
    post.textContent = doc.data().Post;

    li.appendChild(name);
    li.appendChild(type);
    li.appendChild(post);

    newse.appendChild(li);
}

// getting data
db.collection('posts') .orderBy("Time", "desc").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        newsR(doc);
    });
});