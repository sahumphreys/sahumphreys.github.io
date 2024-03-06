// bubble-sort.js

let canvas;
let ctx;
const firstColour = "#336699";
const swapColour = "#990000";
const sortedColour = "#009900";
const arrayLength = 12;
const max = 30;

const unsortedArray = generateRandomArray(arrayLength);

function generateRandomArray(length) {
    return Array.from({ length }, () => Math.floor(Math.random() * max) + 1);
}

const sortedIndices = [];

function drawBars(array, highlightIndices = []) {
    const barWidth = 40;
    const barSpacing = 10;
    
    array.forEach((value, index) => {
        const x = index * (barWidth + barSpacing);
        const height = value * 9;

        // Change color based on highlighting and sorted state
        if (highlightIndices.includes(index)) {
            ctx.fillStyle = swapColour; // Highlighting color
        } else if (sortedIndices.includes(index)) {
            ctx.fillStyle = sortedColour; // Sorted color
        } else {
            ctx.fillStyle = firstColour; // Default color
        }

        // Draw the bar
        ctx.fillRect(x+5, 300 - height, barWidth, height);

        // Display the value as text above the bar
        ctx.fillStyle = 'black';
        ctx.font = '12px Arial';
        ctx.fillText(value, x + barWidth / 2 - 5, 300 - height - 5);
    });
}

async function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // Highlight the pair of bars being compared
            drawBars(array, [j, j + 1]);
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (array[j] > array[j + 1]) {
                await swapBars(array, j, j + 1);
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
                drawBars(array, [j, j + 1]); // Highlight the swapped bars
                // Add a delay to visualize the swapping
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        // Mark the last element as sorted
        sortedIndices.push(array.length - i - 1);
        drawBars(array, [], [array.length - i - 1]);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Mark the first element as sorted (entire array is sorted)
    sortedIndices.push(0);
    drawBars(array, []);
}

async function swapBars(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

function startBubbleSort() {
    const sortedArray = [...unsortedArray]; // Create a copy for sorting
    bubbleSort(sortedArray).then(() => {
        console.log('Bubble Sort Completed');
    });
}

document.addEventListener('DOMContentLoaded', function () {
    canvas = document.getElementById('sortCanvas');
    ctx = canvas.getContext('2d');

    drawBars(unsortedArray);
});




// function drawBars(ctx, array) {
//     const barWidth = 40;
//     const barSpacing = 10;

//     array.forEach((value, index) => {
//         const x = index * (barWidth + barSpacing);
//         const height = value * 10;

//         // Draw the bar
//         ctx.fillStyle = 'blue';
//         ctx.fillRect(x, 300 - height, barWidth, height);

//         // Display the value as text above the bar
//         ctx.fillStyle = 'black';
//         ctx.font = '12px Arial';
//         ctx.fillText(value, x + barWidth / 2 - 5, 300 - height - 5);
//     });
// }

// async function swapBars(array, index1, index2) {
//     const temp = array[index1];
//     array[index1] = array[index2];
//     array[index2] = temp;
// }

// async function bubbleSort(array, ctx) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 await swapBars(array, j, j + 1);
//                 ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
//                 drawBars(ctx, array);
//                 // Add a delay to visualize the swapping
//                 await new Promise(resolve => setTimeout(resolve, 300));
//             }
//         }
//     }
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const canvas = document.getElementById('sortCanvas');
//     const ctx = canvas.getContext('2d');

//     const array = [4, 2, 7, 1, 5, 3];
//     drawBars(ctx, array);

//     bubbleSort(array, ctx).then(() => {
//         console.log('Bubble Sort Completed');
//     });
// });

// script.js
// function generateBars(array) {
//     const container = document.getElementById('array-container');
//     container.innerHTML = 'Helo';

//     array.forEach((value, index) => {
//         const bar = document.createElement('div');
//         bar.className = 'bar';
//         bar.style.height = `${value * 10}px`;
//         container.appendChild(bar);
//     });
// }

// async function swapBars(bar1, bar2) {
//     return new Promise((resolve) => {
//         const tempHeight = bar1.style.height;
//         bar1.style.height = bar2.style.height;
//         bar2.style.height = tempHeight;

//         // Add a delay to visualize the swapping
//         setTimeout(resolve, 300);
//     });
// }

// async function bubbleSort(array) {
//     const bars = document.querySelectorAll('.bar');

//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = 0; j < array.length - i - 1; j++) {
//             if (array[j] > array[j + 1]) {
//                 await swapBars(bars[j], bars[j + 1]);
//                 [array[j], array[j + 1]] = [array[j + 1], array[j]];
//             }
//         }
//     }
// }

// function startBubbleSort() {
//     const array = [4, 2, 7, 1, 5, 3];
//     generateBars(array);

//     bubbleSort(array).then(() => {
//         console.log('Bubble Sort Completed');
//     });
// }

// ------------------------------------------------------------------------------------------------

// const canvas = document.querySelector("canvas");
// canvas.height = 500;
// canvas.width = 500;
// const ctx = canvas.getContext("2d");
// const ACTIONS = {
//   SORT: "SORT",
//   COMPARE: "COMPARE",
//   SWAP: "SWAP",
// };

// const actionsMap = {
//   [ACTIONS.SORT]: (action, members) => members[action.data].sorted(),
//   [ACTIONS.SWAP]: (action, members) => {
//     const [i, j] = action.data;
//     let tmp = members[i].getValue();
//     members[i].setValue(members[j].getValue(), "red");
//     members[j].setValue(tmp, "yellow");
//   },
//   [ACTIONS.COMPARE]: (action, members) => {
//     const [i, j] = action.data;
//     members[i].setColor("blue");
//     members[j].setColor("blue");
//   },
// };

// const shuffledArrayInRange = (bottom = 1, top = 30) => {
//   const arr = [];
//   for (let i = bottom; i <= top; i++) arr.push(i);
//   return arr.sort((a, b) => (Math.random() > 0.5 ? 1 : -1));
// };

// const bubbleSort = (array, onAction) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//       onAction({ type: ACTIONS.COMPARE, data: [j, j + 1] });
//       if (array[j] > array[j + 1]) {
//         let tmp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = tmp;
//         onAction({ type: ACTIONS.SWAP, data: [j, j + 1] });
//       }
//     }
//     onAction({ type: ACTIONS.SORT, data: array.length - i - 1 });
//   }
//   return array;
// };

// function ArrayMember(x, y, width, height, color = "gray") {   // ArrayMember(10 * i + i, 0, 10, v * 5)
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
//   this.color = color;

//   this.draw = () => {
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   };

//   this.resetColor = () => this.setColor("gray");

//   this.setColor = (color) => {
//     if (!this.isSorted()) {
//       this.color = color;
//     }
//   };

//   this.isSorted = () => this.color === "green";

//   this.sorted = () => (this.color = "green");

//   this.setValue = (v, color) => {
//     if (!this.isSorted()) {
//       this.height = v;
//       this.setColor(color);
//     }
//   };
//   this.getValue = (v) => this.height;
// }

// const randomArray = shuffledArrayInRange();
// const arrayMembers = randomArray.map((v, i) => {
//   return new ArrayMember(10 * i + i, 10, 10, v * 10); // x y width height
// });

// const drawAll = () => arrayMembers.forEach((m) => m.draw());

// drawAll();

// let ticks = 0;
// const speed = 50;

// bubbleSort(randomArray, (action) => {
//   ticks++;
//   setTimeout(() => {
//     actionsMap[action.type](action, arrayMembers);
//     ctx.clearRect(0, 0, innerWidth, innerHeight);
//     drawAll(arrayMembers);
//     arrayMembers.forEach((m) => m.resetColor());
//   }, ticks * speed);
// });