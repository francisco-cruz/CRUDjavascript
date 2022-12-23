// [CRUD] JS PURO
const miniTwitter = {
  usuarios: [
    {
      username: "francisco",
    },
  ],
  posts: [
    {
      id: 1,
      owner: "francisco",
      content: "meu post",
    },
  ],
};
// CREATE

function createPost(data) {
  miniTwitter.posts.push({
    id: miniTwitter.posts.push.length + 1,
    owner: data.owner,
    content: data.content,
  });
}
// READ
function readPost() {
  return miniTwitter.posts;
}
// UPDATE

function updatePostOfContent(id, newContent) {
  const postToUpdate = readPost().find((post) => {
    return post.id == id;
  });
  console.log(postToUpdate);
  postToUpdate.content = newContent;
}
// DELETE
function deletePost(id) {
  const listPotsUpdated = readPost().filter((post) => {
    return post.id !== id;
  });
  miniTwitter.posts = listPotsUpdated;
}

console.log(miniTwitter);