---
title: Sorting Algorithms
page: 5
categories: [algorithms]
---

{: .callout.objectives}
>- first

The task of a sorting algorithm is organise a list of items into a defined order.  A list of numbers could be organised into ascending or descending order based on their value, a list of strings could be sorted according to the length of each string (smallest or largest first) or put into lexicographic order i.e. `apple` would come before `banana`, and `banana` would come before `basket` etc..

It is a common problem and one that has been of interest to computer scientists for a long time and there a number of different algorithms that have been devised to solve this problem.  It's an excellent way of being introduced to the idea that some algorithms are "better" than others.  How "better" is defined there is dependent on the requirements of the task such as the time needed to complete the task, or how much memory is available and how much data is needing to be sorted.

Here we'll consider three sorting algorithms:

- Bubble Sort
- Insertion Sort
- Merge Sort

{: .callout.notice}
> There are many others worth exploring e.g. selection sort or quick sort but these are not required by the syllabus.


## Bubble Sort

The **Bubble Sort** is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process is repeated until the entire list is sorted.

The top level algorithm is:

- Compare the first two elements of a list
- If they are in the wrong order, swap them.
- Move to the next pair of elements and repeat the comparison and swapping.
- Continue this process until the end of the list.
- Repeat the entire process until no more swaps are needed, indicating that the list is now sorted.

The Bubble Sort is straightforward but less efficient compared to other sorting algorithms. It is suitable for small datasets or educational purposes but is not recommended for large datasets as the time taken to sort the list increases significantly as the number of items in the list increases.

### Bubble Sort Animation

<!-- ![Bubble Sort Animation](/assets/img/bubble-sort.gif) -->

<canvas id="sortCanvas" width="600" height="300" style="border:1px solid;"></canvas>


<button onclick="startBubbleSort()">Start Bubble Sort</button>
<!-- <div id="array-container"></div> -->

<script src="{{ site.baseurl }}/assets/js/bubble_sort.js"></script>






<!-- Merge Sort: -->

<!-- Overview: Merge Sort is a divide-and-conquer algorithm. It works by dividing the unsorted list into n sublists, each containing one element, and repeatedly merging sublists to produce new sorted sublists until there is only one sublist remaining — the sorted list. -->
<!-- Process: -->
<!-- Divide the unsorted list into n sublists. -->
<!-- Recursively sort each sublist. -->
<!-- Merge the sorted sublists to produce new sorted sublists until there is only one sublist remaining. -->
<!-- Use Case: Merge Sort is efficient for large datasets and is a stable sorting algorithm, meaning that it maintains the relative order of equal elements. -->
<!-- Insertion Sort: -->

<!-- Overview: Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It is much less efficient on large lists compared to more advanced algorithms such as Merge Sort or QuickSort. -->
<!-- Process: -->
<!-- Start with an initially empty sorted list. -->
<!-- Iterate through the unsorted list, taking one element at a time. -->
<!-- Insert each element into its correct position in the sorted list. -->
<!-- Repeat until the entire unsorted list is processed. -->
<!-- Use Case: Insertion Sort is suitable for small datasets or partially sorted lists. It's an in-place algorithm, meaning it doesn't require additional memory for sorting. -->
<!-- Comparison: -->

<!-- Efficiency: Merge Sort is generally more efficient than Bubble Sort and Insertion Sort, especially for large datasets. -->
<!-- Space Complexity: Bubble Sort and Insertion Sort are in-place algorithms, meaning they don't require additional memory. Merge Sort, on the other hand, needs extra space for merging the sublists.  -->
