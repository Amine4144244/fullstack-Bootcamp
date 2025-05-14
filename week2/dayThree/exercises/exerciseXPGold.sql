--1
SELECT rental_id, inventory_id, customer_id, rental_date
FROM rental
WHERE return_date IS NULL;

SELECT 
    c.customer_id,
    c.first_name || ' ' || c.last_name AS customer_name,
    COUNT(*) AS outstanding_rentals
FROM 
    rental r
    JOIN customer c ON r.customer_id = c.customer_id
WHERE 
    r.return_date IS NULL
GROUP BY 
    c.customer_id, customer_name
ORDER BY 
    outstanding_rentals DESC;

SELECT 
    f.title,
    f.description,
    f.release_year,
    f.rating
FROM 
    film f
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
    JOIN film_actor fa ON f.film_id = fa.film_id
    JOIN actor a ON fa.actor_id = a.actor_id
WHERE 
    c.name = 'Action'
    AND a.first_name = 'Joe'
    AND a.last_name = 'Swank';

CREATE VIEW action_films_with_actors AS
SELECT 
    f.film_id,
    f.title,
    f.description,
    f.release_year,
    f.rating,
    a.actor_id,
    a.first_name || ' ' || a.last_name AS actor_name
FROM 
    film f
    JOIN film_category fc ON f.film_id = fc.film_id
    JOIN category c ON fc.category_id = c.category_id
    JOIN film_actor fa ON f.film_id = fa.film_id
    JOIN actor a ON fa.actor_id = a.actor_id
WHERE 
    c.name = 'Action';

SELECT 
    title,
    description,
    release_year,
    rating
FROM 
    action_films_with_actors
WHERE 
    actor_name = 'Joe Swank';