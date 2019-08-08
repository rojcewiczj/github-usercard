/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
window.addEventListener('load', (e) => {

  const followersArray = [];
axios.get('https://api.github.com/users/rojcewiczj')
    .then( (response) => {
      console.log(response)
        // Remember response is an object, response.data is an array.
      
           let newFollower = new socialCardCreator(response);
           cards.appendChild(newFollower);
        
    })
    .catch( error => {
        console.log("Error:", error);
    })







/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
const cards = document.querySelector('.cards')
console.log (cards);



function addFollower (follower) {
  followersArray.push('https://api.github.com/users/' + follower);
  return followersArray;
}
addFollower('rogermcconkiejr');
addFollower('Tyler668');

console.log(followersArray);

followersArray.forEach(element => {
  axios.get(element)
  .then( (response) => {
    console.log(response)
    let newFollower = new socialCardCreator(response);
    cards.appendChild(newFollower);
 
})
.catch( error => {
  console.log("Error:", error);
})

})


function socialCardCreator (object) {

const card = document.createElement('div');
const img = document.createElement('img');
const cardInfo = document.createElement('div');
const name = document.createElement('h3');
const username = document.createElement('p');
const location = document.createElement('p');
const profile = document.createElement('p');
const address = document.createElement('a');
const followers = document.createElement('p');
const following = document.createElement('p');
const bio = document.createElement('p');
//////////////

card.appendChild(img);
card.appendChild(cardInfo);
cardInfo.appendChild(name);
cardInfo.appendChild(username);
cardInfo.appendChild(location);
cardInfo.appendChild(profile);
profile.appendChild(address);
cardInfo.appendChild(followers);
cardInfo.appendChild(following);
cardInfo.appendChild(bio);
///////////////

card.classList.add('card');
cardInfo.classList.add('card-info');
name.classList.add('name');
username.classList.add('username');
///////////
img.src = object.data.avatar_url;
name.textContent = object.data.name;
username.textContent = object.data.login;
location.textContent = object.data.location;
address.textContent = object.data.url;
followers.textContent = object.data.followers;
following.textContent = object.data.following;
bio.textContent = object.data.bio;
//////

return card;





}










/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

});