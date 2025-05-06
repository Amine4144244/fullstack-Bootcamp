#1
brand = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color':{ 
        'France': 'blue', 
        'Spain': 'red', 
        'US': ['pink', 'green']}
}
#2
brand['number_stores'] = 2
print(brand)
#3
client = brand['type_of_clothes']
print(f"zara's client are {client[0]}, {client[1]} and {client[2]}, it also sells {client[3]}")
#4
brand['country_creation'] = 'spain'
#5
if 'international_competitors' in brand:
    brand['international_competitors'].append("Desigual")
#6
del brand['creation_date']
#7
print(brand["internatinal_competiors"][-1])
#8
print(brand['major_color']['US'])
#9
print(len(brand))
#10
l1 = list(brand.keys())
print(l1)
#11
more_on_zara = {
    'creation_date' : 1975,
    'number_stores' : 10000,
}
#12
brand.update('more_on_zara')
#13
print(brand ['number_stores'])