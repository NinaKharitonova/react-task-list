import { useState } from "react";
import "./App.css";

function App() {
  const tasks = [
    {
      id: 1,
      title: "Implementare la homepage",
      priority: 1,
      estimatedTime: 120,
      state: "completed",
    },
    {
      id: 2,
      title: "Sviluppare il menu di navigazione",
      priority: 2,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 3,
      title: "Creare il footer del sito",
      priority: 3,
      estimatedTime: 30,
      state: "completed",
    },
    {
      id: 4,
      title: "Ottimizzare le performance",
      priority: 1,
      estimatedTime: 180,
      state: "completed",
    },
    {
      id: 5,
      title: "Scrivere test per i componenti",
      priority: 2,
      estimatedTime: 90,
      state: "completed",
    },
    {
      id: 6,
      title: "Implementare la pagina dei contatti",
      priority: 3,
      estimatedTime: 60,
      state: "completed",
    },
    {
      id: 7,
      title: "Aggiungere animazioni CSS",
      priority: 2,
      estimatedTime: 30,
      state: "backlog",
    },
    {
      id: 8,
      title: "Integrare l'API di autenticazione",
      priority: 1,
      estimatedTime: 120,
      state: "in_progress",
    },
    {
      id: 9,
      title: "Aggiornare la documentazione",
      priority: 3,
      estimatedTime: 60,
      state: "backlog",
    },
    {
      id: 10,
      title: "Rifattorizzare il codice CSS",
      priority: 2,
      estimatedTime: 90,
      state: "in_progress",
    },
  ];
  console.log(tasks);

  const backlogAndInProgres = tasks.filter(
    (task) => task.state === "backlog" || task.state === "in_progress"
  );

  const completedTasks = tasks.filter((task) => task.state === "completed");

  function printTasks(tasks) {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>
              {task.title}
              <span className="state">{task.state}</span>
            </h3>
            <div>Proprity:{task.priority}</div>
            <div>Est. time: {task.estimatedTime}</div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <>
      <header>
        <div className="container">
          <h1>Task Manager</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <section>
            <h2>In Progress / Backlog ({backlogAndInProgres.length})</h2>
            {printTasks(backlogAndInProgres)}
          </section>
          <hr />
          <section>
            <h2>Completed ({completedTasks.length})</h2>
            {printTasks(completedTasks)}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
