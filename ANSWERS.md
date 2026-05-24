# 1. How to run

## Requirements

- npm installed

## Setup & Run

```bash
# Create React + Vite project
npm create vite@latest habit-tracker -- --template react

# Move into project folder
cd habit-tracker

# Install dependencies
npm install

# Install Lucide React icons
npm install lucide-react

# Start development server
npm run dev


2. Stack & design choices

I chose React with Vite because the application is heavily state-driven. Updating habits, toggling daily completion, recalculating streaks, and navigating between weeks all require efficient UI rerendering. React made it easy to break the app into reusable components like HabitRow, HabitForm, and WeekNavigator.

I used Vite instead of older tooling because it provides a faster development server, simpler configuration, and a better overall developer experience for modern frontend applications.

Design Decision 1 — Weekly Grid Layout

I used a grid layout instead of separate cards because habit tracking is comparison-oriented. Users should be able to scan:

vertically to evaluate consistency for a single habit
horizontally to compare progress across different days

This decision affects the main weekly tracking section of the app and makes patterns easier to understand at a glance.

Design Decision 2 — Highlighting Today's Column

Today's cells use a highlighted border instead of a fully colored background. During testing, full background highlights made completed cells visually noisy and reduced the contrast between checked and unchecked states.

Using a border keeps today's position visible while still allowing completed checkmarks to stand out clearly.

Week Start Choice

I chose Monday as the start of the week because it aligns more naturally with productivity planning, study routines, and work schedules.

Streak Logic Choice

The streak is calculated from the latest continuous sequence of completed days rather than strictly from the current real-world date. This allows streaks to remain accurate even when users navigate across weeks and complete previous or future dates.


3. Responsive & accessibility
Responsive Behavior
On a 1440px laptop
The tracker displays as a full horizontal grid
All seven days remain visible simultaneously
Habit names, streak counters, and actions align cleanly
On a 360px phone
The layout stacks vertically
Habit details appear above the weekly grid
Touch targets become larger for easier tapping
The interface avoids horizontal scrolling
Accessibility Consideration Implemented

I added:

semantic button elements
keyboard-accessible interactions
aria-labels for habit tracking cells
strong color contrast between active and inactive states
Accessibility Consideration Skipped

I did not implement screen-reader live announcements for streak updates because of time constraints. With more time, I would add ARIA live regions so streak changes are announced dynamically.


4. AI usage

I used ChatGPT during development for:

refining streak calculation logic
debugging date persistence issues
improving responsive layout ideas

One AI-generated version initially calculated streaks only from the current real-world date. This caused incorrect streak behavior when navigating across weeks. I changed the logic to calculate streaks from the latest continuous completed sequence instead, which correctly handles historical and future week navigation.

Another AI suggestion used fixed-width grid columns. I replaced this with flexible CSS grid columns using:

grid-template-columns: repeat(7, 1fr);

This improved responsiveness and prevented layout overflow on narrow mobile screens.


5. Honest gap

The least polished part of the submission is interaction feedback and visual polish.

Currently, checkmarks toggle instantly without animations or milestone feedback. With another day, I would improve:

smooth checkmark transitions
streak milestone celebrations
subtle hover and tap animations
drag-and-drop habit ordering

These additions would make the app feel more engaging and polished for daily use.