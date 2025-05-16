#part 1
#menu_item.py
import psycopg2

DB_NAME = "restaurant"
USER = "postgres"
PASSWORD = "Amine@22"
HOST = "localhost"
PORT = "5432"

class MenuItem:
    def __init__(self, name, price):
        self.item_name = name
        self.item_price = price

    def save(self):
        connection = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
        cursor = connection.cursor()
        query = "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
        cursor.execute(query, (self.item_name, self.item_price))
        connection.commit()
        connection.close()

    def delete(self):
        connection = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
        cursor = connection.cursor()
        query = "DELETE FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (self.item_name,))
        connection.commit()
        connection.close()

    def update(self, new_name, new_price):
        connection = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
        cursor = connection.cursor()
        query = "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s"
        cursor.execute(query, (new_name, new_price, self.item_name))
        connection.commit()
        connection.close()
        self.item_name = new_name
        self.item_price = new_price
#menu_manager.py
import psycopg2
from menu_item import MenuItem

DB_NAME = "restaurant"
USER = "postgres"
PASSWORD = "Amine@22"
HOST = "localhost"
PORT = "5432"

class MenuManager:

    @classmethod
    def get_by_name(cls, item_name):
        connection = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST, port=PORT)
        cursor = connection.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s"
        cursor.execute(query, (item_name,))
        result = cursor.fetchone()
        connection.close()
        if result:
            return MenuItem(*result)
        return None

    @classmethod
    def all_items(cls):
        connection = psycopg2.connect(dbname=DB_NAME, user=USER, password=PASSWORD, host=HOST)
        cursor = connection.cursor()
        query = "SELECT item_name, item_price FROM Menu_Items"
        cursor.execute(query)
        results = cursor.fetchall()
        connection.close()
        return [MenuItem(name, price) for name, price in results]

#menu_editor.py
from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        print("\n=== Restaurant Menu Editor ===")
        print("V - View an Item")
        print("A - Add an Item")
        print("D - Delete an Item")
        print("U - Update an Item")
        print("S - Show Full Menu")
        print("X - Exit\n")

        choice = input("Enter your choice: ").upper()

        if choice == 'V':
            name = input("Enter the name of the item: ")
            item = MenuManager.get_by_name(name)
            if item:
                print(f"\nItem found: {item.name} - {item.price}₪")
            else:
                print("Item not found.")
        elif choice == 'A':
            add_item_to_menu()
        elif choice == 'D':
            remove_item_from_menu()
        elif choice == 'U':
            update_item_from_menu()
        elif choice == 'S':
            show_restaurant_menu()
        elif choice == 'X':
            print("\nExiting... Here's the final restaurant menu:")
            show_restaurant_menu()
            break
        else:
            print("Invalid choice. Please try again.")

def add_item_to_menu():
    name = input("Enter the name of the new item: ")
    price = input("Enter the price: ")
    try:
        item = MenuItem(name, int(price))
        item.save()
        print("Item was added successfully!")
    except Exception as e:
        print("Error adding item:", e)

def remove_item_from_menu():
    name = input("Enter the name of the item to delete: ")
    item = MenuManager.get_by_name(name)
    if item:
        item.delete()
        print("Item was deleted successfully!")
    else:
        print("Error: Item not found.")

def update_item_from_menu():
    old_name = input("Enter the name of the item to update: ")
    old_item = MenuManager.get_by_name(old_name)
    if old_item:
        new_name = input("Enter the new name: ")
        new_price = input("Enter the new price: ")
        try:
            old_item.update(new_name, int(new_price))
            print("Item was updated successfully!")
        except Exception as e:
            print("Error updating item:", e)
    else:
        print("Error: Item not found.")

def show_restaurant_menu():
    items = MenuManager.all_items()
    if not items:
        print("The menu is currently empty.")
        return
    print("\n=== Restaurant Menu ===")
    for item in items:
        print(f"{item.name} - {item.price}₪")

if __name__ == "__main__":
    show_user_menu()
