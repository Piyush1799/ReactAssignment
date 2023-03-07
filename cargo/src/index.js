import React from "react"; // import the React library
import ReactDOM from "react-dom/client"; // import the ReactDOM library
import "./index.css"; // import the index.css file
import "./responsive.css"; // import the responsive.css file
import App from "./App"; // import the App component

const root = ReactDOM.createRoot(document.getElementById("root")); // create a root for rendering the app
root.render(<App />); // render the App component inside the root
