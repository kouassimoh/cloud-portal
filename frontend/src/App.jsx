import React from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

/**
 * App component wraps pages with Layout for consistent design.
 */
function App() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export default App;

