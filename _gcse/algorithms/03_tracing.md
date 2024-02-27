---
title: Tracing an algorithm
page: 4
categories: [algorithms]
---

{: .callout.objectives}
>- first

Often, when writing and implementing our algorithms using code, we do not get the results we are expecting.  We get an error.  There may be different types of errors:

- **syntax error**: we use the wrong type fo statement, or there is a typo in our code.  When we try to run our Python code the interpreter will stop and alert us to the error we have made.  It will provide us with an error message - which might, sometimes, appear confusing to read but can be helpful in tracking down where we have gone wrong
- **logic error**: Our program runs through to its conclusion, there are no syntax errors, but the result we get is not what we were expecting.  Our logic is wrong and we need to track down where the error might be located.  This can be difficult and time-consuming.  We can use a **trace table** to help.
- **runtime error**: The last category of error causes our program to "crash" while it is running, perhaps we're trying to read from a file that does not exist or we've divided by zero or tried to apply an arithmetical operator to the wrong kind of data.  Good programmers should be alert to theses kind of errors - they should not occur.

Tracing an algorithm can help track down i.e. **debug** logic errors.  Let's first look at the process and principles then use the technique on code that does have a logic error that needs to be corrected.

We'll start with the binary search algorithm from the previous section:

```python
def binary_search(items, target):
    low = 0
    high = len(items) - 1

    while low <= high:
        mid = (low + high) // 2  # Calculate the middle index

        if items[mid] == target:
            return mid  # Element found, return its index
        elif items[mid] < target:
            low = mid + 1  # Discard the left half
        else:
            high = mid - 1  # Discard the right half

    return -1  # Element not found
```

Our list of items will be: `sorted_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, and our `target` will be $$7$$.

When tracing we play the role of the computer keeping a record of the **variables** and how they are being changed during the execution of the function.  Proceed cautiously, do not try to second guess what you *think* might be happening, do not look forward just take it line by line.  It can help to cover up any lines of code not being considered, analyse that one line, note the variables and any change of state, before moving on to the next line.

Our function has a number of important variables.  Make these the columns of a table:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
|        |     |      |     |           |        |

We know our target is 7 and lines 2-3 of our function can be entered quite easily into our table:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
| 7      |   0 |   9  |     |           |        |

Moving down our code, line 5 is `True` as 0 is less than 9, so we proceed to the next line and note the value iof `mid`, then check the value at `items[mid]`:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
| 7      |   0 |   9  |  4  |     5     |        | 

Line 8, we've  not found the target value in this position, the value is less than our target so we need to adjust the `low` value:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
| 7      |   0 |   9  |  4  |     5     |        | 
|        |  5  |      |     |           |        |

{: .callout.notice}
> You do not need to repeat the values for `target`, `high`, `mid` etc..  It is assumed these have not changed - which, of course, they haven't.

We return to the top of the loop and repeat.  

Line 5 is still `True` and we can progress to work out the value for `mid` (line 6) and then get the value for `items[mid]`:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
| 7      |   0 |   9  |  4  |     5     |        | 
|        |  5  |      |  7  |     8     |        |

It's not our `target` value, but it is higher than our target so we use line 13 to adjust the value if `high`:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
| 7      |   0 |   9  |  4  |     5     |        | 
|        |  5  |      |  7  |     8     |        |
|        |     |  6   |     |           |        |

Returning to the top of the loop again, `low <= high`  is still `True` so we update the value if `mid` and get the value of `items[mid]` as before:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
| 7      |   0 |   9  |  4  |     5     |        | 
|        |  5  |      |  7  |     8     |        |
|        |     |  6   |     |           |        |
|        |     |      |  5  |     6     |        |

It's *still* not our target value so we continue.  The value is less than the target so we update the value of `low`:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
| 7      |   0 |   9  |  4  |     5     |        | 
|        |  5  |      |  7  |     8     |        |
|        |     |  6   |     |           |        |
|        |     |      |  5  |     6     |        |
|        |  6  |      |     |           |        |      

Returning to the top of the loop again, it evaluates to `True` and we proceed as before to the next line to get the value of `mid` and the corresponding item in the list:

| target | low | high | mid | items[mid]| output |
|:------:|:---:|:----:|:---:|:---------:|:------:|
| 7      |   0 |   9  |  4  |     5     |        | 
|        |  5  |      |  7  |     8     |        |
|        |     |  6   |     |           |        |
|        |     |      |  5  |     6     |        |
|        |  6  |      |     |           |        | 
|        |     |      |  6  |     7     |        | 

Now the `target` is the same as `items[mid]` and on line 9 we can return the value iof `mid` from our function and we are done.