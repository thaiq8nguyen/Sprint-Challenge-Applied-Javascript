class Carousel {
    constructor(element) {
        this.element = element;

        this.images = element.querySelectorAll(".images");

        this.imagesArray = Array.from(this.images);

        this.currentImage = this.imagesArray[0];

        this.currentIndex = this.imagesArray.indexOf(this.currentImage);

        this.imagesLength = this.imagesArray.length;


        this.leftBtn = element.querySelector(".left-button");
        this.rightBtn = element.querySelector(".right-button");

        this.leftBtn.addEventListener("click", () => {
            this.left();
        });

        this.rightBtn.addEventListener("click", () => {
            this.right();    
        })
    }
    left() {

        this.images[this.currentIndex].className = "images"

        if(this.currentIndex === 0) {
            
            this.currentIndex = this.imagesLength - 1;
      
        } else {
            this.currentIndex--;
            
        }

        this.images[this.currentIndex].classList.add("slide-left");

    }
    right() {
        this.images[this.currentIndex].className = "images"

        if(this.currentIndex === this.imagesLength - 1 ) {

            this.currentIndex = 0;

        } else {

            this.currentIndex++;
        }

        this.images[this.currentIndex].classList.add("slide-right");
        
    }
}

let carousel = document.querySelector(".carousel");

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
