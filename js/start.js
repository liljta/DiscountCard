const Card = require('./classes/Card.js');
const readline = require('readline');
let card;
const readCard = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Введите номер карточки> '
});

const shop = function () {
    const readShop = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'Введите сумму покупок> '
    });
    readShop.prompt();
    readShop.on('line', (line) => {
        let sum = parseFloat(line.trim());
        if (sum > 0) {
            card.Buy(sum);
            card.ShowCard();
            readShop.prompt();
        } else {
            readShop.close();
        }
    }).on('close', () => {
        console.log('Пакет потрибен? Гарного настрыю, прыходьте ще!');
        process.exit(0);
    });
};

readCard.prompt();

readCard.on('line', (line) => {
    card = new Card(line.trim());
    card.ShowCard();
    readCard.close();
}).on('close', () => {
    shop();
});


