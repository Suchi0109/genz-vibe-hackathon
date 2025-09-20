GenZ Vibes Hackathon Prototype 🚀
This is a hackathon prototype for the GenZ Vibes project. It includes login/register pages, a Gemini API integration (for AI responses), and Firebase authentication & Firestore setup.
⚠️ Note: This repository does not include real API keys or Firebase credentials. You must add your own to run the project.

Setup Instructions:
1.Clone the repo : 
git clone https://github.com/Suchi0109/genz-vibe-hackathon.git
cd genz-vibe-hackathon

2.Firebase Setup : Create a Firebase project and enable Authentication and Firestore.
Replace the placeholder in gemini.html and firebaseConfig in your JS files:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};


3.Gemini API :Replace the Gemini API key in gemini.html with your own:
const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY";

4.Run locally :Use any static server or VS Code Live Server to run HTML files.
Features :
a.Login/Register with Firebase Auth
b.Firestore database integration
c.Dark/Light theme toggle
d.Password strength meter
e.AI integration using Gemini API

5.License : This project is licensed under the MIT License – see the LICENSE
 file for details.

This project is licensed under the MIT License – see the LICENSE
 file for details.
