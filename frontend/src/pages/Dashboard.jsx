import React, { useState, useEffect } from "react";
import { getApplicants, addApplicant } from "../services/api";

function Dashboard() {
  const [applicants, setApplicants] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchApplicants();
  }, []);

  const fetchApplicants = async () => {
    const data = await getApplicants();
    setApplicants(data);
  };

  const handleAdd = async () => {
    if (!name || !email) return;
    const newApplicant = await addApplicant({ name, email });
    setApplicants([...applicants, newApplicant]);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h2>Applicants Dashboard</h2>
      <div style={styles.form}>
        <input
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />
        <input
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.button}>Add Applicant</button>
      </div>

      <div style={styles.grid}>
        {applicants.map(a => (
          <div key={a.id} style={styles.card}>
            <h3>{a.name}</h3>
            <p>{a.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    fontSize: "1rem",
    flex: 1,
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#2980b9",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default Dashboard;
