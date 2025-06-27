# Counter Application

A simple, interactive counter web application built with HTML, CSS, and JavaScript. This application allows users to increment, decrement, save, and reset a counter value with persistent storage using localStorage.

## Features

- **Increment/Decrement**: Increase or decrease the counter value by 1
- **Save**: Store the current counter value in browser's localStorage
- **Reset**: Reset the counter to 0 and update localStorage
- **Persistent Storage**: Counter value is automatically loaded from localStorage on page load
- **Responsive Design**: Clean, centered layout that works on different screen sizes

## Files Structure

```
Counter/
│
├── index.html      # Main HTML structure
├── script.js       # JavaScript functionality
├── style.css       # Styling and layout
└── README.md       # Project documentation
```

## How to Use

1. **Open the Application**: Open `index.html` in your web browser
2. **Increment**: Click the "Increment" button to increase the counter by 1
3. **Decrement**: Click the "Decrement" button to decrease the counter by 1
4. **Save**: Click the "Save" button to store the current value in localStorage
5. **Reset**: Click the "Reset" button to set the counter back to 0

## Technical Details

### HTML Structure
- Simple layout with a heading, paragraph for displaying count, and four buttons
- Uses semantic HTML elements for accessibility

### CSS Features
- Flexbox layout for center alignment
- Responsive design with proper spacing
- Clean button grouping (upper row: Increment/Decrement, lower row: Save/Reset)

### JavaScript Functionality
- **Variables**: 
  - `paragraph`: References the DOM element displaying the count
  - `count`: Stores the current counter value
- **Functions**:
  - `Increment()`: Increases count and updates display
  - `Decrement()`: Decreases count and updates display
  - `Save()`: Saves current count to localStorage
  - `Reset()`: Resets count to 0 and updates both display and localStorage
  - `getData()`: Retrieves saved count from localStorage on page load

### Browser Compatibility
- Works in all modern browsers that support localStorage
- No external dependencies required

## Getting Started

1. Clone or download the project files
2. Open `index.html` in any modern web browser
3. Start using the counter immediately - no setup required!

## Browser Storage
The application uses localStorage to persist the counter value between browser sessions. The saved value will be automatically loaded when you reopen the page.

## Future Enhancements
- Add custom increment/decrement values
- Add sound effects for button clicks
- Include animation transitions
- Add keyboard shortcuts
- Theme customization options

---

**Created**: JavaScript Counter Application  
**Technologies**: HTML5, CSS3, Vanilla JavaScript
