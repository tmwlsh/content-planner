import React from "react"

import styles from './calendar.module.scss';

import calendarData from '../../data/content-calendar.json';

const Calendar = () => {

  const months = calendarData.map(month => {
    return (
      <p>{month.month}</p>
    );
  });

  console.log(calendarData);

  const days = calendarData.map(month => {
    month.days.map(day => {
      return (
        <p>{day.name}</p>
      )
    })
  });

  return (
    <div className={styles.calendar}>
      <h1>what?</h1>
      {months}
      {days}
    </div>
  )
}

export default Calendar
