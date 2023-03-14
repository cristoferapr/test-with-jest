const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


const fromDollarToYen = (usd) => {
    return (usd * 106.584)
}

const fromEuroToDollar = (eur) => {
    return (eur * 1.2)
}

const fromYenToPound = (yen) => {
    return (yen * 0.00625 )
}

module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
}