const romantic = ['The lunchbox', 'Up in the air', 'Carol', 'The big sick', 'Casablanca', 'Her', 'Shakespeare in Love','About a boy', 'Before sunrise', 'The Hustler', 'The African Queen','The Artist', 'Your Name', 'Enough Said', 'Midnight in Paris', 'The Graduate', 'The Duke of Burgundy', 'Crazy Heart', 'Dave', 'Breathe In'];
const funny=['Lady Bird','La la land','The Death of Stalin','Crazy Rich Asians','Sorry to Bother You','Bullets Over Broadway','Blindspotting','Old School','O Brother','The Heat','Game Night','Pulp Fiction','The Hangover','Dumb and Dumber','School of Rock', 'Hot Fuzz', 'The Breakfast Club', 'Burn After Reading', 'Bachelorette', 'The Birdcage'];
const brave=['A Quiet Place', 'It Follows', 'Let the Right One In', 'The Cabin in the Woods', 'A Girl Walks Home Alone at Night', 'The Blair Witch Project', 'The Texas Chainsaw Massacre', 'Night of the Living Dead', 'Bone Tomahawk', 'The Shining', 'Get Out', 'Audition', 'The Thing', 'Evil Dead', 'Funny Games', 'Mulholland Dr.', 'Martyrs', 'The Orphanage', 'Suspiria', 'A Nightmare on Elm Street'];
const curious=['The Prestige', 'The Game', 'The Kindergarten Teacher', 'The Silence of the Lambs', 'Twelve Monkeys', 'Black Swan', 'Oldboy', 'Primal Fear', 'Red Dragon', 'The Bone Collector', 'Border', 'Overlord', 'The House That Jack Built', 'Missing', 'Side Effects', 'Let Me In', 'The Imitation Game', 'Gerald’s Game', 'The Gift', 'Raw'];
const kids = ['The Wizard of Oz','Inside Out','E.T. The Extra-Terrestrial',
  'Coco','Paddington 2','Incredibles 2','Snow White and the Seven Dwarfs',
  'Toy Story 2','Up','Toy Story 3','Finding Nemo','Pinocchio','Toy Story',
  'Mary Poppins','How to Train Your Dragon','The Incredibles','My Life as a Zucchini',
  'Song Of The Sea','About Elly','Spirited Away','101 Dalmatians'];

const intellectual = ['The Cabinet of Dr. Caligari','Metropolis','The Battle of Algiers',
  'M','Seven Samurai','The 400 Blows','The Wages of Fear','Open City','Tokyo Story',
  'The Leopard','Battleship Potemkin','Au Hasard Balthazar','The Conformist',
  'Let the Right One In','Playtime','Faces Places','Things to Come','Only Yesterday',
  'Tampopo','Three Colors: Red'];

const bold = ['Black Panther','Mad Max: Fury Road','King Kong','The Adventures of Robin Hood',
  'Spider-Man: Homecoming','Seven Samurai','The Treasure of the Sierra Madre','Lawrence of Arabia',
  'Captain America: Civil War','The Hurt Locker','Aliens','The Searchers','The Terminator',
  'The African Queen','Once Upon a Time in the West','Game of Thrones','The Last Kingdom',
  'Casino Royale','Crouching Tiger, Hidden Dragon','Aquaman'];

const obtainDataJson = (title) => {
  fetch('http://www.omdbapi.com/?apikey=2227c3b4&t='+title+'&type=movie&plot=full')
  .then(response => response.json())
  .then(dataMovies => {
     console.log(dataMovies);
  });
};
const titleRandom = window.data.randomMovies(bold);
console.log(titleRandom);
console.log(obtainDataJson(titleRandom));