import { Trash2 } from "lucide-react";

import {
  formatDateKey,
  isToday,
  getStreak
} from "../utils/dateUtils";

export default function HabitRow({
  habit,
  weekDays,
  toggleHabit,
  renameHabit,
  deleteHabit
}) {
  return (
    <div className="habit-row">
      <div className="habit-info">
        <input
          className="habit-input"
          value={habit.name}
          onChange={(e) =>
            renameHabit(habit.id, e.target.value)
          }
        />

        <span className="streak">
          🔥 {getStreak(habit)} day streak
        </span>
      </div>

      <div className="week-grid">
        {weekDays.map((day) => {
          const key = formatDateKey(day);

          const checked = habit.completed?.[key];

          return (
            <button
              key={key}
              className={`cell ${
                checked ? "checked" : ""
              } ${isToday(day) ? "today" : ""}`}
              onClick={() =>
                toggleHabit(habit.id, key)
              }
              aria-label={`${habit.name} ${key}`}
            >
              {checked ? "✓" : ""}
            </button>
          );
        })}
      </div>

      <button
        className="delete-btn"
        onClick={() => deleteHabit(habit.id)}
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}