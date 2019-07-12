import React from "react";
import styles from "./TopBar.less";

const TopBar = () => {
  return (
    <div className={styles["top-bar"]}>
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
    </div>
  );
};

export default TopBar;
