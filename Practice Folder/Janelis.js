const janelis ="booty";
const herBooty = "William";

const string = "string";
const number = 33;
const boolean = false;
const x = null;
const y = undefined;

// console.log(`Janelis is ${herBooty}'s ${janelis}!!!`)


// if (janelis === "booty") {
//     console.log("Janelis loves William very much");
// } else {
//     console.log('Janelis hates William with a passion!!!')
// };



// if (janelis === "booty") {
//     console.log("Janelis loves William very much");
// } else {
//     console.log('Janelis hates William with a passion!!!')
// };

// const hobbies = ["Gaming", "Coding", "Drawing", "Touching-Janelis-booty"];

// console.log(hobbies);
// hobbies.push("Working out");
// console.log(hobbies);
// hobbies.unshift("Reading");
// console.log(hobbies);
// hobbies.shift();
// console.log(hobbies);
// hobbies.pop()
// console.log(hobbies);
// hobbies.pop()
// console.log(hobbies);
// hobbies.pop()
// console.log(hobbies);
// hobbies.pop()
// console.log(hobbies);
// console.log(janelis.split(""));
// console.log(janelis.toUpperCase().split(""));

// const types = {
// game: "RPG",
// system: "PS5",
// online: true,
// currentGame: "Marvel Rivals",
// hoursSpent: 30,
// gamesILike: ["Marvel Rivals", "Destiny", "Overwatch", "Dark Souls"]
// };


// console.log(types);
// console.log(types.system);
// console.log(types.gamesILike);

// types.gamesILike.push("Call of Duty");
// types.email = "booty69@I'dHitThat.com";
// console.log(types);

// const {
//     game,
//     system,
//     currentGame,
//     gamesILike
// } = types;

// console.log(game);
// console.log(game, currentGame);
// console.log(gamesILike);

const PsnAccounts = [
    {
        id: 1,
        username: 'vSPECIALISTv',
        main: true
    },
    {
        id: 2,
        username: 'NobleDrKing',
        main: false
    },
    {
        id: 3,
        username: 'RAMPAGE',
        main: false
    }
    
];

// console.log(PsnAccounts);
// console.log(PsnAccounts[0].username);

PsnAccounts.push({
    id: 4,
    username: 'William Sanchez',
    main: false
});

console.log(PsnAccounts);

const PsnAccountsJSON = JSON.stringify(PsnAccounts);

console.log(PsnAccountsJSON);

for (let i = 0; i < PsnAccounts.length; i++){
    console.log(`These are all my PSN accounts ${PsnAccounts[i].id}`);
};