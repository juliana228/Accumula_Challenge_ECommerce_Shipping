function findShipDate(includeWeekends, numDays, newDate) {
  const todayNewDate = new Date(newDate);
  //was having issues when passing newDate to make the variable 'today': it would give
  //me the wrong date (yesterdays date) so this was a work around to ensure
  //that if newDate is available for use, we get the correct date
  const today = newDate
    ? new Date(
        todayNewDate.getUTCFullYear(),
        todayNewDate.getUTCMonth(),
        todayNewDate.getUTCDate(),
        todayNewDate.getUTCHours(),
        todayNewDate.getUTCMinutes(),
        todayNewDate.getUTCSeconds(),
        todayNewDate.getUTCMilliseconds()
      )
    : new Date();

  let futureDate = new Date(today + 1);
  let daysLeftToCount = numDays;

  //if includeWeekends is false
  if (!includeWeekends) {
    //we will loop will daysLeftToCount is greater than 0
    while (daysLeftToCount > 0) {
      // we will increment our future date up one day
      futureDate.setDate(futureDate.getDate() + 1);
      //if we are currently accessing does NOT equal sunday or saturday, we will decrement our
      //daysLeftToCount variable
      if (futureDate.getDay() !== 6 && futureDate.getDay() !== 0) {
        daysLeftToCount--;
      }
    }
    //if includeWeekends is true, we will simply just add daysLeftToCount -1 to our future date to get
    //the correct ship date
  } else {
    futureDate.setDate(futureDate.getDate() + daysLeftToCount - 1);
  }

  //create an object of days rather than an array so we can have a constant
  //lookup time to find the day of the week
  const days = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tues',
    3: 'Wed',
    4: 'Thurs',
    5: 'Fri',
    6: 'Sat',
  };
  //use our previously made object to find our day of the week
  const dayOfWeek = days[futureDate.getDay().toString()];
  //use futureDate and method .toLocaleDateString() to get correct formatting for our ship date
  const date = futureDate.toLocaleDateString();
  //return string representing ship date and day of the week
  return `${dayOfWeek}, ${date}`;
}
export default findShipDate;
