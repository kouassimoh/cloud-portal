import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

/**
 * Layout component that wraps Navbar, Sidebar, and main content.
 * Props.children will be whatever page you render inside.
 */
function Layout({ children }) {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.contentWrapper}>
        <Sidebar />
        <main style={styles.mainContent}>
          {children}
        </main>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  contentWrapper: {
    display: "flex",
    flex: 1,
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    backgroundColor: "#ecf0f1",
    minHeight: "calc(100vh - 60px)", // Adjust if Navbar height changes
  },
};

export default Layout;
