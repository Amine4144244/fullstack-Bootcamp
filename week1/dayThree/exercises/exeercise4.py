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
