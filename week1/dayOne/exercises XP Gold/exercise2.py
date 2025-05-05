#Print all numbers from 1 to 20:
for i in range(1, 21):
    print(i)

#Print every element with an even index from a loop running 1 to 20:
for index, value in enumerate(range(1, 21)):
    if index % 2 == 0: 
        print(value)
