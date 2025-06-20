import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./ErrorBoundary";
import PostList from "./PostList";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";

function HomeScreen() {
  return <h1>home</h1>;
}

function ProfileScreen() {
  return <h1>profile</h1>;
}

function ShopScreen() {
  throw new Error("Shop error!");
}

async function sendJsonData() {
  const url = "https://webhook.site/8d12f814-15f9-428f-b519-dcd0efb2c6c3"; // Replace with your actual webhook URL
  const data = {
    key1: "myusername",
    email: "mymail@gmail.com",
    name: "Isaac",
    lastname: "Doe",
    age: 27
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    console.log("Response from webhook:", result);
  } catch (error) {
    console.error("POST failed:", error);
  }
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/profile">Profile</NavLink>
          <NavLink className="nav-link" to="/shop">Shop</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary><ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
      </Routes>

      <div className="container mt-4">
        <PostList />
        <Example1 />
        <Example2 />
        <Example3 />
        <button onClick={sendJsonData} className="btn btn-primary m-3">
          Send Data to Webhook
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
