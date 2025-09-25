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
};
