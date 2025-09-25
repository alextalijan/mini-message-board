const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20) UNIQUE NOT NULL
);

INSERT INTO users(username) VALUES ('alexpeace'), ('duketalijan'), ('duci110110'), ('bryancranston');

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users (id) ON DELETE CASCADE,
    message TEXT NOT NULL,
    date TIMESTAMP NOT NULL
);

INSERT INTO messages(user_id, message, date)
VALUES
    (1, 'I really like filming for YouTube.', CURRENT_TIMESTAMP),
    (2, 'I think I am better than my brother.', CURRENT_TIMESTAMP),
    (1, 'This is a really cool website I have actually built myself.', CURRENT_TIMESTAMP),
    (3, 'My days of Star Wars Battlefront II are gone, but my name still lives.', CURRENT_TIMESTAMP);
`;

async function main() {
  console.log('ENV:', process.env.DB_URI);
  const client = new Client({ connectionString: process.env.DB_URI });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('Query was successful.');
}

main();
