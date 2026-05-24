import { useState } from "react";

export default function HabitForm({ addHabit }) {
  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!habit.trim()) return;

    addHabit(habit);
    setHabit("");
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a habit..."
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}