let activity_data = [
    {
        name: "Thrift Shopping",
        description: "Go out with friends and find some vintage to add to yor wardrobe.",
        outside: true,
        physical_effort: true, // If we swipe down on 2 and physical_effort is true then display
        cost: true, // If we swipe up on 1 and cost is true then display
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Swimming",
        description: "Hop in the deep end and enjoy some time by the pool.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Hot Tubbing",
        description: "Enjoy the conversation as you soak it up with your friends.",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Frisbee Golf",
        description: "Challenge your skills on the local course.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Mini Golf",
        description: "Enjoy a round of put-put at the local course.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: true,
        thumbs: 0,
    },
    {
        name: "Baking",
        description: "Put your culinary skills to the test with something sweet.",
        outside: false,
        physical_effort: false,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Country Dancing",
        description: "Show off your best moves and enjoy the country atmosphere.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Swing Dancing",
        description: "Test with a lively night on the dance floor.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Board Game",
        description: "Have some casual fun with friends while you roll the dice.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Watch a Movie",
        description: "Kick back and break out popcorn for a chill evening on the couch.",
        outside: false,
        physical_effort: false,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Nerf War",
        description: "Test your aim and your accuracy in a friendly shootout.",
        outside: false,
        physical_effort: true,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Axe Throwing",
        description: "Blow off some steam and test your axe-throwing skills.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Football",
        description: "Get outside and perfect that spiral.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Kickball",
        description: "Imagine the face of your worst enemy when you kick it out of the park.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: true,
        thumbs: 0,
    },
    {
        name: "Four Square",
        description: "Bounce it back and forth and enjoy the childhood nostaliga.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Badminton",
        description: "Test your reflexes and your agility with a fun game of birdie.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Volleyball",
        description: "Work on that jump serve and enjoy some game time with your friends.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Pickleball",
        description: "Work on that backand with your giant ping-pong paddle.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Corn Hole",
        description: "Test your aim and your patience as you compete with friends.",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Painting",
        description: "Find you inner Picasso and unleash your creativity.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Drawing",
        description: "Use your imagination and experience the simple joy of doodling.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Photoshoot",
        description: "Break out your best pose for the camera, even if it's just your phone.",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Walk",
        description: "Take some time to enjoy peace and quiet of the outdoors.",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Jenga",
        description: "Test your skills of strategy and balance with this fun game.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Bike Ride",
        description: "Enjoy a casual ride on the town with friends.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Checkers",
        description: "Enjoy the simple pleasure of a classic game of checkers.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Make Dinner",
        description: "Unleash your inner Gordon Ramsy and cook a meal for your friends.",
        outside: false,
        physical_effort: false,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Restaurant",
        description: "Eating out is always a win. Enjoy a the food and have some fun.",
        outside: true,
        physical_effort: false,
        cost: true,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Pictionary",
        description: "Put those doodling skills from Spanish class to the test.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Build a Fort",
        description: "Your inner 9-year-old will thank you for building a fort with friends.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Mario Kart",
        description: "Enjoy this Nintendo classic and race against your friends.",
        outside: false,
        physical_effort: false,
        cost: true,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Rock Climbing",
        description: "Get your adrenaline fix with your friends at the local rock climbing gym.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Truth or Dare",
        description: "Get real with your friends and laugh all night",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Water Balloon Fight",
        description: "Test your aim against your friends, just try not to hit anyone in the face.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Pottery-Making",
        description: "Schedule a time at a local studio and make something one of a kind.",
        outside: true,
        physical_effort: false,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Star Gazing",
        description: "Throw down a blanket and take in all the beauty the night sky has to offer.",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Chess",
        description: "Challenge your intellect with this classic game of strategy.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Sidewalk Chalk",
        description: "Embrace your inner child and cover the pavement with your work of art",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: true,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Tennis",
        description: "Practice your yell along with your backhand.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: true,
        thumbs: 0,
    },
    {
        name: "Oragami",
        description: "Find relaxation as you learn the acient art of Oragami.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Goat Yoga",
        description: "Find you inner peace with the company of tiny goats.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Puppy Barn",
        description: "Get your emotoinal boost for the next 20 years by visiting your local Puppy Barn.",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: true,
        thumbs: 0,
    },
    {
        name: "Yoga",
        description: "Achieve balance of mind and body with this relaxing home workout.",
        outside: false,
        physical_effort: true,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Jogging",
        description: "Have fun with your friends as you go out for a jog.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Archery",
        description: "If the Hunger Games ever happen this will be a must-have skill.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Among Us",
        description: "Enjoy this digital game of mafia with yout friends, either remotely or in-person.",
        outside: false,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: false,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "HeadsUp!",
        description: "Trivia has never been more fun than with this classic app.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: true,
        thumbs: 0,
    },
    {
        name: "Panda Express",
        description: "Enjoy an authentic Chinese meal at your local Panda Express.",
        outside: true,
        physical_effort: false,
        cost: true,
        equipment_required: false,
        long: false,
        promoted: true,
        thumbs: 0,
    },
    {
        name: "Cafe Rio",
        description: "Enjoy the finest authientic Mexican Food in Utah at Cafe Rio.",
        outside: true,
        physical_effort: false,
        cost: true,
        equipment_required: false,
        long: false,
        promoted: true,
        thumbs: 0,
    },
    {
        name: "Escape Room",
        description: "Work with freinds to solve puzzles and escape as fast as possible.",
        outside: true,
        physical_effort: false,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Hike the Y",
        description: "The view is always worth it after completing this classic hike in Provo.",
        outside: true,
        physical_effort: true,
        cost: false,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "BYU Museum of Art",
        description: "Take in the world-class exhibits and even grab a bite at the BYU MOA.",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "BYU Bean Museum",
        description: "Learn more about the world around you at the BYU bean museum.",
        outside: true,
        physical_effort: false,
        cost: false,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Sundance Resort",
        description: "Take in the scenery and the slopes at Sundance.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: true,
        long: true,
        promoted: true,
        thumbs: 0,
    },
    {
        name: "Ice Skating",
        description: "Enjoy the thrill of skating at the rink, just try not to fall.",
        outside: true,
        physical_effort: true,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
    {
        name: "Bonfire",
        description: "Find a fire ring at a local park or camp site and enjoy the fire.",
        outside: true,
        physical_effort: false,
        cost: true,
        equipment_required: false,
        long: true,
        promoted: false,
        thumbs: 0,
    },
];

export default activity_data;