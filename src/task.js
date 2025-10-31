const { nanoid } = require("nanoid");

let listeTaches = [];

exports.addTask = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Le titre est obligatoire !" });
  }
  const newTask = {
    id: nanoid(),
    title: title,
    description: description,
    completed: false,
    createdAt: new Date(),
  };
  listeTaches.push(newTask);
  return res.status(201).json(newTask);
};

exports.getTasks = (req, res) => {
  return res.status(200).json(listeTaches);
};

exports.getTaskById = (req, res) => {
  const idToFind = req.params.id;

  const task = listeTaches.find((t) => t.id === idToFind);

  if (!task) {
    return res.status(404).json({ error: "Tache non trouvée" });
  } else {
    return res.status(200).json(task);
  }
};

exports.changeStatus = (req, res) => {
  const idToFind = req.params.id;

  const tache = listeTaches.find((t) => t.id === idToFind);

  if (!tache) {
    return res.status(404).json({ error: "cette tache n'existe pas" });
  }

  tache.completed = true;
  return res.json({ message: "Tache marquée comme terminée", tache });
};

exports.deleteTask = (req, res) => {
  const idToFind = req.params.id;

  const index = listeTaches.findIndex((t) => t.id === idToFind);

  if (index === -1) {
    return res.status(404).json({ error: "tache inexistante" });
  }

  const deletedTask = listeTaches.splice(index, 1);
  return res.status(200).json({ message: "tache supprimée",deletedTask });
};
