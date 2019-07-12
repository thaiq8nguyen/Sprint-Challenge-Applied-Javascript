import React, { useState } from "react";
import { render } from "react-dom";
//import styles from "./CSS/app.css";
import TopBar from "./components/TopBar/TopBar";
import Header from "./components/Header/Header";
import Tabs from "./components/Tabs/Tabs";
import Cards from "./components/Cards/Cards";

const App = () => {
  const [tab, setTab] = useState("javascript");
  const handleTabClick = index => {
    setTab(index);
  };
  return (
    <div>
      <TopBar />
      <Header />
      <Tabs onTabClick={handleTabClick} />
      <Cards topic={tab} />
      {/* <div className={styles["top-bar"]}>
        <div className={styles["container"]}>
          <div className={styles["container-left"]}>
            <span>TOPICS</span>
            <span>SEARCH</span>
          </div>
          <div className={styles["container-center"]}>
            <span>GENERAL</span>
            <span>BROWNBAG</span>
            <span>RANDOM</span>
            <span>MUSIC</span>
            <span>ANNOUNCEMENTS</span>
          </div>
          <div className={styles["container-right"]}>
            <span>LOG IN</span>
          </div>
        </div>
      </div> */}

      {/* <div className={styles["header-container"]}></div>

      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
        </div>
      </div>

      <div className={styles["carousel-container"]}></div>

      <div className={styles["cards-container"]}></div> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
