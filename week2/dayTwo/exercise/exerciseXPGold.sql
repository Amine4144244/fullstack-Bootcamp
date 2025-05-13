--1
SELECT rating, COUNT(*) AS total_films
FROM film
GROUP BY rating;

SELECT title, rating, length, rental_rate
FROM film
WHERE rating IN ('G', 'PG-13')
  AND length < 120
  AND rental_rate < 3.00
ORDER BY title;

UPDATE customer
SET first_name = 'amine',
    last_name = 'labibi',
    email = 'amine@example.com'
WHERE customer_id = 1;

SELECT address_id FROM customer WHERE customer_id = 1;

UPDATE address
SET address = '123 Star Street',
    city_id = 300,
    postal_code = '10001',
    phone = '123-456-7890'
WHERE address_id = 5;


--2
UPDATE student
SET birth_date = '1998-11-02'
WHERE first_name IN ('Lea', 'Marc') AND last_name = 'Benichou';

UPDATE student
SET last_name = 'Guez'
WHERE first_name = 'David' AND last_name = 'Grez';

DELETE FROM student
WHERE first_name = 'Lea' AND last_name = 'Benichou';

SELECT COUNT(*) FROM student;

SELECT COUNT(*) 
FROM student 
WHERE birth_date > '2000-01-01';

ALTER TABLE student
ADD math_grade INTEGER;

UPDATE student
SET math_grade = 80
WHERE id = 1;

UPDATE student
SET math_grade = 90
WHERE id IN (2, 4);

UPDATE student
SET math_grade = 40
WHERE id = 6;

SELECT COUNT(*)
FROM student
WHERE math_grade > 83;

SELECT birth_date FROM student WHERE first_name = 'Omer' AND last_name = 'Simpson' LIMIT 1;

INSERT INTO student (first_name, last_name, birth_date, math_grade)
VALUES ('Omer', 'Simpson', 'YYYY-MM-DD', 70);

SELECT 
    first_name, 
    last_name, 
    COUNT(math_grade) AS total_grade
FROM 
    student
GROUP BY 
    first_name, last_name;

SELECT SUM(math_grade) AS total_math_grades
FROM student;

--3
CREATE TABLE purchases (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    item_id INTEGER REFERENCES items(id),
    quantity_purchased INTEGER
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
    (SELECT id FROM items WHERE item_name = 'fan'),
    1
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
    (SELECT id FROM items WHERE item_name = 'large desk'),
    10
);

INSERT INTO purchases (customer_id, item_id, quantity_purchased)
VALUES (
    (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
    (SELECT id FROM items WHERE item_name = 'small desk'),
    2
);

SELECT * FROM purchases;

SELECT 
    c.first_name,
    c.last_name,
    i.item_name,
    p.quantity_purchased
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;

SELECT * 
FROM purchases
WHERE customer_id = 5;

SELECT * 
FROM purchases 
WHERE item_id IN (
    SELECT id FROM items WHERE item_name IN ('large desk', 'small desk')
);

SELECT 
    c.first_name,
    c.last_name,
    i.item_name
FROM purchases p
JOIN customers c ON p.customer_id = c.id
JOIN items i ON p.item_id = i.id;