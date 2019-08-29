class SleepUser {
  constructor(sleepTestData) {
    this.sleepTestData = sleepTestData;
  }

  findUserInfo(id) {
    return this.sleepTestData.filter(user => user.userID === id);
  }

  findDay(date, id) {
    return this.findUserInfo(id).find(user => user.date === date);
  }

  findUserWeeklyInfo(startDate, endDate, id) {
    return this.findUserInfo(id)
    .filter(day => day.date >= startDate && day.date <= endDate);
  }

  findDailySleep(date, id) {
    return this.findDay(date, id).hoursSlept;
  }

  findDailySleepQuality(date, id) {
    return this.findDay(date, id).sleepQuality;
  }

  findAverageHoursSlept(startDate, endDate, id) {
    let totalHours = this.findUserInfo(id)
    .filter(day => day.date >= startDate && day.date <= endDate)
    .map(day => day.hoursSlept)
    .reduce((acc, num) => {
      return acc + num;
    }, 0)
    return Math.round((totalHours / 7) * 10) / 10;
  }

  findAverageQualitySlept(startDate, endDate, id) {
    let totalQuality = this.findUserInfo(id)
    .filter(day => day.date >= startDate && day.date <= endDate)
    .map(day => day.sleepQuality)
    .reduce((acc, num) => {
      acc += num;
      return acc
    }, 0)
    return Math.round(totalQuality / 7 * 10) / 10;
  }

  findSleepComparison(date, id) {
    var userSleepData = this.sleepTestData.filter(user => {
      return user.userID === id
    })
    var infoToday = userSleepData.find(day => {
      return day.date === date
    })
    var indexYesterday = userSleepData.indexOf(infoToday) - 1
    var infoYesterday = userSleepData.slice(indexYesterday, indexYesterday + 1) 
    
    var hoursSleptToday = infoToday.hoursSlept
    var hoursSleptYesterday = infoYesterday[0].hoursSlept

    if (hoursSleptToday < hoursSleptYesterday) {
      return `You slept ${Math.round((1 - (hoursSleptToday / hoursSleptYesterday)) * 100)}% less than yesteday.`
    }  else if (hoursSleptYesterday < hoursSleptToday) {
      return `You slept ${Math.round(hoursSleptYesterday / hoursSleptToday * 100)}% more than yesterday.`
    } else {
      return `You slept the same amount as you did the night before.`
    }
  }

  findWeeklyHoursSlept(startDate, endDate, id) {
    return this.findUserWeeklyInfo(startDate, endDate, id).map(day => {
      return day.hoursSlept
    });
  }

  assignWeeklyHoursSlept(startDate, endDate, id) {
    let counter = 0;
    return this.findWeeklyHoursSlept(startDate, endDate, id).map(day => {
      counter ++;
      return ` Day ${counter}: ${day} `
    })
  }

  findWeeklySleepQuality(startDate, endDate, id) {
    return this.findUserWeeklyInfo(startDate, endDate, id).map(day => {
      return day.sleepQuality
    });
  }

  assignWeeklyQualitySlept(startDate, endDate, id) {
    let counter = 0;
    return this.findWeeklySleepQuality(startDate, endDate, id).map(day => {
      counter ++;
      return ` Day ${counter}: ${day} `
    })
  }
  
}



if (typeof module !== 'undefined') {
  module.exports = SleepUser;
}