const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

let detailedPlayers = [];
// initialize players with image and strength
const initPlayers = (players) => {
    var i = 0;

    detailedPlayers = PLAYERS.map(function (players) {
        return {
            name: players,
            strenght: getRandomStrength(),
            image: "./images/super-"(++i) + ".png",
            type: "hero|villian",
        }.join('');

    });

    return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment = detailedPlayers.filter(function (type) {
        return (type == (hero | villian));
    }).map(function (players) {
        return `<div class="player">
    <img src="${players[i].image}">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
 </div>`.join('');
    })


    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
    document.getElementsByClassName("player").innerHTML = detailedPlayers;
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}