class Temp4 {
    celcius;
    constructor(celcius) {
        this.celcius =celcius;
    }
    convertToFah(celcius) {
        return (this.celcius*1.8 +32);
    }
    convertToKelvin(celcius) {
        return (this.celcius+273.15);

    }

}