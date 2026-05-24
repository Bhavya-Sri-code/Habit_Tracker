# Habit Tracker

A responsive single-page habit tracker built with React and Vite.

The application allows users to:
- Add habits
- Rename habits
- Delete habits
- Track daily completion using a weekly grid
- Build consecutive streaks
- Navigate between weeks
- Persist progress across page reloads

---

# Tech Stack

- React
- Vite
- CSS
- LocalStorage
- Lucide React Icons

---

# Features

## Habit Management
- Add new habits
- Rename habits inline
- Delete habits instantly

## Weekly Tracking Grid
- Habits displayed vertically
- Seven-day weekly layout
- Toggleable completion cells
- Today's column visually highlighted

## Date Navigation
- Previous week navigation
- Next week navigation
- Back to current week shortcut
- Dynamic weekly date range display

## Streak Tracking
- Consecutive-day streak calculation
- Works across multiple weeks
- Historical checkmarks preserved after refresh

## Persistence
- Habits and progress stored in LocalStorage
- Data survives full page reloads

## Responsive Design
- Desktop-friendly grid layout
- Mobile-responsive stacked layout
- Optimized for smaller screens

---

# Run Locally

## Requirements

- npm

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

LIVE SERVER - https://habit-tracker-devweekend.netlify.app/

# Start development server
npm run dev
