function getSum() {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

function getFrequencyTable() {
    let counts = [];
    for (let number of numbers) {
        if (!counts[number]) counts[number] = 0;
        counts[number]++;
    }
    return counts;
}