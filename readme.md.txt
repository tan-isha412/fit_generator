# I've Nothing To Wear! — Fit Generator

A fun, aesthetic outfit generator built with vanilla HTML, CSS, and JavaScript. Mix and match accessories, tops, bottoms, and shoes to create your perfect look — or hit **Randomize** and let fate decide!
---
## ✨ Features

- 👆 Browse through outfit categories using left/right arrow buttons
- 🎲 Randomize all categories at once with one click
- 🌸 Groovy psychedelic aesthetic with pink background and orange text
- 📱 Responsive layout that works on mobile and desktop

---

## 📁 Project Structure

```
avatar_generator/
├── index.html        # Main HTML structure
├── style.css         # Styling and layout
├── app.js            # JavaScript logic

```

---

## 🚀 How to Run Locally

Add the images of your outfits in a separate folder named tops or bottoms etc or in the same folder itself and then add the path in the beginning of js file where I declared the array for the paths

1. Double-click `index.html`
2. It opens directly in your browser
3. Start mixing outfits!

---


---

## 🛠️ Built With

- **HTML5** — structure
- **CSS3** — styling and layout
- **Vanilla JavaScript** — interactivity (no frameworks!)
- **Google Fonts** — [Boogaloo](https://fonts.google.com/specimen/Boogaloo) for that groovy aesthetic

---

## 🎨 Adding More Outfits

To add more images to any category, drop the image file in the project folder and update the array in `app.js`:

```js
// Example: adding a new top
const tops = [
  "top1.avif", "top2.avif", ..., "top16.avif"  // ← add here
];
```

Supported formats: `.avif`, `.webp`, `.png`, `.jpg`

---

## 📄 License

Free to use and modify for personal projects. Have fun! 🌸