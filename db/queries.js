const pool = require('./pool');

module.exports = {
  getAllMessages: async () => {
    const { rows } = await pool.query(
      'SELECT messages.id AS id, username, message, date FROM messages JOIN users ON messages.user_id = users.id'
    );
    return rows;
  },
  getMessageById: async (id) => {
    const { rows } = await pool.query(
      'SELECT username, message, date FROM messages JOIN users on messages.user_id = users.id WHERE messages.id = $1',
      [id]
    );
    return rows[0];
  },
  addMessage: async (username, message) => {
    let userExists = true;
    const { rows } = await pool.query(
      'SELECT id FROM users WHERE username = $1',
      [username]
    );

    if (rows.length === 0) {
      userExists = false;
    }

    if (!userExists) {
      await pool.query('INSERT INTO users (username) VALUES ($1)', [username]);
    }

    await pool.query(
      'INSERT INTO messages(user_id, message, date) VALUES ((SELECT id FROM users WHERE username = $1), $2, CURRENT_TIMESTAMP)',
      [username, message]
    );
  },
};
