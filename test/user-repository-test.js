const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');

const testUsers = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [
      16,
      4,
      8
    ]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]
  },
  {
    "id": 3,
    "name": "Herminia Witting",
    "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
    "email": "Elwin.Tromp@yahoo.com",
    "strideLength": 4.4,
    "dailyStepGoal": 5000,
    "friends": [
      19,
      11,
      42,
      33
    ]
  }
];

var user1, user2, user3
beforeEach(() => {
  user1 = new User(testUsers[0]);
  user2 = new User(testUsers[1]);
  user3 = new User(testUsers[2]);
});

describe('UserRepository', function() {
  it('should be a function', function() {
    const userRepository = new UserRepository(testUsers);
    expect(UserRepository).to.be.a('function');
  });

  it('should return average step goal amongst all users', function() {
    const userRepository = new UserRepository(testUsers);
    expect(userRepository.returnAverageStepsGoal()).to.equal(6667);
  });

  it('should store users', function() {
    const userRepository = new UserRepository(testUsers);
    expect(userRepository.data).to.equal(testUsers);
  });


  it('should find a user', function() {
    const userRepository = new UserRepository(testUsers);
    expect(userRepository.findUserData(1)).to.deep.equal(testUsers[0])
  });

  it('should compare average step goals to user average', function() {
    const userRepository = new UserRepository(testUsers);
    expect(userRepository.getUserGoal(1)).to.equal(10000)
  });

  it('should compare average step goals to user average', function() {
    const userRepository = new UserRepository(testUsers);
    expect(userRepository.getUserGoalAverage()).to.equal(6667)
  });

  it('should compare average step goals to user average', function() {
    const userRepository = new UserRepository(testUsers);
    expect(userRepository.compareGoals(1)).to.equal('Your step goal is 3333 steps more than the user average.')
  });

});