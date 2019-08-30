const db = require('../db-config');

module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};

function find() {
  return db('todo');
}

function findById(id) {}

async function insert(newTodo) {
  // the second parameter here is of other
  //databases, SQLite returns the id by default
  const [id] = await db('todo').insert(newTodo, 'id');
  return db('todo')
    .where({ id })
    .first();
}

function update(changes, id) {}

function remove(id) {
  return db('todo')
    .where('id', '=', id)
    .delete();
}
