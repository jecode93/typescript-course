"use strict";
//----------
// Interfaces
//----------
const author1 = {
    name: 'Mario',
    avatar: '/images/mario.png'
};
;
const authorPost = {
    name: "John",
    avatar: "/images/john.png",
};
const newPost = {
    title: 'This is TypeScript',
    body: 'This the body of the post',
    tag: ['Tech', 'Drame'],
    created_at: new Date(),
    author: authorPost
};
//---------------
// As function argument types
//---------------
function createPost(post) {
    console.log(`Created '${post.created_at}' post by "${post.author.name}".`);
}
createPost(newPost);
//---------------
// With arrays
//---------------
const newPost2 = {
    title: "Post 2",
    body: "This the body of the post 2",
    tag: ["Romance", "Drame"],
    created_at: new Date(),
    author: authorPost,
};
let posts = [];
posts.push(newPost2);
console.log(posts);
