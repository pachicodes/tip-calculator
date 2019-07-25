let bill = document.querySelector('[data-bill]');
let percent = document.querySelector('[data-percent]');
let res = document.querySelector('[data-res]');

function calcTip() {
    if (bill.value <= 0 || percent.value <= 0) {
        window.alert('Please enter the numbers dude.')
    }
let billNum = Number(bill.value);
let percentNum = Number(percent.value);

let tip = (billNum * percentNum) / 100;
console.log(tip)
}