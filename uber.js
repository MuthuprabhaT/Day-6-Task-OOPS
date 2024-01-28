//Write a class  to calculate  the uber price.
class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
    }
    calculatePrice(distanceInKilometers, timeInMinutes) {
        const distanceCost = distanceInKilometers * this.costPerKilometer;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalFare = this.baseFare + distanceCost + timeCost;
        return totalFare;
    }
}
const baseFare = 2.5; 
const costPerKilometer = 1.5; 
const costPerMinute = 0.3; 
const calculator = new UberPriceCalculator(baseFare, costPerKilometer, costPerMinute);
const distance = 10; 
const time = 20;
const totalPrice = calculator.calculatePrice(distance, time);
console.log(`Uber price for a ${distance} km ride taking ${time} minutes: $${totalPrice}`);