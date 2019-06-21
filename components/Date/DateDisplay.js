

class DateDisplay {
    constructor(element) {
        this.element = element;

        this.date = new Date();

        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        this.formatDate = `${this.days[this.date.getDay()]} ${this.date.getMonth() + 1}/${this.date.getDate() + 1}/${this.date.getFullYear() + 1}`

        this.element.textContent = this.formatDate;
    }
}

new DateDisplay(document.querySelector(".date"));
