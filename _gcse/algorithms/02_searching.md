---
title: Searching Algorithms
page: 3
categories: [algorithms]
---

{: .callout.objectives}
>- first

Sifting through a whole bunch of data looking for a particular item is a very common occurrence, not least when we use a computer.  There are a number of algorithms we can use to **search** for data.  Here we look at two:

- Linear Search
- Binary Search

## Linear Search

Take something simple as a shopping list e.g.

- Milk
- Eggs
- Tomatoes
- Mince
- Flour

We want to find if a particular item exists in the list, say "Mince".  Being human it's trivial to scan through such a short list and find that "Mince" is indeed in the list.  We do this so quickly without really thinking about the steps we are taking to arrive at the answer i.e. the **algorithm** we are using.  If we are going to get a machine to do this for us then we need to work through that algorithm.

The item we are looking for is "*Mince*", this is known as the **search key**.  We have the list of items held as a list of strings, or an array of strings.  We compare our search key against the first item in the list: "*Milk*".  "*Mince*" is not the same as "*Milk*", so we then move on to the next item in the list.  "*Eggs*", again is not the string we are looking for.  We continue to do this until we find "*Mince*" as the fourth item in the list and we can quit searching.

If we were looking for, say, "*Crisps*" we would get to the end of the list having not found it as "*Crisps*" does not exist in our current list.

We've carried out a **linear search**, sometimes called a **sequential search**.  The linear search is a relatively simple searching algorithm that looks for a specific element in a list one by one, checking each element until a match is found or the end of the list is reached.

The process again:

- Start from the beginning of the list.
- Compare the target element with each element in the list sequentially
- If a match is found, return the index of the element; otherwise, continue searching until the end of the list
- If the end of the list is reached without finding a match, indicate that the element is not present.

In Python we can easily write the code for the linear search:

```python
# linear search

shopping_list = ["Milk", "Eggs", "Tomatoes", "Mince", "Flour"]  # initialise the list
item_count = len(shopping_list) 
search_key = "Mince"        # initialise the search key
found = False

for i in range(item_count):
    if shopping_list[i] == search_key:
        found = True

if found:
    print(f"{search_key} is in the list")
else:
    print(f"{search_key} is not in the list")
```

Notice how we have to start at the beginning of the list and compare the search key with every item in the list.  The boolean variable `found` is set to `True` if the item is there.  In the current algorithm we keep on searching for the item even when it has already been found.  This is the worst case behaviour of our algorithm i.e. if `n` is the length of the list then the worst case means we will be making a total of `n` comparisons.  Our current algorithm is *always* the worst case!  If the item we're looking for is the first item in the list we keep on searching ... what a waste of computing time.  We can improve on this by changing the loop in lines 8-10 to:

```python
while i < item_count and found == False:
    if shopping_list[i] == search_key:
        found = True
    i += 1
```

As soon as we find the search key in our list the loop will terminate.  Our best case will not be when the item we're looking for is the first item in the list.  The worst case remains, it will be when the search key is the last item in the list (or not in the list).

With such a small number of items this change will make little difference but as the number of items in our list increases, and increases, it will being to have a significant impact on how quickly our algorithm will return a result.

The study of algorithms is about finding the **best** algorithm for the given situation.

{: callout.notice}
> It would be even better to put this algorithm into its own function passing in the search key and the item list as parameters to this function.
>  
Use Case: Linear search is suitable for unordered lists or small datasets where the order of elements is not important.

## Binary Search

Overview: Binary search is a more efficient searching algorithm that requires the list to be sorted. It works by repeatedly dividing the search interval in half until the target element is found.
Process:
Start with the entire sorted list.
Compare the target element with the middle element of the list.
If the target is equal to the middle element, the search is successful.
If the target is less than the middle element, repeat the search on the lower half of the list.
If the target is greater than the middle element, repeat the search on the upper half of the list.
Continue dividing the search interval until the target is found or the interval becomes empty.
Use Case: Binary search is highly efficient for large, sorted datasets. However, the list must be sorted for binary search to work correctly.
Comparison:

Efficiency: Binary search is generally more efficient than linear search for large datasets, especially when the data is sorted. Linear search may require checking every element in the worst case.
Requirement: Binary search requires the list to be sorted, while linear search works on both sorted and unsorted lists.
Implementation: Binary search involves a more complex implementation compared to the simplicity of linear search.
Understanding these searching algorithms is important for GCSE Computer Science students as they lay the foundation for more advanced algorithms and data structures. Students should be able to analyze scenarios and choose the appropriate algorithm based on the characteristics of the data they are working with.