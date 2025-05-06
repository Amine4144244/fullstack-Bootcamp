family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for member, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    total_cost += price
    print(f"{member.capitalize()} needs to pay: ${price}")

print("\nThe total cost for the family's tickets is:", total_cost)
