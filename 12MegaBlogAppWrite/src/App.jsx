import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then(userData => {
        if (userData) dispatch(login(userData));
        else dispatch(logout());
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return Loading ? (
    <div>buffering</div>
  ) : (
    <div className="min-h-screen w-full flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
