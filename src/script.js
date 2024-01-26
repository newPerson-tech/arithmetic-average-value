const firstInputValue = +prompt('Enter any integer');
const secondInputValue = +prompt('Enter one more integer');
const thirdInputValue = +prompt('And another integer, please');

const inputValues = [firstInputValue, secondInputValue, thirdInputValue];

function findArithmeticAverageValue(values) {
    if (values.length === 0) {
        return 0;
    }

    const summ = values.reduce((accumulator, currentValue) =>
        accumulator + currentValue, 0);
    return (summ / values.length).toFixed(2);
}

const message = `Arithmetic average of numbers entered is ${findArithmeticAverageValue(inputValues)}`;
alert(message);