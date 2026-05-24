export const getStartOfWeek = (date) => {
  const d = new Date(date);

  const day = d.getDay();

 
  const diff = day === 0 ? -6 : 1 - day;

  d.setDate(d.getDate() + diff);

  d.setHours(0, 0, 0, 0);

  return d;
};

export const formatDateKey = (date) => {
  const year = date.getFullYear();

  const month = String(
    date.getMonth() + 1
  ).padStart(2, "0");

  const day = String(
    date.getDate()
  ).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const getWeekDays = (startDate) => {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(startDate);

    d.setDate(d.getDate() + i);

    return d;
  });
};

export const isToday = (date) => {
  return (
    formatDateKey(date) ===
    formatDateKey(new Date())
  );
};

export const getStreak = (habit) => {
  const completedDates = Object.keys(
    habit.completed || {}
  )
    .filter((date) => habit.completed[date])
    .sort()
    .reverse();

  if (completedDates.length === 0) {
    return 0;
  }

  let streak = 1;

  let current = new Date(completedDates[0]);

  for (let i = 1; i < completedDates.length; i++) {
    const previous = new Date(
      completedDates[i]
    );

    const diff =
      (current - previous) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;

      current = previous;
    } else {
      break;
    }
  }

  return streak;
};