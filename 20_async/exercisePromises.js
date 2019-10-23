// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise_one = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'success');
})


// #2) Run the above promise and make it console.log "success"
promise_one.then(message => console.log(message));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
const promise_two = Promise.resolve(
  setTimeout(() => {
    console.log('success');
  }, 4000)
)
// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed')
  .catch(err => console.log('Oops something went wrong', err));

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2q',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]
Promise.all(urls.map(url =>
  fetch(url).then(people => people.json())
))
  .then(people => people.forEach((person)=> console.log(person)))
  .catch(err => console.log(err));
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
