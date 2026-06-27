# Productivity Dashboard

A lightweight personal productivity dashboard built with HTML, CSS, and JavaScript.

## Features

- **Live date and time** display
- **Weather widget** using OpenWeatherMap API
- **Task manager / To-do list** with localStorage persistence
- **Daily planner** with hourly input fields and saved schedule
- **Daily motivation quote** refreshed every hour
- **Pomodoro timer** with start, pause, and reset controls
- **Habit tracker** with progress bar and streak counter
- **Theme toggle** for multiple UI themes

## Project Structure

- `index.html` — main dashboard markup
- `style.css` — custom styling and theme definitions
- `script.js` — interactive app logic and localStorage support
- `Gilroy-FREE/` — font asset used by the dashboard
- `*.avif` — background images used in the UI

## Setup & Usage

1. Open the project folder in your code editor.
2. Open `index.html` in a browser.
3. Use the dashboard cards to access:
   - To-do list
   - Daily planner
   - Daily motivation quote
   - Pomodoro timer
   - Habit tracker
4. Click `Change Theme` to switch between themes.

## Notes

- The weather card uses the OpenWeatherMap API key currently defined in `script.js`.
- Tasks, daily plans, quotes, and habits are stored locally in the browser using `localStorage`.

## Customize

- Change the default city in `script.js` by updating the `CITY` constant.
- Replace the background images or update CSS classes to customize the look.
- Add or update planner input labels in `index.html`.

## License

This project is provided as-is for personal use and customization.
