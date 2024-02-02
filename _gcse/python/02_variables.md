---
title: Variables
category: python
page: 3
---

>- Understand the concept of variables and their role in programming.
- Grasp the dynamic typing system in Python.
- Follow Python's naming conventions when naming variables.
- Learn how to display output using the print() function.
- Know how to obtain and process user input.
- How to check the data type of a variable.
- Definition of a constant and how to use with Python
- Recognize the importance of clean code through PEP8 guidelines.
- Gain practical experience by completing programming tasks related to variables and user input.
{: .callout.objectives}


In the previous section we set up the Python environment and our IDE for writing Python programs.  Here we'll run through one of the key features for all programming languages, variables and constants.


## Variables

A variable is a foundational concept for all programming languages.  It is simply a container or a label used to store data in our programs.  During the course of a program it is likely the value of that data item will change, it varies, hence it is known as a __variable__, or we may need a value that remains the same throughout our program, a __constant__.  In each case the data items will be named and have some value.

For example:

```py
name = "Simon"      # a string of characters
age = 34            # an integer (whole number)
plays_piano = True  # a boolean value (either true or false)
hourly_rate = 34.99 # a real number
```

Here we've initialised four variables.  Each contain a different **type** of data as described in the comments.  Python knows about four primitive types of data:

- **Int**eger: whole numbers, positive and negative
- **Float**ing point numbers: a real number with a decimal point and fractional component
- **Bool**ean: either true or false
- **Str**int: any set of characters

> A comment is text in your code that will be ignored by the Python interpreter.  Comments can be on a single line when preceded by the `#` symbol.  multi-line comments are wrapped by three quotes: `''' comment here '''`.
{: .callout.notice}


It's important to recognise the difference between these different **data-types**.  In some programming languages you have to declare the type of data that is expected in a variable, this is known as **static data typing**, and it is fixed before the code is compiled.  For example in C# you would declare these variables as:

```cs
string name = "Simon";
int age = 34;
bool plays_piano = true;
float hourly_rate = 34.99;
```

Python takes a different approach.  It is a **dynamically typed** language.  This means the value assigned to the variable will determine the data type for that variable as the program is running.  So the data type of the variable is determined by the value it holds.

We will see later functions that can be used to convert a variable of one data type to another, a process known as **casting**:

```py
age = int("42")         # cast a string to an integer
age_string = str(age)   # cast it back to a string
age = float(42)         # cast an integer to a float
```

The names, or **identifiers**, for each helps to describe the data they each contain.  We could have named them as follows:

```py
a = "Simon"
b = 34
c = True
d = 34.99
```

This makes the code much harder to read and therefore harder to maintain as well.  When giving a name to a variable, think carefully about what to use.  It should be descriptive of the item of data contained there so it makes sense when you, or others, read your code.  There are guidelines/rules for naming variables but for now remember they must not start with a digit, nor can they use another term used as a __keyword__ in the language.  Python allows for underscores to be used in variable names e.g. `is_student` but **not** the hyphen e.g. `is-student`.  Finally, variable names are case-sensitive, so `age` is different to `Age`.


> **Python keywords** and, as, assert, break, class, continue, def, del, elif, else, except, finally, for, from, global, if, import, in, is, lambda, nonlocal, not, or, pass, raise, return, try, while, with, yield.  None of these can be used as the name for a variable. To see the latest set of keyboards enter ```print(keyword.kwlist)``` in the interactive environment.
 {: .callout.notice}


Python has a style for naming of variables.  When an identifier is made up of multiple words separate each word with an underscore:

```py
is_student = True
cumulative_sum_of_numbers = 50
```

```info
This is called "snake-case.  There is extensive documentation for how to write Python code, a style guide known as **PEP8**.  You can read about PEP8 here: https://pep8.org
```

Values are assigned to variables using the **assignment operator**: `=`, as shown in the examples above.  Variables can be re-assigned with new values thus their value can change during the course of the program.  This is why they are called variables.

```py
name = "Peter"      # a string of characters
age = 49            # an integer (whole number)
plays_piano = False  # a boolean value (either true or false)
hourly_rate = 38.99 # a real number
```

Note the assignment operator: `=`.  It's important not to confuse this with the mathematical symbol for "equals".  Try to get into the habit when reading code and encountering e.g. ```age = 42``` to say "age *is assigned* the value 42".  Also make sure you get it the right way round, ```42 = age``` will not work!

## Simple Output

To get data displayed on the screen we use the `print()` function.  On it's own this command will just print a new empty line, but elements, or more formally **arguments**, can be placed inside the brackets.  These arguments will then be displayed on the screen.  We'll consider more sophisticated ways of using the `print()` function later but for now try the following in a new file.

In a new Python file, enter the following **statements**:

~~~~~py
line1 = "+===============================+"
line2 = "|                               |"
line3 = "|     Welcome to Python!        |"

print(line1)
print(line2)
print(line3)
print(line2)
print(line1)
~~~~~

Having declared and initialised three string variables, we make successive calls to `print()` passing in a different variable each time to display a simple text banner on the screen.

## Getting input from the user

Assigning data to a variable can be hard-coded in your program or obtained externally such as a user entering data at the keyboard.

To get data from our user we call the `input()` function:

~~~~~py
name = input('Enter your first name: ')
~~~~~

This function displays the string in brackets and waits for user to type something, this is then assigned to a variable:

The data type of the input from the keyboard will always be a string so if we need that data to behave as a integer, a float or some other type then it will need to be cast to that type using the appropriate function.  For example, the following will generate an error as we are trying to carry out addition on a string, which makes no sense:

~~~~~py
age = input('Enter you age: ")
age = age + 1                   # this generates an error!
~~~~~

Instead, we have to cast it to an integer:

~~~~~py
age = input("Enter your age: ")
age = int(age)
age = age + 1
~~~~~

This will not work, though it can be shortened by wrapping the `int()` function around the `input()`:

~~~~~py
age = int(input("Enter your age: "))
age = age + 1
~~~~~

If you want to check the type of data held by a variable we can use the `type()` function:

~~~~~py
age = 42
print(type(age))
text = "Hello"
print(type(text))
~~~~~


## Constants

Like a variable a constant is a name given to an item of data.  The difference is the value of that item does not change throughout the course of the program.  For example we could use the value $3.14$ for our program, or use this value as a constant e.g. ```PI = 3.14```, or the VAT rate would be better expressed as `VAT_RATE = 0.2` rather than using the actual value as a "magic number" in our code.  It aids readability and should the Chancellor make a change to the VAT rate we only have to update our program code in one place.

Unlike other programming languages Python does not have a strict syntax for constants - this is unfortunate.  To get round this we simply declare our constants using upper case identifiers.  Yes, you might make a mistake and inadvertently reassign that constant value but if you stick to the convention it should be obvious that the data item is to be treated as a constant value rather than a variable.

## Questions

1. What is a variable, and why is it important in programming?

2. Explain the difference between a variable and a constant.

3. Python is a dynamically typed language. What does this mean in terms of variable declaration and data types?

4. What are the four primitive data types in Python mentioned in the notes?

5. What are the rules for naming variables in Python?

6. Why is it essential to choose descriptive variable names in your code?

7. What is the purpose of casting in Python, and how is it done?

8. How can you check the data type of a variable in Python?

9. What is the Pythonic style for naming variables with multiple words?

10. What is PEP8, and why is it important in Python programming?

<!-- # Programming Tasks -->

<!-- 1. **Total Marks**  A student has taken three tests as part of his final year exam.  He scored 65/100, 45/100 and 57/100 respectively.  Write a Python program to sum his total marks and display to the screen.  Save the file as `marks.py`. -->

<!-- ```tip -->
<!-- **THINK** What variables will you need?  What calculations will be required? What should be displayed? -->
<!-- ``` -->

<!-- 2. **Total Marks - Extended** As an extension to the `marks.py` program, ask the user to enter the three marks.  Output the total and the overall mark as an average of the three. -->

<!-- 3. **Petrol Sales** Your local garage sells petrol at the following rates:  Diesel £1.64  Unleaded £1.59 Unleaded 65 £1.61.  Each price needs to be increased by 10% and stored again.  What would sensible variables names be for this program?  Write a program to display the initial prices, then calculate and store the increased prices and display to the screen.  Save your file as `petrol.py`. -->


