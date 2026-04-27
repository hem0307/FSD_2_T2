const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();
app.use(cookieParser());

// Serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Submit route: store feedback in cookie
app.get('/submit', (req, res) => {
  const { name, email, message, rating } = req.query;

  const feedbackData = { name, email, message, rating };

  // Store feedback in cookie for 10 seconds
  res.cookie('feedback', JSON.stringify(feedbackData), { maxAge: 10000 });

  res.send(`
    <h2>Thank you for your feedback!</h2>
    <p>Your feedback has been recorded.</p>
    <a href="/feedback">View Feedback</a>
  `);
});

// Feedback route: display cookie data
app.get('/feedback', (req, res) => {
  const feedback = req.cookies.feedback;

  if (!feedback) {
    return res.send(`
      <h2>No feedback found or cookie expired.</h2>
      <a href="/">Go back to Home</a>
    `);
  }

  const { name, email, message, rating } = JSON.parse(feedback);

  res.send(`
    <h2>Feedback Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Rating:</strong> ${rating}</p>
    <a href="/logout">Logout</a>
  `);
});

// Logout route: clear cookie and redirect to home
app.get('/logout', (req, res) => {
  res.clearCookie('feedback');
  res.redirect('/');
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
