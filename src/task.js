let listeTaches = [];

exports.addTask = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Le titre est obligatoire !" });
  }
  const newTask = {
    title: title,
    description: description,
    completed: false,
    createdAt: new Date(),
  };
  listeTaches.push(newTask);
  return res.status(201).json(newTask);
};


exports.getTasks = (req, res) => {
    return res.status(200).json(listeTaches)
}
