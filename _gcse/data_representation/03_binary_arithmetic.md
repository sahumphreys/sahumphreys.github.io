---
title: Binary Arithmetic
page: 4
categories: [Data Representation]
---

{: .callout.objectives}
>- To know how to add two binary numbers
>- Be able to add two binary numbers
>- Explain how the binary shift operator is used to perform multiplication and division of numbers by powers of 2
>- Apply the binary shift operators `>>` and `<<` to a range of numbers

As we saw in the last section all the data the computer processes has to be represented using the binary number system, Base-2.  The computer is made of electrical circuits and at the heart of these circuits are transistors.  The transistor can either hold a charge or not.  Those two states can be represented as $$0$$ and $$1$$ the two digits in the binary number system.

All operations have to be carried out using this system, including adding, subtracting, multiplying and dividing values.  Here we will examine how this is done. 

{: .callout.notice}
> We are only dealing with positive whole numbers in the range $$0$$ to $$255$$ i.e. one **byte**.

## Addition

Adding binary numbers follows the same rules as for denary.  Add each column starting with the least significant bit and move to the right.  Any carry from a column is added into the next column and so on.  It's relatively trivial as their are only four possible outcomes when adding two binary digits:

$$0_2 + 0_2 = 0_2$$  
$$0_2 + 1_2 = 1_2$$  
$$1_2 + 0_2 = 1_2$$  
$$1_2 + 1_2 = 0_2$$ carry $$1_2$$  

Bearing the carry in mind, four additional rules should be referenced:

$$0_2 + 0_2 + 1_2 = 1_2$$  
$$0_2 + 1_2 + 1_2 = 0_2$$ carry $$1_2$$  
$$1_2 + 0_2 + 1_2 = 0_2$$ carry $$1_2$$  
$$1_2 + 1_2 + 1_2 = 1_2$$ carry $$1_2$$  

For example, adding the binary number $$01101110_2$$ and $$00011100_2$$.  Work through the example, make sure you understand how the carry comes into play:

```pseudocode
	01101110
	00011100 +
	--------
	10001010
	--------
	1111
```

{: .callout.notice}
> To check you have the right answer, convert the result (and original numbers) into decimal

## Multiplication and Division

{: .callout.notice}
>- The **Most Significant Bit** is the bit on the left side of the binary number and, if changed, has the greatest impact on the magnitude of that number; 
>- the **Least Significant Bit** is the bit on the right side of the binary number ans, if changed, has the least impact on the magnitude of that number.

Observe the following binary numbers and their decimal equivalents:

$$00000101_2 = 5_{10}$$    
$$00001010_2 = 10_{10}$$  
$$00010100_2 = 20_{10}$$  

Notice how the binary pattern $$101$$ is being shifted to the left by one place, this is multiplying that number by $$2$$.  Shifting it $$4$$ places to the left multiplies it by $$4$$.

## Python shift operators

We can observe this functionality using Python.  For example:

```python
>>> a = 5
>>> b = a << 1      # shift by 1 place to the left
>>> b
10
```

Experiment with this using different shift values to see how the original value is shifted by that power of 2 (the shift value).  Similarly, try with the right shift operator: `>>` to divide by a power of 2.

{: .callout.notice}
> Adding two binary numbers is also possible but not directly as they need to be converted into integers first e.g. `result = bin(int('1010',2) + int('1011', 2))`.