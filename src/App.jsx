import { useEffect, useState } from "react";

import HabitForm from "./components/HabitForm";
import HabitRow from "./components/HabitRow";
import EmptyState from "./components/EmptyState";
import WeekNavigator from "./components/WeekNavigator";

import {
  getStartOfWeek,
  getWeekDays
} from "./utils/dateUtils";

export default function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");

    return saved ? JSON.parse(saved) : [];
  });

  const [currentWeek, setCurrentWeek] = useState(
    getStartOfWeek(new Date())
  );

  useEffect(() => {
    localStorage.setItem(
      "habits",
      JSON.stringify(habits)
    );
  }, [habits]);

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      completed: {}
    };

    setHabits((prev) => [...prev, newHabit]);
  };

  const toggleHabit = (habitId, dateKey) => {
    setHabits((prev) =>
      prev.map((habit) => {
        if (habit.id !== habitId) return habit;

        return {
          ...habit,
          completed: {
            ...habit.completed,
            [dateKey]:
              !habit.completed?.[dateKey]
          }
        };
      })
    );
  };

  const renameHabit = (habitId, newName) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === habitId
          ? {
              ...habit,
              name: newName
            }
          : habit
      )
    );
  };

  const deleteHabit = (habitId) => {
    setHabits((prev) =>
      prev.filter(
        (habit) => habit.id !== habitId
      )
    );
  };

  const weekDays = getWeekDays(currentWeek);

  const goPrevWeek = () => {
    const prev = new Date(currentWeek);

    prev.setDate(prev.getDate() - 7);

    setCurrentWeek(prev);
  };

  const goNextWeek = () => {
    const next = new Date(currentWeek);

    next.setDate(next.getDate() + 7);

    setCurrentWeek(next);
  };

  const goCurrentWeek = () => {
    setCurrentWeek(
      getStartOfWeek(new Date())
    );
  };

  return (
    <div className="container">
      <h1>Habit Tracker</h1>

      <HabitForm addHabit={addHabit} />

      <WeekNavigator
        goPrevWeek={goPrevWeek}
        goNextWeek={goNextWeek}
        goCurrentWeek={goCurrentWeek}
      />
<div className="week-range">
  {weekDays[0].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  })}
  {" - "}
  {weekDays[6].toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })}
</div>
      <div className="days-header">
        <div></div>

        {weekDays.map((day) => (
          <div key={day}>
            {day.toLocaleDateString(
              "en-US",
              {
                weekday: "short"
              }
            )}
          </div>
        ))}
      </div>

      {habits.length === 0 ? (
        <EmptyState />
      ) : (
        habits.map((habit) => (
          <HabitRow
            key={habit.id}
            habit={habit}
            weekDays={weekDays}
            toggleHabit={toggleHabit}
            renameHabit={renameHabit}
            deleteHabit={deleteHabit}
          />
        ))
      )}
    </div>
  );
}