const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());

let cardChosen = [];

const gridDisplay = document.querySelector("#grid");

const checkMatch = () => {
  console.log("check for a match");
};

const flipCard = (e) => {
  const cardId = e.target.getAttribute("data-id");
  cardChosen.push(cardArray[cardId].name);
  console.log("clicked", cardId);
  console.log("Card Choosen :", cardChosen);
  e.target.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
};

const createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    gridDisplay.appendChild(card);
    card.addEventListener("click", flipCard);
  }
};

createBoard();

// const compare = () => {

// }
