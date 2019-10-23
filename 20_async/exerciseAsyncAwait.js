// Solve the below problems:

// #1) Convert the below promise into async await
const getResponse = async function () {
  const response = await fetch('https://swapi.co/api/starships/9/');
  const data = await response.json();
  console.log(data);
}
// getResponse();


// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls4 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getLeData = async function () {
  const [users, posts, albums] = await Promise.all(urls4.map(async function(url) {
      const resp = await fetch(url);
      return resp.json();
  }));
  console.log('users', users);
  console.log('posta', posts);
  console.log('albums', albums);
}
// getLeData();
// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls5 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]
const getLeDataAgain = async function (urls) {
  try {
    const [users, posts, albums] = await Promise.all(urls.map(async function(url) {
        const resp = await fetch(url);
        return resp.json();
    }));
    console.log('users', users);
    console.log('posta', posts);
    console.log('albums', albums);
  } catch (err) {
    console.error('Oops', err);
  }
}
// getLeDataAgain(urls5);

const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40
}
const  { tiger, monkey, ...rest} = animals;
const array = [1,2,3,4,5];
function sum(a,b,c,d,e) {
  return a + b + c + d + e;
}
console.log(sum(...array));

function objectSpread(p1,p2,p3){
  console.log(p1, p2, p3);
}

objectSpread(tiger, monkey, rest);

const urls6 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums',
]

// Promise.all(urls6.map(
//   url => fetch(url)
//     .then(raw => raw.json())
// ))
//   .then(data => {
//     throw Error;
//     console.log(`users: ${data[0]}`);
//     console.log(`posts: ${data[1]}`);
//     console.log(`albums: ${data[2]}`);
//   })
//   .catch((error) => console.error('oops',error))
//   .finally(() => console.log('extra'));


const loopThroughUrls = urls => {
  for (let url of urls) {
    console.log(url);
  }
}
loopThroughUrls(urls5);

const getDeData = async function(urls) {
  const arrayOfPromises = urls.map(url => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
}
getDeData(urls5);

