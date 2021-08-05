/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryPoint = document.querySelector('.cards')

function githubUser (){
  axios.get('https://api.github.com/users/jMisch44')
  .then(res => {
    const card = createUserCard(res.data);
    entryPoint.appendChild(card)
  })
  .catch(err => {
    console.error(err);
  })
}
githubUser();
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['https://api.github.com/users/BigKnell', 'https://api.github.com/users/luishrd', 'https://api.github.com/users/justsml', 'https://api.github.com/users/dustinmyers', 'https://api.github.com/users/tetondan'];

function createUserCard( obj ) {
  //created elements
  console.log(obj);
  const userCard = document.createElement('div');
  const userImage = document.createElement('img');
  const allInfoCard = document.createElement('div');
  const userName = document.createElement('h3');
  const  userUserName = document.createElement('p');
  const livingLocation = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const whoAreFollowers = document.createElement('p');
  const whoAreFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  //parent child relations
  userCard.appendChild(userImage);
  userCard.appendChild(allInfoCard);
  allInfoCard.appendChild(userName);
  allInfoCard.appendChild(userUserName);
  allInfoCard.appendChild(livingLocation);
  allInfoCard.appendChild(profile);
  profile.appendChild(profileLink);
  allInfoCard.appendChild(whoAreFollowers);
  allInfoCard.appendChild(whoAreFollowing);
  allInfoCard.appendChild(userBio);

  //assigning class names
  userCard.classList.add('card');
  allInfoCard.classList.add('card-info');
  userName.classList.add('name');
  userUserName.classList.add('username');
 
  // //assigning text or info to the elements
  userImage.src = obj['avatar_url'];
  userName.textContent = `${obj['name']}`; 
   userName.textContent = obj['login']
   livingLocation.textContent = obj['location'];
   profileLink.href = `${obj['html_url']}`;
   whoAreFollowers.textContent = obj['followers'];
   whoAreFollowing.textContent = obj['following'];
   userBio.textContent = obj['bio'];
  return userCard;
}

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
