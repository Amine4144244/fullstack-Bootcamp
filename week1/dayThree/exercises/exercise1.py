#1
class cat:
    def _init_(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat.age
    
def find_oldest_cat(cat1, cat2, cat3):
    oldest = cat1
    oldest = cat2
    if cat3 > oldest.age:
        oldest = cat3
    if cat2 > oldest.age:
        return oldest
    
cat1 = cat( "Sara", 3)
cat2 = cat("Mary", 7)
cat3 = cat("yassmine", 9)

oldest_cat = find_oldest_cat(cat1, cat2, cat3)
print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old. ")
#2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        print(f"Jumps {self.name} jumps {self.height * 2} cm hight")    
    
davids_dog = Dog("Tom", 109)
sarahs_dog = Dog("Jack", 105)
print(f"David's dog is named {davids_dog.name} and is {davids_dog.height} cm tall.")
davids_dog.bark()
davids_dog.jump()
print(f"Sarah's dog is named {sarahs_dog.name} and is {sarahs_dog.height} cm tall.")
sarahs_dog.bark()
sarahs_dog.jump()


if davids_dog.height > sarahs_dog.height:
    print("David's dog is bigger than Sarah's dog")
else:
    print("Sarah's is bigger than David's dog.") 
#3
class song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

sing_me_a_song = song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
print(sing_me_a_song.lyrics)
#4
class zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
    
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append("new_animal")
            print(f"{new_animal} added to the zoo.")
        else:
            print(f"{new_animal} is already in the zoo.")
    
    def get_animals(self):
        print("This is animals currently in the zoo: ", self.animals) 
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove("animal_sold")
            print(f"{animal_sold} has been sold.")
        else:
            print(f"{animal_sold} not found in the zoo")
    
    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        grouped_animals = {}
        
        for animal in sorted_animals:
            first_letter = animal[0].upper()
            if first_letter not in grouped_animals:
                grouped_animals[first_letter] = []
            grouped_animals[first_letter].append(animal)
        return grouped_animals
     
    def get_groups(self):
        grouped = self.sort_animals()
        for letter, animals in grouped.items():
            print(f"{letter}:{animals}")
    

class Zoo:
    def __init__(self, Zoo_name):
        self.Zoo_name = Zoo_name
        self.animals = []
    def add_animal(self,new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
    def get_animals(self):
        print("The current animals in the zoo: ", self.animals)
    def sell_animals(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
    def sort_animals(self):
        self.animals.sort()
        self.animal_groups = {}
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in self.animal_groups:
                self.animal_groups[first_letter] = []
            self.animal_group[first_letter].append(animal)
    def get_groups(self):
        for key in sorted(self.animal_groups.keys()):
            print(f"{key}: {self.animal_groups[key]}")