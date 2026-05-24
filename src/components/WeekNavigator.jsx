export default function WeekNavigator({
  goPrevWeek,
  goNextWeek,
  goCurrentWeek
}) {
  return (
    <div className="week-nav">
      <button onClick={goPrevWeek}>← Previous</button>

      <button onClick={goCurrentWeek}>Today</button>

      <button onClick={goNextWeek}>Next →</button>
    </div>
  );
}