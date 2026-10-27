# Age Calculator
## Look here
- [lookyourage.netlify.app](https://lookyourage.netlify.app/)
A responsive React application that calculates a person's age in years, months, and days from their date of birth.

## Features

- Calculates age using calendar years, months, and days.
- Starts with an empty date field and placeholder results.
- Prevents selecting a future date and displays a message if an invalid date is submitted.
- Adapts to desktop and mobile screens.
- Includes reusable date form, results, and footer components.

## Getting Started

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal when the server starts.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |
| `npm run server` | Start the JSON Server using `src/db.json` on port 3000. |

## Project Structure

```text
src/
  components/
    AgeResults.jsx   # Displays the years, months, and days
    DateForm.jsx     # Collects the date of birth
    SiteFooter.jsx   # Displays author credit and GitHub links
  App.jsx            # Age calculation and application state
  index.css          # Application styles
  main.jsx           # React entry point
```

## Built With

- React 19
- Vite 8
- Tailwind CSS 4
- Moment.js
- React Icons
- SweetAlert2

## Author

**Eng Brahim** · [GitHub](https://github.com/brahim1-dev)
