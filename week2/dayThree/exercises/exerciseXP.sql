--1
SELECT * FROM language;

SELECT film.title, film.description, language.name AS language
FROM film
JOIN language ON film.language_id = language.language_id;

SELECT film.title, film.description, language.name AS language
FROM language
LEFT JOIN film ON language.language_id = film.language_id;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name) VALUES
('The Shawshank Redemption'),
('The Godfather'),
('Pulp Fiction'),
('The Dark Knight'),
('Fight Club');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER NOT NULL REFERENCES language(language_id),
    title VARCHAR(100) NOT NULL,
    score SMALLINT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (
    (SELECT id FROM new_film WHERE name = 'The Shawshank Redemption'),
    1,
    'Masterpiece of cinema',
    10,
    'This film represents the pinnacle of storytelling with brilliant performances and direction.'
);

INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (
    (SELECT id FROM new_film WHERE name = 'The Godfather'),
    1,
    'Defines the gangster genre',
    9,
    'Marlon Brando delivers an iconic performance in this epic crime saga.'
);

DELETE FROM new_film WHERE name = 'The Shawshank Redemption';

SELECT * FROM customer_review WHERE film_id = (SELECT id FROM new_film WHERE name = 'The Shawshank Redemption');

--2
SELECT * FROM language;

UPDATE film
SET language_id = 2
WHERE title IN ('The Shawshank Redemption', 'The Godfather');

UPDATE film
SET language_id = 3
WHERE title LIKE '%Sumo%' OR description LIKE '%Sumo%';

SELECT
    tc.table_name, 
    kcu.column_name, 
    ccu.table_name AS foreign_table_name,
    ccu.column_name AS foreign_column_name 
FROM 
    information_schema.table_constraints tc 
    JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name
    JOIN information_schema.constraint_column_usage ccu ON ccu.constraint_name = tc.constraint_name
WHERE 
    tc.table_name = 'customer';

DROP TABLE customer_review;

SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;

SELECT f.title, f.rental_rate, r.rental_date
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;

SELECT f.title, f.description
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE (f.title LIKE '%sumo%' OR f.description LIKE '%sumo%')
AND a.first_name = 'Penelope' AND a.last_name = 'Monroe';

SELECT f.title, f.length, f.rating
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Documentary'
AND f.length < 60
AND f.rating = 'R';

SELECT f.title, p.amount, r.rental_date, r.return_date
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';

SELECT f.title, f.description, f.replacement_cost
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title LIKE '%boat%' OR f.description LIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;