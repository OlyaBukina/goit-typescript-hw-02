/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  MONDAY,
  TUERSDAY,
  WENDESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}
const isWeekend = (day: WeekDays): boolean => {
  if (day === WeekDays.SATURDAY || day === WeekDays.SUNDAY) {
    return false;
  }
  return true;
};
