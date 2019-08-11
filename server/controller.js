// Controller here
let todos = ['study', 'graduate', 'get a job'];

const controller = {
  get: (req, res) => {
    res.status(200).send(todos) //put todos in state
  },
  post: (req, res) => {
    let { todo } = req.body // todo = req.body.todo
    todos.push(todo);
    res.status(201).send(`successfully added todo ${todo}`) //sent to client in list axios

  },
  delete: (req, res) => {
    // console.log(req.query) //if attaching it in obj format see List.jsx
    console.log(req.params) //we attached it to params is if referenced in the url with :
    let { index } = req.params;
    let deleted = todos.splice(index, 1);
    res.status(202).send(`deleted ${deleted}`)
  },
  getName: (req, res) => {
    res.status(200).send('Emily')
  }
}

module.exports = controller;