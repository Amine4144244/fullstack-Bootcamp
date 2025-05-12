#1
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
#------------------------------------------------------
#2
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight

        if self_power > other_power:
            return f"{self.name} wins the fight against {other_dog.name}"
        elif self_power < other_power:
            return f"{other_dog.name} wins the fight against {self.name}"
        else:
            return f"{self.name} and {other_dog.name} are equally matched"

dog1 = Dog("Rex", 5, 20)
dog2 = Dog("Buddy", 3, 15)
dog3 = Dog("Max", 4, 25)

print(dog1.bark())
print(dog2.bark()) 
print(dog3.bark())  

print(f"{dog1.name} run speed: {dog1.run_speed()}")
print(f"{dog2.name} run speed: {dog2.run_speed()}")
print(f"{dog3.name} run speed: {dog3.run_speed()}")

print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))
#-----------------------------------------------------------------------
#3
from exercise2 import Dog
import random

class PetDog(Dog):
    def __init__(self, name, age, weight, trained=False):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *args):
        dog_names = [self.name] + [dog.name for dog in args]
        print(f"{', '.join(dog_names)} all play together")

    def do_a_trick(self):
        if self.trained:
            tricks = [
                "does a barrel roll",
                "stands on his back legs",
                "shakes your hand",
                "plays dead"
            ]
            trick = random.choice(tricks)
            print(f"{self.name} {trick}")
        else:
            print(f"{self.name} is not trained yet to do tricks.")
    
dog1 = PetDog("Lucky", 3, 12)
dog2 = PetDog("Bella", 4, 18)
dog3 = PetDog("Charlie", 2, 10)

dog1.train()
dog1.play(dog2, dog3)

dog1.do_a_trick()
dog2.do_a_trick()
#--------------------------------------------------------------------------------------
#4
class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""
    def is_18(self):
        return self.age >= 18
    
class Family:
    def __init__(self, last_name):
        self.last_name = last_name
        self.members = []

    def born(self, first_name, age):
        new_person = Person(first_name, age)
        new_person.last_name = self.last_name
        self.members.append(new_person)

    def check_majority(self, first_name):
        for member in self.members:
            if member.first_name == first_name:
                if member.is_18():
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                return
        print(f"No member with the first name {first_name} found in the family.")

    def family_presentation(self):
        print(f"Family name: {self.last_name}")
        print("Members:")
        for member in self.members:
            print(f"- {member.first_name}, {member.age} years old")


smith_family = Family("Smith")

smith_family.born("Alice", 17)
smith_family.born("Bob", 20)
smith_family.born("Charlie", 15)

smith_family.check_majority("Alice")
smith_family.check_majority("Bob")

smith_family.family_presentation()