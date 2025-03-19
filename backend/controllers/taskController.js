const Task = require('../models/task');

// 📌 Exercice 2 : Ajouter une tâche
exports.createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 📌 Exercice 3 : Récupérer toutes les tâches
exports.getTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

// 📌 Exercice 4 : Récupérer une tâche par ID
exports.getTaskById = async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: "Tâche non trouvée" });
    res.json(task);
};

// 📌 Exercice 5 : Mettre à jour une tâche
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(task);
};

// 📌 Exercice 6 : Supprimer une tâche
exports.deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Tâche supprimée avec succès" });
};