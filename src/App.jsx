import { useState } from "react";

import "./App.css";
import Home from "./Pages/Home/Home";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";
import CommingSoon from "./Pages/Home/components/CommingSoon";
import AboutUs from "./Pages/AboutUs/AboutUs";
import BookLogic from "./Pages/Book/BookLogic";

function App() {
  const commingSoon = true;

  return (
    <Routes>
      {commingSoon ? (
        <>
          <Route
            index
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="about"
            element={
              <Layout>
                <AboutUs />
              </Layout>
            }
          />
          <Route
            path="book"
            element={
              <Layout>
                <BookLogic />
              </Layout>
            }
          />
        </>
      ) : (
        <Route index element={<CommingSoon />} />
      )}
    </Routes>
  );
}

export default App;
