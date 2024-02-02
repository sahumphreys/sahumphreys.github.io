---
title: Getting started with Python
categories: [python]
page: 2
---


>- Have a working Python environment on the computers.
- Understand the importance of choosing and using an IDE.
- Introduction to basic Python concepts.
- Grasp the concept of a program and how Python fits into it.
- Get hands-on experience by writing and running a first Python program.
{: .callout.objectives}

The first steps to get started with programming using the Python language are:

- download and install Python to your computer
- download, install and if needed configure an IDE (Integrated Development Environment) to write your Python programs.

## Installing a Python environment

Follow these steps to install Python to your computer.  The exact steps may vary depending on your operating system (Windows, macOS, or Linux).

**1. Download Python:**

- Visit the official Python website at [https://www.python.org/downloads/](https://www.python.org/downloads/)
- You'll see the latest versions of Python available for download. Choose the version that is appropriate for your operating system. For most users, it's Python 3.x (e.g., Python 3.8, Python 3.9, etc.), as Python 2 is no longer supported.  At time of writing the latest version was Python 3.11.

**2. Download the Installer:**

- Click on the download link for the Python version you've chosen.
- If you're using Windows, you'll likely download an executable installer (.exe) file. For macOS, it will be a disk image (.dmg) file. For Linux, it might be a tarball (.tar.gz) or another format, depending on your distribution.

**3. Run the Installer:**

- For Windows: Double-click the downloaded .exe file and follow the installation wizard's instructions. Make sure to check the box that says "Add Python x.x to PATH" during installation to make Python accessible from the command line.
- For macOS: Double-click the .dmg file and follow the instructions to install Python.
- For Linux: Open a terminal and navigate to the directory where you downloaded the tarball. Extract it and follow the README or installation instructions provided with your distribution.

**4. Verify the Installation:**

- After installation, open a terminal or command prompt.
- Type `python --version` or `python3 --version` and press Enter. You should see the version of Python you installed.

```py
>>> python --version
Python 3.10.5
```

## The Python interactive environment

- Enter `python` in your terminal (command) window, this will load the **Python interactive environment** and means you can run Python commands here.  
- Sometimes known as the REPL, which stands for "Read-Evaluate-Print-Loop".
- Try the following examples which introduce some of the fundamental concepts of Python:

- **Basic Arithmetic Operations:**

  - In Python, you can perform basic arithmetic operations directly in the interactive environment.
  - At the prompt, try the following and record your answers:

    ```py
    >>> 2 + 3
    >>> 5 - 1
    >>> 4 * 6
    >>> 10 / 3
    >>> 10 // 3
    ```

- **Working with Variables:**

  - A **variable** is a name that we give to some data which is stored in the computer's memory.  We can create variables to store and manipulate data in the interactive environment.
  - At the prompt, try the following and observe the results:

      ~~~~~py
      x = 5
      y = 3
      sum_result = x + y
      product_result = x * y
      sum_result
      product_result
      ~~~~~

- **Strings and String Operations:**

  - Strings are collections of characters, usually assigned to a variable.
  - At the prompt, try the following and observe the results:

      ~~~~~py
      greeting = "Hello"```
      name = "Alice"```
      ~~~~~

  - String can be joined together, known as **concatenation**:

      ~~~~~py
      >>> full_greeting = greeting + " " + name
      ~~~~~

  - Strings can be processed using some useful built-in functions:

      ~~~~~py
      >>> greeting_length = len(greeting)
      >>> uppercase_name = name.upper()
      ~~~~~

  - Review the results

      ~~~~~py
      >>> full_greeting
      >>> greeting_length
      >>> uppercase_name
      ~~~~~

- **Lists and List Operations:**

  - Lists are a fundamental data structure in Python, they are collections of data items with a common name.
  - At the prompt, try the following and observe the results:

     ~~~~~py
     >>> fruits = ["apple", "banana", "cherry"]
     ~~~~~

  - To access the elements, or items, in the list we use an index for its position (starting at $0$) 

     ~~~~~py
     >>> first_fruit = fruits[0]
     >>> second_fruit = fruits[1]
     ~~~~~

  - Items can e added or removed from the list:
    
     ~~~~~py
     >>> fruits.append("orange")
     >>> fruits.remove("banana")
     ~~~~~

  - Review the results:

     ~~~~~py
     >>> fruits
     >>> first_fruit
     >>> second_fruit
     ~~~~~


To exit from the interactive environment, enter the command ```exit()``` or ```quit()``` or use the shortcut keys `Ctrl-D` (Windows)
{: .callout.notice}

## Install a Code Editor or IDE

- While you can write Python code using the interactive environment it soon becomes too difficult and we need to write our code in a file which can then be run by the Python interpreter.  For this we use an __IDE__, or __Interactive Development Environment__.
- The IDE will come with an editor (for writing our code and options to save our file etc), syntax highlighting, line numbers, a debugging environment and a host of other features.
- Working with an IDE that you like and can get familiar with is a really important aspect of a programmer's workflow.
- There are several IDEs available for Python and we'll not cover the specific instructions for each.
- Your Python installation will come with a [default IDE called *IDLE*](https://marketsplash.com/tutorials/python/idle-python/)
- You might like to try alternatives (as IDLE can be tricky and its debugging environment is not ideal), e.g.
  - Thonny
  - Visual Studio Code
  - PyCharm
- Alternatively you can use an online environment such as that provided by [repl.it](https://replit.com)
- With your chosen editor make sure you know how to create a new file and save.
- All code screenshots used here will be either from VSCode or Thonny

That's it! Python should now be installed on your home computer. You can start writing and running Python scripts in your chosen development environment.

Remember to keep your Python installation updated as new versions are released with bug fixes and improvements. You can check for updates and install them using the `pip` package manager, which usually comes bundled with Python. Use the following command to upgrade `pip` and check for Python package updates:

```py
pip install --upgrade pip
pip list --outdated
```

## Your first program

The convention when learning any new programming language is to write a program that displays the string "Hello, World!" on the screen.  You can read about why this is the case [here](https://dev.to/just5moreminutes/why-hello-world-5c0g).

With Python this is very easy:

~~~~~py
print("Hello, World!)
~~~~~

That's it!  We use the built-in Python function, `print()`, and provide this function with the text we want to display inside quotation marks.  You can use single or double quote, just be consistent.

- In your IDE create a new file, save it with a suitable name e.g. 'hello.py'.
- Enter the statement to print as in the code snippet above, and re-save the file
- Run the file using e.g. 'Run Module' in IDLE, 'Run Current Module' in Python or click the play button in VSCode
- Most IDEs will run the current file using the F5 key.
- Alternatively at a terminal window, in the directory where the file has been saved you can type the following to run your program: `C:\PythonFiles\Hello\python hello.py`


All Python code files, sometimes called scripts, should be saved with the file extension '.py'
{: .callout.notice}


## What is a program?

A program, in the context of computers and technology, is like a set of instructions that tells a computer what to do. It's a bit like giving directions to a friend, but instead of telling your friend how to get from one place to another, you're telling the computer how to perform specific tasks.

Imagine you have a robot, and you want that robot to make you a sandwich. You can't just tell the robot, "Make me a sandwich." The robot needs step-by-step instructions, like:

1. Go to the kitchen.
2. Open the refrigerator.
3. Take out the bread, cheese, and lettuce.
4. Put two slices of bread on a plate.
5. Put some cheese and lettuce on one slice of bread.
6. Put the other slice of bread on top.
7. Close the sandwich.
8. Bring it to me.

Each of these steps is like a line of code in a program. A program is a collection of these instructions that a computer can understand and follow to complete a specific task. The computer reads and executes these instructions in order, just like our robot friend follows the steps to make a sandwich. It's the language computers understand to perform the tasks we want them to do.

The syntax of the instructions will differ between progamming languages but essentially all have the following components:

- **Input**: Get data from the keyboard, a file, the network, or some other device.
- **Output**: Display data on the screen, save it in a file, send it over the network, etc.
- **Mathematical and logical operators**: To perform basic mathematical operations like addition and multiplication and logical operations such as AND, OR and NOT.
- **conditional execution**: Check for certain conditions and run the appropriate code.
- **Repetition**: Perform some action repeatedly, usually with some variation.

Every program you've ever run will be made up of these type of instructions.

## Formal vs natural languages

When we think of a language we probably think of the language people speak be that English, French or arabic etc..  These are known as **natural languages**, no-one sat down and designed the language, they have evolved naturally over time (and are continuing to evolve).

A **formal language** is a language that has been designed by people to be used in specific circumstances e.g. mathematical expressions and notation or chemical symbols to denote the molecular structure of different chemicals.  Similarly programming languages in computer science.  

These formal languages have a strict syntax relating to the **tokens** of the language and how they can be organised.  For example, in mathematical notation $4 + 7 = 11$ combines five tokens of the language into a meaningful expression.  By contrast, $4 += 7$.  The tokens might be valid but the rules do not permit one operator to follow another in this way.  It is a syntax error.

## The Python interpreter

Python is an interpreted language.  This means it does not produce a separate executable file but works its way through your code file and executing it on the fly.  It's a complicated process and you might like to return to this section at another time.

First, Python (the interpreter) will analyse your code and check it for any syntax errors and make sure the rules for indentation have been followed correctly.  It carries out a **lexical analysis** and the divides the source code into a number of **tokens** which are passed to the **parser** which generates the **Abstract Syntax Tree** (AST). The AST is converted into **byte codes** which can then be saved to a file with a `.pyc` extension.

Next, the Python interpreter will launch its **Python Virtual Machine** (PVM) which converts the byte codes into the binary data required by the target computer.  This way, your Python code will run on Windows, Linux or MacOS.

Some programming languages will, by default, produce a compiled executable which, on Windows, will be a file with the `.exe` extension.  This means you can create your program and distribute the `.exe` for another user to run.  This file will only be compatible for the target platform e.g. Windows, or MacOS.  To distribute your Python program you need to provide the code and your user will have to have Python installed on their machine to run your code.

## Questions

Select the correct options from the following set of multiple choice questions.  Where relevant try out the commands using the interactive environment or by writing a short Python program to demoonstrate.

1. What are the general steps to install Python on your home computer?

    a) Download the installer and click "Next" repeatedly  
    b) Visit a random website and download Python  
    c) Download Python from the official Python website and follow the installation instructions  
    d) Python cannot be installed on home computers  

2. Which version of Python should you choose for most users?

    a) Python 2.x  
    b) Python 3.x  
    c) Python 4.x  
    d) Python 1.x  

3. What does the "Add Python x.x to PATH" option during installation do?
   
    a) It adds Python to the Windows Registry  
    b) It creates a shortcut on the desktop  
    c) It adds Python to the system's PATH environment variable  
    d) It installs additional Python libraries

4. How can you check if Python is installed correctly on your computer?

    a) By opening Microsoft Word  
    b) By typing `python --version` in the command prompt or terminal  
    c) By creating a new Python file  
    d) By checking your email  

5. What command can you use to start the Python interactive environment in your terminal or command prompt?

    a) `start python`  
    b) `run python`  
    c) `python`  
    d) `start`  

6. What is the result of the expression `10 / 3` in Python?

    a) 3.3333  
    b) 3.0  
    c) 4  
    d) 10  

7. What does the `len()` function do in Python?
   
   a) Returns the length of a string or list  
   b) Converts a string to uppercase  
   c) Performs basic arithmetic operations  
   d) Creates a new list  

8. How do you access elements in a list in Python?

    a) Using square brackets and the element's value  
    b) Using the `get()` function  
    c) Using parentheses and an index  
    d) Lists cannot be accessed in Python  

9. Which Python function is used to join two or more strings together?

    a) `add()`  
    b) `concatenate()`  
    c) `merge()`  
    d) `+` operator  

10. What is the purpose of an Integrated Development Environment (IDE) when working with Python?

    a) To download Python packages  
    b) To create Python programs  
    c) To run Python scripts in a web browser  
    d) To play Python games  

<!-- ## Practical Exercises

1. Write Python code to calculate and print the area of a rectangle. You can define the length and width of the rectangle as variables and then calculate the area using the formula `area = length * width`.

2. Create a Python program that asks the user for their name and then prints a greeting message using that name. For example, if the user enters "Alice," the program should print "Hello, Alice!" -->
