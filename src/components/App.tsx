import React from "react";
import Table from "../pages/Table.page";
import "../index.css";

const Chart = React.lazy(() => import("../pages/Chart.page"));
const Help = React.lazy(() => import("../pages/Help.page"));

import { Routes, Route, Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Table />} />
        <Route
          path="chart/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Chart />
            </React.Suspense>
          }
        />
        <Route
          path="help/*"
          element={
            <React.Suspense fallback={<>...</>}>
              <Help />
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
            <Link to="/">Table</Link>
          </li>
          <li>
            <Link to="/chart/">Chart</Link>
          </li>
          <li>
            <Link to="/help/">Help</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;
