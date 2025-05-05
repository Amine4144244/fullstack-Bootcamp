names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

user_name = input("Enter your name: ")

if user_name in names:
    print("Index of first occurrence:", names.index(user_name))
else:
    print("Name not found in the list.")
