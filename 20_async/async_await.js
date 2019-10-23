// promise

fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(console.log);

// async await
async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await resp.json();
  await console.log(data);
}
fetchUsers();

const urls3 = [
  'https://jsonplaceholdezr.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

// Promise.all(urls3.map(
//   url => fetch(url)
//     .then(raw => raw.json())
// ))
//   .then(data => {
//     console.log(`users: ${data[0]}`);
//     console.log(`posts: ${data[1]}`);
//     console.log(`albums: ${data[2]}`);
//   }).catch(() => 'oops');
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls3.map(url =>
      fetch(url).then(resp => resp.json())
    ))
    console.log(`users: ${users}`);
    console.log(`posts: ${posts}`);
    console.log(`albums: ${albums}`);
  } catch (err) {
    console.error(`errrrrrrrrrrrrrrrrrrrrrrr`, err);
  }
}
getData();
