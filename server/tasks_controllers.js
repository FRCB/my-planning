let tasks = [];
let id = 0;

module.exports = {

    read: (req, res) => {
        res.status(200).send(tasks)
    },

    time: (req, res) => {
        res.status(200).send(tasks)
    },

    create: (req, res) => {
        tasks.push({
            id: id,
            text: req.body.text,
            date: req.body.date,
        });
        id++
        res.status(200).send(tasks)
    },

    update: (req, res) => {
        const taskIndex = tasks.findIndex(task => task.id == req.params.id)
        tasks[taskIndex] = {
            id: tasks[taskIndex].id,
            text: req.body.text || tasks[taskIndex].text,
            date: req.body.date
        }
        res.status(200).send(tasks)
    },


    delete: (req, res) => {
        const taskIndex = tasks.findIndex(task => task.id == req.params.id);
        tasks.splice(taskIndex, 1)
        res.status(200).send(tasks)
    },
}