const events = [
    {
        title: "First Computer Invented",
        description: "The first general-purpose computer, the ENIAC, was invented in 1946."
    },
    {
        title: "Introduction of Personal Computers",
        description: "IBM introduced the first personal computer, the IBM PC, in 1981."
    },
    {
        title: "World Wide Web Invented",
        description: "Tim Berners-Lee invented the World Wide Web in 1989."
    },
    // Add more events as needed
];

const timeline = document.querySelector(".timeline");
const eventDetails = document.querySelector(".event-details");

let currentIndex = 0;

function displayEvent(index) {
    eventDetails.innerHTML = `
        <h2>${events[index].title}</h2>
        <p>${events[index].description}</p>
    `;
}

// Initial event display
displayEvent(currentIndex);

// Function to navigate to the next event
function nextEvent() {
    currentIndex = (currentIndex + 1) % events.length;
    displayEvent(currentIndex);
}

// Function to navigate to the previous event
function prevEvent() {
    currentIndex = (currentIndex - 1 + events.length) % events.length;
    displayEvent(currentIndex);
}

// Event listeners for next and previous buttons
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next-btn").addEventListener("click", nextEvent);
    document.getElementById("prev-btn").addEventListener("click", prevEvent);
});
