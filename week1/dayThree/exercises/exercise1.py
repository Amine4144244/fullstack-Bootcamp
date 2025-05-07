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