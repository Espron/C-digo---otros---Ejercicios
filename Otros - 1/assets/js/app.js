const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
//Declaración de variable
async function displayUser(username) {
  fetch(`${usersEndpoint}/${username}`)
  .then(data => data.json())
  .then(data =>{
    $n.innerHTML = data.name;
    $b.innerHTML = data.blog;
    $l.setAttribute("href", data.blog);
    address.innerHTML = data.location;
  }).catch(error => {
    console.log('OH NO');
    console.error(error);
  });
}

displayUser('stolinski');