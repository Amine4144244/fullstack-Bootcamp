class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, animal_type, count=1):
        if animal_type in self.animals:
            self.animals[animal_type] += count
        else:
            self.animals[animal_type] = count

    def get_info(self):
        result = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            result += f"{animal} : {count}\n"
        result += "\n    E-I-E-I-0!"
        return result

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        animals = self.get_animal_types()
        animal_phrases = []
        for animal in animals:
            if self.animals[animal] > 1:
                animal_phrases.append(animal + "s")
            else:
                animal_phrases.append(animal)
        if len(animal_phrases) > 1:
            short_info = ", ".join(animal_phrases[:-1]) + f" and {animal_phrases[-1]}"
        else:
            short_info = animal_phrases[0]
        return f"{self.name}'s farm has {short_info}."