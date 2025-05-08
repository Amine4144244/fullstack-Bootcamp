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