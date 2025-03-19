import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tasks")  // 🔗 Appel API backend
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error("Erreur API :", error));
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>Frontend CES'EATS 🚀</h1>
      <h2>Liste des tâches :</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>
            {task.title} - {task.completed ? "✅ Fait" : "❌ À faire"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
