my_fav_numbers = {5, 6, 8, 10}
my_fav_numbers.add(4)
my_fav_numbers.add(1)
my_fav_numbers.remove(5)

friend_fav_numbers = {2, 7, 9}

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

print("our favorite numbers:", our_fav_numbers)
