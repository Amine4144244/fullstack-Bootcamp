import random

def get_random_temp(season):
    if season.lower() == "winter":
        return random.randint(-10, 16)
    elif season.lower() == "spring":
        return random.randint(0, 23)
    elif season.lower() == "summer":
        return random.randint(24, 40)
    elif season.lower() == "autumn" or season.lower() == "fall":
        return random.randint(0, 20)
    else:
        print("Invalid season, generating a default temperature between -10 and 40.")
        return random.randint(-10, 40)

def main():
    season = input("Enter a season (winter, spring, summer, autumn): ")
    temp = get_random_temp(season)
    print(f"The temperature right now is {temp} degrees Celsius.")

    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif 0 <= temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif 17 <= temp <= 23:
        print("Cool but comfortable weather.")
    elif 24 <= temp <= 32:
        print("Nice and warm! Enjoy the day.")
    elif 33 <= temp <= 40:
        print("It’s really hot! Stay hydrated.")

main()
