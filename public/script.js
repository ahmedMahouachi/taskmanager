const formulaire = document.getElementById("taskForm");
const tasksContainer = document.getElementById("tasks");

formulaire.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const res = await fetch("http://localhost:3000/api/createtask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: title,
      description: description,
    }),
  });

  if (!res.ok) {
    console.log("erreur !!!!!!!!");
  } else {
    console.log("success !!!!");
  }
  afficherTaches();
});

async function afficherTaches() {
  const res = await fetch("http://localhost:3000/api/getTasks");

  const data = await res.json();

  console.log(data);

  tasksContainer.innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");

    div.innerHTML = `
        <h3>${data[i].title}</h3>
        <p>${data[i].description}</p>
        <p>Status : <strong>${
          data[i].completed ? "Terminé" : "En cours"
        } </strong></p>
        ${
          !data[i].completed
            ? `<button onclick="changerStatut('${data[i].id}')">Terminer la tache</button>`
            : ""
        }
        
        
    `;
    tasksContainer.appendChild(div);
  }
}

async function changerStatut(id) {
  const res = await fetch(`http://localhost:3000/api/majTache/${id}`, {
    method: "PUT",
  });

  if (!res.ok) {
    console.log("Erreur de mise a jour");
  }
  afficherTaches();
}

afficherTaches();
