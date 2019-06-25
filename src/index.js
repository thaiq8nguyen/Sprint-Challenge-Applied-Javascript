import _ from "lodash";
import DateDisplay from "./components/Date/DateDisplay";
import TabLink from "./components/Tabs/Tabs.js";
import Carousel from "./components/Carousel/Carousel";
import Card from "./components/Cards/Card";
import "./less/index.less";


const title = document.querySelector(".header h1");
title.textContent = "Los Angeles Times";


new DateDisplay(document.querySelector(".date"));
new Carousel(document.querySelector(".carousel"));
let tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => new TabLink(tab));

//new Card(document.querySelector("#bones"))

