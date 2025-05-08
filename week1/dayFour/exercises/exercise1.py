class pets():
    def __init__(self, animals):
        self.animals = animals
    def walk(self):
        for animal in self.animals:
            animal.walk()

class cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def walk(self):
        print(f'{self.name} is walking')

class Siamese(cat):
    def __init__(self, name, age):
        super().__init__(name,age)

class Bengal(cat):
    pass
class Charteux(cat):
    pass


bengal_cat = Bengal('Simba', 4)
charteux_cat = Charteux('sara', 5)
siamese_cat = Siamese('ana', 6)
all_cats = [bengal_cat, charteux_cat, siamese_cat]

sara_pets = pets(all_cats)
sara_pets.walk()