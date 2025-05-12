CREATE TABLE actors (
    actor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100),    
    age DATE,                     
    number_oscars SMALLINT        
);

INSERT INTO actors (first_name) VALUES ('Johnny');git
