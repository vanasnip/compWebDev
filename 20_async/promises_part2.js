const urls = [
'https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/albums'
]

Promise.all(urls.map(url => {
  return fetch(url).then(resp=> resp.json())
})). then(results => {
  console.log(results[0],'\n', results[1], '\n', results[2]);
}).catch(()=> console.log('error'));
