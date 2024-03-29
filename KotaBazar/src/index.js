import React from 'react';
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './components/Profile'
import { StoreProvider } from './Store';
import Cart from './components/Cart';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <StoreProvider>
        <Routes>
          <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </StoreProvider>
  </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
