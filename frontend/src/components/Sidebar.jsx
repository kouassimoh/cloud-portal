import React from "react";

function Sidebar() {
  return (
    <aside style={styles.sidebar}>
      <ul style={styles.menu}>
        <li style={styles.item}><a href="/" style={styles.link}>Dashboard</a></li>
        <li style={styles.item}><a href="/applicants" style={styles.link}>Applicants</a></li>
        <li style={styles.item}><a href="/settings" style={styles.link}>Settings</a></li>
      </ul>
    </aside>
  );
}

const styles = {
  sidebar: {
    width: "200px",
    backgroundColor: "#34495e",
    color: "#ecf0f1",
    minHeight: "100vh",
    paddingTop: "20px",
  },
  menu: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    marginBottom: "15px",
  },
  link: {
    color: "#ecf0f1",
    textDecoration: "none",
    fontSize: "1rem",
  }
};

export default Sidebar;
