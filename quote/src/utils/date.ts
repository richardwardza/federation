/**
 * Returns the date with added `months` of delay.
 *
 * @param {Number} months - the delay in months
 *
 * @returns {Date}
 */
export const dateWithMonthsDelay = (months) => {
  const date = new Date()
  date.setMonth(date.getMonth() + months)

  return date
}
