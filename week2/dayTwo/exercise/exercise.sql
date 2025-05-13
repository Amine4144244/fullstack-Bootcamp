--1
SELECT * FROM public.items
ORDER BY price ASC;

SELECT * FROM public.items
WHERE price >= 80
ORDER BY price DESC;

SELECT first_name, last_name FROM public.customers
ORDER BY first_name ASC
Limit 3;

SELECT last_name FROM public.customers
ORDER BY first_name DESC;

--2
SELECT * FROM customer;

SELECT first_name || ' ' || last_name AS full_name FROM customer;

SELECT DISTINCT create_date FROM customer;

SELECT * FROM customer
ORDER BY first_name DESC;

SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT address, phone
FROM address
WHERE district = 'Texas';

SELECT * FROM film
WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Breaking Bad';

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Ma%';

SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

SELECT *
FROM (
  SELECT *, ROW_NUMBER() OVER (ORDER BY rental_rate ASC) AS rn
  FROM film
) sub
WHERE rn BETWEEN 11 AND 20;

SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id;

SELECT *
FROM film
WHERE film_id NOT IN (
  SELECT DISTINCT film_id
  FROM inventory
);

SELECT city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;

SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
JOIN payment ON customer.customer_id = payment.customer_id
ORDER BY payment.staff_id;