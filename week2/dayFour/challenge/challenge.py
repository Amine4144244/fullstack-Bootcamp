import requests
import random
import psycopg2

USER = 'postgres'
PASSWORD = 'Amine@22'
DB_NAME = 'countries' 
HOST = "localhost"
PORT = "5432"

def fetch_countries():
    url = "https://restcountries.com/v3.1/all"
    response = requests.get(url)
    return response.json()

def insert_country_to_db(name, capital, flag, subregion, population):
    try:
        conn = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
        cursor = conn.cursor()
        query = """
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s);
        """
        cursor.execute(query, (name, capital, flag, subregion, population))
        conn.commit()
    except Exception as e:
        print("Error inserting data:", e)
    finally:
        conn.close()

def main():
    data = fetch_countries()
    selected = random.sample(data, 10)

    for country in selected:
        name = country.get("name", {}).get("common", "Unknown")
        capital = country.get("capital", ["Unknown"])[0] if country.get("capital") else "Unknown"
        flag = country.get("flags", {}).get("png", "")
        subregion = country.get("subregion", "Unknown")
        population = country.get("population", 0)

        insert_country_to_db(name, capital, flag, subregion, population)
        print(f"Inserted: {name}")

if __name__ == "__main__":
    main()