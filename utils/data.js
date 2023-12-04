/*============  Users  =============*/
//usernames
const usernames = [
  "john_doe92",
  "sara_smith",
  "coding_ninja",
  "music_lover77",
  "gamer_geek",
  "artistic_soul",
  "travel_bug88",
  "foodie_forever",
  "tech_wizard",
  "bookworm123",
  "fitness_freak",
  "adventure_seeker",
  "movie_buff45",
  "pet_lover",
  "photography_pro",
  "coffee_addict",
  "nature_enthusiast",
  "fashionista21",
  "sports_fanatic",
  "science_geek",
  "yoga_master",
  "history_buff",
  "guitar_hero",
  "dreamer365",
];
//emails
const emails = [
  "alice.smith@example.com",
  "bob.jones@gmail.com",
  "emma.johnson@yahoo.com",
  "alex.brown@hotmail.com",
  "olivia.wilson@email.com",
  "ryan.miller@example.net",
  "grace.davis@gmail.com",
  "michael.evans@example.org",
  "lily.jackson@yahoo.com",
  "noah.anderson@email.net",
  "ava.martin@hotmail.com",
  "liam.harris@example.com",
  "sophia.white@email.org",
  "ethan.carter@gmail.com",
  "mia.robinson@email.net",
  "jack.thomas@example.com",
  "isabella.hall@email.org",
  "william.morris@yahoo.com",
  "emily.clark@example.net",
  "james.wright@email.com",
  "amelia.rogers@hotmail.com",
  "benjamin.hill@email.net",
  "abigail.collins@example.com",
  "logan.price@email.org",
];
/*============  Thoughts  =============*/
//thoughtText
const randomThoughts = [
  "Just had the best brunch ever! 🥑🍳 #FoodieLife #BrunchGoals",
  "Chasing sunsets and good vibes. #Wanderlust #TravelGoals",
  "New year, new me! 💪 #FitnessJourney #HealthyLiving",
  "Coffee is my love language. ☕❤️ #CoffeeAddict #MorningRoutine",
  "Netflix and chill kind of night. 🍿🎬 #MovieNight #RelaxMode",
  "Outfit of the day! 👗👠 #Fashionista #OOTD",
  "Sunday Funday with the squad! 🎉👫 #FriendshipGoals #GoodTimes",
  "Feeling blessed and grateful. 🙏 #Gratitude #PositiveVibes",
  "In love with this book! 📚❤️ #Bookworm #ReadingTime",
  "Work hard, play harder. 💼🎉 #WorkLifeBalance #Hustle",
  "Cooked a gourmet meal tonight! 🍲🍷 #ChefLife #Foodie",
  "Epic concert last night! 🎤🎸 #MusicLover #ConcertLife",
  "Living my best life. ✨ #Blessed #HappyHeart",
  "Nature therapy. 🌳🍃 #OutdoorAdventure #NatureLover",
  "Self-care Sunday. 💆‍♀️💅 #SelfLove #Relaxation",
  "Just got a new pet! Meet my fur baby. 🐾❤️ #PetLove #FurParent",
  "Coding away on a Saturday night. 💻🚀 #TechLife #GeekMode",
  "Goals for the week: hustle and grind. 💪📈 #Motivation #Success",
  "Yoga session to start the day right. 🧘‍♀️☀️ #YogaLife #Wellness",
  "Artistic vibes today. 🎨✨ #Creativity #ArtLover",
  "Major throwback to my favorite vacation. 🏖️✈️ #TravelMemories #TBT",
  "Friday feels! Ready for the weekend. 🎉🥂 #WeekendVibes #FriYay",
  "Tech gadgets obsession. 📱💻 #TechEnthusiast #GadgetLove",
  "Hiking adventure with breathtaking views. ⛰️👟 #HikingLife #Adventure",
  "Late-night thoughts. 🌙✨ #Reflections #LateNight",
  "Sushi date night! 🍣🍱 #DateNight #SushiLover",
  "DIY project in progress. 🔨🎨 #DIYCrafts #Creativity",
  "Sunday brunch with mimosas. 🥂🍓 #BrunchTime #SundayFunday",
  "Obsessed with this new skincare routine. 💆‍♂️✨ #SkincareRoutine #GlowingSkin",
  "Behind the scenes of my daily hustle. 📸💼 #WorkMode #HustleHard",
  "Chasing dreams and making memories. 🌈💫 #DreamBig #Memories",
];

/*============  Reactions  =============*/
//reactionBody
const randomReactions = [
"OMG, I can't even!",
"This is everything!",
"Literally dying right now 😂",
"Can't stop laughing!",
"Mood. 😂",
"Speechless.",
"My life is complete now.",
"Slay, queen!",
"Goals AF!",
"I can't with this!",
"Sending you all the good vibes!",
"Why is this so relatable?",
"I'm deceased 💀",
"Living for this moment!",
"Who else is obsessed?",
"This just made my day!",
"I can't stop watching!",
"Brb, dying of laughter.",
"This is a whole mood.",
"Take my money!",
"Feeling attacked but in a good way.",
"Just WOW!",
"OMG, where has this been all my life?",
"I stan this so hard!"];

/*============  Functions  =============*/
// Get a random item given an array
const getRandomArrItem = (arr) => {
  if (arr.length == null) {
    return;
  }
  const index = [Math.floor(Math.random() * arr.length)];
  const item = arr[index];
  arr.splice(index, 1);
  return item;
};

const fakeUsers = () => {
  const results = [];
  for(i=0; i < usernames.length; i++) {
    results.push({
      username: usernames[i],
      email: `${getRandomArrItem(emails)}`,
      thoughts: [],
      friends: []
    });
  };
  return results;
};

const fakeThoughts = () => {
  const results = [];
  for(i=0; i < usernames.length; i++) {
    results.push({
      thoughtText: randomThoughts[i],
      username: usernames[i]})
  };
  return results;
};

//Assign Random friends to Users

//Create reactions from random users and assigned to random thoughts.

//mongodb://127.0.0.1:27017/socialNetDB
module.exports = {fakeUsers, fakeThoughts};