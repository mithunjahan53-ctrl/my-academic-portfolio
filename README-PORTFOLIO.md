# Personal Academic Portfolio Website — Israt Jahan Mithun

A beginner-friendly, professional academic portfolio built with **HTML, CSS and JavaScript**. Designed to be easy to understand, easy to present to a teacher, and simple to customize.

---

## 📁 Project Files & Their Purpose

| File / Folder | Purpose |
|---------------|---------|
| `index.html` | The main webpage. Contains all 11 sections (Hero, About, Education, Skills, Academic Activities, Seminars & Workshops, Volunteering, Certificates, Interests, Future Goals, Contact). All text is marked with `<!-- EDIT: ... -->` comments so you know what to change. |
| `css/style.css` | All styling. Colors, fonts, spacing, layout, responsiveness, and print-friendly rules live here. Change the CSS variables at the top to re-theme the whole site. |
| `js/main.js` | Small interactions: mobile menu, smooth scrolling, active navigation highlight, and the "Save as PDF" button. |
| `images/portrait.svg` | Placeholder portrait on the cover page. Replace with your own photo. |
| `images/cert-placeholder.svg` | Placeholder certificate image used in the Seminars and Certificates sections. |

---

## 🚀 How to Run the Website

You do not need to install anything. Just open the file in a browser:

1. Keep the folder structure exactly as it is (index.html, css/, js/, images/ together).
2. Double-click **`index.html`** — it will open in your default web browser.
3. For auto-refresh while editing (optional), open the folder in VS Code and use the **Live Server** extension.

That's it. No server, no build step, no installation required.

---

## 🖼️ How to Replace the Portrait

1. Get your professional portrait photo (JPG or PNG).
2. Save it into the `images/` folder as `portrait.jpg` (or `portrait.png`).
3. Open `index.html` and find the HERO section. Change:

   ```html
   <img src="images/portrait.svg" alt="Portrait of Israt Jahan Mithun" class="portrait">
   ```

   to:

   ```html
   <img src="images/portrait.jpg" alt="Portrait of Israt Jahan Mithun" class="portrait">
   ```

4. Save and refresh the page.

---

## 📜 How to Add / Replace Certificates

1. Save your certificate image(s) into the `images/` folder (or create an `images/certificates/` subfolder).
2. Open `index.html`.
3. In the **SEMINARS & WORKSHOPS** section and/or the **CERTIFICATES** gallery, change the image source, for example:

   ```html
   <img src="images/certificates/my-seminar-cert.jpg" alt="Certificate" class="cert-img">
   ```

4. Change the nearby text (seminar name, organizer, date, description) — these are all marked `<!-- EDIT: ... -->` or have the class `editable`.

> Note: No achievements or certificates are invented. The placeholders shown are empty templates for you to fill with your real documents.

---

## ✏️ How to Edit Text

Every piece of content is inside `index.html`. Look for comments such as:

```html
<!-- EDIT: Your name -->
<h1 class="hero-name">Israt Jahan Mithun</h1>
```

Change the words between the tags. **Do not change class names** (e.g., `hero-name`, `btn-primary`) — those connect the HTML to the CSS and JavaScript.

---

## 🖨️ Print-Friendly Option (Save as PDF)

- Click the **"Save as PDF"** button on the Contact section, or
- Press `Ctrl + P` (Windows) / `Cmd + P` (Mac) in your browser, then choose **Save as PDF**.

The print styles automatically hide the navigation, buttons, and decorations so the printed version looks clean and professional.

---

## 📱 Responsive Design

The website adapts automatically to mobile phones, tablets, and desktop screens. The navigation becomes a collapsible menu on small screens, and section grids stack vertically.

---

## 🎨 Design Quick Reference

- Background: warm off-white (`#faf9f6`)
- Typography: navy blue (`#1f2a3a`)
- Accent color: soft sage green (`#8fa68f`)
- Fonts: Libre Baskerville (headings) + Open Sans (body)

To change colors, edit the variables at the top of `css/style.css` under `:root`.

---

## ✅ Checklist Before Presenting

- [ ] Portrait replaced with your own photo
- [ ] Email / phone / location checked (Email: mithunjahan53@gmail.com, Phone: 01727700690, Location: Dhaka, Bangladesh)
- [ ] University updated (Manarat International University, Pharmacy, 2nd year)
- [ ] Seminar details filled in (National Research Seminar, Pharmacy Department; date to be confirmed)
- [ ] Volunteering details filled in (Carnival 2.0, Pharmacy Club)
- [ ] LinkedIn link completed (optional — currently a placeholder)
- [ ] Tested "Save as PDF" button
- [ ] Viewed on both desktop and mobile

---

## 🎓 For Your Teacher (Presentation Notes)

- Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools.
- One page with smooth scrolling between all sections.
- All content is editable text; nothing is hardcoded or invented.
- Print-friendly CSS lets you export the portfolio as a PDF.
- Fully responsive for mobile and desktop.
