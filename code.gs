function doPost(e) {
  const sheet = SpreadsheetApp.openById('[SheetIDhere]').getSheetByName('rating');

  const letter = e.parameter.letter;
  const bracelet = e.parameter.bracelet;
  const memoryjar = e.parameter.memoryjar;

  sheet.appendRow([
    new Date(),
    letter,
    bracelet,
    memoryjar
  ]);

  // 🎉 Return a fully styled HTML thank-you page
  const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You 💖</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      background: #fff0f5;
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem;
      min-height: 100vh;
      margin: 0;
    }

    .card {
      background: white;
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 100%;
      max-width: 400px;
    }

    h1 {
      font-size: 2rem;
      color: #ec4899;
      margin: 0;
    }

    p {
      font-size: 1.2rem;
      margin-top: 0.5rem;
      color: #555;
    }

    /* 📱 Extra small screen support */
    @media (max-width: 360px) {
      .card {
        padding: 1.5rem;
      }
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>💖 Thank You!</h1>
    <p>Your ratings were received! You're the best. 🥹💘</p>
  </div>
</body>
</html>

  `;

  return HtmlService.createHtmlOutput(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
