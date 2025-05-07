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