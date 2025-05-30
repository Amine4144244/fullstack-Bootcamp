def is_anagram(str1, str2):
    # Remove all whitespace and convert to lowercase
    cleaned_str1 = ''.join(str1.split()).lower()
    cleaned_str2 = ''.join(str2.split()).lower()

    # Compare sorted versions of the cleaned strings
    return sorted(cleaned_str1) == sorted(cleaned_str2)

print(is_anagram("Astronomer", "Moon starer"))