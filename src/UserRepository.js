class UserRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    return this.data.find(user => id === user.id);
  }

  returnAverageStepsGoal() {
    return Math.ceil(this.data.reduce((acc, element) => {
      return acc + element.dailyStepGoal}, 0) / this.data.length);
  }

  getUserGoal(id) {
    return this.findUserData(id).dailyStepGoal;
  }

  getUserGoalAverage() {
    var goals= this.data.map(user => {
      return user.dailyStepGoal
    }).reduce((acc, goal) => {
      acc += goal;
        return acc;
    }, 0)
    
    return Math.round(goals / this.data.length);
  }

  compareGoals(id) {
    let difference = this.getUserGoal(id) - this.getUserGoalAverage();
    
    return this.getUserGoal(id) > this.getUserGoalAverage() ?
    `Your step goal is ${difference} steps more than the user average.`
    : `Your step goal is ${Math.abs(difference)} steps less than the user average.`
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}