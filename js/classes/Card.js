
class  Card {
    constructor(number) {
        this.number = number;
        this.discount = 1;
        this.total = 0;
    }
    ShowCard(){
        console.log('========================');
        console.log(`Номер картки: ${this.number}`);
        console.log(`Знижка: ${this.discount}%`);
        console.log(`Сумма покупок: ${this.total} грн.`);
        let sum = this.total / 1000;
        let nextDiscount = Math.round((Math.ceil(sum) - sum) * 1000);
        if (nextDiscount === 0) {
            nextDiscount = 1000;
        }
        console.log(`До увеличения скидки: ${nextDiscount} грн.`);
    }
    Buy(sum) {
        let discountSum = sum * this.discount / 100;
        console.log('*********');
        console.log(`Сумма:  ${sum}`);
        console.log(`Скидка(${this.discount}%): ${discountSum}`);
        console.log(`Итого:  ${sum - discountSum}`);
        console.log('*********');
        this.total += sum;
        this.discount = 1 + Math.floor(this.total / 1000);
    }
}

module.exports = Card;