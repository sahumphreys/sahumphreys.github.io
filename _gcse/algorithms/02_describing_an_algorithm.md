---
title: Describing an algorithm
page: 3
categories: [algorithms]
---

{: .callout.objectives}
>- first

In the previous section we were working on an algorithm to find the largest value in a list of numbers: `[23, 8, -76, 49, 65, -2]`.  We set out the steps using **Structured English**:

1. Start with the first number in the list and consider it as the current maximum.
2. Iterate through the remaining numbers in the list.
3. For each number, compare it with the current maximum.
4. If the current number is greater than the current maximum, update the current maximum to be that number.
5. Continue this process until all numbers in the list have been considered.
6. The final value of the current maximum is the maximum number in the list.

Structured English is a high-level description language that uses natural language constructs to represent the logic of a process or algorithm. 

It is some step removed from the code used for a programming language.  It is intended for humans to read who may not gbe familiar with the syntax or forms used in a formal programming language such as Python.  

For GCSE Computer Science we need to be familiar with a more stylised form known as **pseudocode** and how **flowcharts** can also be used to describe an algorithm. Both [AQA](/docs/AQA-8525-NG-PC.pdf) and [OCR](/docs/202654-pseudocode-guide.pdf) have their own versions of pseudocode and require students to express their answers to any questions requiring an algorithm using their version of pseudocode.

{: .callout.notice}
> For questions that require pseudocode answers, marks will still be awarded if the pseudocode is incorrect but the meaning of the algorithm remains sufficiently clear.

## Pseudocode

Pseudocode is similar to Structured English in that they both provide high-level, human-readable representations of algorithms or processes without specifying the exact syntax of a particular programming language. However, there are some distinctions between the two:

| Structured English                                                                                                                                                      | Pseudocode                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It often resembles a more natural language, using sentences and phrases to describe the steps of the algorithm in a way that is closer to everyday language.            | It tends to have a structure that is more similar to code, using keywords and simple statements that are a bit closer to actual programming syntax                                                         |
| It is generally less formal and more human-readable. It is often used in the early stages of designing algorithms, providing a conceptual understanding of the process. | It can be a bit more formal and may include constructs that resemble programming language syntax. Pseudocode is often used as a transitional step between algorithm design and actual code implementation. |
| It is often intended for a broader audience, including stakeholders and individuals who may not have programming expertise.                                             | It is typically geared more towards programmers or those with some familiarity with programming concepts.                                                                                                  |

The finding the max algorithm becomes:

```plain
values <- [23, 8, -76, 49, 65, -2]
current_maximum <- first value in the list   # or current_maximum <- values[0]
number_of_values <- LEN(values)              # LEN() returns length of the list
FOR i <- 1 TO number_of_values
    current_value <- values[i]
    IF current_value > current_maximum THEN
        current_maximum <- current_value
    ENDIF
ENDFOR
OUTPUT current_maximum
```

The pseudocode used above follows the form used by AQA.  

The OCR version would be:

```plain
values = [23, 8, -76, 49, 65, -2]
current_maximum = first value in the list   # or current_maximum <- values[0]
number_of_values = LEN(values)              # LEN() returns length of the list
for i = 1 to number_of_values
    current_value <- values[i]
    if current_value > current_maximum then
        current_maximum <- current_value
    endif
next i
print current_maximum
```

Notice, in both cases, how the pseudocode includes programming type constructs of assignment, iteration and selection but is not expressed in any particular programming language.





