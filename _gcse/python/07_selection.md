---
title: Selection
categories: [python]
page: 8
---

{: .callout.objectives}
>- To understanding selection in algorithms and code
- Define the purpose of selection (conditional statements) in programming.
- Learn the syntax of `if`, `elif`, and `else` statements in Python
- List and explain the relational operators used in conditions (e.g., ==, !=, >, <, >=, <=).
- Review examples of Conditional Statements
- Define the role of the `elif` statement in handling multiple conditions.
- Differentiate the use of `elif` from `if` and `else`.

## Introduction

As part of our algorithm we will often encounter a moment when a decision needs to be taken, and depending on the outcome of that decision, either `True` or `False`, execute a different statement or set of statements. In Python, we use `if`, `elif` (else if), and `else` statements to implement selection.  We also rely on the relational operators covered earlier i.e. `==`, `!=`, `>` etc..

```python
if True
    do something
else
    do this instead
```

### 1. The `if` Statement
The `if` statement allows you to execute a block of code only if a specified condition is true.

```python
if condition:
    # code to execute if condition is true
```

### 2. The `elif` Statement
The `elif` statement is used when you have multiple conditions to check. It is executed if the preceding `if` or `elif` conditions are false and its own condition is true.

```python
if condition1:
    # code to execute if condition1 is true
elif condition2:
    # code to execute if condition2 is true
```

{: .callout.notice}
> It makes sense to read `elif` as "**else if**"

### 3. The `else` Statement
The `else` statement is used as a fallback option if none of the preceding conditions are true.

```python
if condition:
    # code to execute if condition is true
else:
    # code to execute if condition is false
```

### 4. Conditions

The condition will always be some kind of Boolean expression that evaluates to either `True` or `False` and will use the relational operators we saw earlier:

1. **Equal to (`==`):** Checks if two values are equal.

2. **Not equal to (`!=`):** Checks if two values are not equal.

3. **Greater than (`>`):** Checks if one value is greater than another.

4. **Less than (`<`):** Checks if one value is less than another.

5. **Greater than or equal to (`>=`):** Checks if one value is greater than or equal to another.

6. **Less than or equal to (`<=`):** Checks if one value is less than or equal to another.

These conditions can be further combined using `and`, `or` and `not` to create complex conditional expressions.

## Examples

### Example 1: Basic `if` Statement

```python
age = 16
if age >= 18:
    print("You can vote!")
```

### Example 2: `if-elif-else` Statement

```python
score = 85
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
else:
    print("C")
```

## Questions

1. What is the purpose of selection (conditional statements) in programming?
2. How is an `if` statement structured in Python?
3. When is the code inside an `else` block executed?
4. What is the role of the `elif` statement in conditional statements?
5. Write an `if` statement that prints "Even" if a variable `num` is even and "Odd" if it's odd.
6. Write an `if-elif` statement that assigns a letter grade 'A', 'B', or 'C' based on a student's test score.
7. What will be the output from this program?

    ```py
    i=5     
    j=8
    if i < j:
        print (i is smaller than j)
    elif i > j:
        print (i is larger than j)
    else:
        print(j is the same as j)
    ```

8. What will be the output from this program?

    ```py
    hour=17
    if (hour >= 5 and hour < 12):
        print (“good morning”)
    elif (hour>= 12 and hour <=17):
        print (“good afternoon”)
    else:
        print (“good evening”)
    ```

9. What will be the output from the following program?

    ```py
    i=13
    j=7
    k=9
    if (i<j and k>i):
        print ("i is smaller than j and k")
    else if (i>j and i<k):
        print ("i is larger than k")
    else:
        print("k is the same as i")
    ```

10.  What additional comment might you make about the program in question 9?




