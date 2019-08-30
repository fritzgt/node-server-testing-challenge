const db = require('../db-config');

const Todo = require('./test-model');

describe('todo model', () => {
  describe('insert()', () => {
    beforeEach(async () => {
      await db('todo').truncate();
    });
    //check if we can insert new entries
    it('it should create two new todos', async () => {
      await Todo.insert({ todo: 'Go to the GYM' });
      await Todo.insert({ todo: 'Buy Milk' });

      const todo = await db('todo');
      expect(todo).toHaveLength(2);
    });

    //check if the new entries matches the
    //ones we create and not an existing one
    it('check if the created todo are not preexisting entries', async () => {
      //1st
      let todo = await Todo.insert({ todo: 'Take a walk in the park' });
      expect(todo.todo).toBe('Take a walk in the park');
      //2nd
      todo = await Todo.insert({ todo: 'Study' });
      expect(todo.todo).toBe('Study');
    });
  });

  describe('delete()', () => {
    //Testing delete
    beforeEach(async () => {
      await db('todo').truncate();
    });

    it('Delete Should return 1', async () => {
      //1st check if is deleting one of the entries
      await Todo.insert({ todo: 'Go to the GYM' });
      await Todo.insert({ todo: 'Buy Milk' });
      await Todo.remove(1);
      const todo = await db('todo');
      expect(todo).toHaveLength(1);
    });
  });
});
