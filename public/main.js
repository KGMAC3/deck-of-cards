var cards = []
var names = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace"
]
var suits = ["Hearts", "Diamonds", "Spades", "Clubs"]

function card(value, name, suit) {
  this.value = value
  this.name = name
  this.suit = suit

  if (name == "Jack") {
    this.cardvalue = 10
  } else if (name == "Jack") {
    this.cardvalue = 10
  } else if (name == "Queen") {
    this.cardvalue = 10
  } else if (name == "King") {
    this.cardvalue = 10
  } else if (name == "Ace") {
    this.cardvalue = 11
  } else {
    this.cardvalue = value + 1
  }

  var exercise = ""

  if (suit == "Hearts") {
    exercise = "Jumping Jacks"
  } else if (suit == "Diamonds") {
    exercise = "Crunches"
  } else if (suit == "Spades") {
    exercise = "Push Ups"
  } else if (suit == "Clubs") {
    exercise = "Squats"
  }

  this.exercise = exercise
}

function deck() {
  for (var s = 0; s < suits.length; s++) {
    for (var n = 0; n < names.length; n++) {
      // eslint-disable-next-line new-cap
      cards.push(new card(n + 1, names[n], suits[s]))
    }
  }

  return cards
}

deck()

// eslint-disable-next-line no-unused-vars
function btnclick() {
  var card

  if (cards.length > 0) {
    var randIndex = Math.floor(Math.random() * cards.length)
    card = cards.splice(randIndex, 1)[0]
    document.getElementById("divexercise").innerHTML =
      card.name +
      " of " +
      card.suit +
      " do " +
      card.cardvalue +
      " " +
      card.exercise
    console.log(
      card.name +
        " of " +
        card.suit +
        " do " +
        card.cardvalue +
        " " +
        card.exercise
    )
  } else {
    document.getElementById("divexercise").innerHTML =
      "All cards have been dealt."
    console.log("All cards have been dealt.")
  }
}
