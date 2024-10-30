-- USER TABLE
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    emailid VARCHAR(100),
    password VARCHAR(100) NOT NULL,
    mobilnumber VARCHAR(15)
);

