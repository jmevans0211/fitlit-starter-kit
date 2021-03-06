const chai = require('chai');
const expect = chai.expect;
const HydrationUser = require('../src/HydrationUser');
const hydrationTestData = require('../data/test-data/hydration-test-data');

describe('HydrationUser', function() {
  it('should be a function', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(HydrationUser).to.be.a('function');
  });

  it('should access array of test data', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.hydrationTestData).to.equal(hydrationTestData)
  });

  it('should find hydration info based on date', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.findDailyHydration('2019/06/17', 3)).to.equal(28)
  });

  it('should find weekly hydration info based on id', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.findWeeklyHydration(1)).to.eql([69, 96, 61, 91, 50, 50, 43])
  });

  it('should show hydration day for weekly info', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.assignWeeklyHydration(1)).to.eql(['Day1: 69', 'Day2: 96', 'Day3: 61', 'Day4: 91', 'Day5: 50', 'Day6: 50', 'Day7: 43'])
  });




});