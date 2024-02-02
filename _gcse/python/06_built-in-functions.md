---
title: Built in functions
categories: [python]
page: 7
---

>- Understand the concept of built-in functions in Python.
- Learn how to use some commonly used built-in functions for math, strings, and basic input/output.
 - Explore the purpose and usage of functions like `print()`, `len()`, `input()`, and more.
{: .callout.objectives}


As well as creating our own functions Python comes with a wide range of built-in functions that perform various tasks, making programming easier and more efficient. These functions are part of Python's standard library and can be used without the need for additional installations.


{: .callout.notice}
> There are a whole host of other functions available to us that can be either `import`ed to our program e.g. the `random` library, or installed e.g. the `pandas` library.  We'll consider this approach in a later section


## Commonly Used Built-In Functions 

### 1. `print()`

The `print()` function is used to display information on the screen. It can print text, variables, and the result of expressions. 

Example:

```python
print("Hello, World!")
```

### 2. `len()`

The `len()` function returns the length of a string. It counts the number of characters in the string. Example:

```python
text = "Python"
length = len(text)  # length will be 6
```

### 3. `input()`

The `input()` function allows user input. It waits for the user to enter data and returns it as a string. Example:

```python
name = input("Enter your name: ")
```

### 4. `int()`, `float()`

These functions are used for data type conversion. `int()` converts a value to an integer, and `float()` converts it to a floating-point number. Example:

```python
num_str = "42"
num_int = int(num_str)    # num_int will be 42
num_float = float(num_str)  # num_float will be 42.0
```

### 5. `str()`

The `str()` function converts other data types to strings. Example:

```python
num = 42
num_str = str(num)  # num_str will be "42"
```

### 6. `max()` and `min()`

These functions are used to find the maximum and minimum values among a set of values. Example:

```python
a = 5
b = 10
maximum = max(a, b)  # maximum will be 10
minimum = min(a, b)  # minimum will be 5
```

### 7. `abs()`

The `abs()` function returns the absolute value of a number. Example:

```python
num = -5
abs_num = abs(num)  # abs_num will be 5
```

### 8. `round()`

The `round()` function rounds a floating-point number to the nearest integer. Example:

```python
value = 3.7
rounded_value = round(value)  # rounded_value will be 4
```

### 9. `str.upper()` and `str.lower()`

These methods are used to change the case of characters in a string. `str.upper()` converts all characters to uppercase, and `str.lower()` converts them to lowercase. Example:

```python
text = "Python is FUN"
upper_text = text.upper()  # upper_text will be "PYTHON IS FUN"
lower_text = text.lower()  # lower_text will be "python is fun"
```

### 10. `chr()` and `ord()`

These functions deal with character encoding. `chr()` converts an integer to a character, and `ord()` converts a character to its integer representation. Example:

```python
character = 'A'
ascii_value = ord(character)    # ascii_value will be 65
char_from_ascii = chr(65)       # char_from_ascii will be 'A'
```

## Questions

1. What is the primary purpose of the `print()` function in Python?

   a) To perform mathematical calculations   
   b) To find the maximum value in a list  
   c) To display information on the screen  
   d) To convert data types  

2. Which built-in function returns the length of a string?

   a) `size()`  
   b) `length()`  
   c) `count()`  
   d) `len()`  

3. What does the `input()` function do in Python?

   a) It performs rounding operations  
   b) It allows user input and returns it as a string  
   c) It calculates the absolute value of a number  
   d) It converts a value to uppercase  

4. How can you convert a string containing a number, like "42", to an actual integer in Python?

   a) Use the `int()` function  
   b) Use the `str()` function  
   c) Use the `float()` function  
   d) Use the `round()` function  

5. What does the `max()` function do in Python?

   a) Returns the length of a string  
   b) Returns the maximum value among a set of values  
   c) Converts all characters to uppercase  
   d) Calculates the sum of all elements in a list  

6. Which built-in function is used to find the absolute value of a number?

   a) `abs()`  
   b) `max()`  
   c) `round()`  
   d) `len()`  

7. What does the `round()` function do to a floating-point number?

   a) Converts it to an integer  
   b) Rounds it to the nearest integer  
   c) Converts it to a string  
   d) Finds its square root  

8. Which function is used to change all characters in a string to uppercase?

   a) `str.capitalize()`  
   b) `str.upper()`  
   c) `str.lower()`  
   d) `str.title()`  

9. What is the purpose of the `chr()` function in Python?

   a) To find the length of a string  
   b) To calculate mathematical expressions  
   c) To convert a character to its integer representation  
   d) To perform character encoding  

10. Which function is used to convert an integer to its corresponding character?

    a) `int.char()`  
    b) `chr()`  
    c) `char()`  
    d) `int.to_char()`  


