// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Cards.less";
import localImageURL from "../../assets/bones.jpg";

const Cards = ({ topic }) => {
  const [cards, setCards] = useState([]);

  /*START API*/
  useEffect(() => {
    axios
      .get("https://lambda-times-backend.herokuapp.com/articles")
      .then(response => {
        const articles = response.data.articles;
        const modTopic = topic === "node.js" ? "node" : topic;
        const cards = articles[modTopic];
        setCards(cards);
      });
  }, [topic]);
  /*START API*/

  return (
    <div className={styles["cards-container"]}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.headline}>{card.headline}</div>
          <div className={styles.author}>
            <div className={styles["img-container"]}>
              <img src={localImageURL} alt="" />
            </div>
            <span>By {card.authorName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
