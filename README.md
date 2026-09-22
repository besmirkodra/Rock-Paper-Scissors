# Rock Paper Scissors Web Game 🎮
[![JavaScript](https://img.shields.io/badge/Language-JavaScript%20(ES6%2B)-yellow?style=flat&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/Frontend-HTML5-orange?style=flat&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Styling-CSS3-blue?style=flat&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-brightgreen?style=flat&logo=github)](https://besmirkodra.github.io/rock-paper-scissors/)

A clean, interactive Rock Paper Scissors browser game built from scratch using vanilla JavaScript, HTML5, and CSS3. Features persistent score tracking, keyboard shortcuts, and an automated continuous play mode.

## 🚀 Live Demo

Play the live game directly on GitHub Pages:  
👉 **[Play Rock Paper Scissors Live](https://besmirkodra.github.io/Rock-Paper-Scissors/)**

---

## ✨ Key Features

* **Interactive Gameplay:** Click-to-play interface with move icon updates.
* **Persistent Score Tracking:** Uses browser `localStorage` to retain total wins, losses, and ties across page refreshes.
* **AutoPlay Engine:** Toggle automated computer-vs-computer gameplay running at 1-second intervals.
* **Keyboard Shortcuts:** Full keyboard support for quick gameplay:
  * <kbd>R</kbd> - Play Rock
  * <kbd>P</kbd> - Play Paper
  * <kbd>S</kbd> - Play Scissors
  * <kbd>Space</kbd> - Toggle AutoPlay mode
* **Score Reset:** Instant score reset with automatic `localStorage` cleanup.

---

## 🛠️ Built With

* **HTML5:** Semantic markup and layout structure.
* **CSS3:** Custom styling, circular button layout, and dark mode interface.
* **JavaScript (ES6):** Event listeners, dynamic DOM manipulation, and `localStorage` state management.

---

## 📁 Repository Structure

```text
.
├── index.html          # Main HTML structure and element bindings
├── website.css         # UI styling, dark theme, and layout rules
├── website.js          # Core game logic, state management, and keyboard shortcuts
├── rock-emoji.png      # Rock move icon asset
├── paper-emoji.png     # Paper move icon asset
└── scissors-emoji.png  # Scissors move icon asset

---
```
## 💻 Local Setup

To run this project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/](https://github.com/)<username>/<repository-name>.git
   ```
2. **Navigate to the project folder:**
   ```bash
   cd <repository-name>
   ```
3. **Open the application:**
   Double-click `index.html` or open it directly inside any web browser.
