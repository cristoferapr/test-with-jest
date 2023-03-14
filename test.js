const { sum } = require('./app.js');

test ('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
})

const { fromEuroToDollar } = require('./app.js');
test("One euro should be 1.06 dollars", function(){
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2;
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

const { fromDollarToYen } = require('./app.js');
test("One dollar should be 106.584 yens", function(){
    const yens = fromDollarToYen(3.5)
    const expected = 3.5 * 106.584;
    expect(fromDollarToYen(3.5)).toBe(373.044);
})

const { fromYenToPound } = require('./app.js');
test("One yen should be 0.00625 pounds", function(){
    const pounds = fromYenToPound(5)
    const expected = 5 * 0.00625;
    expect(fromYenToPound(5)).toBe(0.03125);
})
