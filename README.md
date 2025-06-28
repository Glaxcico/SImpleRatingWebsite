# 🎁 Birthday Surprise Rating Site

A fun, heartwarming mini web project made to surprise and delight my girlfriend on her birthday. It includes a personalized welcome, a rating form for handmade gifts, and a sweet thank-you message — all wrapped in a cute, mobile-friendly design.
this is also my first project that i made public.
---

## 💡 Features

- 🌸 **Personalized Welcome Page** – A warm message inviting her to begin.
- 📝 **Interactive Rating Form** – Let her rate the handmade gifts like:
  - Letter 📜
  - Bracelet 💫
  - Memory Jar 🫙
- 📊 **Connected to Google Sheets** – Submissions are recorded automatically using Google Apps Script.
- 🎉 **Thank You Page** – Displays a lovely styled confirmation message after submitting.
- 📱 **Fully Mobile-Responsive** – Looks perfect on phones, tablets, and desktops.
- 📦 **Netlify Deployment** – Hosted with a clean, fast URL via Netlify.

---

## 🛠 Tech Stack

- **HTML/CSS (TailwindCSS)** for UI
- **JavaScript** for form handling
- **Google Apps Script** for backend logging to Google Sheets
- **Netlify** for deployment

---

## 🚀 How It Works

1. **index.html** – Welcome screen with a Start button.
2. **rating.html** – Form where she rates each gift.
3. **Google Apps Script** – Handles POST requests and logs them into a Google Sheet.
4. **thankyou.html** – Beautiful message displayed after submission.

---

## 🔐 Privacy First

No tracking, no ads, no third-party nonsense. Just love, creativity, and a dash of tech.

---

## 🛠 Step-by-Step Guide

### ✏️ 1. Customize Your HTML

- Open `index.html`, `rating.html`, and `thankyou.html`(thankyou.html is in code.gs)
- Change any text, emojis, or styles as you'd like
- (Optional) Add more gifts or questions in `rating.html`

---

### 📄 2. Create Google Sheet

1. Create a new Google Sheet  
2. Name one sheet inside it as `rating`  
3. Copy the **spreadsheet ID** from its URL:
"https://docs.google.com/spreadsheets/d/[THIS_IS_THE_ID]/edit"

---

### 🔌 3. Create Google Apps Script Backend

1. Go to [https://script.new](https://script.new)  
2. Paste in`Code.gs`
3. Replace [SheetIDhere] to your sheedid
4. Save → Deploy → Manage deployments
5. Deploy as Web App
   Access: "Anyone" (public)
   Copy the Web App URL (should end with /exec)

### 📄 4. Update the rating.html

1. paste your Web App URL in [ScriptURL]
2. save the file.

### ☁️ 5. Deploy to Netlify (or any thrid party hosting)

A. First Time:
 1. Go to https://netlify.com
 2. Sign in
 3. Click "Add New Site" → "Deploy manually"
 4. Upload your project folder (as a zip or drag-and-drop)

Done! Get your custom Netlify URL

B. Updating Your Site:
1. Go to your existing site dashboard
2. Under Deploys, drag and drop your updated folder
3. It will redeploy with the same URL — no change needed 






