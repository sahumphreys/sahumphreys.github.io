// demonstration of an animated bubble sort
// from: https://wannabedev.io/tutorials/visualize-bubble-sort-algorithm-using-svg
// ----------------------------------------------------------------

const count = 10;
const  max = 100;
const data = createData(count, max);


function createData(length = 15, max = 200) {
    console.log("In create data");
    return Array.from(
        { length },
        () => {
            let randomNumber;
            do {
                randomNumber = Math.round(Math.random() * max);
            } while (randomNumber === 0);
            return randomNumber
        }
    );
}

function createDOMElements(dataList, settings) {
    const { barWidth, barSpacing, textOffset, maxBarHeight } = settings;
    const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  
    /**
     * Create SVG group for each element in the array.
     * SVG group consists of the vertical bar (rect) and text.
     */
    for (let i = 0; i < dataList.length; i++) {
      const barHeight = dataList[i];
      const coordinateX = i * (barWidth + barSpacing);
      const coordinateY = maxBarHeight - barHeight;
  
      const svgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      svgRect.setAttribute('y', coordinateY);
      svgRect.setAttribute('rx', '0.3rem');
      svgRect.setAttribute('width', barWidth);
      svgRect.setAttribute('height', barHeight);
  
      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.setAttribute('x', barWidth/2);
      svgText.setAttribute('y', maxBarHeight + textOffset);
      svgText.textContent = `${barHeight}`;
  
      const svgGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      svgGroup.setAttribute('class', 'bar')
      svgGroup.setAttribute('data-index', i)
      svgGroup.setAttribute('transform', `translate(${coordinateX} 0)`);
      svgGroup.appendChild(svgRect)
      svgGroup.appendChild(svgText)
      svgContainer.appendChild(svgGroup);
    }
  
    return svgContainer;
  }

console.log(data);
//createDOMElements(data, "nil");