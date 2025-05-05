yourMonth = int(input('Please enter a month number (1–12):'))

if 3 <= yourMonth <= 5:
    print("Season: Spring")
elif 6 <= yourMonth <= 8:
    print("Season: summer")
elif 9 <= yourMonth <= 11:
    print("Season: autumm")
elif yourMonth == 12 or yourMonth == 1 or yourMonth == 2:
    print("Season: winter")
else:
    print("Invalid month. Please enter a number between 1 and 12")