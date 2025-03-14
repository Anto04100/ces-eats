import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("Erreur :", error));
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Frontend React 🚀</h1>
      <h2>Message du backend :</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
