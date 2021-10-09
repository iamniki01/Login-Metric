const { expect } = require('@jest/globals');
const lib = require('../controller.js')

test('Test to get sum of last one hour only', () => {
    let visitors = new Map();
    visitors.set(100, 20);
    visitors.set(500, 5);
    visitors.set(1000, 1);
    visitors.set(1500, 1);
    visitors.set(2000, 1);
    visitors.set(4000, 2);  //last 1 hour data sould be not considered it means (last 3600 seconds only)
    var TotalSum = lib.getSum(visitors);
    expect(TotalSum).toBe(10);
    expect(visitors.size).toBe(5);  //it should delete be delete later than an hour.
});

test(' Test to add data in post', () => 
{
    let visitor = new Map();
    var value = 5;
    lib.postActiveVisitorValue(visitor, value);
    expect(visitor.size).toEqual(1); //just checking weather it is taking value into the map.
});