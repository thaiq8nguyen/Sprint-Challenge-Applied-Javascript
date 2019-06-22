import  boneImg from "./bones.jpg";

export default class Card {
    constructor(element) {
        this.element = element;
        this.element.src = boneImg;
    }
}