# step 1
def make_shirt(size , text):
    print(f"The size of the shirt is '{size}' and the text is '{text}'.")
make_shirt('medium' , 'Code every day')

#step 2
def make_shirt(size="L", message="I love Python"):
    print(f"The size of the shirt is {size} and the text is '{message}'.")

#step 3
make_shirt()
make_shirt("M") 
make_shirt("S", "Never stop learning!")
