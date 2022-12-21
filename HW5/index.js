let hours = Number(prompt('Input hours, please'));

while(isNaN(hours) || hours < 0) {
    hours = Number(prompt('Error: please input correct number of hours (number >= 0)'));
}

const seconds = (hours * 3600).toFixed(2);

alert(`${hours}h = ${seconds}s`);