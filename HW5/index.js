let hours = Number(prompt('Input hours, please'));

while(isNaN(hours)) {
    hours = Number(prompt('Error: please input correct number of hours'));
}

const seconds = (hours * 3600).toFixed(2);

alert(`${hours}h = ${seconds}s`);