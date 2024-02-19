import React from "react";
import Home from "../pages/Home";
import "../index.css";

const About = React.lazy(() => import("../pages/About"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

import { Routes, Route, Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="dashboard/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="about/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <About />
            </React.Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard/">Dashboard</Link>
          </li>
          <li>
            <Link to="/chart/">Chart</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;
