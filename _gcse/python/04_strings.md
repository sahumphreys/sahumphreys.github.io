---
title: Strings
categories: [python]
page: 5
---

>- Understand the nature and importance of strings as a fundamental data type in Python.
- Know how to create, manipulate, and format strings using various techniques.
- Be aware of common string methods and their applications.
- Know how to effectively index, slice, and find the length of strings.
- Understand the concept of string immutability.
- Gain practical experience through programming tasks related to strings.
{: .callout.objectives}


## What are Strings?

- In Python, a **string** is a data type used to represent text.
- Text can be anything from a single character to a whole paragraph.
- Strings are a fundamental data type in programming and are used extensively in real-world applications.

## Creating Strings

- Strings are created by enclosing text in either single quotes (`'`) or double quotes (`"`).
- For example:
  - `'Hello, World!'`
  - `"Python is fun"`

> The type of quotation mark used must be consistent, the following is incorrect as the quotes do not match: `'Hello, World!"`
{: .callout.notice}

- to include a quotation mark within a string, use the other one!  For example:

    ```python
    message = "I don't like Mondays!"
    ```

## String Operations

### Concatenation

- You can combine two or more strings using the **concatenation operator** (`+`).
- Example:
  
  - `'Hello' + ' ' + 'World'` results in `'Hello World'`.

### Repetition

- You can repeat a string multiple times using the **repetition operator** (`*`).
- Example:
  - `'Python' * 3` results in `'PythonPythonPython'`.

## String Methods

- Python provides many built-in **string methods** that allow you to manipulate and work with strings effectively.
- Some common string methods include `upper()`, `lower()`, `len()`, `strip()`, `split()`, and `replace()`.
- Example:
  - `"Python".upper()` results in `'PYTHON'`.
- When using these do not forget the brackets after the method name, these are function calls and must have the brackets
- To find characters in a string, use the `find()` method.  This returns the index of the first occurrence of that character.  
- For example:
  
    ```python
    course = "Python for beginners"
    course.find('P')                    # returns 0
    course.find('for')                  # returns 7
    course.find('Beg')                  # returns -1, it is case sensitive
    ```
- To replace a character, or a sequence of characters use `replace()` e.g. `course.replace('Python', 'Java')`
- To check for the existence of characters in a string, use `print('Python' in course)`.  This method will returns a boolean value and line `find()` is case-sensitive.

## String Indexing

- Each character in a string has a unique **index** starting from `0`.
- You can access individual characters in a string using square brackets and the index.
- Example:
  - `"Python"[0]` returns `'P'`.
  - `"Python"[2]` returns `'t'`.

## String Slicing

- **String slicing** allows you to extract a portion of a string.
- It is done by specifying a **range** of indices inside square brackets.
- For example:

    ~~~~~python
    course = "Python"
    print(course[0])            # 'P'
    print(course[-1])           # 'n'
    print(course[0:3])          # 'Pyt' nb. does not print course[3] the 4th char
    print(course[0:])           # all the characters!
    ~~~~~

## String Length

- You can find the length of a string using the `len()` function.
- Example:
  - `len("Hello, World!")` returns `13`.

## Escape Characters

- Some characters have special meanings in strings, such as newline (`\n`) and tab (`\t`).
- To include these characters in a string, you need to use **escape sequences**.
- Example:
  - `"Hello\nWorld"` creates a string with a newline character.

## Multiline Strings

- You can create multiline strings by enclosing them in triple quotes (`'''` or `"""`).
- Useful for long text or preserving the formatting of text.
- Example:
  
  ```python
    multiline_text = '''
    This is a multiline
    string in Python.
    '''
  ```

## String Formatting

- You can format strings using **f-strings**.
- An f-string is created by prefixing a string with `f` or `F` and using curly braces `{}` to enclose expressions.
- Example:
  - `name = 'Alice'`
  - `f'Hello, {name}!'` results in `'Hello, Alice!'`.
- This is a preferred method for representing strings as it results in less typing and less chance of introducing a syntax error by forgetting to include a quote or a comma etc..
- For example:

    ~~~~~python
    first = 'Simon'
    last = 'Humphreys'
    message = first + ' [' + last + '] ' + 'is a teacher'
    print(message)
    msg = f'{first} [{last}] is a teacher'          # using 'f' for a formatted string
    print(msg)
    ~~~~~

## String Immutability

- Strings in Python are **immutable**, which means their values cannot be changed after creation.
- Any operation that seems to modify a string actually creates a new string.
- Example:
  - `text = "Hello"`
  - `new_text = text + ", World!"`

## Questions

1. What is the primary purpose of strings in Python?
   
   a) To represent mathematical calculations  
   b) To store and manipulate textual data  
   c) To create graphical user interfaces  
   d) To perform logical operations

2. How do you create a string in Python?
   
   a) By enclosing text in single quotes  
   b) By enclosing text in double quotes  
   c) By using the `str()` function  
   d) By using square brackets

3. Which of the following string operations is used to combine two or more strings?
   
   a) Division  
   b) Subtraction  
   c) Concatenation  
   d) Multiplication

4. What is the result of `"Python" * 3`?

   a) `"PythonPython"`  
   b) `"PythonPythonPython"`  
   c) `"Python3"`  
   d) `9`

5. Which Python method is used to convert a string to uppercase?
   
   a) `upper()`  
   b) `lower()`  
   c) `length()`  
   d) `find()`

6. What does the `find()` method return if the specified character or substring is not found in the string?
    
   a) `True`  
   b) `False`  
   c) `-1`  
   d) `0`

7. How do you access the first character of a string named `text`?
   
   a) `text[0]`  
   b) `text[1]`  
   c) `text[-1]`  
   d) `text(0)`  

8. What does string slicing allow you to do?

    a) Combine two strings  
    b) Repeat a string  
    c) Extract a portion of a string  
    d) Convert a string to uppercase  

9. What is the length of the string `"Hello, World!"`?
   
   a) 11  
   b) 12  
   c) 13  
   d) 14

10. How do you include a newline character in a string?
    
    a) Using `\n`  
    b) Using `\t`
    c) Using `\\`
    d) Using `#`  

<!-- ## Programming Tasks

1. Write a Python program that asks the user to enter their first name and last name separately. Then, print a formatted message like "Hello, [First Name] [Last Name]!" using f-strings.  Replacing `[First Name]` and `[Last Name]` with the data entered by the user.

2. Create a string variable `paragraph` that contains a multiline text with at least three lines. Use triple quotes to define the multiline string. Print the contents of the `paragraph` variable.

3. Write a Python program that takes a user's input as a sentence and counts the number of words in that sentence. Words are separated by spaces. Print the word count.

```tip
For this final exercise look up the `split()` method.
``` -->

