import React from 'react';

import styles from './Date.module.scss';

type DateProps = {
  startDate: Date;
  endDate?: Date;
  onGoing: boolean;
}
export const DateComponent: React.FC<DateProps> = ({ startDate, endDate, onGoing }) => {
  const formatDateRange = (startDate: Date, endDate: Date | undefined, onGoing: boolean ): string => {
    const monthYearFormatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      year: 'numeric'
    });

    const startMonthYear = monthYearFormatter.format(startDate);

    if (endDate) {
      return `${startMonthYear} - ${monthYearFormatter.format(endDate)}`;
    }

    if (onGoing) {
      return `${startMonthYear} - Present`;
    }

    return startMonthYear;
  }

  return (
    <span className={styles.date}>
      {formatDateRange(startDate, endDate, onGoing)}
    </span>
  );
};