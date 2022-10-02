const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

function likeUp() {
  let heartId = event.target.id
  posts[heartId].likes ++
  let activeheart = document.getElementById("like" + heartId)
  activeheart.innerHTML = posts[heartId].likes + " likes"
}

for (i=0; i<posts.length; i++){
let article = document.createElement("article")
article.innerHTML =
`        
<div class="posted-by">
  <img class="avatar" src="${posts[i].avatar}">
  <div class="name-loc">
      <p class="art-name" id="art-name">${posts[i].name}</p>
      <p class="art-loc">${posts[i].location}</p>
  </div>
</div>
<img class="artwork" src="${posts[i].post}">
<img class="icon" id="${[i]}" src="images/icon-heart.png">
<img class="icon" src="images/icon-comment.png">
<img class="icon" src="images/icon-dm.png">
<p class="like-style" id="like${[i]}">${posts[i].likes} likes</p>
<p class="comment-style"><span>${posts[i].username}</span> ${posts[i].comment}</p>             
`
document.body.appendChild(article)

let element = document.getElementById([i])
element.addEventListener("click", likeUp)
}