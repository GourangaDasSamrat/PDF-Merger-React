import { ClerkProvider } from "@clerk/clerk-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import { AppProvider } from "./context/AppProvider.jsx";
import "./index.css";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <HelmetProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </HelmetProvider>
    </ClerkProvider>
  </React.StrictMode>
);
