// script.js
function generateBars(array) {
    const container = document.getElementById('array-container');
    container.innerHTML = '';

    array.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${value * 10}px`;
        container.appendChild(bar);
    });
}

async function swapBars(bar1, bar2) {
    return new Promise((resolve) => {
        const tempHeight = bar1.style.height;
        bar1.style.height = bar2.style.height;
        bar2.style.height = tempHeight;

        // Add a delay to visualize the swapping
        setTimeout(resolve, 300);
    });
}

async function bubbleSort(array) {
    const bars = document.querySelectorAll('.bar');

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                await swapBars(bars[j], bars[j + 1]);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
}

function startBubbleSort() {
    const array = [4, 2, 7, 1, 5, 3];
    generateBars(array);

    bubbleSort(array).then(() => {
        console.log('Bubble Sort Completed');
    });
}
