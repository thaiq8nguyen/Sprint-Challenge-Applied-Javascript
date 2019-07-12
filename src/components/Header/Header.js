// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

import React from "react";
import styles from "./Header.less";

const Header = () => {
  return (
    <div className={styles.header}>
      <span className={styles.date}>SMARCH 28, 2019</span>
      <h1>Lambda Times</h1>
      <span className={styles.temp}>98°</span>
    </div>
  );
};

export default Header;
