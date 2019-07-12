// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
import React, { useState, useEffect } from "react";
import axios from "axios";

import styles from "./Tabs.less";

const Tabs = ({ onTabClick }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios
      .get("https://lambda-times-backend.herokuapp.com/topics")
      .then(response => setTopics(response.data.topics));
  }, []);

  const handleTabClick = topic => {
    onTabClick(topic);
    //console.log(index);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.topics}>
        {topics.map((topic, index) => (
          <div
            key={index}
            className={styles.tab}
            onClick={() => handleTabClick(topic)}
          >
            {topic}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
