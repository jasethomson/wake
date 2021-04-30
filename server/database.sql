CREATE DATABASE wake;

CREATE TABLE music(
  song_id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  artist VARCHAR(255),
  dateUpdated TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  dateAdded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


-- psql -U postgres (postgres is a super user)
-- \l to list your databases
-- \c {dbname} to connect to db
-- \dt lists your tables
