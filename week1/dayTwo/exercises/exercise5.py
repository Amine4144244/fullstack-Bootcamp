import random

def guess_number(user_number):
    if 1 <= user_number <= 100:
        random_number = random.randint(1, 100)
        if user_number == random_number:
            print("Success! You guessed the correct number!")
        else:
            print("Try again! You guessed", user_number, "but the number was", random_number)
    else:
        print("Please enter a number between 1 and 100.")

