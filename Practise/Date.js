class Date1 {
    day;
    month;
    year;
    constructor(day,month,year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(newDay) {
        this.day = newDay;
    }
    setMonth(newMonth) {
        this.day = newMonth;
    }
    setYear(newYear) {
        this.day = newYear;
    }
    dateToString() {
        return this.getDay() + '/' + this.getMonth() + '/' + this.getYear();
    }
}