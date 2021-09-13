const db = require('../database');

class TodoList {
  async index(req, res) {
    try {
      const query = "SELECT * FROM list";
      const execQuery = await db.index(query, (result) => {
        res.json({ error: false, data: result })
      });
    } catch (err) {
      res.json({ error: true, message: err.message })
    }
  }

  async create(req, res) {
    try {
      const { name, status } = req.body;

      let query = "INSERT INTO list (name, status) VALUES ?";

      let values = [
        [name, status]
      ];

      const execQuery = await db.create(query, [values], (id) => {
        query = 'SELECT * FROM list WHERE id = ?';
        values = [
          id
        ];

        const getItem = db.findOne(query, [values], function(result){
          res.json({ error: false, message: "Created!", data: result })
        })
      });
    } catch (err) {
      res.json({ error: true, message: err.message })
    }
  }

  async update(req, res) {
    try {
      const { name, status } = req.body;

      const query = "UPDATE list SET ? WHERE id = ?";
      const values = [
        { name, status },
        req.params.id
      ];

      const execQuery = await db.update(query, values, (result) => {
        res.json({ error: false, message: "UPDATED!" })
      });
    } catch (err) {
      res.json({ error: true, message: err.message })
    }
  }

  async delete(req, res) {
    try {
      const query = "DELETE FROM list WHERE id = ?";
      const values = [
        req.params.id
      ];

      const execQuery = await db.delete(query, [values], () => {
        res.json({ error: false, message: "DELETED!"})
      });

    } catch (err) {
      res.json({ error: true, message: err.message })
    }
  }

  async findOne(req, res) {
    try {
      const query = "SELECT * FROM list WHERE id = ?";

      const values = [
        req.params.id
      ]

      const execQuery = await db.findOne(query, values, (result) => {
        res.json({ error: false, data: result })
      });
    } catch (err) {
      res.json({ error: true, message: err.message })
    }
  }
}

module.exports = TodoList