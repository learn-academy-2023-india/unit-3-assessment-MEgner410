import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1)
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)] 
    }`
    // In number 1, the const will produce a random card by suit and face value. Math.floor, Math.random and arry.length make a diffrent index for rank and suit arrays casuing a diffret card to be chossen. 

    // 2)
    if (hand.indexOf(draw) === -1) {

    // the indexOf checks to see if the drawn card is in your hand or not. the === -1, looks for a true or false value. if its -1 the card is not in the hand

      // 3)
      setHand([...hand, draw])

    // this shows that the setHand adds a card to the players hand if it is diffrent. the spread operator (...) will crete a new array adding a new card in the current card hand.

      // 4)
    } else if (hand.length !== 52) {

    // this will show that the hand is up to date

      // 5)
      drawCard()

    // as long as the cards are not all drawn or a copy of the card is not in the hand, it continues to draw untill stoped by a duplicate. 

      // 6)
    } else {

    // the else alows a it to draw a unique card, breaking down a large problom into a small one. 

      // 7)
      alert("All cards have been dealt.")
    }
  }

    // the string alearts the player that all cards have been dealt once it reaches the length of the deck ().

  // No need to change anything ABOVE this line ^

  const shuffle = () => {
   setHand([]);
  };

  return (
    <>
    <div>
      <h1>Draw a Card</h1>
      <button onClick={drawCard}>Click to Draw a Card</button>
      <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
  </div>
    </>
  );
}

export default App
