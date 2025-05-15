import requests
import random
import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'postgres'
DATABASE = 'your_database_name' 

url = "https://restcountries.com/v3.1/all"
response = requests.get(url)
if response.status_code != 200:
    raise Exception("Failed to fetch data from API")
countries_data = response.json()

selected_countries = random.sample(countries_data, 10)

conn = psycopg2.connect(
    host=HOSTNAME,
    user=USERNAME,
    password=PASSWORD,
    dbname=DATABASE
)
cursor = conn.cursor()

for country in selected_countries:
    try:
        name = country.get("name", {}).get("common", "Unknown")
        capital = country.get("capital", ["Unknown"])[0]
        flag = country.get("flags", {}).get("png", "")
        subregion = country.get("subregion", "Unknown")
        population = country.get("population", 0)

        cursor.execute("""
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        """, (name, capital, flag, subregion, population))
    except Exception as e:
        print(f"❌ Error inserting {name}: {e}")

conn.commit()
cursor.close()
conn.close()

print("✅ 10 random countries inserted successfully.")
