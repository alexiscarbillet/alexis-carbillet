// Your data (x-values and y-values)
const data = [
    { x: 'French', y: 4, label: 'Fluent'},
    { x: 'Engish', y: 4, label: 'Fluent'},
    { x: 'Spanish', y: 3, label: 'Advanced' },
    { x: 'Russian', y: 2, label: 'Intermediate' },
    // Add more data points as needed
];

// Set up the dimensions for the graph
const width = 400;
const height = 300;
const margin = { top: 30, right: 20, bottom: 40, left: 60 };

// Create the SVG element
const svg = d3.select("#lollipop-graph")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Create the scales for the data
const xScale = d3.scaleBand()
    .domain(data.map(d => d.x))
    .range([0, width])
    .padding(0.1);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.y)])
    .range([height, 0]);

// Draw the bars
svg.selectAll(".lollipop")
    .data(data)
    .enter()
    .append("line")
    .attr("class", "lollipop")
    .attr("x1", d => xScale(d.x) + xScale.bandwidth() / 2)
    .attr("x2", d => xScale(d.x) + xScale.bandwidth() / 2)
    .attr("y1", height)
    .attr("y2", d => yScale(d.y))
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2);

// Draw the circles on top of the bars
svg.selectAll(".circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "circle")
    .attr("cx", d => xScale(d.x) + xScale.bandwidth() / 2)
    .attr("cy", d => yScale(d.y))
    .attr("r", 5)
    .attr("fill", "steelblue");

// Add labels to the circles
svg.selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", d => xScale(d.x) + xScale.bandwidth() / 2)
    .attr("y", d => yScale(d.y) - 10) // Position the label slightly above the circle
    .attr("text-anchor", "middle") // Center the label on the circle
    .text(d => d.label);

// Draw the x-axis
svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

// Draw the y-axis
svg.append("g")
    .call(d3.axisLeft(yScale));