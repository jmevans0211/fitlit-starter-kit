const chai = require('chai');
const expect = chai.expect;
const HydrationUser = require('../src/HydrationUser');
const hydrationTestData = require('../data/test-data/hydration-test-data');

describe('HydrationUser', function() {
  it.only('should be a function', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(HydrationUser).to.be.a('function');
  });

  it.only('should access array of test data', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.hydrationTestData).to.equal(hydrationTestData)
  });

  it.only('should find user hydration info based on date', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.findDailyHydration("2019/06/15", 1)).to.equal(
      {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    })
  })







});