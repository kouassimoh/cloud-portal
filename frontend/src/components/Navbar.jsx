import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>Cloud Portal</h1>
      <div>
        {/* These could be replaced with React Router <Link> later */}
        <a href="/" style={styles.link}>Dashboard</a>
        <a href="/applicants" style={styles.link}>Applicants</a>
        <a href="/settings" style={styles.link}>Settings</a>
      </div>
    </nav>
  );
}

// Simple inline styles (you can later move to CSS modules or Tailwind)
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#2c3e50",
    color: "#ecf0f1",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
  },
  title: {
    margin: 0,
    fontSize: "1.5rem",
  },
  link: {
    marginLeft: "20px",
    color: "#ecf0f1",
    textDecoration: "none",
    fontWeight: "500",
  },
};

export default Navbar;
