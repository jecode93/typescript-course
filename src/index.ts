//----------
// Interfaces
//----------

interface Author {
  name: string,
  avatar: string
}

const author1: Author = {
  name: 'Mario',
  avatar: '/images/mario.png'
}


interface Post {
  title: string,
  body: string,
  tag: string[],
  created_at: Date,
  author: Author
};

const authorPost = {
  name: "John",
  avatar: "/images/john.png",
};

const newPost: Post = {
  title: 'This is TypeScript',
  body: 'This the body of the post',
  tag: ['Tech', 'Drame'],
  created_at: new Date(),
  author: authorPost
}
//---------------
// As function argument types
//---------------

function createPost(post: Post): void {
  console.log(`Created '${post.created_at}' post by "${post.author.name}".`);
}

createPost(newPost);

//---------------
// With arrays
//---------------
const newPost2: Post = {
  title: "Post 2",
  body: "This the body of the post 2",
  tag: ["Romance", "Drame"],
  created_at: new Date(),
  author: authorPost,
};

let posts: Post[] = []

posts.push(newPost2)
console.log(posts);
