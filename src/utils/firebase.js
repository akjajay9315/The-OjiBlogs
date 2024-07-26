// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDnsZxdHSZqWN0SmjT_qvTs755I3dp_Wec",
//   authDomain: "ojiblogs.firebaseapp.com",
//   projectId: "ojiblogs",
//   storageBucket: "ojiblogs.appspot.com",
//   messagingSenderId: "124081812780",
//   appId: "1:124081812780:web:cedf69fc22ded0f7a6a889",
//   measurementId: "G-0M5XGC0WTD",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export { app }; // Export the `app` variable


// firebaseConfig.js
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnsZxdHSZqWN0SmjT_qvTs755I3dp_Wec",
  authDomain: "ojiblogs.firebaseapp.com",
  projectId: "ojiblogs",
  storageBucket: "ojiblogs.appspot.com",
  messagingSenderId: "124081812780",
  appId: "1:124081812780:web:cedf69fc22ded0f7a6a889",
  measurementId: "G-0M5XGC0WTD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional, remove if not needed)
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export { app, analytics };

